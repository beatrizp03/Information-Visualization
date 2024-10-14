let sliderOne, sliderTwo, minGap, displayValOne, displayValTwo, finalValOne, finalValTwo;
let globalData1 = [];
let globalData2 = [];
let globalData3 = [];

function updateValue() {
  displayValOne.textContent = sliderOne.value; 
  displayValTwo.textContent = sliderTwo.value; 

  finalValOne = sliderOne.value;
  finalValTwo = sliderTwo.value;
  filterDataset(finalValOne,finalValTwo);
}

function filterDataset(startYear,endYear) {

  let startyear=startYear;
  let endyear=endYear
  let filteredData1 = globalData1.filter(item => item.year >= startyear && item.year <= endyear);
  let filteredData2 = globalData2.filter(item => item.year >= startyear && item.year <= endyear);
  let filteredData3 = globalData3.filter(item => item.year >= startyear && item.year <= endyear);
 
  createLineChart(filteredData1, filteredData3);

  filteredData1 = filteredData1.filter(d => d.level_education == "TOTAL");
  const reducedData1 = filteredData1.map(entry => ({
    country: entry.country,
    year: entry.year,
    rate: parseFloat(entry.ratio_employment_to_population) // Convert the rate to a number
  }));

  
  createWorldMap(reducedData1);
  
  const categories = Array.from(new Set(filteredData2.map(d => d.job_category)));
        
  // Inside the d3.csv call
  const employmentData = d3.rollup(
    filteredData2,  // Your dataset
    leaves => {
      const categoryEmployment = {};
      leaves.forEach(l => categoryEmployment[l.job_category] = l.worker_percentage);
      return categoryEmployment;
    },
    d => d.country, // Group by country
    d => d.year,
  );

  const employmentDataArray = Array.from(employmentData, ([country, yearMap]) => 
    Array.from(yearMap, ([year, categoryEmployment]) => ({
      country,
      year,
      ...categoryEmployment
    }))
  ).flat();

  createMagnetChart(employmentDataArray, categories);
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
      });
    });
  });

  d3.csv("datasets/average_employment_ratio_by_country.csv").then(function(data){
    //createWorldMap(data);
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