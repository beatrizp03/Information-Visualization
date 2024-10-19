// Function to create the world map visualization
function createWorldMap(employmentData) {
  const width = 960;
  const height = 450;
  d3.select(".grid-item-world").select("svg").remove(); // Remove the existing SVG
  

  // Adjust the width to leave space for the legend
  const svg = d3.select(".grid-item-world")
    .append("svg")
    .attr("width", width)  // Extra space for the color legend
    .attr("height", height);

  // Projection to move map to the right
  const projection = d3.geoMercator()
    .scale(160)
    .translate([width / 2.1, height / 1.7]);  // Shift the map to the right

  const path = d3.geoPath().projection(projection);

  // Define a color scale with 5 bins
  const colorScale = d3.scaleQuantize()
    .domain([0, 100])  // Employment ratio between 0 and 100%
    .range(["#FFE6EE", "#F6ADC7", "#EC739F", "#D14B7E", "#9D1C50"]);

    //.range(["#F2B8C6", "#E08A9B", "#CC5D70", "#B23547", "#8A1F30"]);  // Burgundy shades (pinky)
    //.range(["#D4B2DA", "#B185B8", "#8F5B96", "#6C3574", "#4A1E52"]);  // Dark purple shades
    //.range(["#B2D8D8", "#88C0C0", "#5EA8A8", "#368F8F", "#1A6F6F"]);  // Teal shades
    //.range(["#E0E0E0", "#B8B8B8", "#909090", "#686868", "#404040"]);  // Updated gray shades
    //.range(["#E6EBFF", "#B3C7FF", "#80A3FF", "#4D7FFF", "#0059FF"]);  // Custom colors
    //.range(["#C4A484", "#A3795E", "#8C5C44", "#75422E", "#5A2D1A"]);  // Updated brown shades

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
  d3.json("datasets/world.geojson").then(function(geoData) {

    // Convertir les données CSV en une carte clé-valeur (code du pays -> { somme des taux, nombre d'entrées })
    const employmentMap = {};
    employmentData.forEach(d => {
      const country = d.country;
      const rate = +d.rate; 
      
      // Initialiser l'entrée si le pays n'existe pas encore
      if (!employmentMap[country]) {
        employmentMap[country] = { sum: 0, count: 0 };
      }

      // Ajouter le taux à la somme et incrémenter le compteur
      employmentMap[country].sum += rate;
      employmentMap[country].count += 1;
    });

    // Calculer la moyenne des taux par pays
    const averageEmploymentMap = {};
    for (const country in employmentMap) {
      averageEmploymentMap[country] = employmentMap[country].sum / employmentMap[country].count;
    }

    // averageEmploymentMap contient les moyennes des taux d'emploi par pays

    // Bind GeoJSON data to SVG paths
    const countries = svg.append("g")
      .selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", function(d) {
        // Get the employment ratio for the country
        const employmentRatio = averageEmploymentMap[d.id];  // d.id should be the country code
        return employmentRatio ? colorScale(employmentRatio) : "#ccc";  // Gray for countries with no data
      })
      .attr("stroke", "none");
    
  
      countries.on("mouseover", function(event, d) {
        d3.select(this)
          .style("stroke", "#333")  // Darker border on hover
          .style("stroke-width", "2");  // Thicker border on hover
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .style("stroke", "none");  // Remove hover border, rely on separate border layer
      })
      .on("click", function(event, d) {
        const employmentRatio = averageEmploymentMap[d.id];
        const countryName = d.properties.name;  // Get country name from geoData

        // Update and display the tooltip
        tooltip
          .html(`${countryName}<br>Employment Rate: ${employmentRatio ? employmentRatio.toFixed(2) + "%" : "No Data"}`) //to change
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

function updateWorldMap(clickedList) {
  // Select all country paths
  d3.selectAll("path")
    .style("fill", function(d) {
        const countryName = d.id;  // Assuming d.id is the country code or name
        // Check if the country is in the clickedList and change its color accordingly
        if (clickedList.some(clicked => clicked.country === countryName)) {
            return "purple";  // Change color for clicked countries (e.g., orange/red)
        }
    });
}
