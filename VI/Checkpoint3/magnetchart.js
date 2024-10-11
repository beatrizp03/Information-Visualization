const countries = [
  { code: "AFG", country: "Afghanistan" },
  { code: "ALB", country: "Albania" },
  { code: "DZA", country: "Algeria" },
  { code: "AND", country: "Andorra" },
  { code: "AGO", country: "Angola" },
  { code: "ATG", country: "Antigua and Barbuda" },
  { code: "ARG", country: "Argentina" },
  { code: "ARM", country: "Armenia" },
  { code: "AUS", country: "Australia" },
  { code: "AUT", country: "Austria" },
  { code: "AZE", country: "Azerbaijan" },
  { code: "BHS", country: "Bahamas" },
  { code: "BHR", country: "Bahrain" },
  { code: "BGD", country: "Bangladesh" },
  { code: "BRB", country: "Barbados" },
  { code: "BLR", country: "Belarus" },
  { code: "BEL", country: "Belgium" },
  { code: "BLZ", country: "Belize" },
  { code: "BEN", country: "Benin" },
  { code: "BTN", country: "Bhutan" },
  { code: "BOL", country: "Bolivia (Plurinational State of)" },
  { code: "BIH", country: "Bosnia and Herzegovina" },
  { code: "BWA", country: "Botswana" },
  { code: "BRA", country: "Brazil" },
  { code: "BRN", country: "Brunei Darussalam" },
  { code: "BGR", country: "Bulgaria" },
  { code: "BFA", country: "Burkina Faso" },
  { code: "BDI", country: "Burundi" },
  { code: "CPV", country: "Cabo Verde" },
  { code: "KHM", country: "Cambodia" },
  { code: "CMR", country: "Cameroon" },
  { code: "CAN", country: "Canada" },
  { code: "CAF", country: "Central African Republic" },
  { code: "TCD", country: "Chad" },
  { code: "CHL", country: "Chile" },
  { code: "CHN", country: "China" },
  { code: "COL", country: "Colombia" },
  { code: "COM", country: "Comoros" },
  { code: "COG", country: "Congo" },
  { code: "COD", country: "Congo, Democratic Republic of the" },
  { code: "CRI", country: "Costa Rica" },
  { code: "HRV", country: "Croatia" },
  { code: "CUB", country: "Cuba" },
  { code: "CYP", country: "Cyprus" },
  { code: "CZE", country: "Czechia" },
  { code: "DNK", country: "Denmark" },
  { code: "DJI", country: "Djibouti" },
  { code: "DMA", country: "Dominica" },
  { code: "DOM", country: "Dominican Republic" },
  { code: "ECU", country: "Ecuador" },
  { code: "EGY", country: "Egypt" },
  { code: "SLV", country: "El Salvador" },
  { code: "GNQ", country: "Equatorial Guinea" },
  { code: "ERI", country: "Eritrea" },
  { code: "EST", country: "Estonia" },
  { code: "SWZ", country: "Eswatini" },
  { code: "ETH", country: "Ethiopia" },
  { code: "FJI", country: "Fiji" },
  { code: "FIN", country: "Finland" },
  { code: "FRA", country: "France" },
  { code: "GAB", country: "Gabon" },
  { code: "GMB", country: "Gambia" },
  { code: "GEO", country: "Georgia" },
  { code: "DEU", country: "Germany" },
  { code: "GHA", country: "Ghana" },
  { code: "GRC", country: "Greece" },
  { code: "GRD", country: "Grenada" },
  { code: "GTM", country: "Guatemala" },
  { code: "GIN", country: "Guinea" },
  { code: "GNB", country: "Guinea-Bissau" },
  { code: "GUY", country: "Guyana" },
  { code: "HTI", country: "Haiti" },
  { code: "HND", country: "Honduras" },
  { code: "HUN", country: "Hungary" },
  { code: "ISL", country: "Iceland" },
  { code: "IND", country: "India" },
  { code: "IDN", country: "Indonesia" },
  { code: "IRN", country: "Iran (Islamic Republic of)" },
  { code: "IRQ", country: "Iraq" },
  { code: "IRL", country: "Ireland" },
  { code: "ISR", country: "Israel" },
  { code: "ITA", country: "Italy" },
  { code: "JAM", country: "Jamaica" },
  { code: "JPN", country: "Japan" },
  { code: "JOR", country: "Jordan" },
  { code: "KAZ", country: "Kazakhstan" },
  { code: "KEN", country: "Kenya" },
  { code: "KIR", country: "Kiribati" },
  { code: "PRK", country: "Korea (Democratic People's Republic of)" },
  { code: "KOR", country: "Korea, Republic of" },
  { code: "KWT", country: "Kuwait" },
  { code: "KGZ", country: "Kyrgyzstan" },
  { code: "LAO", country: "Lao People's Democratic Republic" },
  { code: "LVA", country: "Latvia" },
  { code: "LBN", country: "Lebanon" },
  { code: "LSO", country: "Lesotho" },
  { code: "LBR", country: "Liberia" },
  { code: "LBY", country: "Libya" },
  { code: "LIE", country: "Liechtenstein" },
  { code: "LTU", country: "Lithuania" },
  { code: "LUX", country: "Luxembourg" },
  { code: "MDG", country: "Madagascar" },
  { code: "MWI", country: "Malawi" },
  { code: "MYS", country: "Malaysia" },
  { code: "MDV", country: "Maldives" },
  { code: "MLI", country: "Mali" },
  { code: "MLT", country: "Malta" },
  { code: "MHL", country: "Marshall Islands" },
  { code: "MRT", country: "Mauritania" },
  { code: "MUS", country: "Mauritius" },
  { code: "MEX", country: "Mexico" },
  { code: "FSM", country: "Micronesia (Federated States of)" },
  { code: "MDA", country: "Moldova, Republic of" },
  { code: "MCO", country: "Monaco" },
  { code: "MNG", country: "Mongolia" },
  { code: "MNE", country: "Montenegro" },
  { code: "MAR", country: "Morocco" },
  { code: "MOZ", country: "Mozambique" },
  { code: "MMR", country: "Myanmar" },
  { code: "NAM", country: "Namibia" },
  { code: "NRU", country: "Nauru" },
  { code: "NPL", country: "Nepal" },
  { code: "NLD", country: "Netherlands, Kingdom of the" },
  { code: "NZL", country: "New Zealand" },
  { code: "NIC", country: "Nicaragua" },
  { code: "NER", country: "Niger" },
  { code: "NGA", country: "Nigeria" },
  { code: "MKD", country: "North Macedonia" },
  { code: "NOR", country: "Norway" },
  { code: "OMN", country: "Oman" },
  { code: "PAK", country: "Pakistan" },
  { code: "PLW", country: "Palau" },
  { code: "PAN", country: "Panama" },
  { code: "PNG", country: "Papua New Guinea" },
  { code: "PRY", country: "Paraguay" },
  { code: "PER", country: "Peru" },
  { code: "PHL", country: "Philippines" },
  { code: "POL", country: "Poland" },
  { code: "PRT", country: "Portugal" },
  { code: "QAT", country: "Qatar" },
  { code: "ROU", country: "Romania" },
  { code: "RUS", country: "Russian Federation" },
  { code: "RWA", country: "Rwanda" },
  { code: "KNA", country: "Saint Kitts and Nevis" },
  { code: "LCA", country: "Saint Lucia" },
  { code: "VCT", country: "Saint Vincent and the Grenadines" },
  { code: "WSM", country: "Samoa" },
  { code: "SMR", country: "San Marino" },
  { code: "STP", country: "Sao Tome and Principe" },
  { code: "SAU", country: "Saudi Arabia" },
  { code: "SEN", country: "Senegal" },
  { code: "SRB", country: "Serbia" },
  { code: "SYC", country: "Seychelles" },
  { code: "SLE", country: "Sierra Leone" },
  { code: "SGP", country: "Singapore" },
  { code: "SVK", country: "Slovakia" },
  { code: "SVN", country: "Slovenia" },
  { code: "SLB", country: "Solomon Islands" },
  { code: "SOM", country: "Somalia" },
  { code: "ZAF", country: "South Africa" },
  { code: "KOR", country: "South Korea" },
  { code: "ESP", country: "Spain" },
  { code: "LKA", country: "Sri Lanka" },
  { code: "SDN", country: "Sudan" },
  { code: "SUR", country: "Suriname" },
  { code: "SWE", country: "Sweden" },
  { code: "CHE", country: "Switzerland" },
  { code: "SYR", country: "Syrian Arab Republic" },
  { code: "TJK", country: "Tajikistan" },
  { code: "TZA", country: "Tanzania, United Republic of" },
  { code: "THA", country: "Thailand" },
  { code: "TLS", country: "Timor-Leste" },
  { code: "TGO", country: "Togo" },
  { code: "TON", country: "Tonga" },
  { code: "TTO", country: "Trinidad and Tobago" },
  { code: "TUN", country: "Tunisia" },
  { code: "TUR", country: "Turkey" },
  { code: "TKM", country: "Turkmenistan" },
  { code: "TUV", country: "Tuvalu" },
  { code: "UGA", country: "Uganda" },
  { code: "UKR", country: "Ukraine" },
  { code: "ARE", country: "United Arab Emirates" },
  { code: "GBR", country: "United Kingdom of Great Britain and Northern Ireland" },
  { code: "USA", country: "United States of America" },
  { code: "URY", country: "Uruguay" },
  { code: "UZB", country: "Uzbekistan" },
  { code: "VUT", country: "Vanuatu" },
  { code: "VEN", country: "Venezuela (Bolivarian Republic of)" },
  { code: "VNM", country: "Viet Nam" },
  { code: "YEM", country: "Yemen" },
  { code: "ZMB", country: "Zambia" },
  { code: "ZWE", country: "Zimbabwe" }
];

// Function to create the magnet chart visualization
/*
function createMagnetChart(employmentData, categories) {
  const width = 350;
  const height = 450;
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  
  const svg = d3.select(".grid-item-magnets")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Define the positions for magnets based on the specified categories
  const magnetPositionMap = {
    "Agriculture": { x: width * 0.1, y: height * 0.3 },
    "Manufacturing": { x: width * 0.9, y: height * 0.3 },
    "Construction": { x: width * 0.1, y: height * 0.7 },
    "Mining_and_quarrying": { x: width * 0.9, y: height * 0.7 },
    "Market_services": { x: width * 0.5, y: height * 0.9 },
    "Non_market_services": { x: width * 0.5, y: height * 0.1 }
  };

  // Create magnet centers based on provided categories
  const magnetCenters = categories.map(category => {
    return {
      category: category,
      ...magnetPositionMap[category] // Use the predefined positions
    };
  }).filter(magnet => magnet.x !== undefined && magnet.y !== undefined); // Filter out undefined positions

  // Set initial positions for employment data
  employmentData.forEach(d => {
    d.x = Math.random() * width; // Assign random initial x position
    d.y = Math.random() * height; // Assign random initial y position
    d.vx = 0; // Initial x velocity
    d.vy = 0; // Initial y velocity
  });

  // Define the force simulation
  const simulation = d3.forceSimulation(employmentData)
    .force("charge", d3.forceManyBody().strength(-30)) // Repulsion between nodes
    .force("center", d3.forceCenter(width / 2, height / 2)) // Center the chart
    .force("collision", d3.forceCollide().radius(5)) // Avoid collision between nodes
    .force("attract", d3.forceManyBody().strength(0.1)) // Custom force for pulling to magnets
    .on("tick", ticked); // Call the ticked function on every tick

  // Function to update node positions
  function ticked() {
    // Update the positions of nodes based on their x and y values
    svg.selectAll(".node")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    // Update positions of magnets
    svg.selectAll(".magnet")
      .attr("x", d => d.x - 37.5) // Center the magnet
      .attr("y", d => d.y - 37.5); // Center the magnet

    // Update positions of magnet labels
    svg.selectAll(".magnet-label")
      .attr("x", d => d.x)
      .attr("y", d => d.y + 5); // Adjust position for labels
  }

  // Append rectangles (squares) to represent the magnets (job categories)
  svg.selectAll(".magnet")
    .data(magnetCenters)
    .enter()
    .append("rect")
    .attr("class", "magnet")
    .attr("width", 75)
    .attr("height", 75)
    .attr("fill", "#FFCC00")
    .attr("x", d => d.x - 37.5) // Adjust to center the square
    .attr("y", d => d.y - 37.5); // Adjust to center the square

  // Add labels for the magnets (job categories), centered in each square
  svg.selectAll(".magnet-label")
    .data(magnetCenters)
    .enter()
    .append("text")
    .attr("class", "magnet-label")
    .attr("x", d => d.x) // Center the text horizontally
    .attr("y", d => d.y + 5) // Adjust this value to move the text vertically
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text(d => d.category.replace(/_/g, ' ')); // Replace underscores with spaces

  // Function to calculate the pulling force towards magnets based on employment ratio
  function magnetForce() {
    employmentData.forEach(d => {
        categories.forEach(category => {
            // Find the corresponding magnet for the current category
            const magnet = magnetCenters.find(m => m.category === category);
            
            if (magnet) {
                const categoryValue = +d[category]; // Convert to number

                // Ensure categoryValue is valid
                if (!isNaN(categoryValue) && categoryValue > 0) {
                    const distanceX = magnet.x - d.x;
                    const distanceY = magnet.y - d.y;

                    // Calculate strength as a percentage of the total value for the country
                    const strength = d.Total > 0 
                        ? categoryValue / d.Total 
                        : 0; // Prevent division by zero
                    
                    // Cap the strength at 1
                    const cappedStrength = Math.min(strength, 1);

                    // Apply force proportional to the employment ratio in the category
                    d.vx += distanceX * cappedStrength;
                    d.vy += distanceY * cappedStrength;

                    // Cap velocities to avoid overly large changes in position
                    d.vx = Math.max(Math.min(d.vx, 10), -10); // Limit vx between -10 and 10
                    d.vy = Math.max(Math.min(d.vy, 10), -10); // Limit vy between -10 and 10
                }
            }
        });
    });
  }

  // Add the custom magnet force to the simulation
  simulation.force("magnet", magnetForce);

  const nodes = svg.selectAll(".node")
    .data(employmentData)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 8)
    .attr("fill", "rgba(0, 128, 255, 0.6)")
    .on("mouseover", function(event, d) {
      d3.select(this).attr("fill", "red"); // Change color on hover
      
      // Get the country name using the dictionary
      const countryName = (countries.find(country => country.code === d.country)?.country) || d.country;
      
      const label = svg.append("text")
      .attr("class", "country-label")
      .attr("x", d.x)
      .attr("y", d.y - 15) // Position the label above the circle
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .text(countryName);

      // Remove the label after a short delay
      setTimeout(() => {
        label.remove();
      }, 1000); // Adjust delay as needed
    })
    .on("mouseout", function() {
      d3.select(this).attr("fill", "rgba(0, 128, 255, 0.6)"); // Revert color on mouse out
    });

  // Add the tick function to the simulation
  simulation.on("tick", function() {
    ticked();
    magnetForce(); // Update the magnet forces each tick
  });
}
*/

function createMagnetChart(employmentData, categories) {
  const width = 350;
  const height = 450;
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  const magnetSize = 65; // Magnet size

  const svg = d3.select(".grid-item-magnets")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const magnetPositionMap = {
    "Agriculture": { x: width * 0.1, y: height * 0.3 },
    "Manufacturing": { x: width * 0.9, y: height * 0.3 },
    "Construction": { x: width * 0.1, y: height * 0.7 },
    "Mining_and_quarrying": { x: width * 0.9, y: height * 0.7 },
    "Market_services": { x: width * 0.5, y: height * 0.9 },
    "Non_market_services": { x: width * 0.5, y: height * 0.1 }
  };

  const magnetCenters = categories.map(category => {
    return {
      category: category,
      ...magnetPositionMap[category]
    };
  }).filter(magnet => magnet.x !== undefined && magnet.y !== undefined);

  employmentData.forEach(d => {
    d.x = Math.random() * width; // Random initial x position
    d.y = Math.random() * height; // Random initial y position
    d.vx = 0;
    d.vy = 0;
  });

  const simulation = d3.forceSimulation(employmentData)
    .force("charge", d3.forceManyBody().strength(-30))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(8))
    .on("tick", ticked);

  function ticked() {
    // Apply magnet force first
    magnetForce(); // Ensure the custom force is applied

    // Update positions of nodes
    svg.selectAll(".node")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    // Update positions of magnets and their labels
    svg.selectAll(".magnet")
      .attr("x", d => d.x - magnetSize / 2)
      .attr("y", d => d.y - magnetSize / 2);

    svg.selectAll(".magnet-label")
      .attr("x", d => d.x - magnetSize / 2)
      .attr("y", d => d.y - magnetSize / 2);
  }

  svg.selectAll(".magnet")
    .data(magnetCenters)
    .enter()
    .append("rect")
    .attr("class", "magnet")
    .attr("width", magnetSize)
    .attr("height", magnetSize)
    .attr("fill", "#FFCC00")
    .attr("x", d => d.x - magnetSize / 2)
    .attr("y", d => d.y - magnetSize / 2);

  svg.selectAll(".magnet-label")
    .data(magnetCenters)
    .enter()
    .append("foreignObject")
    .attr("class", "magnet-label")
    .attr("x", d => d.x - magnetSize / 2)
    .attr("y", d => d.y - magnetSize / 2)
    .attr("width", magnetSize)
    .attr("height", magnetSize)
    .append("xhtml:div") // This is to wrap the text inside the foreignObject
    .style("width", `${magnetSize}px`)
    .style("height", `${magnetSize}px`)
    .style("display", "flex")
    .style("align-items", "center")
    .style("justify-content", "center")
    .style("text-align", "center")
    .style("font-size", "10px")
    .html(d => {
      // Add line breaks for wrapping long words
      return d.category.replace(/_/g, '<br/>').replace(/Agriculture/g, 'Agriculture').replace(/Manufacturing/g, 'Manufacturing').replace(/Construction/g, 'Construction');
    });

  function magnetForce() {
    employmentData.forEach(d => {
      categories.forEach(category => {
        const magnet = magnetCenters.find(m => m.category === category);

        if (magnet) {
          const categoryValue = +d[category]; // Convert to number

          if (!isNaN(categoryValue) && categoryValue > 0) {
            const distanceX = magnet.x - d.x;
            const distanceY = magnet.y - d.y;

            const strength = d.Total > 0 
              ? categoryValue / d.Total 
              : 0;
            
            const cappedStrength = Math.min(strength, 1);

            d.vx += distanceX * cappedStrength * 0.1; // Scale down for smoother movement
            d.vy += distanceY * cappedStrength * 0.1; // Scale down for smoother movement
          }
        }
      });
    });

    // Implement collision detection and keep nodes within boundaries
    employmentData.forEach(d => {
      magnetCenters.forEach(magnet => {
        const magnetX = magnet.x - magnetSize / 2; // Adjust for rectangle center
        const magnetY = magnet.y - magnetSize / 2; // Adjust for rectangle center
        const radius = 8; // Circle radius

        // Check if the circle is overlapping with the magnet rectangle
        if (d.x + radius > magnetX && d.x - radius < magnetX + magnetSize &&
            d.y + radius > magnetY && d.y - radius < magnetY + magnetSize) {
          // Adjust position if overlapping
          const overlapX = (d.x + radius) - magnetX;
          const overlapY = (d.y + radius) - magnetY;

          if (overlapX > overlapY) {
            d.y = magnetY + magnetSize + radius; // Move below the magnet
          } else {
            d.x = magnetX + magnetSize + radius; // Move right of the magnet
          }
        }
      });

      // Keep nodes within the boundaries of the container
      const radius = 8; // Circle radius
      if (d.x < radius) d.x = radius; // Left boundary
      if (d.x > width - radius) d.x = width - radius; // Right boundary
      if (d.y < radius) d.y = radius; // Top boundary
      if (d.y > height - radius) d.y = height - radius; // Bottom boundary
    });
  }

  const nodes = svg.selectAll(".node")
    .data(employmentData)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 8)
    .attr("fill", "rgba(0, 128, 255, 0.6)")
    .on("mouseover", function(event, d) {
      d3.select(this).attr("fill", "red");

      const countryName = (countries.find(country => country.code === d.country)?.country) || d.country;
      const label = svg.append("text")
        .attr("class", "country-label")
        .attr("x", d.x)
        .attr("y", d.y - 15)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(countryName);

      setTimeout(() => {
        label.remove();
      }, 1000);
    })
    .on("mouseout", function() {
      d3.select(this).attr("fill", "rgba(0, 128, 255, 0.6)");
    });
}
