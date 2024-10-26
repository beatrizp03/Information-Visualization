const countries = [
  { code: "AFG", country: "Afghanistan" },
  { code: "ALB", country: "Albania" },
  { code: "AGO", country: "Angola" },
  { code: "ARG", country: "Argentina" },
  { code: "ARM", country: "Armenia" },
  { code: "AUS", country: "Australia" },
  { code: "AUT", country: "Austria" },
  { code: "BHS", country: "The Bahamas" },
  { code: "BGD", country: "Bangladesh" },
  { code: "BRB", country: "Barbados" },
  { code: "BLR", country: "Belarus" },
  { code: "BEL", country: "Belgium" },
  { code: "BLZ", country: "Belize" },
  { code: "BEN", country: "Benin" },
  { code: "BTN", country: "Bhutan" },
  { code: "BOL", country: "Bolivia" },
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
  { code: "TCD", country: "Chad" },
  { code: "CHL", country: "Chile" },
  { code: "CHN", country: "China" },
  { code: "COL", country: "Colombia" },
  { code: "COM", country: "Comoros" },
  { code: "COG", country: "Republic of the Congo" },
  { code: "COD", country: "Democratic Republic of the Congo" },
  { code: "COK", country: "Cook Islands" },
  { code: "CRI", country: "Costa Rica" },
  { code: "CIV", country: "Ivory Coast" },
  { code: "HRV", country: "Croatia" },
  { code: "CYP", country: "Cyprus" },
  { code: "CZE", country: "Czech Republic" },
  { code: "DNK", country: "Denmark" },
  { code: "DJI", country: "Djibouti" },
  { code: "DOM", country: "Dominican Republic" },
  { code: "ECU", country: "Ecuador" },
  { code: "EGY", country: "Egypt" },
  { code: "SLV", country: "El Salvador" },
  { code: "EST", country: "Estonia" },
  { code: "SWZ", country: "Eswatini" },
  { code: "ETH", country: "Ethiopia" },
  { code: "FJI", country: "Fiji" },
  { code: "FIN", country: "Finland" },
  { code: "FRA", country: "France" },
  { code: "GMB", country: "Gambia" },
  { code: "GEO", country: "Georgia" },
  { code: "DEU", country: "Germany" },
  { code: "GHA", country: "Ghana" },
  { code: "GRC", country: "Greece" },
  { code: "GRD", country: "Grenada" },
  { code: "GTM", country: "Guatemala" },
  { code: "GIN", country: "Guinea" },
  { code: "GNB", country: "Guinea Bissau" },
  { code: "GUY", country: "Guyana" },
  { code: "HTI", country: "Haiti" },
  { code: "HND", country: "Honduras" },
  { code: "HKG", country: "Hong Kong" },
  { code: "HUN", country: "Hungary" },
  { code: "ISL", country: "Iceland" },
  { code: "IND", country: "India" },
  { code: "IDN", country: "Indonesia" },
  { code: "IRN", country: "Iran" },
  { code: "IRQ", country: "Iraq" },
  { code: "IRL", country: "Ireland" },
  { code: "ISR", country: "Israel" },
  { code: "ITA", country: "Italy" },
  { code: "JAM", country: "Jamaica" },
  { code: "JPN", country: "Japan" },
  { code: "JOR", country: "Jordan" },
  { code: "KEN", country: "Kenya" },
  { code: "KIR", country: "Kiribati" },
  { code: "KOR", country: "South Korea" },
  { code: "KOS", country: "Kosovo" },
  { code: "KGZ", country: "Kyrgyzstan" },
  { code: "LAO", country: "Laos" },
  { code: "LVA", country: "Latvia" },
  { code: "LBN", country: "Lebanon" },
  { code: "LSO", country: "Lesotho" },
  { code: "LBR", country: "Liberia" },
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
  { code: "FSM", country: "Micronesia" },
  { code: "MDA", country: "Moldova" },
  { code: "MNG", country: "Mongolia" },
  { code: "MNE", country: "Montenegro" },
  { code: "MSR", country: "Montserrat" },
  { code: "MAR", country: "Morocco" },
  { code: "MOZ", country: "Mozambique" },
  { code: "MMR", country: "Myanmar" },
  { code: "NAM", country: "Namibia" },
  { code: "NRU", country: "Nauru" },
  { code: "NPL", country: "Nepal" },
  { code: "NLD", country: "Netherlands" },
  { code: "NCL", country: "New Caledonia" },
  { code: "NIC", country: "Nicaragua" },
  { code: "NER", country: "Niger" },
  { code: "NGA", country: "Nigeria" },
  { code: "NIU", country: "Niue" },
  { code: "MKD", country: "Macedonia" },
  { code: "NOR", country: "Norway" },
  { code: "PAK", country: "Pakistan" },
  { code: "PLW", country: "Palau" },
  { code: "PSE", country: "Palestine" },
  { code: "PAN", country: "Panama" },
  { code: "PNG", country: "Papua New Guinea" },
  { code: "PRY", country: "Paraguay" },
  { code: "PER", country: "Peru" },
  { code: "PHL", country: "Philippines" },
  { code: "POL", country: "Poland" },
  { code: "PRT", country: "Portugal" },
  { code: "ROU", country: "Romania" },
  { code: "RUS", country: "Russia" },
  { code: "RWA", country: "Rwanda" },
  { code: "LCA", country: "Saint Lucia" },
  { code: "WSM", country: "Samoa" },
  { code: "STP", country: "Sao Tome and Principe" },
  { code: "SAU", country: "Saudi Arabia" },
  { code: "SEN", country: "Senegal" },
  { code: "SRB", country: "Republic of Serbia" },
  { code: "SYC", country: "Seychelles" },
  { code: "SLE", country: "Sierra Leone" },
  { code: "SGP", country: "Singapore" },
  { code: "SVK", country: "Slovakia" },
  { code: "SVN", country: "Slovenia" },
  { code: "SLB", country: "Solomon Islands" },
  { code: "SOM", country: "Somalia" },
  { code: "ZAF", country: "South Africa" },
  { code: "SGS", country: "South Georgia and the South Sandwich Islands" },
  { code: "KSV", country: "South Sudan" },
  { code: "ESP", country: "Spain" },
  { code: "LKA", country: "Sri Lanka" },
  { code: "SDN", country: "Sudan" },
  { code: "SSD", country: "South Sudan" },
  { code: "SUR", country: "Suriname" },
  { code: "SWE", country: "Sweden" },
  { code: "CHE", country: "Switzerland" },
  { code: "SYR", country: "Syrian Arab Republic" },
  { code: "TZA", country: "United Republic of Tanzania" },
  { code: "THA", country: "Thailand" },
  { code: "TLS", country: "Timor-Leste" },
  { code: "TGO", country: "Togo" },
  { code: "TJK", country: "Tajikistan" },
  { code: "TON", country: "Tonga" },
  { code: "TTO", country: "Trinidad and Tobago" },
  { code: "TUN", country: "Tunisia" },
  { code: "TUR", country: "Turkey" },
  { code: "TKM", country: "Turkmenistan" },
  { code: "TUV", country: "Tuvalu" },
  { code: "UGA", country: "Uganda" },
  { code: "UKR", country: "Ukraine" },
  { code: "ARE", country: "United Arab Emirates" },
  { code: "GBR", country: "England" },
  { code: "USA", country: "USA" },
  { code: "URY", country: "Uruguay" },
  { code: "UZB", country: "Uzbekistan" },
  { code: "VUT", country: "Vanuatu" },
  { code: "VEN", country: "Venezuela" },
  { code: "VNM", country: "Vietnam" },
  { code: "WLF", country: "Wallis and Futuna" },
  { code: "ESH", country: "Western Sahara" },
  { code: "YEM", country: "Yemen" },
  { code: "ZMB", country: "Zambia" },
  { code: "ZWE", country: "Zimbabwe" },
];

/*const colorScale = d3.scaleQuantize()
  .domain([0, 100])  // Employment ratio between 0 and 100%
  .range(d3.schemeBlues[9]);  // Blues color scheme for different ranges*/

// To get the darkest blue color
const darkestColor = "#9D1C50";
const lighestColor = "#F6ADC7";

// #B3C7FF (lightest) #80A3FF #4D7FFF #6E6BFF (darkest) #0056FF 

// Function to create the magnet chart visualization
function createJobMagnetChart(employmentData, categories) {
  const width = 500;
  const height = 450;
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  const magnetWidth = 90; // Magnet size
  const magnetHeight = 50; // Magnet size
  
  // Remove previous circles if needed
  d3.select(".grid-item-magnets").select("svg").remove(); // Remove the existing SVG

  let categoryMeansByCountry = {}; // Object to store mean values for each category for each country

  const years = Array.from(new Set(employmentData.map(d => d.year)));
  let oldestYear = Math.min(...years);
  let mostRecentYear = Math.max(...years);
  
  const circles_width = 400; // Available width for the circles
  const circles_height = 400; // Available height for the circles
  const circles_margin = { top: 25, right: 0, bottom: 0, left: 0 }; // Margins for the circles

  const svg = d3.select(".job-chart-container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Define the magnet positions
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

  // Aggregate data to calculate means per country across all years
  function calculateCategoryMeansByCountry() {
    const countries = Array.from(new Set(employmentData.map(d => d.country))); // Get unique countries
    
    countries.forEach(country => {
      const countryData = employmentData.filter(d => d.country === country); // Get data for this country
      let meanValues = {};

      categories.forEach(category => {
        const values = countryData.map(d => +d[category]); // Get values for this category
        const meanValue = d3.mean(values); // Calculate mean
        meanValues[category] = meanValue;
      });

      // Store the means for this country
      categoryMeansByCountry[country] = {
        country: country,
        ...meanValues
      };
    });
  }

  calculateCategoryMeansByCountry(); // Call function to calculate means

  // Convert the category means object into an array for D3 to use
  const countryNodes = Object.values(categoryMeansByCountry);

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
    
  // Update magnets' appearance
  svg.selectAll(".magnet")
    .data(magnetCenters)
    .enter()
    .append("rect")
    .attr("class", "magnet")
    .attr("width", magnetWidth)
    .attr("height", magnetHeight)
    .attr("fill", darkestColor)
    .attr("x", d => d.x - magnetWidth / 2)
    .attr("y", d => d.y - magnetHeight / 2)
    .attr("rx", 5) // Set 5px border-radius for rounded corners
    .attr("ry", 5); // Set 5px border-radius for rounded corners

  svg.selectAll(".magnet-label")
    .data(magnetCenters)
    .enter()
    .append("foreignObject")
    .attr("class", "magnet-label")
    .attr("x", d => d.x - magnetWidth / 2)
    .attr("y", d => d.y - magnetHeight / 2)
    .attr("width", magnetWidth)
    .attr("height", magnetHeight)
    .append("xhtml:div")
    .style("width", `${magnetWidth}px`)
    .style("height", `${magnetHeight}px`)
    .style("display", "flex")
    .style("align-items", "center")
    .style("justify-content", "center")
    .style("text-align", "center")
    .style("font-size", "14px")
    .style("color", "white") // Change text color to white
    .html(d => {
      // Customize line breaks for specific words
      const categoryName = d.category
        .replace(/_/g, '<br/>');
        // Add line breaks for wrapping long words

      return categoryName;
    });

  // Custom magnet force based on category means
  function magnetForce() {
    countryNodes.forEach(d => {
      categories.forEach(category => {
        const magnet = magnetCenters.find(m => m.category === category); // Find the corresponding magnet
        if (magnet) {
          const meanValue = d[category]; // Use the mean value for this category for this country
          const distanceX = magnet.x - d.x;
          const distanceY = magnet.y - d.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY) || 1; // Ensure no division by zero
          const strength = (meanValue || 0) / 100; // Avoid NaN if meanValue is undefined or null
  
          const scaledStrength = Math.min(strength * 0.25, 1);
          d.vx = isNaN(d.vx) ? 0 : d.vx + distanceX * scaledStrength; // Handle NaN for vx
          d.vy = isNaN(d.vy) ? 0 : d.vy + distanceY * scaledStrength; // Handle NaN for vy
        }
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

  // Change circle hover behavior
  const nodes = svg.selectAll(".node")
    .data(countryNodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 7.5)
    .attr("fill", lighestColor)
    .attr("opacity", 0.5) // Set opacity to 0.8
    .on("mouseover", function(event, d) {
      d3.select(this).attr("fill", "purple");
      const countryName = (countries.find(country => country.code === d.country)?.country) || d.country;
      
    
      // Create an array of employment data for relevant categories
      const employmentDataArray = [];
      const relevantCategories = [
          "Agriculture",
          "Construction",
          "Manufacturing",
          "Market_services",
          "Mining_and_quarrying",
          "Non_market_services", 
          "Non_classified"
      ];
  
      for (const category of relevantCategories) {
          if (d[category] !== undefined) { // Ensure the key exists in the data
              employmentDataArray.push({
                  category: category.replace(/_/g, ' ').replace("Non classified", "No information"), // Format category name
                  value: parseFloat(d[category]).toFixed(2) // Convert to float and format
              });
          }
      }
  
      // Sort the array by value in descending order
      employmentDataArray.sort((a, b) => b.value - a.value);
  
      // Combine lines into a single HTML string
      const employmentDataString = employmentDataArray.map(item => `${item.category}: ${item.value}%`).join("<br>"); // Use <br/> for line breaks
  
      // Update tooltip content and position
      tooltip
          .html(`Country: ${countryName}<br>Year Range: ${oldestYear} - ${mostRecentYear}<br>${employmentDataString}`)
          .style("visibility", "visible")
          .style("top", (event.pageY + 10) + "px")
          .style("left", (event.pageX + 10) + "px");
        
          

})
    .on("mouseout", function() {
      d3.select(this).attr("fill", lighestColor); // Revert fill color to default
      tooltip.style("visibility", "hidden");
      svg.selectAll(".country-label").remove();

     
    })
    .on("click", function(event,d) {
      const countryName = (countries.find(country => country.code === d.country)?.country) || d.country;
      const continent = getContinent(countryName); // Function to get continent by country name
      const countryCode = getCountryCode(countryName);
      console.log(clickedList);
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
      console.log("Clicked list (added):", clickedList);
      
      // Update styles for the clicked country
      d3.select(this)
        .style("fill", "purple") // Change color for clicked country
        .attr("opacity", 1); // Set high opacity for clicked country
    } else {
      // If found, remove the entry from the clicked list
      clickedList.splice(existingEntryIndex, 1); // Remove the entry at the found index
      console.log("Clicked list (removed):", clickedList);
      const originalColor = lighestColor; // Get the stored original color
      d3.select(this)
        .style("fill", originalColor) // Restore original color
        .attr("opacity", 0.5)
    };

    updateDashboard();
    })
}

function updateJobMagnetChart(clickedList, hoveredcountry) {
  // Select all country paths
  console.log("updatemagnetchartjob",hoveredcountry);
  d3.selectAll(".node")
    .style("fill", function(d) {
        const countryCode = d.country;  // Assuming d.country is the country code 
        const countryName = getCountryName(countryCode);
        
      if (hoveredcountry && countryName === hoveredcountry) {
        d3.select(this).raise(); // Bring hovered node to the front
        d3.select(this).attr("opacity", 0.8); // Adjust opacity for hover effect
        return "purple"; // Change color for hovered country


    }
        // Check if the country is in the clickedList and change its color accordingly
        else if (clickedList.some(clicked => clicked.country === countryCode)) {
            d3.select(this).raise();
            d3.select(this).attr("opacity", 0.6);
            return "purple";  // Change color for clicked countries (e.g., orange/red)
        } else if (clickedList.length > 0) {
          // Set color to gray for non-selected circles
          //d3.select(this).style("fill", "gray").attr("opacity", 0.5);
          d3.select(this).attr("opacity", 0.6);
          originalColors[countryCode] = "gray";
          return "gray"; 
        }
        else {
          // If no circles are selected, reset all to the original color
          //d3.select(this).style("fill", lighestColor).attr("opacity", 0.5);
          d3.select(this).attr("opacity", 0.6);
          return lighestColor; 
        }
        
    });
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


/*
//__________NEW TRY_________________
function createJobMagnetChart(employmentData, categories) {
  const width = 400;
  const height = 450;
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  const magnetWidth = 90;
  const magnetHeight = 50;

  // Select or create the SVG container
  let svg = d3.select(".job-chart-container").select("svg");

  if (svg.empty()) {
    svg = d3.select(".job-chart-container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
  }

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

  let categoryMeansByCountry = {};

  const years = Array.from(new Set(employmentData.map(d => d.year)));
  let oldestYear = Math.min(...years);
  let mostRecentYear = Math.max(...years);

  const circles_width = 400;
  const circles_height = 400;
  const circles_margin = { top: 25, right: 0, bottom: 0, left: 0 };

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

  function calculateCategoryMeansByCountry() {
    const countries = Array.from(new Set(employmentData.map(d => d.country)));

    countries.forEach(country => {
      const countryData = employmentData.filter(d => d.country === country);
      let meanValues = {};

      categories.forEach(category => {
        const values = countryData.map(d => +d[category]);
        const meanValue = d3.mean(values);
        meanValues[category] = meanValue;
      });

      categoryMeansByCountry[country] = {
        country: country,
        ...meanValues
      };
    });
  }

  calculateCategoryMeansByCountry();

  const countryNodes = Object.values(categoryMeansByCountry);

  // Keep the nodes' previous positions for smooth transitions
  countryNodes.forEach(d => {
    d.x = d.x || width / 2;
    d.y = d.y || height / 2;
  });

  const simulation = d3.forceSimulation(countryNodes)
    .force("charge", d3.forceManyBody().strength(-30))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(8))
    .on("tick", ticked);

  function ticked() {
    magnetForce();

    // Update the positions of existing nodes without hiding them
    svg.selectAll(".node")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  }

  function magnetForce() {
    countryNodes.forEach(d => {
      categories.forEach(category => {
        const magnet = magnetCenters.find(m => m.category === category);
        if (magnet) {
          const meanValue = d[category];
          const distanceX = magnet.x - d.x;
          const distanceY = magnet.y - d.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY) || 1;
          const strength = (meanValue || 0) / 100;
          const scaledStrength = Math.min(strength * 0.25, 1);
          d.vx += distanceX * scaledStrength;
          d.vy += distanceY * scaledStrength;
        }
      });
    });
  }

  svg.selectAll(".magnet")
    .data(magnetCenters)
    .join("rect")
    .attr("class", "magnet")
    .attr("width", magnetWidth)
    .attr("height", magnetHeight)
    .attr("fill", darkestColor)
    .attr("x", d => d.x - magnetWidth / 2)
    .attr("y", d => d.y - magnetHeight / 2)
    .attr("rx", 5)
    .attr("ry", 5);

  svg.selectAll(".magnet-label")
    .data(magnetCenters)
    .join("foreignObject")
    .attr("class", "magnet-label")
    .attr("x", d => d.x - magnetWidth / 2)
    .attr("y", d => d.y - magnetHeight / 2)
    .attr("width", magnetWidth)
    .attr("height", magnetHeight)
    .append("xhtml:div")
    .style("width", `${magnetWidth}px`)
    .style("height", `${magnetHeight}px`)
    .style("display", "flex")
    .style("align-items", "center")
    .style("justify-content", "center")
    .style("text-align", "center")
    .style("font-size", "16px")
    .style("color", "white")
    .html(d => d.category.replace(/_/g, '<br/>'));

  const nodes = svg.selectAll(".node")
    .data(countryNodes, d => d.country)
    .join(
      enter => enter.append("circle")
        .attr("class", "node")
        .attr("r", 5)
        .attr("fill", lighestColor)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("opacity", 0) // Start hidden
        .call(enter => enter.transition().duration(300).attr("opacity", 0.8)), // Fade in after being positioned
      update => update,
      exit => exit.remove()
    );

  nodes.on("mouseover", function(event, d) {
    d3.select(this).attr("fill", "purple");
    const countryName = (countries.find(country => country.code === d.country)?.country) || d.country;

    const employmentDataArray = [];
    const relevantCategories = [
      "Agriculture",
      "Construction",
      "Manufacturing",
      "Market_services",
      "Mining_and_quarrying",
      "Non_market_services"
    ];

    for (const category of relevantCategories) {
      if (d[category] !== undefined) {
        employmentDataArray.push({
          category: category.replace(/_/g, ' '),
          value: parseFloat(d[category]).toFixed(2)
        });
      }
    }

    employmentDataArray.sort((a, b) => b.value - a.value);

    const employmentDataString = employmentDataArray.map(item => `${item.category}: ${item.value}%`).join("<br>");

    tooltip
      .html(`Country: ${countryName}<br>Year Range: ${oldestYear} - ${mostRecentYear}<br>${employmentDataString}`)
      .style("visibility", "visible")
      .style("top", (event.pageY + 10) + "px")
      .style("left", (event.pageX + 10) + "px");

  })
    .on("mousemove", function(event) {
      tooltip
        .style("top", (event.pageY + 10) + "px")
        .style("left", (event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
      d3.select(this).attr("fill", lighestColor);
      tooltip.style("visibility", "hidden");
    });
}


function updateMagnetChart(clickedList) {
  // Select all country paths
  d3.selectAll(".node")
    .style("fill", function(d) {
        const countryName = d.country;  // Assuming d.id is the country code or name
        // Check if the country is in the clickedList and change its color accordingly
        if (clickedList.some(clicked => clicked.country === countryName)) {
            return "purple";  // Change color for clicked countries (e.g., orange/red)
        }
    });
}*/