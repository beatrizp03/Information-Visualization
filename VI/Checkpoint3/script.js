// Initialization of the dashboard
const continents = {
  Africa: [
    { name: "Angola", code: "AGO" },
    { name: "Benin", code: "BEN" },
    { name: "Botswana", code: "BWA" },
    { name: "Burkina Faso", code: "BFA" },
    { name: "Burundi", code: "BDI" },
    { name: "Cabo Verde", code: "CPV" },
    { name: "Cameroon", code: "CMR" },
    { name: "Chad", code: "TCD" },
    { name: "Comoros", code: "COM" },
    { name: "Congo", code: "COG" },
    { name: "Congo, Democratic Republic of the", code: "COD" },
    { name: "Côte d'Ivoire", code: "CIV" },
    { name: "Djibouti", code: "DJI" },
    { name: "Egypt", code: "EGY" },
    { name: "Eswatini", code: "SWZ" },
    { name: "Ethiopia", code: "ETH" },
    { name: "Gambia", code: "GMB" },
    { name: "Ghana", code: "GHA" },
    { name: "Guinea", code: "GIN" },
    { name: "Guinea-Bissau", code: "GNB" },
    { name: "Kenya", code: "KEN" },
    { name: "Lesotho", code: "LSO" },
    { name: "Liberia", code: "LBR" },
    { name: "Madagascar", code: "MDG" },
    { name: "Malawi", code: "MWI" },
    { name: "Mali", code: "MLI" },
    { name: "Mauritania", code: "MRT" },
    { name: "Mauritius", code: "MUS" },
    { name: "Morocco", code: "MAR" },
    { name: "Mozambique", code: "MOZ" },
    { name: "Namibia", code: "NAM" },
    { name: "Niger", code: "NER" },
    { name: "Nigeria", code: "NGA" },
    { name: "Rwanda", code: "RWA" },
    { name: "Sao Tome and Principe", code: "STP" },
    { name: "Senegal", code: "SEN" },
    { name: "Seychelles", code: "SYC" },
    { name: "Sierra Leone", code: "SLE" },
    { name: "Somalia", code: "SOM" },
    { name: "South Africa", code: "ZAF" },
    { name: "South Sudan", code: "SSD" },
    { name: "Sudan", code: "SDN" },
    { name: "Tanzania, United Republic of", code: "TZA" },
    { name: "Togo", code: "TGO" },
    { name: "Uganda", code: "UGA" },
    { name: "Zambia", code: "ZMB" },
    { name: "Zimbabwe", code: "ZWE" }
  ],
  Asia: [
    { name: "Afghanistan", code: "AFG" },
    { name: "Armenia", code: "ARM" },
    { name: "Bangladesh", code: "BGD" },
    { name: "Bhutan", code: "BTN" },
    { name: "Cambodia", code: "KHM" },
    { name: "China", code: "CHN" },
    { name: "Georgia", code: "GEO" },
    { name: "India", code: "IND" },
    { name: "Indonesia", code: "IDN" },
    { name: "Iran (Islamic Republic of)", code: "IRN" },
    { name: "Iraq", code: "IRQ" },
    { name: "Israel", code: "ISR" },
    { name: "Japan", code: "JPN" },
    { name: "Jordan", code: "JOR" },
    { name: "Kazakhstan", code: "KAZ" },
    { name: "Kiribati", code: "KIR" },
    { name: "Republic of Korea", code: "KOR" },
    { name: "Kuwait", code: "KWT" },
    { name: "Lao People's Democratic Republic", code: "LAO" },
    { name: "Lebanon", code: "LBN" },
    { name: "Malaysia", code: "MYS" },
    { name: "Maldives", code: "MDV" },
    { name: "Myanmar", code: "MMR" },
    { name: "Nepal", code: "NPL" },
    { name: "Pakistan", code: "PAK" },
    { name: "Philippines", code: "PHL" },
    { name: "Singapore", code: "SGP" },
    { name: "Sri Lanka", code: "LKA" },
    { name: "Syrian Arab Republic", code: "SYR" },
    { name: "Tajikistan", code: "TJK" },
    { name: "Thailand", code: "THA" },
    { name: "Timor-Leste", code: "TLS" },
    { name: "Turkey", code: "TUR" },
    { name: "Uzbekistan", code: "UZB" },
    { name: "Viet Nam", code: "VNM" },
    { name: "Yemen", code: "YEM" }
  ],
  Europe: [
    { name: "Albania", code: "ALB" },
    { name: "Austria", code: "AUT" },
    { name: "Belarus", code: "BLR" },
    { name: "Belgium", code: "BEL" },
    { name: "Bosnia and Herzegovina", code: "BIH" },
    { name: "Bulgaria", code: "BGR" },
    { name: "Croatia", code: "HRV" },
    { name: "Cyprus", code: "CYP" },
    { name: "Czechia", code: "CZE" },
    { name: "Denmark", code: "DNK" },
    { name: "Estonia", code: "EST" },
    { name: "Finland", code: "FIN" },
    { name: "France", code: "FRA" },
    { name: "Germany", code: "DEU" },
    { name: "Greece", code: "GRC" },
    { name: "Hungary", code: "HUN" },
    { name: "Iceland", code: "ISL" },
    { name: "Ireland", code: "IRL" },
    { name: "Italy", code: "ITA" },
    { name: "Kosovo", code: "XKX" },
    { name: "Latvia", code: "LVA" },
    { name: "Lithuania", code: "LTU" },
    { name: "Luxembourg", code: "LUX" },
    { name: "Montenegro", code: "MNE" },
    { name: "Netherlands", code: "NLD" },
    { name: "North Macedonia", code: "MKD" },
    { name: "Norway", code: "NOR" },
    { name: "Poland", code: "POL" },
    { name: "Portugal", code: "PRT" },
    { name: "Romania", code: "ROU" },
    { name: "Russian Federation", code: "RUS" },
    { name: "Serbia", code: "SRB" },
    { name: "Slovakia", code: "SVK" },
    { name: "Slovenia", code: "SVN" },
    { name: "Spain", code: "ESP" },
    { name: "Sweden", code: "SWE" },
    { name: "Switzerland", code: "CHE" },
    { name: "Ukraine", code: "UKR" },
    { name: "United Kingdom of Great Britain and Northern Ireland", code: "GBR" }
  ],
  NorthAmerica: [
    { name: "Bahamas", code: "BHS" },
    { name: "Barbados", code: "BRB" },
    { name: "Belize", code: "BLZ" },
    { name: "Canada", code: "CAN" },
    { name: "Costa Rica", code: "CRI" },
    { name: "Dominican Republic", code: "DOM" },
    { name: "El Salvador", code: "SLV" },
    { name: "Grenada", code: "GRD" },
    { name: "Guatemala", code: "GTM" },
    { name: "Haiti", code: "HTI" },
    { name: "Honduras", code: "HND" },
    { name: "Jamaica", code: "JAM" },
    { name: "Mexico", code: "MEX" },
    { name: "Nicaragua", code: "NIC" },
    { name: "Panama", code: "PAN" },
    { name: "Saint Lucia", code: "LCA" },
    { name: "Trinidad and Tobago", code: "TTO" },
    { name: "United States of America", code: "USA" }
  ],
  Oceania: [
    { name: "Australia", code: "AUS" },
    { name: "Cook Islands", code: "COK" },
    { name: "Fiji", code: "FJI" },
    { name: "Kiribati", code: "KIR" },
    { name: "Marshall Islands", code: "MHL" },
    { name: "Micronesia (Federated States of)", code: "FSM" },
    { name: "Nauru", code: "NRU" },
    { name: "New Caledonia", code: "NCL" },
    { name: "Niue", code: "NIU" },
    { name: "Palau", code: "PLW" },
    { name: "Papua New Guinea", code: "PNG" },
    { name: "Samoa", code: "WSM" },
    { name: "Solomon Islands", code: "SLB" },
    { name: "Tokelau", code: "TKL" },
    { name: "Tonga", code: "TON" },
    { name: "Tuvalu", code: "TUV" },
    { name: "Vanuatu", code: "VUT" }
  ],
  SouthAmerica: [
    { name: "Argentina", code: "ARG" },
    { name: "Bolivia (Plurinational State of)", code: "BOL" },
    { name: "Brazil", code: "BRA" },
    { name: "Chile", code: "CHL" },
    { name: "Colombia", code: "COL" },
    { name: "Ecuador", code: "ECU" },
    { name: "Guyana", code: "GUY" },
    { name: "Paraguay", code: "PRY" },
    { name: "Peru", code: "PER" },
    { name: "Suriname", code: "SUR" },
    { name: "Uruguay", code: "URY" },
    { name: "Venezuela (Bolivarian Republic of)", code: "VEN" }
  ]
};

let clickedList = [];
var globalData1, globalData2;
const buttons = document.querySelectorAll('.menu-btn');

function init() {
  d3.csv("EMP_AVG_FINAL.csv").then(function (data1) {
    globalData1 = data1;

    d3.csv("dataset2_job_category.csv").then(function (data2) {
      globalData2 = data2;
      createLineChart(globalData1);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.menu-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
          //console.log(`You clicked on ${this.textContent}`);
          const continent = this.textContent;
          console.log(`You clicked on ${continent}`);
          if(continent == "Africa") return showCountryButtons(0);
          else if(continent == "Asia") return showCountryButtons(1);
          else if(continent == "Europe") return showCountryButtons(2);
          else if(continent == "North America") return showCountryButtons(3);
          else if(continent == "Oceania") return showCountryButtons(4);
          else if(continent == "South America") return showCountryButtons(5);
          //showCountryButtons(continent);
      });
  });
});

// Function to display country buttons based on the selected continent
function showCountryButtons(continent_id) {
  const countryContainer = document.getElementById('country-container');
  countryContainer.innerHTML = ''; // Clear previous country buttons
  let countries = [];
  let continentName = "";

  //console.log(continent_id);
   
  //console.log(continents.Africa);

  if(continent_id == 0){ 
    countries = continents.Africa;
    continentName = "Africa";
  } else if(continent_id == 1){   
    countries = continents.Asia;
    continentName = "Asia";
  } else if(continent_id == 2){  
    countries = continents.Europe;
    continentName = "Europe";
  } else if(continent_id == 3){   
    countries = continents.NorthAmerica;
    continentName = "North America";
  } else if(continent_id == 4){   
    countries = continents.Oceania;
    continentName = "Oceania";
  } else if(continent_id == 5){   
    countries = continents.SouthAmerica;
    continentName = "South America";
  }

  //console.log(countries);

  countries.forEach(country => {
    const countryButton = document.createElement('button');
    countryButton.className = 'country-btn';
    countryButton.textContent = country.name; // Ensure you are using country.name to display the name
    /*countryButton.addEventListener('click', function() {
        console.log(`You clicked on ${country.code}`); // Use country.name here as well
        // Handle country button click
    });*/

    countryButton.addEventListener('click', function() {
      const clickedItem = { continent: continentName, country: country.code };
      
      // Check if the clickedItem already exists in the list
      if (!clickedList.some(item => item.continent === clickedItem.continent && item.country === clickedItem.country)) {
        clickedList.push(clickedItem); // Add if not in the list
        console.log(`Added: ${continentName} - ${country.code}`);
        updateDashboard();
      } else {
        console.log(`${continentName} - ${country.code} is already in the list`);
      }
      //console.log(clickedList); // Debugging: Print the current list
    });
    countryContainer.appendChild(countryButton);
  });

  // Show the country container (optional)
  countryContainer.style.display = 'block';
}

// Create visual idioms

function createBarChart(data) {
  const svgWidth = window.innerWidth / 2;
  const svgHeight = 350;
  const margin = 70;
  const xScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin, svgWidth - margin]);
  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.oscar_year))
    .range([0, svgHeight - margin])
    .padding(0.3);
  const colorScale = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d.budget), d3.max(data, (d) => d.budget)])
    .range([0, 1]);
  d3.select(".BarChart")
    .append("h3")
    .style("margin-left", `${margin}px`)
    .text("Rating for each oscar year");
  const svg = d3
    .select(".BarChart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
  svg
    .selectAll("rect")
    .data(data, (d) => d.title)
    .enter()
    .append("rect")
    .attr("class", "dataItem")
    .attr("x", margin)
    .attr("y", (d) => yScale(d.oscar_year))
    .attr("width", (d) => xScale(d.rating) - margin)
    .attr("height", yScale.bandwidth())
    .style("fill", (d) => d3.interpolateBlues(colorScale(d.budget)))
    .style("stroke", "black")
    .style("stroke-width", 1)
    .on("mouseover", mouseOverFunction)
    .on("mouseleave", mouseLeaveFunction)
    .append("title")
    .text((d) => d.title);
  svg
    .append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(0,${svgHeight - margin})`)
    .call(
      d3
        .axisBottom(xScale)
        .tickValues(d3.range(0, 11, 1))
        .tickFormat(d3.format("d"))
    );
  svg
    .append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin},0)`)
    .call(
      d3
        .axisLeft(yScale)
        .tickValues(data.map((d) => d.oscar_year))
        .tickSizeOuter(0)
    );
  svg
    .append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - margin / 3)
    .attr("text-anchor", "middle")
    .text("Rating");
  svg
    .append("text")
    .attr("x", -svgHeight / 2 + margin / 2)
    .attr("y", margin / 3)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Year");
  svg
    .append("defs")
    .append("linearGradient")
    .attr("id", "barChartGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%")
    .append("stop")
    .attr("offset", "0%")
    .attr(
      "stop-color",
      d3.interpolateBlues(colorScale(d3.min(data, (d) => d.budget)))
    );

  svg
    .select("defs")
    .select("linearGradient")
    .append("stop")
    .attr("offset", "100%")
    .attr(
      "stop-color",
      d3.interpolateBlues(colorScale(d3.max(data, (d) => d.budget)))
    );

  svg
    .append("rect")
    .attr("x", svgWidth * 0.85)
    .attr("y", svgHeight * 0.1)
    .attr("width", 20)
    .attr("height", 70)
    .style("fill", "url(#barChartGradient)");

  const label = svg.append("g").attr("class", "label");

  label
    .append("text")
    .attr("x", svgWidth * 0.85)
    .attr("y", svgHeight * 0.1 - 20)
    .text("Budget");

  label
    .append("text")
    .attr("class", "labelMin")
    .attr("x", svgWidth * 0.85 + 25)
    .attr("y", svgHeight * 0.1 + 10)
    .style("font-size", "12px")
    .text(d3.min(data, (d) => d.budget / 1000000) + "M");

  label
    .append("text")
    .attr("class", "labelMax")
    .attr("x", svgWidth * 0.85 + 25)
    .attr("y", svgHeight * 0.1 + 70)
    .style("font-size", "12px")
    .text(d3.max(data, (d) => d.budget / 1000000) + "M");
}

function createScatterPlot(data) {
  const svgWidth = window.innerWidth / 2;
  const svgHeight = 350;
  const margin = 70;
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.budget)])
    .range([margin, svgWidth - margin]);
  const yScale = d3
    .scaleLinear()
    .domain([10, 0])
    .range([margin * 0.09, svgHeight - margin]);
  d3.select(".ScatterPlot")
    .append("h3")
    .style("margin-left", `${margin}px`)
    .text("Correlation between budget and rating");
  const svg = d3
    .select(".ScatterPlot")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
  svg
    .selectAll("circle")
    .data(data, (d) => d.title)
    .enter()
    .append("circle")
    .attr("class", "dataItem")
    .attr("r", 10)
    .attr("cx", (d) => xScale(d.budget))
    .attr("cy", (d) => yScale(d.rating))
    .style("fill", "steelblue")
    .style("stroke", "black")
    .style("stroke-width", 1)
    .on("mouseover", mouseOverFunction)
    .on("mouseleave", mouseLeaveFunction)
    .append("title")
    .text((d) => d.title);
  svg
    .append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(0,${svgHeight - margin})`)
    .call(d3.axisBottom(xScale).tickSizeOuter(0).tickFormat(d3.format(".2s")));
  svg
    .append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin},0)`)
    .call(d3.axisLeft(yScale));
  svg
    .append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - margin / 3)
    .attr("text-anchor", "middle")
    .text("Budget");
  svg
    .append("text")
    .attr("x", -svgHeight / 2 + margin / 2)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Rating");
}
function createLineChart(data) {
  // Set the dimensions of the SVG container
  const svgWidth = 815;
  const svgHeight = 225;
  const margin = 60; 

  // Create an x-scale using a point scale for the years
  const xScale = d3
    .scalePoint()
    .domain(data.map((d) => d.year).reverse().sort((a, b) => a - b)) 
    .range([margin*1.5, svgWidth - margin]);
    
  // Create a y-scale using a linear scale for the employment rate
  const yScale = d3
    .scaleLinear()
    .domain([0, 100].reverse()) 
    .range([margin * 0.09, svgHeight - margin]); 

  // Clear the SVG before appending new elements
  d3.select(".line-chart").select("svg").remove();
  
  // Create an SVG element to hold the chart
  const svg = d3
    .select(".line-chart") 
    .append("svg") 
    .attr("width", svgWidth) 
    .attr("height", svgHeight);

  svg.append("text")
    .attr("x", svgWidth / 2) // Center the title horizontally
    .attr("y", margin - 40) // Position it above the chart
    .attr("text-anchor", "middle") // Center the text alignment
    .style("font-size", "16px") // Optional: Adjust font size
    .style("font-weight", "bold") // Optional: Make it bold
    .text("TODO");

  // Create a line generator function
  const line = d3
    .line()
    .x((d) => xScale(d.year)) 
    .y((d) => yScale(d.average_employ_per_country_per_year)); 

  // Append the line path to the SVG
  /*svg
    .append("path")
    .datum(data) 
    .attr("class", "line")
    .attr("d", line) 
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
  
  svg
    .append("path")
    .datum(data, (d) => d.country)// Filter to only include USA data
    .attr("class", "line")
    .attr("d", line) 
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
  */

  // (Optional) Commented out code for adding circles to the data points
  
  /*svg
    .selectAll("circle")
    .data(data.filter(d => d.country === "USA")) // Filter to only include USA values
    .enter() // Handle entering data points
    .append("circle") // Append a circle for each data point
    .attr("class", "dataItem") // Class for styling
    .attr("r", 5) // Radius of the circles
    .attr("cx", (d) => xScale(d.year)) // Set x position based on year
    .attr("cy", (d) => yScale(d.average_employ_per_country_per_year)) // Set y position based on employment ratio
    .style("fill", "steelblue") // Circle fill color
    .style("stroke", "black") // Circle border color
    .style("stroke-width", 1) // Circle border thickness
    .on("mouseover", mouseOverFunction) // Function for mouseover event
    .on("mouseleave", mouseLeaveFunction) // Function for mouseleave event
    .append("title") // Tooltip on hover
    .text((d) => d.country); // Show country name
  
  svg
    .selectAll("circle")
    .data(data, (d) => d.country) // Bind data for circles
    .enter() // Handle entering data points
    .append("circle") // Append a circle for each data point
    .attr("class", "dataItem") // Class for styling
    .attr("r", 5) // Radius of the circles
    .attr("cx", (d) => xScale(d.year)) // Set x position based on year
    .attr("cy", (d) => yScale(d.average_employ_per_country_per_year)) // Set y position based on employment ratio
    .style("fill", "steelblue") // Circle fill color
    .style("stroke", "black") // Circle border color
    .style("stroke-width", 1) // Circle border thickness
    .on("mouseover", mouseOverFunction) // Function for mouseover event
    .on("mouseleave", mouseLeaveFunction) // Function for mouseleave event
    .append("title") // Tooltip on hover
    .text((d) => d.country); // Show country name
  */

  // Append x-axis to the SVG
  svg
    .append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(0,${svgHeight - margin})`) 
    .call(d3.axisBottom(xScale));

  // Append y-axis to the SVG
  svg
    .append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin*1.5},0)`) 
    .call(d3.axisLeft(yScale).tickSizeOuter(0).tickValues(d3.range(0, 101, 20)).tickFormat(d3.format(".2s"))); 

  // Append x-axis label
  svg
    .append("text")
    .attr("x", svgWidth / 2) // Center horizontally
    .attr("y", svgHeight - margin / 3) 
    .attr("text-anchor", "middle") 
    .text("Year"); 

  // Append y-axis label
  svg
    .append("text")
    .attr("x", -svgHeight / 2 + margin / 2) // Position vertically and center
    .attr("y", margin*1) 
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)") 
    .text("Employment Rate"); 
}

// Update visual idioms

function updateDashboard(button) {
  /*d3.selectAll("button").attr("disabled", true);
  let newData;
  switch (button) {
    case "old":
      newData = globalData.slice(Math.ceil(globalData.length / 2));
      break;
    case "new":
      newData = globalData.slice(0, Math.ceil(globalData.length / 2));
      break;
    case "all":
      newData = globalData;
      break;

    default:
      break;
  }*/
  //updateBarChart(newData);
  //updateScatterPlot(newData);
  updateLineChart(globalData1 ,clickedList);
}

function updateBarChart(data) {
  const svgWidth = window.innerWidth / 2;
  const svgHeight = 350;
  const margin = 70;
  const xScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([margin, svgWidth - margin]);
  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.oscar_year))
    .range([0, svgHeight - margin])
    .padding(0.3);
  const colorScale = d3
    .scaleLinear()
    .domain([d3.min(data, (d) => d.budget), d3.max(data, (d) => d.budget)])
    .range([0, 1]);
  const svg = d3.select(".BarChart").select("svg");
  svg
    .selectAll("rect.dataItem")
    .data(data, (d) => d.title)
    .exit()
    .transition()
    .duration(1000)
    .style("opacity", 0)
    .remove()
    .end()
    .then(() => {
      svg
        .selectAll("rect.dataItem")
        .data(data, (d) => d.title)
        .transition()
        .duration(1000)
        .attr("x", margin)
        .attr("y", (d) => yScale(d.oscar_year))
        .attr("width", (d) => xScale(d.rating) - margin)
        .attr("height", yScale.bandwidth())
        .end()
        .then(() => {
          const allRect = svg
            .selectAll("rect.dataItem")
            .data(data, (d) => d.title)
            .enter()
            .append("rect")
            .attr("class", "dataItem")
            .attr("x", margin)
            .attr("y", (d) => yScale(d.oscar_year))
            .attr("width", (d) => xScale(d.rating) - margin)
            .attr("height", yScale.bandwidth())
            .style("fill", (d) => d3.interpolateBlues(colorScale(d.budget)))
            .style("stroke", "black")
            .style("stroke-width", 1)
            .style("opacity", 0)
            .on("mouseover", mouseOverFunction)
            .on("mouseleave", mouseLeaveFunction);
          allRect
            .transition()
            .duration(1000)
            .style("opacity", 1)
            .end()
            .then(() => {
              d3.selectAll("button").attr("disabled", null);
            });
          allRect.append("title").text((d) => d.title);
        });
    });
  svg
    .select("g.yAxis")
    .attr("transform", `translate(${margin},0)`)
    .transition()
    .duration(1000)
    .call(
      d3
        .axisLeft(yScale)
        .tickValues(data.map((d) => d.oscar_year))
        .tickSizeOuter(0)
    );
}

function updateScatterPlot(data) {
  const svgWidth = window.innerWidth / 2;
  const svgHeight = 350;
  const margin = 70;
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.budget)])
    .range([margin, svgWidth - margin]);
  const yScale = d3
    .scaleLinear()
    .domain([10, 0])
    .range([margin * 0.09, svgHeight - margin]);
  const svg = d3
    .select(".ScatterPlot")
    .select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
  svg
    .selectAll("circle.dataItem")
    .data(data, (d) => d.title)
    .exit()
    .transition()
    .duration(1000)
    .style("opacity", 0)
    .remove()
    .end()
    .then(() => {
      svg
        .selectAll("circle.dataItem")
        .data(data, (d) => d.title)
        .transition()
        .duration(1000)
        .attr("r", 10)
        .attr("cx", (d) => xScale(d.budget))
        .attr("cy", (d) => yScale(d.rating))
        .end()
        .then(() => {
          const allCircle = svg
            .selectAll("circle.dataItem")
            .data(data, (d) => d.title)
            .enter()
            .append("circle")
            .attr("class", "dataItem")
            .attr("r", 10)
            .attr("cx", (d) => xScale(d.budget))
            .attr("cy", (d) => yScale(d.rating))
            .style("fill", "steelblue")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .style("opacity", 0)
            .on("mouseover", mouseOverFunction)
            .on("mouseleave", mouseLeaveFunction);
          allCircle.transition().duration(1000).style("opacity", 1);
          allCircle.append("title").text((d) => d.title);
        });
    });

  svg
    .select("g.xAxis")
    .attr("transform", `translate(0,${svgHeight - margin})`)
    .transition()
    .duration(1000)
    .call(d3.axisBottom(xScale).tickSizeOuter(0).tickFormat(d3.format(".2s")));
}

/*
function updateLineChart(data) {
  const svgWidth = window.innerWidth;
  const svgHeight = 350;
  const margin = 70;

  const xScale = d3
    .scalePoint()
    .domain(data.map((d) => d.oscar_year).reverse())
    .range([margin, svgWidth - margin]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.budget)].reverse())
    .range([margin * 0.09, svgHeight - margin]);
  const svg = d3
    .select(".LineChart")
    .select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
  const line = d3
    .line()
    .x((d) => xScale(d.oscar_year))
    .y((d) => yScale(d.budget));
  svg
    .selectAll("circle.dataItem")
    .data(data, (d) => d.title)
    .exit()
    .remove();
  svg
    .select("path")
    .datum(data)
    .attr("class", "line")
    .transition()
    .duration(1000)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
  svg
    .selectAll("circle.dataItem")
    .data(data, (d) => d.title)
    .transition()
    .duration(1000)
    .attr("r", 5)
    .attr("cx", (d) => xScale(d.oscar_year))
    .attr("cy", (d) => yScale(d.budget))
    .end()
    .then(() => {
      const allCircle = svg
        .selectAll("circle.dataItem")
        .data(data, (d) => d.title)
        .enter()
        .append("circle")
        .attr("class", "dataItem")
        .attr("r", 5)
        .attr("cx", (d) => xScale(d.oscar_year))
        .attr("cy", (d) => yScale(d.budget))
        .style("fill", "steelblue")
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity", 0)
        .on("mouseover", mouseOverFunction)
        .on("mouseleave", mouseLeaveFunction);
      allCircle.transition().duration(1000).style("opacity", 1);

      allCircle.append("title").text((d) => d.title);
    });

  svg
    .select("g.xAxis")
    .transition()
    .duration(1000)
    .attr("transform", `translate(0,${svgHeight - margin})`)
    .call(d3.axisBottom(xScale));
  svg
    .select("g.yAxis")
    .transition()
    .duration(1000)
    .attr("transform", `translate(${margin},0)`)
    .call(d3.axisLeft(yScale).tickSizeOuter(0).tickFormat(d3.format(".2s")));
}
*/

function updateLineChart(data, countries_clicked) {
  const svgWidth = 815;
  const svgHeight = 225;
  const margin = 60; 

  console.log("HERE");
  console.log("CLICKED");
  console.log(clickedList);
  console.log("COUNTRIES CLICKED");
  console.log(countries_clicked);

  const xScale = d3
    .scalePoint()
    .domain(data.map((d) => d.year).reverse().sort((a, b) => a - b)) 
    .range([margin*1.5, svgWidth - margin]);
    
  // Create a y-scale using a linear scale for the employment rate
  const yScale = d3
    .scaleLinear()
    .domain([0, 100].reverse()) 
    .range([margin * 0.09, svgHeight - margin]); 

  const svg = d3
    .select(".line-chart") 
    .select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  const line = d3
    .line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.average_employ_per_country_per_year));

  svg
    .selectAll("circle.dataItem")
    .data(data, (d) => d.country)
    .exit()
    .remove();

  // Filter data based on `countries_clicked`
  const filteredData = data.filter(d =>
    countries_clicked.some(clicked => clicked.country === d.country)
  );  

  console.log("FILTERED DATA");
  console.log(filteredData);

  // Update the line for the full data
  svg
    .append("path")
    .datum(filteredData, (d)=> d.country)
    .attr("class", "line")
    .transition()
    .duration(1000)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
  

  svg
    .selectAll("circle.dataItem")
    // Filter data to only include items where the country is in the clickedList
    .data(filteredData, (d)=> d.country)
    .transition()
    .duration(1000)
    .attr("r", 5)
    .attr("cx", (d) => xScale(d.year))
    .attr("cy", (d) => yScale(d.average_employ_per_country_per_year))
    .end()
    .then(() => {
      const allCircle = svg
        .selectAll("circle.dataItem")
        // Bind the filtered data (only clickedList countries) again for entering circles
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("class", "dataItem")
        .attr("r", 5)
        .attr("cx", (d) => xScale(d.year))
        .attr("cy", (d) => yScale(d.average_employ_per_country_per_year))
        .style("fill", "steelblue")
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity", 0) // Initially set opacity to 0
        .on("mouseover", mouseOverFunction)
        .on("mouseleave", mouseLeaveFunction);
  
      // Apply a transition to the circles to make them fade in
      allCircle.transition().duration(1000).style("opacity", 1);
  
      // Append a tooltip with the country name
      allCircle.append("title").text((d) => d.country);
    });
  

  // Update the axes
  svg
    .select("g.xAxis")
    .transition()
    .duration(1000)
    .attr("transform", `translate(0,${svgHeight - margin})`)
    .call(d3.axisBottom(xScale));

  svg
    .append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin*1.5},0)`) 
    .call(d3.axisLeft(yScale).tickSizeOuter(0).tickValues(d3.range(0, 101, 20)).tickFormat(d3.format(".2s"))); 
}

// Triggered events

function mouseOverFunction(event, d) {
  d3.selectAll("circle.dataItem")
    .filter(function (elem) {
      return d.title == elem.title;
    })
    .style("fill", "red")
    .style("stroke-width", 3);
  d3.selectAll("rect.dataItem")
    .filter(function (elem) {
      elem["origColor"] = d3.select(this).style("fill");
      return d.title == elem.title;
    })
    .style("fill", "red")
    .style("stroke-width", 3);
}

function mouseLeaveFunction(event, d) {
  d3.selectAll("circle.dataItem")
    .style("fill", "steelblue")
    .style("stroke-width", 1);
  d3.selectAll("rect.dataItem")
    .style("fill", (d) => d.origColor)
    .style("stroke-width", 1);
}
