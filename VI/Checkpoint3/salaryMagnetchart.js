//all circles function
/*
function createSalaryMagnetChart(salaryData) {
    const width = 400;
    const height = 450;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const magnetWidth = 90; // Magnet size
    const magnetHeight = 50;

    // Remove previous circles if needed
    d3.select(".grid-item-magnets").select("svg").remove();

    let salaryMeansByCountry = {};
    //const countries = Array.from(new Set(salaryData.map(d => d.country))); // Get unique countries
    //console.log(salaryData.map(d => d.average_salary_per_month));  // Check what values are present

    //let salaryValues = salaryData.map(d => +d.average_salary_per_month);
    
    countries.forEach(country => {
        const countryData = salaryData.filter(d => d.country === country.code); // Get data for this country
        console.log("countryData ", countryData);
        const salaryValuesByCountry = countryData.map(d => +d.average_salary_per_month);
        const meanSalary = d3.mean(salaryValuesByCountry); // Calculate the mean salary for this country
        salaryMeansByCountry[country.country] = {
            country: country.country,
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
        .force("charge", d3.forceManyBody().strength(-60))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(20))
        .on("tick", ticked);

    const minX = width * 0.475; // Set minimum x-value
    const maxX = width * 0.525; // Set maximum x-value
    const minY = height * 0.15; // Set minimum x-value
    const maxY = height * 0.85; // Set maximum x-value
    
    function ticked() {
        // Apply magnet force first
        magnetForce(); // Ensure the custom force is applied
        
        // Update positions of nodes
        svg.selectAll(".node")
            .attr("cx", d => {
                const newX = isNaN(d.x) ? width / 2 : d.x; // Fallback to width / 2 if d.x is NaN
                const constrainedX = Math.max(minX, Math.min(newX, maxX)); // Constrain x to the min/max range
                return constrainedX;
            })
            .attr("cy", d => {
                const newY = isNaN(d.y) ? height / 2 : d.y; // Fallback to height / 2 if d.y is NaN
                const constrainedY = Math.max(minY, Math.min(newY, maxY));
                return constrainedY;
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

    // Custom magnet force based on category means
    function magnetForce() {
        countryNodes.forEach(d => {
            magnetPositionArray.forEach(magnet => {
                const distanceX = magnet.x - d.x;
                const distanceY = magnet.y - d.y;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY) || 1;
                const strength = (d.average_salary_per_month || 0) / 100; // Use the mean value for this country

                const scaledStrength = Math.min(strength * 0.05, 1);
                d.vx = isNaN(d.vx) ? 0 : d.vx + distanceX * scaledStrength;
                d.vy = isNaN(d.vy) ? 0 : d.vy + distanceY * scaledStrength;
            });
        });
    }
    
    // Create the tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background", "rgba(0, 0, 0, 0.7)")
        .style("color", "white")
        .style("padding", "5px")
        .style("border-radius", "5px")
        .style("visibility", "hidden")
        .style("pointer-events", "none");

    const nodes = svg.selectAll(".node")
        .data(countryNodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", 5)  // Adjust the radius of the circles as needed
        .attr("fill", lighestColor)  // Set the default fill color for the circles
        .attr("cx", d => d.x || width / 2)  // Initial position
        .attr("cy", d => d.y || height / 2)  // Initial position
        .attr("opacity", 0.8) // Set opacity to 0.8
        .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", "purple"); // Change fill color to purple on hover
        console.log("countries ", countries);
        console.log("countries nodes ", countryNodes);

        const countryName = (countries.find(country => country.code === d.country)?.country) || d.country;

        // Create label and keep it visible
        svg.append("text")
            .attr("class", "country-label")
            .attr("x", d.x)
            .attr("y", d.y - 15)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("fill", "black") // Change text color for better visibility
            .text(countryName);
        })
        .on("click", function(event, d) {
        const countryName = (countries.find(country => country.code === d.country)?.country) || d.country;

        // Update tooltip content and position
        tooltip
            .html(`Country: ${countryName}<br>Year Range: ${oldestYear} - ${mostRecentYear}`)
            .style("visibility", "visible")
            .style("top", (event.pageY + 10) + "px")
            .style("left", (event.pageX + 10) + "px");
    
        // Hide tooltip after 3 seconds
        setTimeout(() => {
            tooltip.style("visibility", "hidden");
        }, 3000); // 3 seconds delay
        })
        .on("mouseout", function() {
        d3.select(this).attr("fill", lighestColor); // Revert fill color to default
        svg.selectAll(".country-label").remove();
        });
    
}*/

//5 top and 5 bottom ones
function createSalaryMagnetChart(salaryData) {
    const width = 500;
    const height = 450;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const magnetWidth = 90; // Magnet size
    const magnetHeight = 50;

    // Remove previous circles if needed
    d3.select(".grid-item-magnets").select("svg").remove();

    let salaryMeansByCountry = {};

    const years = Array.from(new Set(salaryData.map(d => d.year)));
    let oldestYear = Math.min(...years);
    let mostRecentYear = Math.max(...years);

    const salaryByCountry = d3.group(salaryData, d => d.country);

    const countryAverages = Array.from(salaryByCountry, ([country, records]) => {
        const averageSalary = d3.mean(records, d => +d.average_salary_per_month);
        return { country, average_salary_per_month: averageSalary };
    });

    // Step 2: Sort the countries by their average salary
    const sortedCountryAverages = countryAverages.sort((a, b) => b.average_salary_per_month - a.average_salary_per_month);
    console.log(sortedCountryAverages);
    // Step 3: Select the top 5 highest and bottom 5 lowest
    const top5HighestSalaries = sortedCountryAverages.slice(0, 5);
    const top5LowestSalaries = sortedCountryAverages.slice(-5);

    // Combine the top 5 highest and lowest into one array
    const salarySubset = [...top5HighestSalaries, ...top5LowestSalaries];
    console.log(salarySubset);

    // Calculate the global average
    const salaryValues = salarySubset.map(d => +d.average_salary_per_month);
    console.log("subset ", salarySubset);
    const highestSalary = d3.max(salaryValues);
    const lowestSalary = d3.min(salaryValues);
    const globalAverageSalary = d3.mean(salaryValues);

    //console.log("highest ", highestSalary,"global average ", globalAverageSalary,"lowest ", lowestSalary);

    const magnetPositionMap = {
        "Lowest Salary": { x: width * 0.5, y: height * 0.85, value: lowestSalary },
        "Highest Salary": { x: width * 0.5, y: height * 0.1, value: highestSalary }
    };

    const magnetPositionArray = Object.entries(magnetPositionMap).map(([category, position]) => ({
        category: category, // The category name
        x: position.x, // The x position
        y: position.y,  // The y position
        value: position.value // Include value in magnet data
    }));

    // Create the SVG for the chart
    const svg = d3.select(".salaries-chart-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    countries.forEach(country => {
        const countryData = salarySubset.filter(d => d.country === country.code); // Get data for this country
        const salaryValuesByCountry = countryData.map(d => +d.average_salary_per_month);
        const meanSalary = d3.mean(salaryValuesByCountry); // Calculate the mean salary for this country
        salaryMeansByCountry[country.country] = {
            code: country.code,
            country: country.country,
            average_salary_per_month: meanSalary,
        };
    });

    // Use only the 5 highest and 5 lowest salary countries for the circles
    const countryNodes = Object.values(salaryMeansByCountry)
        .filter(d => !isNaN(d.average_salary_per_month) && d.average_salary_per_month !== undefined) // Filter out invalid data
        .map(d => ({
            code : d.code,
            country: d.country,
            average_salary_per_month: d.average_salary_per_month,
            x: width / 2,
            y: height / 2
        }));


    // Initialize node positions
    countryNodes.forEach(d => {
        d.x = isNaN(d.x) ? width / 2 : d.x; // Fallback to width / 2 if d.x is NaN
        d.y = isNaN(d.y) ? height / 2 : d.y; // Fallback to height / 2 if d.y is NaN
        d.vx = isNaN(d.vx) ? 0 : d.vx; // Initialize velocity if NaN
        d.vy = isNaN(d.vy) ? 0 : d.vy; // Initialize velocity if NaN
      });  

    
    const simulation = d3.forceSimulation(countryNodes)
        .force("charge", d3.forceManyBody().strength(-45)) // Increase repulsion for more spacing
        .force("center", d3.forceCenter(width / 2, height / 2)) // Keeps nodes centered
        .force("collision", d3.forceCollide().radius(35)) // Increase collision radius for more spacing
        .on("tick", ticked);


    const minX = width * 0.475;
    const maxX = width * 0.525;
    const minY = height * 0.15;
    const maxY = height * 0.75;

    function ticked() {
        // Apply magnet force first
        magnetForce();

        // Update positions of nodes
        svg.selectAll(".node")
            .attr("cx", d => {
                const constrainedX = Math.max(minX, Math.min(d.x, maxX));
                return constrainedX;
            })
            .attr("cy", d => {
                const constrainedY = Math.max(minY, Math.min(d.y, maxY));
                return constrainedY;
            });
    }

    // Update magnets' appearance for Highest and Lowest
    svg.selectAll(".magnet")
        .data(magnetPositionArray)
        .enter()
        .append("rect")
        .attr("class", "magnet")
        .attr("width", magnetWidth)
        .attr("height", magnetHeight)
        .attr("fill", darkestColor)
        .attr("x", d => d.x - magnetWidth / 2)
        .attr("y", d => d.y - magnetHeight / 2)
        .attr("rx", 5)
        .attr("ry", 5);

    // Add labels for Highest and Lowest magnets
    svg.selectAll(".magnet-label")
        .data(magnetPositionArray)
        .enter()
        .append("text")
        .attr("class", "magnet-label")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .style("font-size", "14px")
        .style("fill", "white")
        .text(d => d.category);

    // Create a line for the Global Average Salary
    svg.append("line")
        .attr("x1", margin.left) // Line starts at the left side
        .attr("x2", width - margin.right) // Line ends at the right side
        .attr("y1", height * 0.45) // Y position for the line
        .attr("y2", height * 0.45) // Keep y2 same as y1 for a horizontal line
        .attr("stroke", "#B53389") // Color for the line
        .attr("stroke-width", 4); // Thickness of the line

    // Add label for the Global Average Salary line
    svg.append("text")
        .attr("x", width * 0.2) // Centered on the line
        .attr("y", height * 0.48) // Slightly above the line
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .style("fill", "#B53389")
        .text("Global Average Salary");

    // Custom magnet force based on category means
    function magnetForce() {
        const magnetStrength = 0.01; // Adjust the strength of the pull as necessary
        let yScale; // Map to visual positions: bottom to top
        
        // Sort the countryNodes array by descending order of average_salary_per_month
        countryNodes.sort((a, b) => b.average_salary_per_month - a.average_salary_per_month);
        countryNodes.forEach(d => {
            // Calculate target y-position based on salary
            if (d.average_salary_per_month > globalAverageSalary) {
                yScale = d3.scaleLinear()
                    .domain([globalAverageSalary, highestSalary*2]) // Map salary range to y position
                    .range([height * 0.49, height * 0.1]); // Constrain between middle and top
            } else {
                yScale = d3.scaleLinear()
                    .domain([0, globalAverageSalary/5]) // Map salary range to y position
                    .range([height * 0.85, height * 0.51]); // Constrain between bottom and middle
            }
            const targetY = yScale(d.average_salary_per_month);
            
            // Apply a vertical force proportional to the difference between current y and target y
            const forceY = (targetY - d.y) * magnetStrength;
    
            // Apply vertical velocity change based on force
            d.vy += forceY;
    
            // Optionally, you can apply small horizontal force to avoid clustering
            d.vx += ((width / 2) - d.x) * 0.01; // Small attraction to center horizontally
        });
    }

    // Create the tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background", "rgba(0, 0, 0, 0.7)")
        .style("color", "white")
        .style("padding", "5px")
        .style("border-radius", "5px")
        .style("visibility", "hidden")
        .style("pointer-events", "none");

    const nodes = svg.selectAll(".node")
        .data(countryNodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", 7.5)
        .attr("fill", lighestColor)
        .attr("cx", d => d.x || width / 2)
        .attr("cy", d => d.y || height / 2)
        .attr("opacity", 0.8)
        /*.on("mouseover", function(event, d) {
            d3.select(this).attr("fill", "purple"); // Change the circle color on hover
        
            const countryName = d.country;
        
            // Constrain x and y values as per your constraints
            const constrainedX = Math.max(minX, Math.min(d.x, maxX));
            const constrainedY = Math.max(minY, Math.min(d.y, maxY));
        
            // Remove previous labels if any
            svg.selectAll(".country-label").remove(); 
        
            // Append the text label directly above the circle
            svg.append("text")
                .attr("class", "country-label")
                .attr("x", constrainedX) // Align horizontally with the circle's constrained x position
                .attr("y", constrainedY - 10) // Position slightly above the circle's constrained y position
                .attr("text-anchor", "middle") // Center the text horizontally
                .attr("dominant-baseline", "middle") // Align vertically
                .style("font-size", "12px") // Adjust font size as needed
                .style("fill", "black") // Set the text color
                .text(countryName); // Display the country name
        })   */     
        .on("mouseover", function(event, d) {
            //console.log(d);
            d3.select(this).attr("fill", "purple");
            const countryName = d.country;
            const averageCountry = isNaN(d.average_salary_per_month) ? "Data not available" : d.average_salary_per_month;
        
            tooltip
                .html(`Country: ${countryName}<br>Year Range: ${oldestYear} - ${mostRecentYear}<br>Salary: ${averageCountry}`)
                .style("visibility", "visible")
                .style("top", (event.pageY + 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })        
        .on("mouseout", function() {
            d3.select(this).attr("fill", lighestColor);
            tooltip.style("visibility", "hidden");
            svg.selectAll(".country-label").remove();
        });
}

function updateSalaryMagnetChart(clickedList) {
    // Select all country paths
    d3.selectAll(".node")
      .style("fill", function(d) {
          const countryName = d.code;  // Assuming d.id is the country code or name
          // Check if the country is in the clickedList and change its color accordingly
          if (clickedList.some(clicked => clicked.country === countryName)) {
              return "purple";  // Change color for clicked countries (e.g., orange/red)
          }
      });
  }