function init() {
  sliderOne = document.getElementById("slider-1");
  sliderTwo = document.getElementById("slider-2");
  minGap = 1; //minimum gap between two cursor
  displayValOne = document.getElementById("range1");
  displayValTwo = document.getElementById("range2");
  finalValOne = document.getElementById("finalValOne");
  finalValTwo = document.getElementById("finalValTwo");
  
  sliderOne.addEventListener("input", slideOne);
  sliderTwo.addEventListener("input", slideTwo);

  var globalData1, globalData2, globalData3;

  d3.csv("datasets/dataset1_employment.csv").then(function (data1) {
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

        const categories = Array.from(new Set(globalData2.map(d => d.job_category)));
        // Inside the d3.csv call
        const employmentData = d3.rollup(
          globalData2,  // Your dataset
          leaves => {
            const categoryEmployment = {};
            leaves.forEach(l => categoryEmployment[l.job_category] = l.number_worker);
            return categoryEmployment;
          },
          d => d.country  // Group by country
        );

        console.log("DATA");
        console.log(employmentData);

        // Convert the rollup to a format that can be used
        const employmentDataArray = Array.from(employmentData, ([country, categoryEmployment]) => ({
          country,
          ...categoryEmployment
        }));

        console.log("ARRAY");
        console.log(employmentDataArray);
        // Create the magnet chart
        createMagnetChart(employmentDataArray, categories);
      
      });
    });
  });

  d3.csv("datasets/average_employment_ratio_by_country.csv").then(function(data){
    createWorldMap(data);
  });
}