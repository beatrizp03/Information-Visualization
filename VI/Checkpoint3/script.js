let sliderOne, sliderTwo, minGap, displayValOne, displayValTwo, finalValOne, finalValTwo;
let globalData1 = [];
let globalData2 = [];
let globalData3 = [];

function updateValue() {
  displayValOne.textContent = sliderOne.value; 
  displayValTwo.textContent = sliderTwo.value; 

  finalValOne = sliderOne.value;
  finalValTwo = sliderTwo.value;
  console.log(finalValOne, finalValTwo)
  filterDataset(finalValOne,finalValTwo);
}

function filterDataset(startYear,endYear) {

  console.log(globalData1)
  let startyear=startYear;
  let endyear=endYear
  let filteredData1 = globalData1.filter(item => item.year >= startyear && item.year <= endyear);
  //const filteredData2 = globalData2.filter(item => item.year >= startyear && item.year <= endyear);
  let filteredData3 = globalData3.filter(item => item.year >= startyear && item.year <= endyear);
  console.log(filteredData1, filteredData3);
  createLineChart(filteredData1, filteredData3);
}

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  updateValue(); 
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  updateValue();
}



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

  d3.csv("datasets/dataset1_employment.csv").then(function (data1) {
    globalData1 = data1.map(d => {
      d.year = +d.year; 
      return d;
    }).sort((a, b) => a.year - b.year); // Sort by year in ascending order

    d3.csv("datasets/dataset2_job_category_percentage.csv").then(function (data2) {
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

        
        filterDataset(2000,2023); //default setup

        const categories = Array.from(new Set(globalData2.map(d => d.job_category)));
        // Inside the d3.csv call
        /*const employmentData = d3.rollup(
          globalData2,  // Your dataset
          leaves => {
            const categoryEmployment = {};
            leaves.forEach(l => categoryEmployment[l.job_category] = l.worker_percentage);
            return categoryEmployment;
          },
          d => d.country  // Group by country
        );

        console.log("DATA");
        console.log(employmentData);

        const employmentDataYearly = d3.rollup(
          globalData2,  // Your dataset
          leaves => {
            const categoryEmployment = {};
            leaves.forEach(l => {
              categoryEmployment[l.job_category] = l.worker_percentage; // Populate category percentages
            });
            return categoryEmployment;
          },
          d => d.country, // Group by country
          d => d.year     // Group by year
        );*/

        // Step 1: Find the most recent year
        const mostRecentYear = d3.max(globalData2, d => d.year);

        // Step 2: Filter the data to only include the most recent year's data
        const recentYearData = globalData2.filter(d => d.year === mostRecentYear);

        // Step 3: Rollup the data for the most recent year, including the year itself
        const employmentData = d3.rollup(
          recentYearData, // Use the filtered dataset
          leaves => {
            const categoryEmployment = {};
            
            // Assume that all entries have the same year, so we can take the year from the first entry
            const year = leaves[0].year;

            leaves.forEach(l => {
              categoryEmployment[l.job_category] = l.worker_percentage; // Collect employment data
            });

            // Return category employment and the year
            return { year, categoryEmployment }; // Return an object with year and category employment
          },
          d => d.country // Group by country
        );

        // Convert the rollup to an array format
        const employmentDataArray = Array.from(employmentData, ([country, { year, categoryEmployment }]) => ({
          country,
          year, // Include the year in the final output
          ...categoryEmployment // Spread the employment categories
        }));

        // Convert the rollup to a format that can be used
        /*const employmentDataArray = Array.from(employmentData, ([country, categoryEmployment]) => ({
          country,
          ...categoryEmployment
        }));

        const employmentDataArray = Array.from(employmentData, ([country, categoryEmployment]) => ({
          country,
          ...categoryEmployment,
          year: categoryEmployment.year // Include the year in each entry
        }));  */      

        //console.log("ARRAY");
        //console.log(employmentDataArray);
        console.log("ARRAY YEARLY");
        console.log(employmentDataArray);
        console.log("CATEGORIES");
        console.log(categories);
        // Create the magnet chart
        createMagnetChart(employmentDataArray, categories);
      
      });
    });
  });

  d3.csv("datasets/average_employment_ratio_by_country.csv").then(function(data){
    createWorldMap(data);
  });

  // Automatically click the "Job Categories" button on page load
  const jobChartBtn = document.getElementById("job_chart-btn");
  jobChartBtn.classList.add("active"); // Add active styles

  // Set up an event listener to toggle the active class between buttons
  const salariesChartBtn = document.getElementById("salaries_chart-btn");

  jobChartBtn.addEventListener("click", function() {
      jobChartBtn.classList.add("active");
      salariesChartBtn.classList.remove("active");
      // Add your logic to switch to the "Job Categories" chart
  });

  salariesChartBtn.addEventListener("click", function() {
      salariesChartBtn.classList.add("active");
      jobChartBtn.classList.remove("active");
      // Add your logic to switch to the "Salaries" chart
  });

}

window.onload = init;