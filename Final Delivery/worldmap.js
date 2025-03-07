// Function to create the world map visualization
let originalColors = {};
var mostRecentYear = 2023;
var leastRecentYear = 2000;

function createWorldMap(employmentData, isInitialLoad = false) {
  const years = Array.from(new Set(employmentData.map(d => d.year)));
  leastRecentYear = Math.min(...years);
  mostRecentYear = Math.max(...years);

  const width = 995;
  const height = 455;

  // Select or create the SVG container
  let svg = d3.select(".world-map").select("svg");

  if (svg.empty()) {
    svg = d3.select(".world-map")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Append a `g` element to hold the map for easier zoom handling
    svg.append("g").attr("class", "map-group");
  }

  const mapGroup = svg.select(".map-group");

  // Projection to move map to the right
  const projection = d3.geoMercator()
    .scale(160)
    .translate([width / 2.1, height / 1.7]);

  const path = d3.geoPath().projection(projection);

  // Define a color scale with 5 bins
  const colorScale = d3.scaleQuantize()
    .domain([0, 100])  // Employment ratio between 0 and 100%
    .range(["#FFE6EE", "#F6ADC7", "#EC739F", "#D14B7E", "#9D1C50"]);

  // Create or select the tooltip div (ensure it is created only once)
  let tooltip = d3.select(".tooltip");
  
  if (tooltip.empty()) {
    tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("visibility", "hidden")
      .style("pointer-events", "none");
  }

  // Zoom behavior with `zoomed` function
  const zoom = d3.zoom()
    .scaleExtent([1, 8])  // Set min and max zoom levels
    .on("zoom", zoomed);

  svg.call(zoom);  // Attach zoom behavior to SVG

  // Zoom function to handle zoom events
  function zoomed(event) {
    const currentScale = event.transform.k;
  
    if (currentScale <= 1.05) {
      // Calculate the dynamic translation based on the deviation from scale 1
      const offsetX = width * Math.abs(1 - currentScale) / 2.1;
      const offsetY = height * Math.abs(1 - currentScale) / 1.7;
      
      // Reset to a dynamically adjusted center position
      mapGroup.attr("transform", `translate(${offsetX}, ${offsetY}) scale(1)`);
    } else {
      // Apply normal zoom and pan transformations
      mapGroup.attr("transform", event.transform);
    }
  }  

  // Load the GeoJSON data for the world map only if this is the initial load
  if (isInitialLoad) {
    d3.json("datasets/world.geojson").then(function(geoData) {

      // Convert employment data to a map
      const employmentMap = getEmploymentMap(employmentData);

      // Bind GeoJSON data to SVG paths and create countries
      renderCountries(mapGroup, geoData, employmentMap, path, colorScale, tooltip);

      // Add the color scale legend
      addColorScaleLegend(svg, colorScale);
    }).catch(function(error) {
      console.log(error);
    });
  } else {
    // If this is an update, just update the colors and reattach event listeners
    const employmentMap = getEmploymentMap(employmentData);
    updateCountryColors(mapGroup, employmentMap, colorScale);
    reattachEventListeners(mapGroup, employmentMap, tooltip);  // Reattach the updated event listeners
  }

  // Zoom controls: Zoom in and zoom out buttons
  d3.select("#zoom-in").on("click", function() {
    zoom.scaleBy(svg.transition().duration(500), 1.3);  // Increase zoom by 20%
  });

  d3.select("#zoom-out").on("click", function() {
    zoom.scaleBy(svg.transition().duration(500), 0.7);  // Decrease zoom by 20%
  });
  
  // Reset zoom on "Clear selection" button click
  d3.select("#clearselection").on("click", function() {
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);  // Reset zoom
  });
}

// Function to convert employment data into a map (country -> employment rate)
function getEmploymentMap(employmentData) {
  const employmentMap = {};
  employmentData.forEach(d => {
    const country = d.country;
    const rate = +d.rate;

    if (!employmentMap[country]) {
      employmentMap[country] = { sum: 0, count: 0 };
    }

    employmentMap[country].sum += rate;
    employmentMap[country].count += 1;
  });

  const averageEmploymentMap = {};
  for (const country in employmentMap) {
    averageEmploymentMap[country] = employmentMap[country].sum / employmentMap[country].count;
  }
  
  return averageEmploymentMap;
}

// Function to render countries (only called once)
function renderCountries(svg, geoData, employmentMap, path, colorScale, tooltip) {
  // Bind GeoJSON data to SVG paths
  const countries = svg.append("g")
    .selectAll("path")
    .data(geoData.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", function(d) {
      if(d.id === "SDS"){
        d.id = "SSD";
      } else if(d.id === "OSA"){
        d.id = "KOS";
      }
      const employmentRatio = employmentMap[d.id];  // d.id should be the country code
      return employmentRatio ? colorScale(employmentRatio) : "#ccc";  // Gray for countries with no data
    })
    .attr("stroke", "none")
    .attr("stroke-width", "0.4");  
    

  // Attach the event listeners for tooltips
  reattachEventListeners(svg, employmentMap, tooltip);
}

// Function to update country colors smoothly
function updateCountryColors(svg, employmentMap, colorScale) {
  svg.selectAll("path")
    .transition()  // Start a transition
    .duration(1000)  // Set the duration (1 second)
    .attr("fill", function(d) {
      const employmentRatio = employmentMap[d.id];
      return employmentRatio ? colorScale(employmentRatio) : "#ccc";  // Gray for countries with no data
    });
}

// Function to reattach event listeners (this will ensure tooltips are updated with the correct data)
function reattachEventListeners(svg, employmentMap, tooltip) {
  
  svg.selectAll("path")
    .on("mouseover", function(event, d) {
      d3.select(this)
        .style("stroke", "#333")  // Darker border on hover
        .style("stroke-width", "2");  // Thicker border on hover
        
      tooltip.style("visibility", "visible");
    })
    .on("mousemove", function(event, d) {
      const employmentRatio = employmentMap[d.id];
      const countryName = d.properties.name;

      tooltip.html(`Country: ${countryName}<br>Year Range: ${leastRecentYear} - ${mostRecentYear}<br>Employment Rate: ${employmentRatio ? employmentRatio.toFixed(2) + "%" : "No Data"}`)
        .style("top", (event.pageY + 10) + "px")
        .style("left", (event.pageX + 10) + "px");
    })
    .on("mouseout", function(event, d) {
      d3.select(this)
        .style("stroke", "white")  // Remove hover border
        .style("stroke-width", "0.4");  // Set border width back to 1
      tooltip.style("visibility", "hidden");
    })
    //add clicked country to clicked list
    .on("click", function(event, d) {
      const countryName = d.properties.name;
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
      console.log("Original colors:", currentColor );
      if(currentColor !== "rgb(204, 204, 204)"){
        // If not found, add to the clicked list
        clickedList.push({ continent, country: countryCode });
        console.log("Clicked list (added):", clickedList);
        
        // Update styles for the clicked country
        d3.select(this)
          .style("fill", "purple") // Change color for clicked country
          .attr("opacity", 1); // Set high opacity for clicked country
      } else {
        //country with no data
        alert("No data available for this country");
      }

      
    } else {
      // If found, remove the entry from the clicked list
      clickedList.splice(existingEntryIndex, 1); // Remove the entry at the found index
      console.log("Clicked list (removed):", clickedList);
      const originalColor = originalColors[countryCode]; // Get the stored original color
      d3.select(this)
        .style("fill", originalColor) // Restore original color
    }

    // Update the magnet chart based on the current clicked list
    updateDashboard();
    });
 
}


// Function to add the color scale legend
function addColorScaleLegend(svg, colorScale) {
  const legendWidth = 20;  // Width of each color section
  const legendHeight = 230;  // Height of the entire color scale
  const legendMarginTop = 200; // margin-top for spacing between the boxes
  const legendMarginLeft = 30; // Margin to place the legend on the left

  // Create the legend group and position it to the left of the map
  const legendGroup = svg.append("g")
    .attr("transform", `translate(${legendMarginLeft}, ${legendMarginTop})`);  // Position legend to the left

  // Define the bins for the legend (employment rate ranges)
  const bins = [0, 20, 40, 60, 80, 100]; // Bins: 0-20, 20-40, 40-60, 60-80, 80-100

  // Create the color scale as a vertical bar
  legendGroup.selectAll("rect")
    .data(bins.slice(0, -1).reverse())  // We don't need the last bin for color boxes, since it's for labeling
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * (legendHeight / 5)) // Distribute colors evenly vertically
    .attr("width", legendWidth)  // Width of each color section
    .attr("height", legendHeight / 5)  // Height of each color section
    .style("fill", (d, i) => colorScale(d));  // Set color based on scale

  // Add labels for the dividing lines (now lower by 5px using dy)
  legendGroup.selectAll("text")
    .data(bins.reverse())  // Include 0 as the first value
    .enter()
    .append("text")
    .attr("x", legendWidth + 5)  // Position the label to the right of each color box
    .attr("y", (d, i) => i * (legendHeight / 5) + (legendHeight / 20) - 20)  // Vertical positioning (center)
    .attr("dy", "10px") // Offset the text 10px lower using dy attribute
    .text(d => d)  // Just display the numbers (e.g., 0, 20, 40, 60, etc.)
    .style("font-size", "12px")
    .style("alignment-baseline", "middle")
    .style("text-anchor", "start");
}

function updateWorldMap(clickedList) {
  // Select all country paths
  d3.selectAll("path")
    .style("fill", function(d) {
      if(d.id === "SDS"){
        d.id = "SSD";
      } else if(d.id === "OSA"){
        d.id = "KOS";
      }
      const countryName = d.id ? d.id : ''; 
        // Check if the country is in the clickedList and change its color accordingly
        if (clickedList.some(clicked => clicked.country === countryName)) {
            return "purple";
        }
    });
}
function getCountryCode(countryName) {
  for (const continent in continents) {
    const countries = continents[continent];
    const country = countries.find(c => c.name === countryName);
    if (country) {
      return country.code; // Return the found country code
    }
  }
  return null; // Return null if the country is not found
}

function getContinent(countryName) {
  for (const continent in continents) {
    const countries = continents[continent];
    const country = countries.find(c => c.name === countryName);
    if (country) {
      return continent; // Return the continent name if country is found
    }
  }
  return null; // Return null if the country is not found
}

function getCountryName(countryCode) {
  for (const continent in continents) {
    const countries = continents[continent];
    const country = countries.find(c => c.code === countryCode);
    if (country) {
      return country.name; // Return the found country name
    }
  }
  return null; // Return null if the country is not found
}
