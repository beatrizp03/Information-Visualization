// world-map.js

// Function to create the world map visualization
function createWorldMap(employmentData) {
    const width = 960;
    const height = 450;

    const svg = d3.select(".grid-item-world")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const projection = d3.geoMercator()
      .scale(120)
      .translate([width / 2, height / 1.5]);

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

