// Initialization of the dashboard
const continents = {
  Africa: [
      { name: "Nigeria", code: "NG" },
      { name: "Ethiopia", code: "ET" },
      { name: "Egypt", code: "EG" },
      { name: "Democratic Republic of the Congo", code: "CD" },
      { name: "Tanzania", code: "TZ" },
      { name: "South Africa", code: "ZA" },
      { name: "Kenya", code: "KE" },
      { name: "Uganda", code: "UG" },
      { name: "Algeria", code: "DZ" },
      { name: "Sudan", code: "SD" },
      { name: "Morocco", code: "MA" },
      { name: "Angola", code: "AO" },
      { name: "Ghana", code: "GH" },
      { name: "Mozambique", code: "MZ" },
      { name: "Madagascar", code: "MG" },
      { name: "Cameroon", code: "CM" },
      { name: "Côte d'Ivoire", code: "CI" },
      { name: "Niger", code: "NE" },
      { name: "Burkina Faso", code: "BF" },
      { name: "Mali", code: "ML" },
      { name: "South Sudan", code: "SS" },
      { name: "Togo", code: "TG" },
      { name: "Sierra Leone", code: "SL" },
      { name: "Libya", code: "LY" },
      { name: "Congo", code: "CG" },
      { name: "Central African Republic", code: "CF" },
      { name: "Liberia", code: "LR" },
      { name: "Mauritania", code: "MR" },
      { name: "Eritrea", code: "ER" },
      { name: "Namibia", code: "NA" },
      { name: "Gambia", code: "GM" },
      { name: "Botswana", code: "BW" },
      { name: "Gabon", code: "GA" },
      { name: "Lesotho", code: "LS" },
      { name: "Eswatini", code: "SZ" },
      { name: "Djibouti", code: "DJ" },
      { name: "Equatorial Guinea", code: "GQ" },
      { name: "Sao Tome and Principe", code: "ST" },
      { name: "Cape Verde", code: "CV" },
      { name: "Seychelles", code: "SC" },
      { name: "Chad", code: "TD" },
      { name: "Rwanda", code: "RW" },
      { name: "Burundi", code: "BI" },
      { name: "Zimbabwe", code: "ZW" },
      { name: "Zambia", code: "ZM" },
      { name: "Tanzania", code: "TZ" },
      // Add more countries as needed
  ],
  Asia: [
      { name: "China", code: "CN" },
      { name: "India", code: "IN" },
      { name: "Indonesia", code: "ID" },
      { name: "Pakistan", code: "PK" },
      { name: "Bangladesh", code: "BD" },
      { name: "Russia", code: "RU" },
      { name: "Japan", code: "JP" },
      { name: "Philippines", code: "PH" },
      { name: "Vietnam", code: "VN" },
      { name: "Turkey", code: "TR" },
      { name: "Iran", code: "IR" },
      { name: "Thailand", code: "TH" },
      { name: "Myanmar", code: "MM" },
      { name: "South Korea", code: "KR" },
      { name: "Iraq", code: "IQ" },
      { name: "Afghanistan", code: "AF" },
      { name: "Saudi Arabia", code: "SA" },
      { name: "Uzbekistan", code: "UZ" },
      { name: "Malaysia", code: "MY" },
      { name: "Nepal", code: "NP" },
      { name: "Kazakhstan", code: "KZ" },
      { name: "Yemen", code: "YE" },
      { name: "Syria", code: "SY" },
      { name: "Sri Lanka", code: "LK" },
      { name: "Taiwan", code: "TW" },
      { name: "Jordan", code: "JO" },
      { name: "Azerbaijan", code: "AZ" },
      { name: "United Arab Emirates", code: "AE" },
      { name: "Tajikistan", code: "TJ" },
      { name: "Kyrgyzstan", code: "KG" },
      { name: "Lebanon", code: "LB" },
      { name: "Oman", code: "OM" },
      { name: "Armenia", code: "AM" },
      { name: "Qatar", code: "QA" },
      { name: "Bahrain", code: "BH" },
      { name: "Maldives", code: "MV" },
      // Add more countries as needed
  ],
  Europe: [
      { name: "Germany", code: "DE" },
      { name: "United Kingdom", code: "GB" },
      { name: "France", code: "FR" },
      { name: "Italy", code: "IT" },
      { name: "Spain", code: "ES" },
      { name: "Ukraine", code: "UA" },
      { name: "Poland", code: "PL" },
      { name: "Romania", code: "RO" },
      { name: "Netherlands", code: "NL" },
      { name: "Belgium", code: "BE" },
      { name: "Greece", code: "GR" },
      { name: "Czech Republic", code: "CZ" },
      { name: "Portugal", code: "PT" },
      { name: "Sweden", code: "SE" },
      { name: "Hungary", code: "HU" },
      { name: "Belarus", code: "BY" },
      { name: "Austria", code: "AT" },
      { name: "Switzerland", code: "CH" },
      { name: "Bulgaria", code: "BG" },
      { name: "Denmark", code: "DK" },
      { name: "Finland", code: "FI" },
      { name: "Slovakia", code: "SK" },
      { name: "Norway", code: "NO" },
      { name: "Ireland", code: "IE" },
      { name: "Croatia", code: "HR" },
      { name: "Bosnia and Herzegovina", code: "BA" },
      { name: "Lithuania", code: "LT" },
      { name: "Slovenia", code: "SI" },
      { name: "North Macedonia", code: "MK" },
      { name: "Estonia", code: "EE" },
      { name: "Latvia", code: "LV" },
      { name: "Malta", code: "MT" },
      { name: "Iceland", code: "IS" },
      { name: "Kosovo", code: "XK" },
      // Add more countries as needed
  ],
  NorthAmerica: [
      { name: "United States", code: "US" },
      { name: "Mexico", code: "MX" },
      { name: "Canada", code: "CA" },
      { name: "Guatemala", code: "GT" },
      { name: "Cuba", code: "CU" },
      { name: "Honduras", code: "HN" },
      { name: "Costa Rica", code: "CR" },
      { name: "Panama", code: "PA" },
      { name: "Jamaica", code: "JM" },
      { name: "Dominican Republic", code: "DO" },
      { name: "El Salvador", code: "SV" },
      { name: "Nicaragua", code: "NI" },
      { name: "Belize", code: "BZ" },
      { name: "Barbados", code: "BB" },
      { name: "Saint Lucia", code: "LC" },
      { name: "Saint Vincent and the Grenadines", code: "VC" },
      { name: "Antigua and Barbuda", code: "AG" },
      { name: "Bahamas", code: "BS" },
      { name: "Dominica", code: "DM" },
      { name: "Grenada", code: "GD" },
      { name: "Trinidad and Tobago", code: "TT" },
      // Add more countries as needed
  ],
  Oceania: [
      { name: "Australia", code: "AU" },
      { name: "New Zealand", code: "NZ" },
      { name: "Papua New Guinea", code: "PG" },
      { name: "Fiji", code: "FJ" },
      { name: "Solomon Islands", code: "SB" },
      { name: "Vanuatu", code: "VU" },
      { name: "Samoa", code: "WS" },
      { name: "Kiribati", code: "KI" },
      { name: "Micronesia", code: "FM" },
      { name: "Tonga", code: "TO" },
      { name: "Tuvalu", code: "TV" },
      { name: "Marshall Islands", code: "MH" },
      { name: "Palau", code: "PW" },
      { name: "Nauru", code: "NR" },
      { name: "New Caledonia", code: "NC" },
      { name: "French Polynesia", code: "PF" },
      { name: "Wallis and Futuna", code: "WF" },
      { name: "American Samoa", code: "AS" },
      { name: "Cook Islands", code: "CK" },
      { name: "Niue", code: "NU" },
      // Add more countries as needed
  ],
  SouthAmerica: [
      { name: "Brazil", code: "BR" },
      { name: "Argentina", code: "AR" },
      { name: "Colombia", code: "CO" },
      { name: "Chile", code: "CL" },
      { name: "Peru", code: "PE" },
      { name: "Venezuela", code: "VE" },
      { name: "Ecuador", code: "EC" },
      { name: "Bolivia", code: "BO" },
      { name: "Paraguay", code: "PY" },
      { name: "Uruguay", code: "UY" },
      { name: "Suriname", code: "SR" },
      { name: "Guyana", code: "GY" },
      { name: "French Guiana", code: "GF" },
      // Add more countries as needed
  ],
};

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
          console.log(`You clicked on ${this.textContent}`);
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

  console.log(continent_id);
   
  console.log(continents.Africa);

  if(continent_id == 0){ countries = continents.Africa;}
  else if(continent_id == 1){   countries = continents.Asia;}
  else if(continent_id == 2){  countries = continents.Europe;}
  else if(continent_id == 3){   countries = continents.NorthAmerica;}
  else if(continent_id == 4){   countries = continents.Oceania;}
  else if(continent_id == 5){   countries = continents.SouthAmerica;}

  console.log(countries);

  countries.forEach(country => {
    const countryButton = document.createElement('button');
    countryButton.className = 'country-btn';
    countryButton.textContent = country.name; // Ensure you are using country.name to display the name
    countryButton.addEventListener('click', function() {
        console.log(`You clicked on ${country.name}`); // Use country.name here as well
        // Handle country button click
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

  // Extract years from the data and convert them to numbers
  /*const years = data
    .map((d) => +d.year) 
    .sort((a, b) => a - b);*/
    
  const years = [...new Set(data.map((d) => +d.year))].sort((a, b) => a - b);


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

  console.log(data)
  // Append the line path to the SVG
  /*svg
    .append("path")
    .datum(data) 
    .attr("class", "line")
    .attr("d", line) 
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
  */
  svg
    .append("path")
    .datum(data, (d) => d.country)// Filter to only include USA data
    .attr("class", "line")
    .attr("d", line) 
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);


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
  */
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
  d3.selectAll("button").attr("disabled", true);
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
  }
  updateBarChart(newData);
  updateScatterPlot(newData);
  updateLineChart(newData);
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

// Triggered events

function mouseOverFunction(event, d) {
  d3.selectAll("circle.dataItem")
    .filter(function (elem) {
      console.log(d);
      console.log(d.xScale);
      console.log(d.yScale);
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
