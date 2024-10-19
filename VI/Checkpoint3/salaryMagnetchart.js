function createSalaryMagnetChart(salaryData) {
    const width = 400;
    const height = 450;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const magnetWidth = 90; // Magnet size
    const magnetHeight = 50;

    // Remove previous circles if needed
    d3.select(".grid-item-magnets").select("svg").remove();

    let salaryMeansByCountry = {};
    const countries = Array.from(new Set(salaryData.map(d => d.country))); // Get unique countries
    //console.log(salaryData.map(d => d.average_salary_per_month));  // Check what values are present

    //let salaryValues = salaryData.map(d => +d.average_salary_per_month);
    
    countries.forEach(country => {
        const countryData = salaryData.filter(d => d.country === country); // Get data for this country
        const salaryValuesByCountry = countryData.map(d => +d.average_salary_per_month);
        const meanSalary = d3.mean(salaryValuesByCountry); // Calculate the mean salary for this country
        salaryMeansByCountry[country] = {
            country: country,
            average_salary_per_month: meanSalary
        };
    });

    // Find the highest and lowest salary values from the calculated means
    const salaryValues = Object.values(salaryData).map(d => +d.average_salary_per_month);
    //console.log("salary values ", salaryValues);
    const highestSalary = d3.max(salaryValues);
    const lowestSalary = d3.min(salaryValues);

    console.log("higest  ", highestSalary);
    console.log("lowest  ", lowestSalary);

    const globalAverageSalary = d3.mean(salaryData.map(d => +d.average_salary_per_month));
    console.log("global  ", globalAverageSalary);
    
    const years = Array.from(new Set(salaryData.map(d => d.year)));
    let oldestYear = Math.min(...years);
    let mostRecentYear = Math.max(...years);

    const circles_width = 400; // Available width for the circles
    const circles_height = 400; // Available height for the circles
    const circles_margin = { top: 25, right: 0, bottom: 0, left: 0 }; // Margins for the circles

    const svg = d3.select(".salaries-chart-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const magnetPositionMap = {
        "Lowest Salary": { x: width * 0.5, y: height * 0.9 , value: lowestSalary},
        "Global Average Salary": { x: width * 0.5, y: height * 0.5 , value: globalAverageSalary },
        "Higest Salary": { x: width * 0.5, y: height * 0.1, value: highestSalary }
    };
    console.log("magnet position ", magnetPositionMap);

    const categories = ["Higest salary", "Lowest salary"];
    const magnetPositionArray = Object.entries(magnetPositionMap).map(([category, position]) => ({
        category: category, // The category name
        x: position.x, // The x position
        y: position.y,  // The y position
        value: position.value // Include value in magnet data
    }));
    
      
    console.log("magnet centers ", magnetPositionArray);
    function calculateSalaryMeansByCountry() {
        // Get unique countries from the dataset
        const countries = Array.from(new Set(salaryData.map(d => d.country)));
    
        // Iterate through each country to calculate the average salary
        countries.forEach(country => {
            // Filter the data to get only the rows for the current country
            const countryData = salaryData.filter(d => d.country === country);
    
            // Extract the salary values for the country
            const salaryValues = countryData.map(d => +d.average_salary_per_month);
    
            // Calculate the mean salary for the country
            const meanSalary = d3.mean(salaryValues);
    
            // Store the mean salary for the country
            salaryMeansByCountry[country] = {
                country: country,
                average_salary_per_month: meanSalary
            };
        });
    
        // Return the salary means by country
        return salaryMeansByCountry;
    }
    
    //calculateSalaryMeansByCountry();

    // Convert the category means object into an array for D3 to use
    const countryNodes = Object.values(salaryMeansByCountry);

    // Initialize node positions
    countryNodes.forEach(d => {
        d.x = isNaN(d.x) ? width / 2 : d.x; // Fallback to width / 2 if d.x is NaN
        d.y = isNaN(d.y) ? height / 2 : d.y; // Fallback to height / 2 if d.y is NaN
        d.vx = isNaN(d.vx) ? 0 : d.vx; // Initialize velocity if NaN
        d.vy = isNaN(d.vy) ? 0 : d.vy; // Initialize velocity if NaN
    });  

    const simulation = d3.forceSimulation(countryNodes)
        .force("charge", d3.forceManyBody().strength(-30))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(8))
        .on("tick", ticked);

    function ticked() {
        // Apply magnet force first
        magnetForce(); // Ensure the custom force is applied
        
        // Update positions of nodes
        svg.selectAll(".node")
            .attr("cx", d => {
            const newX = isNaN(d.x) ? width / 2 : d.x; // Fallback to width / 2 if d.x is NaN
            const constrainedX = Math.max(circles_margin.left, Math.min(newX, circles_width + circles_margin.left));
            return constrainedX;
            })
            .attr("cy", d => {
            const newY = isNaN(d.y) ? height / 2 : d.y; // Fallback to height / 2 if d.y is NaN
            const constrainedY = Math.max(circles_margin.top, Math.min(newY, circles_height + circles_margin.top));
            return constrainedY;
            });
        }

    // Custom magnet force based on category means
    function magnetForce() {
        countryNodes.forEach(d => {
            magnetPositionArray.forEach(magnet => {
                const distanceX = magnet.x - d.x;
                const distanceY = magnet.y - d.y;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY) || 1;
                const strength = (d.average_salary_per_month || 0) / 100; // Use the mean value for this country

                const scaledStrength = Math.min(strength * 0.25, 1);
                d.vx = isNaN(d.vx) ? 0 : d.vx + distanceX * scaledStrength;
                d.vy = isNaN(d.vy) ? 0 : d.vy + distanceY * scaledStrength;
            });
        });
    }

    // Update magnets' appearance
    svg.selectAll(".magnet")
        .data(magnetPositionArray)
        .enter()
        .append("rect")
        .attr("class", "magnet")
        .attr("width", d => d.category === "Global Average Salary" ? 140 : magnetWidth) // Wider for Global Average Salary
        .attr("height", d => d.category === "Global Average Salary" ? 60 : magnetHeight) // Taller for Global Average Salary
        .attr("fill", d => d.category === "Global Average Salary" ? "#B53389" : darkestColor) // Different color for Global Average Salary
        .attr("x", d => d.x - (d.category === "Global Average Salary" ? 140 / 2 : magnetWidth / 2)) // Adjust width center for oval
        .attr("y", d => d.y - (d.category === "Global Average Salary" ? 60 / 2 : magnetHeight / 2)) // Adjust height center for oval
        .attr("rx", d => d.category === "Global Average Salary" ? 35 : 5) // Oval shape for Global Average Salary
        .attr("ry", d => d.category === "Global Average Salary" ? 35 : 5); // Oval shape for Global Average Salary

    // Add labels for magnets
    svg.selectAll(".magnet-label")
        .data(magnetPositionArray)
        .enter()
        .append("text")
        .attr("class", "magnet-label")
        .attr("x", d => d.x) // X centered in magnet
        .attr("y", d => d.y) // Adjust Y value to be centered vertically
        //.attr("dy", d => d.category === "Global Average Salary" ? 0 : 0) // Adjust vertical offset as necessary
        .attr("text-anchor", "middle") // Center text horizontally
        .attr("dominant-baseline", "middle") // Center text vertically
        .style("font-size", "14px")
        .style("fill", "white")
        .style("font-weight", d => d.category === "Global Average Salary" ? "bold" : "normal") // Bold for Global Average Salary
        .text(d => d.category); // Display the text
}