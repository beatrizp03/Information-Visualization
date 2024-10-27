//5 top and 5 bottom ones
function createSalaryMagnetChart(salaryData) {
    const width = 500;
    const height = 450;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const magnetWidth = 100; // Magnet size
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

    // Step 3: Select the top 5 highest and bottom 5 lowest
    const top5HighestSalaries = sortedCountryAverages.slice(0, 5);
    const top5LowestSalaries = sortedCountryAverages.slice(-5);

    // Combine the top 5 highest and lowest into one array
    const salarySubset = [...top5HighestSalaries, ...top5LowestSalaries];

    // Calculate the global average
    const salaryValues = salarySubset.map(d => +d.average_salary_per_month);
    const highestSalary = d3.max(salaryValues);
    const lowestSalary = d3.min(salaryValues);
    const globalAverageSalary = d3.mean(salaryValues);

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
        .attr("ry", 5)
        .on("mouseover", function(event, d) {
            const val = d.value;
            tooltip
                .html(`Value: ${val.toFixed(2)} $`)
                .style("visibility", "visible")
                .style("top", (event.pageY + 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })        
        .on("mouseout", function() {
            tooltip.style("visibility", "hidden");
        });

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
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", "#B53389")
        .text("Global Average Salary")
        .on("mouseover", function(event, d) {
            const val = globalAverageSalary;
            tooltip
                .html(`Value: ${val.toFixed(2)} $`)
                .style("visibility", "visible")
                .style("top", (event.pageY + 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })        
        .on("mouseout", function() {
            d3.select(this).attr("fill", darkestColor);
            tooltip.style("visibility", "hidden");
        });

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

    const nodes = svg.selectAll(".node")
        .data(countryNodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", 7.5)
        .attr("fill", lighestColor)
        .attr("cx", d => d.x || width / 2)
        .attr("cy", d => d.y || height / 2)
        .attr("opacity", 0.6)    
        .on("mouseover", function(event, d) {
            d3.select(this)
                .attr("stroke", "black")
                .attr("stroke-width", 2);
            const countryName = d.country;
            const averageCountry = isNaN(d.average_salary_per_month) ? "Data not available" : d.average_salary_per_month;
        
            tooltip
                .html(`Country: ${countryName}<br>Year Range: ${oldestYear} - ${mostRecentYear}<br>Salary: ${averageCountry.toFixed(2)}`)
                .style("visibility", "visible")
                .style("top", (event.pageY + 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })        
        .on("mouseout", function() {
            d3.select(this)
                .attr("fill", lighestColor)
                .attr("stroke", "none");
            tooltip.style("visibility", "hidden");
            svg.selectAll(".country-label").remove();
        })
        .on("click", function(event,d) {
            const countryName = (countries.find(country => country.code === d.country)?.country) || d.country;
            const continent = getContinent(countryName); // Function to get continent by country name
            const countryCode = getCountryCode(countryName);
            // Check if the clicked country is already in the clicked list
          const existingEntryIndex = clickedList.findIndex(clicked => 
            clicked.country === countryCode && clicked.continent === continent
          );
          if (existingEntryIndex === -1) {
            //store color
            const currentColor = d3.select(this).style("fill"); // Get the current fill color
            originalColors[countryCode] = currentColor; // Store the original color
      
            // If not found, add to the clicked list
            clickedList.push({ continent, country: countryCode });
            
            // Update styles for the clicked country
            d3.select(this)
              .style("fill", "purple") // Change color for clicked country
              .attr("opacity", 1); // Set high opacity for clicked country
          } else {
            // If found, remove the entry from the clicked list
            clickedList.splice(existingEntryIndex, 1); // Remove the entry at the found index
            const originalColor = lighestColor; // Get the stored original color
            d3.select(this)
              .style("fill", originalColor) // Restore original color
              .attr("opacity", 0.5)
          };
      
          // Update the magnet chart based on the current clicked list
          //updateWorldMap(clickedList); //---------------------------------------change to update dashboard once everything is done. 
          //updatelinechart();
          updateDashboard();
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
          } else if (clickedList.length > 0) {
            // Set color to gray for non-selected circles
            d3.select(this).attr("opacity", 0.6);
            originalColors[countryName] = "gray";
            return "gray"; 
          } else {
            // If no circles are selected, reset all to the original color
            d3.select(this).attr("opacity", 0.6);
            return lighestColor; 
          }
      });
  }