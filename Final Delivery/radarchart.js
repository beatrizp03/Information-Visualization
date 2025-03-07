const customTitles = ['No Information', 'Less Than Basic', 'Basic', 'Intermediate', 'Advanced'];

function createRadarChart(data, clickedList) {
    console.log('Creating radar chart with data:', data, 'and clickedList:', clickedList);
    if (clickedList.length !== 0) {
        updateRadarChart(data, clickedList);
        return;
    }

    d3.select('.radar-chart-container svg').remove();

    const width = 310;
    const height = 310;
    const margin = { top: 50, right: 25, bottom: 50, left: 90 };
    const radius = Math.min(width, height) / 2 - 50;
    const numberOfLevels = 5; // Number of concentric pentagons
    const levels = d3.range(1, numberOfLevels + 1);
    
    const categories = ['NOT_STATED', 'LESS_THAN_BASIC', 'BASIC', 'INTERMEDATE', 'ADVANCED']; // Pentagon corners
  
    // Use customTitles if provided, otherwise default to categories
    const categoryLabels = customTitles || categories;

    // Tooltip for displaying values
    const tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('visibility', 'hidden')
        .style('background', 'rgba(0,0,0,0.7)')
        .style('color', '#fff')
        .style('padding', '5px')
        .style('border-radius', '5px')
        .style('font-size', '16px')
        .style('pointer-events', 'none');

    // Create SVG and add transformation to rotate the pentagon
    const svg = d3.select('.radar-chart-container').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${(width + margin.left) / 2}, ${(height) / 2.15}) rotate(-18)`);  // Rotate by -18 degrees to align one side with the page
  
    // Scale for the data values (employment ratio)
    const radialScale = d3.scaleLinear()
        .domain([0, 100])  // Assuming employment ratio is between 0 and 100%
        .range([0, radius]);
  
    // Draw concentric pentagons for each level
    levels.forEach(level => {
        svg.append('polygon')
            .attr('points', generatePolygonPoints(categories.length, radialScale(level * 20)))  // Adjust level scale (1-5) to employment ratio
            .attr('stroke', '#cccecf')
            .attr('fill', 'none');
    });
  
    // Draw lines from center to vertices
    categories.forEach((category, i) => {
        const angle = (Math.PI * 2 / categories.length) * i;
        const x = radialScale(100) * Math.cos(angle);
        const y = radialScale(100) * Math.sin(angle);
        svg.append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', x)
            .attr('y2', y)
            .attr('stroke', '#cccecf');
    });
  
    const yearExtent = d3.extent(data, d => d.year);
    const minYear = yearExtent[0];
    const maxYear = yearExtent[1];

    // Plot data points (averages for each education category)
    const dataPoints = categories.map((category, i) => {
        const value = d3.mean(data.filter(d => d.level_education === category), d => d.ratio_employment_to_population); // Calculate average for each category
        const angle = (Math.PI * 2 / categories.length) * i;
        return { 
            x: radialScale(value) * Math.cos(angle), 
            y: radialScale(value) * Math.sin(angle), 
            value, 
            label: categoryLabels[i], 
            yearRange: `${minYear}-${maxYear}` // Replace this with actual year range if available in data 
        };
    });
  
    // Draw the polygon that represents the data
    svg.append('polygon')
        .attr('points', dataPoints.map(d => `${d.x},${d.y}`).join(' '))
        .attr('fill', 'rgba(236, 115, 159, 0.4)')  // Set the fill color
        .attr('stroke', '#EC739F') // You can change this as well if needed
        .attr('stroke-width', 2);
  
    // Add small circles to each point
    svg.selectAll('.data-point')
        .data(dataPoints)
        .enter()
        .append('circle')
        .attr('class', 'data-point')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', 4)
        .attr('fill', '#D14B7E') // Set the fill color of circles
        .on('mouseover', function(event, d) {
            tooltip.style('visibility', 'visible')
                .html(`Global Average<br>Category: ${d.label}<br>Year Range: ${d.yearRange}<br>Employment Rate: ${d.value.toFixed(2)}%`);
        })
        .on('mousemove', function(event) {
            tooltip.style('top', (event.pageY - 10) + 'px')
                .style('left', (event.pageX + 10) + 'px');
        })
        .on('mouseout', function() {
            tooltip.style('visibility', 'hidden');
        });

    // Function to generate points for a polygon (pentagon in this case)
    function generatePolygonPoints(sides, radius) {
        const angleStep = (Math.PI * 2) / sides;
        return d3.range(sides).map(i => {
            const angle = i * angleStep;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return `${x},${y}`;
        }).join(' ');
    }
  
    // Add labels for the corners of the pentagon (education categories)
    categoryLabels.forEach((label, i) => {
        const angle = (Math.PI * 2 / categories.length) * i;
        const labelRadius = radialScale(110);  // Adjust label distance from the center
        const x = labelRadius * Math.cos(angle);
        const y = labelRadius * Math.sin(angle);
  
        svg.append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', '0.35em')
            .style('text-anchor', 'middle')
            .style('font-size', '14px')
            .text(label)
            .attr('transform', `rotate(18, ${x}, ${y})`);  // Rotate labels back by +18 degrees to keep them upright
    });

    // Add numbers to the specific axis (e.g., the "ADVANCED" category)
    const specificCategoryIndex = 4; // Index of the 'ADVANCED' category (0-based)
    const specificCategoryAngle = (Math.PI * 2 / categories.length) * specificCategoryIndex;

    // Add the number labels for 20, 40, 60, 80, 100 on the 'ADVANCED' axis
    levels.forEach(level => {
        const labelValue = level * 20; // Calculate the label value (20, 40, 60, 80, 100)
        const x = (radialScale(labelValue) * Math.cos(specificCategoryAngle))-5; // Shift left by 10 units
        const y = (radialScale(labelValue) * Math.sin(specificCategoryAngle))+4; // Y coordinate

        // Append the text element for each level
        svg.append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', '0.35em')
            .style('text-anchor', 'end') // Align the text to the end
            .style('font-size', '10px')
            .attr('transform', `rotate(18, ${x}, ${y})`)
            .style('fill', '#000000 ') // Color for the text
            .text(labelValue); // Set the text to the calculated value
    });
}

function updateRadarChart(data, clickedList) {

    if (clickedList.length === 0) {
        createRadarChart(data, clickedList);
        return;
    }

    // Clear existing elements in the radar chart container
    d3.select('.radar-chart-container svg').remove();

    const width = 310;
    const height = 310;
    const margin = { top: 50, right: 25, bottom: 50, left: 90 };
    const radius = Math.min(width, height) / 2 - 50;
    const numberOfLevels = 5; // Number of concentric pentagons
    const levels = d3.range(1, numberOfLevels + 1);

    const categories = ['NOT_STATED', 'LESS_THAN_BASIC', 'BASIC', 'INTERMEDATE', 'ADVANCED']; // Pentagon corners

    // Use customTitles if provided, otherwise default to categories
    const categoryLabels = customTitles || categories;

    // Create a tooltip for displaying values
    const tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('visibility', 'hidden')
        .style('background', 'rgba(0,0,0,0.7)')
        .style('color', '#fff')
        .style('padding', '5px')
        .style('border-radius', '5px')
        .style('font-size', '16px')
        .style('pointer-events', 'none');

    // Create SVG and add transformation to rotate the pentagon
    const svg = d3.select('.radar-chart-container').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${(width + margin.left) / 2}, ${(height) / 2.15}) rotate(-18)`);  // Rotate by -18 degrees

    // Scale for the data values (employment ratio)
    const radialScale = d3.scaleLinear()
        .domain([0, 100])  // Assuming employment ratio is between 0 and 100%
        .range([0, radius]);

    // Draw concentric pentagons for each level
    levels.forEach(level => {
        svg.append('polygon')
            .attr('points', generatePolygonPoints(categories.length, radialScale(level * 20)))  // Adjust level scale (1-5) to employment ratio
            .attr('stroke', '#cccecf')
            .attr('fill', 'none');
    });

    // Draw lines from center to vertices
    categories.forEach((category, i) => {
        const angle = (Math.PI * 2 / categories.length) * i;
        const x = radialScale(100) * Math.cos(angle);
        const y = radialScale(100) * Math.sin(angle);
        svg.append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', x)
            .attr('y2', y)
            .attr('stroke', '#cccecf');
    });

    // Extract the list of country codes from clickedList
    const clickedCountries = clickedList.map(d => d.country);

    // Filter the data for the countries in clickedCountries
    const filteredDataByCountry = data.filter(d => clickedCountries.includes(d.country));

    clickedList.forEach(countryObj => {
        const country = typeof countryObj === 'object' && countryObj.country ? countryObj.country : countryObj;
        const countryName = getCountryNameByCode(country);
        const countryData = filteredDataByCountry.filter(d => d.country === country);
    
        if (countryData.length === 0) {
            // Skip this country if it doesn't exist in the data
            return;
        }
    
        // Retrieve the color from the countryColorMap based on the country code
        const countryColor = countryColorMap[country] || 'grey'; // Default to grey if no color is found
    
        const countryDataPoints = [];
        
        categories.forEach((category, i) => {
            const categoryData = countryData.filter(d => d.level_education === category);
            const value = d3.mean(categoryData, d => d.ratio_employment_to_population) || 0;
            const angle = (Math.PI * 2 / categories.length) * i;
            const x = radialScale(value) * Math.cos(angle);
            const y = radialScale(value) * Math.sin(angle);
            countryDataPoints.push({ x, y, value, label: categoryLabels[i], countryName });
        });
        
        // Draw the polygon with `pointer-events: none` to allow interaction with underlying circles
        const polygon = svg.append('polygon')
            .attr('points', countryDataPoints.map(d => `${d.x},${d.y}`).join(' '))
            .attr('fill', countryColor)            // Set fill color from countryColorMap
            .attr('fill-opacity', 0.4)             // Adjust transparency if needed
            .attr('stroke', countryColor)          // Set stroke color from countryColorMap
            .attr('stroke-width', 2)
            .attr('class', `polygon-${country.replace(/\s/g, '-')}`)
            .style('pointer-events', 'none');      // This makes the polygon non-interactive
        
        // Add circles with interactive hover effects
        const circles = svg.selectAll(`.data-point-${country.replace(/\s/g, '-')}`)
            .data(countryDataPoints)
            .enter()
            .append('circle')
            .attr('class', `data-point data-point-${country.replace(/\s/g, '-')}`)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', 4)
            .attr('fill', countryColor)            // Set circle color from countryColorMap
            .on('mouseover', function(event, d) {
                tooltip.style('visibility', 'visible')
                    .html(`Country: ${d.countryName}<br>Year Range: ${leastRecentYear} - ${mostRecentYear}<br>Category: ${d.label}<br>Employment Rate: ${d.value.toFixed(2)}%`);
                
                svg.selectAll(`.data-point-${country.replace(/\s/g, '-')}`)
                    .attr('stroke', 'black')
                    .attr('stroke-width', 2);
    
                svg.select(`.polygon-${country.replace(/\s/g, '-')}`)
                    .attr('stroke', 'black');
                
                polygon.raise();
                circles.each(function() { d3.select(this).raise(); });
            })
            .on('mousemove', function(event) {
                // Get the tooltip dimensions
                const tooltipWidth = tooltip.node().offsetWidth;
                const tooltipHeight = tooltip.node().offsetHeight;
            
                // Get the window dimensions
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
            
                // Calculate the default tooltip position
                let tooltipX = event.pageX + 10;
                let tooltipY = event.pageY - 10;
            
                // Adjust if tooltip is near the right edge
                if (tooltipX + tooltipWidth > windowWidth) {
                    tooltipX = event.pageX - tooltipWidth - 10;
                }
            
                // Adjust if tooltip is near the bottom edge
                if (tooltipY + tooltipHeight > windowHeight) {
                    tooltipY = event.pageY - tooltipHeight - 10;
                }
            
                // Adjust if tooltip is near the top edge
                if (tooltipY < 0) {
                    tooltipY = event.pageY + 10;
                }
            
                // Apply the calculated position to the tooltip
                tooltip.style('top', tooltipY + 'px').style('left', tooltipX + 'px');
            })
            
            .on('mouseout', function() {
                tooltip.style('visibility', 'hidden');
    
                svg.selectAll(`.data-point-${country.replace(/\s/g, '-')}`)
                    .attr('stroke', 'none');
    
                svg.select(`.polygon-${country.replace(/\s/g, '-')}`)
                    .attr('stroke', countryColor);   // Reset to original country color on mouse out
            });
    });
    
    
    

    // Add labels for the corners of the pentagon (education categories)
    categoryLabels.forEach((label, i) => {
        const angle = (Math.PI * 2 / categories.length) * i;
        const labelRadius = radialScale(110);  // Adjust label distance from the center
        const x = labelRadius * Math.cos(angle);
        const y = labelRadius * Math.sin(angle);

        svg.append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', '0.35em')
            .style('text-anchor', 'middle')
            .style('font-size', '14px')
            .text(label)
            .attr('transform', `rotate(18, ${x}, ${y})`);  // Rotate labels back by +18 degrees to keep them upright
    });

    // Function to generate points for a polygon (pentagon in this case)
    function generatePolygonPoints(sides, radius) {
        const angleStep = (Math.PI * 2) / sides;
        return d3.range(sides).map(i => {
            const angle = i * angleStep;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return `${x},${y}`;
        }).join(' ');
    }

    // Add numbers to the specific axis (e.g., the "ADVANCED" category)
    const specificCategoryIndex = 4; // Index of the 'ADVANCED' category (0-based)
    const specificCategoryAngle = (Math.PI * 2 / categories.length) * specificCategoryIndex;

    // Add the number labels for 20, 40, 60, 80, 100 on the 'ADVANCED' axis
    levels.forEach(level => {
        const labelValue = level * 20; // Calculate the label value (20, 40, 60, 80, 100)
        const x = (radialScale(labelValue) * Math.cos(specificCategoryAngle))-5; // Shift left by 10 units
        const y = (radialScale(labelValue) * Math.sin(specificCategoryAngle))+4; // Y coordinate

        // Append the text element for each level
        svg.append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', '0.35em')
            .style('text-anchor', 'end') // Align the text to the end
            .style('font-size', '10px')
            .attr('transform', `rotate(18, ${x}, ${y})`)
            .style('fill', '#000000 ') // Color for the text
            .text(labelValue); // Set the text to the calculated value
    });

    function getCountryNameByCode(code) {
        for (const continent in continents) {
            const countries = continents[continent];
            const country = countries.find(c => c.code === code);
            if (country) {
                return country.name; // Return the name if found
            }
        }
        return code; // Return the code itself if not found
    }
}
