const customTitles = ['No Information', 'Less Than Basic', 'Basic', 'Intermediate', 'Advanced'];

function createRadarChart(data) {
    const width = 340;
    const height = 340;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const radius = Math.min(width, height) / 2 - 50;
    const numberOfLevels = 5; // Number of concentric pentagons
    const levels = d3.range(1, numberOfLevels + 1);
    
    const categories = ['NOT_STATED', 'LESS_THAN_BASIC', 'BASIC', 'INTERMEDATE', 'ADVANCED']; // Pentagon corners
  
    // Use customTitles if provided, otherwise default to categories
    const categoryLabels = customTitles || categories;
  
    // Create SVG and add transformation to rotate the pentagon
    const svg = d3.select('.grid-item-radar').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${(width + margin.left) / 2}, ${(height) / 2.5}) rotate(-18)`);  // Rotate by -18 degrees to align one side with the page
  
    // Scale for the data values (employment ratio)
    const radialScale = d3.scaleLinear()
      .domain([0, 100])  // Assuming employment ratio is between 0 and 100%
      .range([0, radius]);
  
    // Draw concentric pentagons for each level
    levels.forEach(level => {
      svg.append('polygon')
        .attr('points', generatePolygonPoints(categories.length, radialScale(level * 20)))  // Adjust level scale (1-5) to employment ratio
        .attr('stroke', '#ffffff')
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
        .attr('stroke', '#ffffff');
    });
  
    // Plot data points (averages for each education category)
    const dataPoints = categories.map((category, i) => {
      const value = d3.mean(data.filter(d => d.level_education === category), d => d.ratio_employment_to_population); // Calculate average for each category
      const angle = (Math.PI * 2 / categories.length) * i;
      return [radialScale(value) * Math.cos(angle), radialScale(value) * Math.sin(angle)];
    });
  
    svg.append('polygon')
      .attr('points', dataPoints.map(d => d.join(',')).join(' '))
      .attr('fill', 'rgba(0, 100, 255, 0.6)')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2);
  
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
  }
  