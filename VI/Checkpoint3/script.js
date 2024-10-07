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
    { name: "Mauritius", code: "MUS" },
    { name: "Namibia", code: "NAM" },
    { name: "Niger", code: "NER" },
    { name: "Nigeria", code: "NGA" },
    { name: "Rwanda", code: "RWA" },
    { name: "Senegal", code: "SEN" },
    { name: "South Africa", code: "ZAF" },
    { name: "Sudan", code: "SDN" },
    { name: "Tanzania, United Republic of", code: "TZA" },
    { name: "Togo", code: "TGO" },
    { name: "Tunisia", code: "TUN" },
    { name: "Uganda", code: "UGA" },
    { name: "Zambia", code: "ZMB" },
    { name: "Zimbabwe", code: "ZWE" },
  ],
  Asia: [
    { name: "Afghanistan", code: "AFG" },
    { name: "Armenia", code: "ARM" },
    { name: "Bangladesh", code: "BGD" },
    { name: "Bhutan", code: "BTN" },
    { name: "Brunei Darussalam", code: "BRN" },
    { name: "Cambodia", code: "KHM" },
    { name: "Cyprus", code: "CYP" },
    { name: "Georgia", code: "GEO" },
    { name: "India", code: "IND" },
    { name: "Indonesia", code: "IDN" },
    { name: "Jordan", code: "JOR" },
    { name: "Lao People's Democratic Republic", code: "LAO" },
    { name: "Lebanon", code: "LBN" },
    { name: "Maldives", code: "MDV" },
    { name: "Mongolia", code: "MNG" },
    { name: "Myanmar", code: "MMR" },
    { name: "Nepal", code: "NPL" },
    { name: "Pakistan", code: "PAK" },
    { name: "Philippines", code: "PHL" },
    { name: "Sri Lanka", code: "LKA" },
    { name: "Tajikistan", code: "TJK" },
    { name: "Thailand", code: "THA" },
    { name: "Timor-Leste", code: "TLS" },
    { name: "Turkey", code: "TUR" },
    { name: "Viet Nam", code: "VNM" },
  ],
  Europe: [
    { name: "Albania", code: "ALB" },
    { name: "Austria", code: "AUT" },
    { name: "Belgium", code: "BEL" },
    { name: "Bosnia and Herzegovina", code: "BIH" },
    { name: "Bulgaria", code: "BGR" },
    { name: "Croatia", code: "HRV" },
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
    { name: "Latvia", code: "LVA" },
    { name: "Lithuania", code: "LTU" },
    { name: "Luxembourg", code: "LUX" },
    { name: "Malta", code: "MLT" },
    { name: "Moldova, Republic of", code: "MDA" },
    { name: "Netherlands, Kingdom of the", code: "NLD" },
    { name: "Norway", code: "NOR" },
    { name: "Poland", code: "POL" },
    { name: "Portugal", code: "PRT" },
    { name: "Romania", code: "ROU" },
    { name: "Serbia", code: "SRB" },
    { name: "Slovakia", code: "SVK" },
    { name: "Slovenia", code: "SVN" },
    { name: "Spain", code: "ESP" },
    { name: "Sweden", code: "SWE" },
    { name: "Switzerland", code: "CHE" },
    { name: "United Kingdom of Great Britain and Northern Ireland", code: "GBR" },
  ],
  NorthAmerica: [
    { name: "Bahamas", code: "BHS" },
    { name: "Barbados", code: "BRB" },
    { name: "Belize", code: "BLZ" },
    { name: "Canada", code: "CAN" },
    { name: "Costa Rica", code: "CRI" },
    { name: "Dominican Republic", code: "DOM" },
    { name: "El Salvador", code: "SLV" },
    { name: "Guatemala", code: "GTM" },
    { name: "Honduras", code: "HND" },
    { name: "Jamaica", code: "JAM" },
    { name: "Mexico", code: "MEX" },
    { name: "Nicaragua", code: "NIC" },
    { name: "Panama", code: "PAN" },
    { name: "Trinidad and Tobago", code: "TTO" },
    { name: "United States of America", code: "USA" }
  ],
  Oceania: [
    { name: "Australia", code: "AUS" },
    { name: "Fiji", code: "FJI" },
    { name: "Kiribati", code: "KIR" },
    { name: "Marshall Islands", code: "MHL" },
    { name: "Samoa", code: "WSM" },
    { name: "Solomon Islands", code: "SLB" },
    { name: "Tonga", code: "TON" },
    { name: "Vanuatu", code: "VUT" },
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
  ]
};
const continentColors = {
  Africa: 'rgba(207, 175, 141, 0.8)', 
  Asia: 'rgba(203, 191, 21, 0.707)' ,
  Europe: 'rgba(163, 200, 224, 0.8)', 
  NorthAmerica: 'rgba(215, 76, 46, 0.8)', 
  SouthAmerica: 'rgba(75, 143, 60, 0.8)',
  Oceania: 'rgba(165, 125, 198, 0.8)'
};

const countryNameMapping = Object.values(continents).flat().reduce((acc, { name, code }) => {
  acc[code] = name;
  return acc;
}, {});

let clickedList = [];
var globalData1, globalData2, globalData3;
const buttons = document.querySelectorAll('.menu-btn');

function init() {
  d3.csv("datasets/dataset1_salary_employment_ratio.csv").then(function (data1) {
    globalData1 = data1.map(d => {
      d.year = +d.year; 
      return d;
    }).sort((a, b) => a.year - b.year); // Sort by year in ascending order

    d3.csv("datasets/dataset2_job_category.csv").then(function (data2) {
       // Convert 'year' to number and sort the data by 'year'
       globalData2 = data2.map(d => {
        d.year = +d.year; // Convert year to a number
        return d;
      }).sort((a, b) => a.year - b.year); // Sort by year in ascending order
    d3.csv("datasets/average_ratio_employ_by_continent.csv").then(function(data3){
      globalData3 = data3.map(d => { 
        d.year = +d.year;
        return d;
      }).sort((a, b) => a.year - b.year);
    
      createLineChart(globalData1, globalData3);
     });
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

function clearLines() {
  // Clear visualization elements if needed
  d3.selectAll(".line").remove(); // Remove all lines
  d3.selectAll(".dataItem").remove(); // Remove all circles

  // Clear the clickedList
  clickedList = []; // Reset the clickedList to an empty array
  console.log("Clicked list cleared:", clickedList);

  // Reset the background color of all country buttons
  document.querySelectorAll('.country-btn').forEach(button => {
    button.style.backgroundColor = ''; // Reset background color to default
  });
  // Update the dashboard to reflect cleared selections
  updateDashboard();
}
// Attach the event listener for "Clear selection" button
document.addEventListener('DOMContentLoaded', function() {
document.getElementById("clearLines").addEventListener("click", clearLines);
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
    continentName = "NorthAmerica";
  } else if(continent_id == 4){   
    countries = continents.Oceania;
    continentName = "Oceania";
  } else if(continent_id == 5){   
    countries = continents.SouthAmerica;
    continentName = "SouthAmerica";
  }


  //console.log(countries);

  countries.forEach(country => {
    const countryButton = document.createElement('button');
    countryButton.className = 'country-btn';
    countryButton.textContent = country.name; 

    const isSelected = clickedList.some(item => item.continent === continentName && item.country === country.code);
    if (isSelected) {
        countryButton.style.backgroundColor = continentColors[continentName]; // Set selected color if already clicked
    }

    countryButton.addEventListener('click', function() {
      const clickedItem = { continent: continentName, country: country.code };
      const index = clickedList.findIndex(item => item.continent === clickedItem.continent && item.country === clickedItem.country);
      
      if (index === -1) {
        // Country is not in the list, add it
        clickedList.push(clickedItem);
        countryButton.style.backgroundColor = continentColors[continentName];
        console.log(`Added: ${continentName} - ${country.code}`);
      } else {
        // Country is in the list, remove it
        clickedList.splice(index, 1);
        countryButton.style.backgroundColor = ''; // Reset background color or set it to default
        console.log(`Removed: ${continentName} - ${country.code}`);
      }
      
      updateDashboard();
    });
    countryContainer.appendChild(countryButton);
  });

  // Show the country container (optional)
  countryContainer.style.display = 'block';
}

function getContinentByCountry(countryCode) {
  for (const [continent, countries] of Object.entries(continents)) {
      if (countries.some(country => country.code === countryCode)) {
          return continent;
      }
  }
  return null;
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

function createScatterPlot(data,) {
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
function createLineChart(data, data_average) {
  // Set the dimensions of the SVG container
  const svgWidth = 815;
  const svgHeight = 225;
  const margin = 60; 

  const cleanedData = data_average.map(({ [""]: _, continent, year, ratio_employment_to_population }) => ({
    continent,
    year: parseInt(year, 10), // Convert year to a number
    ratio_employment_to_population: parseFloat(ratio_employment_to_population) // Convert ratio to a number
}));

console.log(cleanedData[1]);
// Group by continent
const groupedByContinent = cleanedData.reduce((acc, current) => {
  const { continent } = current;
  if (!acc[continent]) {
      acc[continent] = [];
  }
  acc[continent].push(current);
  return acc;
}, {});

  // Create an x-scale using a point scale for the years
  const xScale = d3
    .scalePoint()
    .domain(cleanedData.map((d) => d.year).reverse().sort((a, b) => a - b)) 
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
    .attr("y", margin - 49) // Position it above the chart
    .attr("text-anchor", "middle") // Center the text alignment
    .style("font-size", "16px") // Optional: Adjust font size
    .style("font-weight", "bold") // Optional: Make it bold
    .text("Women's Employment Rate by Country and Year");

  // Create a line generator function
  const line = d3
    .line()
    .x((d) => xScale(d.year)) 
    .y((d) => yScale(d.ratio_employment_to_population)); 


// Append lines for each continent
const colors = d3.scaleOrdinal(d3.schemeCategory10); // Color scale for different lines

Object.entries(groupedByContinent).forEach(([continent, data]) => {
    svg.append('path')
        .datum(data) // Bind data for this continent
        .attr('fill', 'none') // No fill
        .attr('stroke', colors(continent)) 
        .attr('stroke-width', 2) 
        .attr('d', line) // Generate line
        .on('mouseover', function() {
          d3.select(this).attr('stroke-width', 3); // Increase stroke width on hover
          svg.selectAll('path')
             .filter((_, i, nodes) => nodes[i] !== this) // Select all but the hovered line
             .attr('stroke-width', 1); // Change other lines' stroke width
      })
      .on('mouseout', function() {
          d3.select(this).attr('stroke-width', 2); // Reset stroke width of hovered line
          svg.selectAll('path').attr('stroke-width', 2); // Reset all lines' stroke width
      });        
});


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
  updateLineChart(globalData1 , globalData3, clickedList);
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

function updateLineChart(data, data_average, countries_clicked) {
  const svgWidth = 815;
  const svgHeight = 225;
  const margin = 60;

  const total_data = data.filter(d => d.age_group === 'AGE_10YRBANDS_TOTAL' && d.level_education_standardised == "TOTAL");

  const reducedData = total_data.map(({ country, year, ratio_employment_to_population }) => ({
      country,
      year: Number(year),
      ratio_employment_to_population: Number(ratio_employment_to_population) // Convert to number
  }));



  let final_data = reducedData.filter(d =>
      countries_clicked.some(clicked => clicked.country === d.country)
  );

//   console.log("before_clear", final_data)

  
//   function clearLines() {
//     // d3.selectAll(".line").remove(); // Remove all lines
//     // d3.selectAll(".dataItem").remove(); // Remove all circles
//     final_data = []; // Reset countries_clicked to an empty array
//     console.log("after_clear", final_data)
// }

//   // Attach event listener to the button
// document.getElementById("clearLines").addEventListener("click", function() {
//   clearLines();
//   console.log("You clicked on clear_selection"); // Log when button is clicked
// });

  // Get the full range of years from the dataset
  const allYears = Array.from(new Set(data.map(d => Number(d.year)))).sort((a, b) => a - b);

  // Ensure that the xScale includes all the years (from all countries)
  const xScale = d3
      .scalePoint()
      .domain(allYears) // Use full range of years
      .range([margin * 1.5, svgWidth - margin]);

  const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([svgHeight - margin, margin * 0.09]);

  const svg = d3
      .select(".line-chart")
      .select("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

  svg.selectAll('path').remove(); // This will remove all existing paths  

  // Get unique countries and group data by country
  const uniqueCountries = Array.from(new Set(final_data.map(d => d.country)));

  const dataByCountry = uniqueCountries.map(country => ({
      country,
      data: final_data.filter(d => d.country === country)
  }));

  // Create lines for each country
  dataByCountry.forEach(countryData => {
      const firstCountryCode = countryData.country;
      const continent = getContinentByCountry(firstCountryCode);
      const lineColor = continentColors[continent] || 'grey';

      const line = d3.line()
          .x(d => xScale(d.year))
          .y(d => yScale(d.ratio_employment_to_population));

      svg.append("path")
          .datum(countryData.data)
          .attr("class", "line")
          .attr("fill", "none")
          .attr("stroke", lineColor)
          .attr("stroke-width", 2)
          .attr("d", line);
  });

  // Handle circles
  svg.selectAll("circle.dataItem").remove(); // Clear previous circles


  const allCircles = svg
      .selectAll("circle.dataItem")
      .data(final_data, d => d.country)
      .enter()
      .append("circle")
      .attr("class", "dataItem")
      .attr("r", 3.2)
      .attr("cx", d => xScale(d.year))
      .attr("cy", d => yScale(d.ratio_employment_to_population))
      .style("fill", d => {
          const continent = getContinentByCountry(d.country);
          return continentColors[continent] || 'grey';
      })
      .style("stroke", d => {
          const continent = getContinentByCountry(d.country);
          return continentColors[continent] || 'grey';
      })
      .style("stroke-width", 1)
      .style("opacity", 0) // Start with opacity 0
      .on("mouseover", mouseOverFunction)
      .on("mouseleave", mouseLeaveFunction);

  // Transition to make circles visible
  allCircles.transition().duration(1000).style("opacity", 1);

// Append tooltips
allCircles.append("title")
    .text(d => `${countryNameMapping[d.country] || d.country}\nYear: ${d.year}\nRate: ${d.ratio_employment_to_population.toFixed(2)} %`);


  // Update the x-axis with the full range of years
  svg.append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate(0,${svgHeight - margin})`)
      .call(d3.axisBottom(xScale));

  // Update the y-axis
  svg.append("g")
      .attr("class", "yAxis")
      .attr("transform", `translate(${margin * 1.5},0)`)
      .call(d3.axisLeft(yScale).tickValues(d3.range(0, 101, 20)));
}

function mouseOverFunction(event, d) {
  // Get the country code for the hovered line
  const hoveredCountry = d.country;


  // Highlight circles that correspond to the hovered country
  d3.selectAll("circle.dataItem")
      .filter(function (elem) {
          return elem.country === hoveredCountry; // Match by country
      })
      .style("stroke", "black")
      .style("stroke-width", 1);

}

function mouseLeaveFunction(event, d) {
  const hoveredCountry = d.country; // Get the country of the hovered item

  // Reset circles for the hovered country
  d3.selectAll("circle.dataItem")
      .filter(function (elem) {
          return elem.country === hoveredCountry; // Match by country
      })
      .style("stroke", (elem) => continentColors[getContinentByCountry(elem.country)] || 'grey') // Reset to original color
      .style("stroke-width", 1); // Reset stroke width

}