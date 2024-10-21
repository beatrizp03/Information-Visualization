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
  { name: "China", code: "CHN" },
  { name: "Cyprus", code: "CYP" },
  { name: "Georgia", code: "GEO" },
  { name: "Hong Kong", code: "HKG" },
  { name: "India", code: "IND" },
  { name: "Indonesia", code: "IDN" },
  { name: "Iran, Islamic Republic of", code: "IRN" },
  { name: "Iraq", code: "IRQ" },
  { name: "Israel", code: "ISR" },
  { name: "Jordan", code: "JOR" },
  { name: "Korea, Republic of", code: "KOR" },
  { name: "Lao People's Democratic Republic", code: "LAO" },
  { name: "Lebanon", code: "LBN" },
  { name: "Malaysia", code: "MYS" },
  { name: "Maldives", code: "MDV" },
  { name: "Mongolia", code: "MNG" },
  { name: "Myanmar", code: "MMR" },
  { name: "Nepal", code: "NPL" },
  { name: "Pakistan", code: "PAK" },
  { name: "Palestine, State of", code: "PSE" },
  { name: "Philippines", code: "PHL" },
  { name: "Singapore", code: "SGP" },
  { name: "Sri Lanka", code: "LKA" },
  { name: "Tajikistan", code: "TJK" },
  { name: "Thailand", code: "THA" },
  { name: "Timor-Leste", code: "TLS" },
  { name: "Turkey", code: "TUR" },
  { name: "United Arab Emirates", code: "ARE" },
  { name: "Uzbekistan", code: "UZB" },
  { name: "Viet Nam", code: "VNM" },
  { name: "Yemen", code: "YEM" },
],
  Europe: [
  { name: "Albania", code: "ALB" },
  { name: "Austria", code: "AUT" },
  { name: "Belarus", code: "BLR" },
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
  { name: "Kosovo", code: "KOS" },
  { name: "Latvia", code: "LVA" },
  { name: "Lithuania", code: "LTU" },
  { name: "Luxembourg", code: "LUX" },
  { name: "Malta", code: "MLT" },
  { name: "Moldova, Republic of", code: "MDA" },
  { name: "Montenegro", code: "MNE" },
  { name: "Netherlands, Kingdom of the", code: "NLD" },
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
    { name: "Grenada", code: "GRD" },
    { name: "Honduras", code: "HND" },
    { name: "Jamaica", code: "JAM" },
    { name: "Mexico", code: "MEX" },
    { name: "Montserrat", code: "MSR" },
    { name: "Nicaragua", code: "NIC" },
    { name: "Panama", code: "PAN" },
    { name: "Trinidad and Tobago", code: "TTO" },
    { name: "United States of America", code: "USA" }
  ],
  Oceania: [
  { name: "Australia", code: "AUS" },
  { name: "Cook Islands", code: "COK" },
  { name: "Fiji", code: "FJI" },
  { name: "Kiribati", code: "KIR" },
  { name: "Marshall Islands", code: "MHL" },
  { name: "Micronesia, Federated States of", code: "FSM" },
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
  { name: "Vanuatu", code: "VUT" },
  { name: "Wallis and Futuna", code: "WLF" },
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
    { name: "Saint Lucia", code: "LCA" },
    { name: "Suriname", code: "SUR" },
    { name: "Uruguay", code: "URY" },
  ]
};
const continentColors = {
  Africa: 'rgba(147, 115, 81, 1)', 
  Asia: 'rgba(203, 191, 21, 1)' ,
  Europe: 'rgba(0, 150, 215, 1)', 
  NorthAmerica: 'rgba(215, 76, 46, 1)', 
  SouthAmerica: 'rgba(75, 143, 60, 1)',
  Oceania: 'rgba(165, 125, 198, 1)'
};

const countryNameMapping = Object.values(continents).flat().reduce((acc, { name, code }) => {
  acc[code] = name;
  return acc;
}, {});

let clickedList = [];
const buttons = document.querySelectorAll('.menu-btn');
var continentlist = [];
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
            const continent = this.textContent;
            
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

//#################################### clear selection button ####################################

function clearLines() {
    // Clear visualization elements if needed
    d3.selectAll(".line").remove(); // Remove all lines
    d3.selectAll(".dataItem").remove(); // Remove all circles
  
    // Clear the clickedList
    clickedList = []; // Reset the clickedList to an empty array
    continentlist=[];
    // Reset the background color of all country buttons
    document.querySelectorAll('.country-btn').forEach(button => {
      button.style.backgroundColor = ''; // Reset background color to default
    });

    if(activeChart == "job"){
      updateJobMagnetChart(clickedList);
    }else{
      updateSalaryMagnetChart(clickedList);
    }
    //updateJobMagnetChart(clickedList);

    updateWorldMap(clickedList);
    // Update the dashboard to reflect cleared selections
  }
  // Attach the event listener for "Clear selection" button
document.addEventListener('DOMContentLoaded', function() {
document.getElementById("clearselection").addEventListener("click", clearLines);
});


//#################################### display country button ####################################

function showCountryButtons(continent_id) {
  const countryContainer = document.getElementById('country-container');
  countryContainer.innerHTML = ''; // Clear previous country buttons
  let countries = [];
  const continentAverageLabel = document.getElementById('continent-average-label');
  let continentName = "";

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

  if (!document.getElementById(`continent-average-checkbox-${continent_id}`)) {
    const continentAverageLabel = document.createElement('div');
    continentAverageLabel.className = 'tick-label';
    continentAverageLabel.id = `continent-average-label-${continent_id}`; // ID unique pour chaque continent

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `continent-average-checkbox-${continent_id}`; // ID unique pour chaque continent

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = `Show ${continentName} Average`;

    continentAverageLabel.appendChild(checkbox);
    continentAverageLabel.appendChild(label);
    countryContainer.appendChild(continentAverageLabel);
     // Event listener pour chaque checkbox
     checkbox.addEventListener('change', function() {
      if (this.checked) {
        console.log(`Displaying ${continentName} data`);
        continentlist.push({name: continentName });
        updatelinechart();
        
      } else {
        console.log(`Hiding ${continentName} data`);
        continentlist = continentlist.filter(continent => continent.name !== continentName);
        updatelinechart();
        
      }
      console.log(continentlist);
    });
    
  }

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
        
      } else {
        // Country is in the list, remove it
        clickedList.splice(index, 1);
        countryButton.style.backgroundColor = ''; // Reset background color or set it to default
      }
      
      updateDashboard();
      //updateValue();
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
//#################################### Create visual idioms ####################################

function createLineChart(data, data_average,clickedList,continentlist) {

  // Clean the data
  const cleanedData = data_average.map(({ [""]: _, continent, year, ratio_employment_to_population }) => ({
    continent,
    year: parseInt(year, 10), // Convert year to a number
    ratio_employment_to_population: parseFloat(ratio_employment_to_population) // Convert ratio to a number
  }));


  // Set the dimensions of the SVG container
  const svgWidth = 875;
  const svgHeight = 230;
  const margin = 60; 
  const bottom_margin = 60;
  
  // Clear the SVG before appending new elements
  //d3.select(".line-chart").select("svg").remove();
  // Create an x-scale using a point scale for the years
  const xScale = d3
    .scalePoint()
    .domain(cleanedData.map((d) => d.year).reverse().sort((a, b) => a - b)) 
    .range([margin*1.5, svgWidth - margin]);
    
  // Create a y-scale using a linear scale for the employment rate
  const yScale = d3
    .scaleLinear()
    // .domain([0, 100].reverse()) 
    // .range([margin * 0.09, svgHeight - margin]); 
    .domain([0, 100]) // Set initial domain
    .range([svgHeight - margin, margin * 0.09]); // Adjust range for D3.js


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
    .attr("y", margin - 50) // Position it above the chart
    .attr("text-anchor", "middle") // Center the text alignment
    .style("font-size", "16px") // Optional: Adjust font size
    .style("font-weight", "bold") // Optional: Make it bold
    .text("Women's Employment Rate by Country and Year");

    
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


    //----------------------------------creating tooltip2----------------
    const tooltip2 = document.createElement("div");
    tooltip2.id = "tooltip2";
    tooltip2.style.position = "absolute";
    tooltip2.style.fontSize = "14px";
    tooltip2.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    tooltip2.style.color = "white";
    tooltip2.style.padding = "5px";
    tooltip2.style.borderRadius = "5px";
    tooltip2.style.display = "none";
    tooltip2.style.pointerEvents = "none";
    document.body.appendChild(tooltip2);

    if (clickedList.length == 0) {
         //------------------------- --load data----------------------------------
            const groupedByContinent = cleanedData.reduce((acc, current) => {
              const { continent } = current;
              if (!acc[continent]) {acc[continent] = [];}
                  acc[continent].push(current);
                  return acc;
            }, {});

          //--------------------- Create a line generator function------------------------
          const line = d3
            .line()
            .x((d) => xScale(d.year)) 
            .y((d) => yScale(d.ratio_employment_to_population)); 


          // ------------------Calculate the new y-axis domain based on all the data-----------------
          /*const allData = Object.values(groupedByContinent).flat();
          const yDomain = [d3.min(allData, d => d.ratio_employment_to_population -8), 
                          d3.max(allData, d => d.ratio_employment_to_population + 8)];
          yScale.domain(yDomain);

          //---------------------redraw all the axis----------------------
          /*svg.select(".yAxis") // Make sure you have the y-axis appended previously
            .call(d3.axisLeft(yScale).tickSizeOuter(0).tickFormat(d3.format(".2s")));*/
          // Append y-axis to the SVG
          svg
            .append("g")
            .attr("class", "yAxis")
            .attr("transform", `translate(${margin * 1.5},0)`)
            .call(
              d3.axisLeft(yScale)
                .tickSizeOuter(0) // This hides the outermost ticks
                .tickValues(d3.range(0, 101, 20)) // Creates ticks at 0, 20, 40, 60, 80, 100
            );

          //-------------------------draw the line------------------------------

          Object.entries(groupedByContinent).forEach(([continent, data]) => {
              svg.append('path')
                  .datum(data) // Bind data for this continent
                  .attr('fill', 'none') // No fill
                  .attr('stroke', continentColors[continent]) 
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
  }
  else {
                //---------------------------------------filter data-------------------------------------
                const total_data = data.filter(d =>d.level_education == "TOTAL");

                const reducedData = total_data.map(({ country, year, ratio_employment_to_population }) => ({
                    country,
                    year: Number(year),
                    ratio_employment_to_population: Number(ratio_employment_to_population) // Convert to number
                }));

                const groupedByContinent = cleanedData.reduce((acc, current) => {
                  const { continent } = current;
                  if (!acc[continent]) {
                      acc[continent] = []; }
                  acc[continent].push(current);
                  return acc;
                }, {});
              
                let final_data = reducedData.filter(d => clickedList.some(clicked => clicked.country === d.country)
                );
                
                const allYears = Array.from(new Set(data.map(d => Number(d.year)))).sort((a, b) => a - b);// Get the full range of years from the dataset
                const uniqueCountries = Array.from(new Set(final_data.map(d => d.country))); // Get unique countries and group data by country
                const dataByCountry = uniqueCountries.map(country => ({
                    country,
                    data: final_data.filter(d => d.country === country)
                }));
                
              
              // --------------------------Create a color with the calculated shade--------------------------
              // function to generate distinct colors
              function getDistinctShade(baseColor, index, totalCountries) {
              const hslColor = d3.hsl(baseColor); // Convert the base color to HSL

              // Adjustments
              const saturationAdjustment = 0.7; // Keep saturation to 70% of the base color
              const lightnessAdjustment = 0.5; // Base lightness
              const minLightness = 0.2; // Minimum lightness
              const maxLightness = 0.8; // Maximum lightness

              // Calculate lightness based on index, keeping it within min and max lightness bounds
              const lightness = Math.min(Math.max(lightnessAdjustment + (index / totalCountries) * (1 - lightnessAdjustment), minLightness), maxLightness);

              // Create a new color with the same hue, adjusted saturation and lightness
              return d3.hsl(hslColor.h, hslColor.s * saturationAdjustment, lightness).toString();
              }
              // Create lines for each country
              dataByCountry.forEach((countryData, index) => {
                const firstCountryCode = countryData.country;
                const continent = getContinentByCountry(firstCountryCode);
                const baseColor = continentColors[continent] || 'grey';

              // Get a distinct shade for the current country while keeping the continent's hue
              const lineColor = getDistinctShade(baseColor, index, dataByCountry.length);

              const line = d3.line()
                  .x(d => xScale(d.year))
                  .y(d => yScale(d.ratio_employment_to_population));

              // ----------------------------draw lines------------------------------------
              svg.append("path")
                  .datum(countryData.data)
                  .attr("class", "line")
                  .attr("fill", "none")
                  .attr("stroke", lineColor)
                  .attr("stroke-width", 2)
                  .attr("d", line)
                  .attr("opacity",1); 

                  //add new continent lines 
              
                continentlist.forEach(continent => {
                  const countryData = data_average.filter(d => d.continent === continent.name); // Filtrer les données par continent
                  const line = d3.line()
                    .x(d => xScale(d.year)) // Remplacez par votre échelle x
                    .y(d => yScale(d.ratio_employment_to_population)); // Remplacez par votre échelle y
              
                  svg.append("path")
                    .datum(countryData) // Utilisez les données filtrées pour le continent
                    .attr("class", "line continent-line")
                    .attr("fill", "none")
                    .attr("stroke", continentColors[continent.name]) // Définissez votre couleur ici
                    .attr("stroke-width", 2)
                    .attr("stroke-dasharray", "5,5")
                    .attr("d", line)
                    .attr("opacity", 1)
                    .on("mouseover", function(event, d) {
                      console.log('Hovered continent:', continent.name);
                      
                      d3.select(this)
                          .attr("stroke", continentColors[continent.name]) // Change to your desired hover color
                          .attr("stroke-width", 4); // Change stroke width on hover

                      showTooltipcontinent(event, continent.name);
                  })
                  .on("mouseout", function(event, d) {
                    // Hide the tooltip
                    hideTooltipcontinent()
                    // Change stroke style on mouseover
                    d3.select(this)
                        .attr("stroke", continentColors[continent.name]) // Change to your desired hover color
                        .attr("stroke-width", 2); // Change stroke width on hover
                  
                })
                })
              

              // -------------------------draw circles-----------------------------------------
              const allCircles = svg.selectAll("circle.dataItem")
                .data(countryData.data, d => d.country); // Utiliser countryData.data

              allCircles.enter()
                .append("circle")
                .attr("class", "dataItem")
                .attr("r", 3.2)
                .attr("cx", d => xScale(d.year))
                .attr("cy", d => yScale(d.ratio_employment_to_population))
                .style("fill", lineColor) // Définir la couleur de remplissage sur la couleur de ligne
                .style("stroke", lineColor) // Définir la couleur de contour sur la couleur de ligne
                .style("stroke-width", 1)
                .style("opacity", 1) // Démarrer avec une opacité de 1
                .on("mouseover", mouseOverFunction)
                .on("mouseleave", mouseLeaveFunction);

              // Transition to make circles visible
              allCircles.transition().duration(1000).style("opacity", 1);

              // Mettre à jour les cercles existants
              allCircles
                  .attr("cx", d => xScale(d.year))
                  .attr("cy", d => yScale(d.ratio_employment_to_population))
                  .style("fill", lineColor) // Mettre à jour la couleur de remplissage
                  .style("stroke", lineColor); // Mettre à jour la couleur de contour 
                });

    }
}
  
//#################################### Update visual idioms ####################################
function updatelinechart(){
  createLineChart(globalData1, globalData3,clickedList,continentlist);
}

function updateDashboard() {

    createLineChart(globalData1, globalData3,clickedList,continentlist);
    if(activeChart == "job"){
      updateJobMagnetChart(clickedList);
    }else{
      updateSalaryMagnetChart(clickedList);
    }
    //updateJobMagnetChart(clickedList);
    updateWorldMap(clickedList);
    

}
  
const tooltip = document.createElement("div");
tooltip.id = "tooltip";
tooltip.style.position = "absolute";
tooltip.style.fontSize = "14px";
tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
tooltip.style.color = "white";
tooltip.style.padding = "5px";
tooltip.style.borderRadius = "5px";
tooltip.style.display = "none";
tooltip.style.pointerEvents = "none";
document.body.appendChild(tooltip);




// Create a function to show the tooltip with dynamic content
function showTooltip(event, countryData) {
  var tooltip = document.getElementById('tooltip');
  var tooltipCountry = document.getElementById('tooltip-country');
  var tooltipYear = document.getElementById('tooltip-year');
  var tooltipRatio = document.getElementById('tooltip-ratio');
  
  // Set the tooltip content
  tooltipCountry.textContent = countryNameMapping[countryData.country];  // Country name
  tooltipYear.textContent = countryData.year;  // Continent name
  tooltipRatio.textContent = countryData.ratio_employment_to_population.toFixed(2);  // Ratio value

  // Set the tooltip's position based on mouse coordinates
  tooltip.style.left = event.pageX + 10 + 'px';  // X position with some offset
  tooltip.style.top = event.pageY + 10 + 'px';   // Y position with some offset

  // Set z-index to ensure it stays on top
  tooltip.style.zIndex = 10;
  
  // Make the tooltip visible
  tooltip.style.display = 'block';
}

// Mouseout function to hide the tooltip
function hideTooltip() {
  var tooltip = document.getElementById('tooltip');

    tooltip.style.display = 'none';  // Hide tooltip
}

function mouseOverFunction(event, d) {
  // Get the country code for the hovered line
  showTooltip(event, d);
  const hoveredCountry = d.country;

  // Highlight circles that correspond to the hovered country
  d3.selectAll("circle.dataItem")
    .filter(function (elem) {
      return elem.country === hoveredCountry; // Match by country
    })
    .style("stroke", "black")
    .style("stroke-width", 1.5)
    .each(function() {
      d3.select(this).raise(); // Bring the hovered circle to the front
    });
}


function showTooltipcontinent(event,continent) {
  var tooltip2 = document.getElementById('tooltip2');
  // Update the content of the tooltip with the continent name
  tooltip2.textContent = `Continent Average : ${continent}`; // Use continent instead of continent.name

  // Set the tooltip's position based on mouse coordinates
  tooltip2.style.left = (event.pageX + 10) + 'px'; // X position with some offset
  tooltip2.style.top = (event.pageY + 10) + 'px'; // Y position with some offset
  // Set z-index to ensure it stays on top
  tooltip2.style.zIndex = 10;
  // Make the tooltip visible
  tooltip2.style.display = 'block';
}

function hideTooltipcontinent() {
  var tooltip2 = document.getElementById('tooltip2');
  
    tooltip2.style.display = 'none';  // Hide tooltip
}


function mouseLeaveFunction(event, d) {
    const hoveredCountry = d.country; // Get the country of the hovered item
    hideTooltip();
    // Reset circles for the hovered country
    d3.selectAll("circle.dataItem")
        .filter(function (elem) {
            return elem.country === hoveredCountry; // Match by country
        })
        .style("stroke", (elem) => continentColors[getContinentByCountry(elem.country)] || 'grey') // Reset to original color
        .style("stroke-width", 1); // Reset stroke width
  
}



  