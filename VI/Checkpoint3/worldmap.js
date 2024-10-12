// Function to create the world map visualization
function createWorldMap(employmentData) {
  const width = 960;
  const height = 450;

  // Adjust the width to leave space for the legend
  const svg = d3.select(".grid-item-world")
    .append("svg")
    .attr("width", width)  // Extra space for the color legend
    .attr("height", height);

  // Projection to move map to the right
  const projection = d3.geoMercator()
    .scale(120)
    .translate([width / 2, height / 1.5]);  // Shift the map to the right

  const path = d3.geoPath().projection(projection);

  // Define a color scale with 5 bins
  const colorScale = d3.scaleQuantize()
    .domain([0, 100])  // Employment ratio between 0 and 100%
    .range(["#E6EBFF", "#B3C7FF", "#80A3FF", "#4D7FFF", "#0059FF"]);  // Custom colors

  // Create a tooltip div (initially hidden)
  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background", "rgba(0, 0, 0, 0.7)")
    .style("color", "white")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("visibility", "hidden")
    .style("pointer-events", "none");

  // Load the GeoJSON data for the world map
  d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function(geoData) {

    // Convert CSV data into a key-value map (country code -> employment ratio)
    const employmentMap = {};
    employmentData.forEach(d => {
      employmentMap[d.country] = +d.average_employment_ratio;
    });

    // Bind GeoJSON data to SVG paths
    svg.append("g")
      .selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", function(d) {
        // Get the employment ratio for the country
        const employmentRatio = employmentMap[d.id];  // d.id should be the country code
        return employmentRatio ? colorScale(employmentRatio) : "#ccc";  // Gray for countries with no data
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 1)
      .on("click", function(event, d) {
        const employmentRatio = employmentMap[d.id];
        const countryName = d.properties.name;  // Get country name from geoData

        // Update and display the tooltip
        tooltip
          .html(`${countryName}<br>Employment Rate: ${employmentRatio ? employmentRatio.toFixed(2) + "%" : "No Data"}`)
          .style("visibility", "visible")
          .style("top", (event.pageY + 10) + "px")
          .style("left", (event.pageX + 10) + "px");

        setTimeout(function() {
          tooltip.style("visibility", "hidden");
        }, 3000); // 3 seconds delay
      });

    // Add a color scale legend on the left side of the map
    const legendWidth = 20;  // Width of each color section
    const legendHeight = 230;  // Height of the entire color scale
    const legendMarginTop = 200; // margin-top for spacing between the boxes
    const legendMarginLeft = 20; // Margin to place the legend on the left

    // Create the legend group and position it to the left of the map
    const legendGroup = svg.append("g")
      .attr("transform", `translate(${legendMarginLeft}, ${legendMarginTop})`);  // Position legend to the left

    // Define the bins for the legend (employment rate ranges)
    const bins = [0, 20, 40, 60, 80, 100]; // Bins: 0-20, 20-40, 40-60, 60-80, 80-100

    // Create the color scale as a vertical bar
    legendGroup.selectAll("rect")
      .data(bins.slice(0, -1))  // We don't need the last bin for color boxes, since it's for labeling
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * (legendHeight / 5)) // Distribute colors evenly vertically
      .attr("width", legendWidth)  // Width of each color section
      .attr("height", legendHeight / 5)  // Height of each color section
      .style("fill", (d, i) => colorScale(d));  // Set color based on scale

    // Add labels for the dividing lines (now lower by 5px using dy)
    legendGroup.selectAll("text")
      .data(bins)  // Include 0 as the first value
      .enter()
      .append("text")
      .attr("x", legendWidth + 5)  // Position the label to the right of each color box
      .attr("y", (d, i) => i * (legendHeight / 5) + (legendHeight / 20) -20)  // Vertical positioning (center)
      .attr("dy", "10px") // Offset the text 10px lower using dy attribute
      .text(d => d)  // Just display the numbers (e.g., 0, 20, 40, 60, etc.)
      .style("font-size", "14px")
      .style("alignment-baseline", "middle")
      .style("text-anchor", "start");
  }).catch(function(error) {
    console.log(error);
  });
}











/*
// world-map.js

// Function to create the world map visualization
function createWorldMap(employmentData) {
    const width = 960;
    const height = 450;

    const svg = d3.select(".grid-item-world")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Define the projection using Equidistant projection
    const projection = d3.geoEquirectangular()
      .scale(150) // Adjust the scale for better visualization
      .translate([width / 2, height / 2]); // Centering the map

    const path = d3.geoPath().projection(projection);

    // Define a color scale
    const colorScale = d3.scaleQuantize()
      .domain([0, 100])  // Employment ratio between 0 and 100%
      .range(d3.schemeBlues[9]);  // Blues color scheme for different ranges

    // Load the GeoJSON data for the world map
    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function(geoData) {

      // Convert CSV data into a key-value map (country code -> employment ratio)
      const employmentMap = {};
      employmentData.forEach(d => {
        employmentMap[d.country] = +d.average_employment_ratio;
      });

      // Bind GeoJSON data to SVG paths
      svg.append("g")
        .selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", function(d) {
          // Get the employment ratio for the country
          const employmentRatio = employmentMap[d.id];  // d.id should be the country code
          
          // Check if the country has data, if not, set a default color
          return employmentRatio ? colorScale(employmentRatio) : "#ccc";  // Gray for countries with no data
        })
        .attr("stroke", "#fff")
        .on("mouseover", function(event, d) {
          d3.select(this).attr("fill", "#ffcc00");
        })
        .on("mouseout", function(event, d) {
          const employmentRatio = employmentMap[d.id];
          d3.select(this).attr("fill", employmentRatio ? colorScale(employmentRatio) : "#ccc");
        });
    }).catch(function(error) {
      console.log(error);
    });
}
*/ 

