let sliderOne, sliderTwo, minGap, displayValOne, displayValTwo, finalValOne, finalValTwo;
let globalData1 = [];
let globalData2 = [];
let filteredData1;
let filteredData3;
let filteredData2;
let filteredData4;
let globalData3 = [];
let globalData4 = [];

let activeChart = "job"; // Default active chart is "job
let categories = [];
let employmentDataArray = [];

function updateChartsBasedOnActiveButton(employmentDataArray, categories, filteredData4) {
  console.log("Here");
    if (activeChart === "job") {
        createJobMagnetChart(employmentDataArray, categories); // Update job chart
        //updateJobMagnetChart(clickedList);
    } else if (activeChart === "salary") {
        createSalaryMagnetChart(filteredData4); // Update salary chart
        //updateSalaryMagnetChart(clickedList);
    }
}

function updateValue() {
  displayValOne.textContent = sliderOne.value; 
  displayValTwo.textContent = sliderTwo.value; 

  finalValOne = sliderOne.value;
  finalValTwo = sliderTwo.value;
  updateSlider(finalValOne, finalValTwo);
  filterDataset(finalValOne,finalValTwo);
}

function updateDatasetLineChart() {
  displayValOne.textContent = sliderOne.value; 
  displayValTwo.textContent = sliderTwo.value; 

  finalValOne = sliderOne.value;
  finalValTwo = sliderTwo.value;

  filteredData1 = globalData1.filter(item => item.year >= finalValOne && item.year <= finalValTwo);
  filteredData3 = globalData3.filter(item => item.year >= finalValOne && item.year <= finalValTwo);
 
  createLineChart(filteredData1, filteredData3,clickedList,continentlist);
}

function filterDataset(startYear,endYear) {

  let startyear=startYear;
  let endyear=endYear
  filteredData1 = globalData1.filter(item => item.year >= startyear && item.year <= endyear);
  filteredData2 = globalData2.filter(item => item.year >= startyear && item.year <= endyear);
  let filteredData3 = globalData3.filter(item => item.year >= startyear && item.year <= endyear);
  filteredData4 = globalData4.filter(item => item.year >= startyear && item.year <= endyear);
 
  createLineChart(filteredData1, filteredData3,clickedList,continentlist);
  createRadarChart(filteredData1, clickedList);

  filteredData1 = filteredData1.filter(d => d.level_education == "TOTAL");
  const reducedData1 = filteredData1.map(entry => ({
    country: entry.country,
    year: entry.year,
    rate: parseFloat(entry.ratio_employment_to_population) // Convert the rate to a number
  }));

  createWorldMap(reducedData1,false);
  
  categories = Array.from(new Set(filteredData2.map(d => d.job_category)));
        
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

  employmentDataArray = Array.from(employmentData, ([country, yearMap]) => 
    Array.from(yearMap, ([year, categoryEmployment]) => ({
      country,
      year,
      ...categoryEmployment
    }))
  ).flat();

  updateChartsBasedOnActiveButton(employmentDataArray, categories, filteredData4);
}


function updateSlider(yearmin, yearmax) {
  // const range1 = document.getElementById('range1');
  // const range2 = document.getElementById('range2');
  const bubble1 = document.getElementById('bubble1');
  const bubble2 = document.getElementById('bubble2');
  const filledTrack = document.getElementById('filled-track');

  const min = 2000;
  const max = 2023;

  // Get the percentage positions for both sliders
  const range1Percent = ((yearmin - min) / (max - min)) * 100;
  const range2Percent = ((yearmax - min) / (max - min)) * 100;
  // Calculate the left position and width of the filled track
  filledTrack.style.left = `${Math.min(range1Percent, range2Percent)}%`;
  filledTrack.style.width = `${Math.abs(range2Percent - range1Percent)}%`;
  // Update the position of the spans to follow the thumbs
  // range1.style.left = `calc(${range1Percent}% + (${8 - range1Percent * 0.15}px))`;
  // range2.style.left = `calc(${range2Percent}% + (${8 - range2Percent * 0.15}px))`;

  // Update the position of the spans to follow the thumbs
  bubble1.style.left = `calc(${range1Percent}% + (${8 - range1Percent * 0.15}px))`;
  bubble2.style.left = `calc(${range2Percent}% + (${8 - range2Percent * 0.15}px))`;

  // Update bubble text
  bubble1.textContent = yearmin;
  bubble2.textContent = yearmax;

  bubble1.classList.add('visible');
  bubble2.classList.add('visible');
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
  filledTrack = document.getElementById('filled-track');
  bubble1 = document.getElementById('bubble1');
  bubble2 = document.getElementById('bubble2');

  sliderOne.addEventListener("input", slideOne);
  sliderTwo.addEventListener("input", slideTwo);
  filledTrack.style.left = `0%`;
  filledTrack.style.width = `100%`;
  bubble1.style.left = `calc(0% + (${2 - 0 * 0.15}px))`;
  bubble2.style.left = `calc(100% + (${2 - 100 * 0.15}px))`;
  bubble1.style.visibility = 'visible';
  bubble2.style.visibility = 'visible';
  bubble1.textContent = 2000;
  bubble2.textContent = 2023;

  // Automatically click the "Job Categories" button on page load
  const jobChartBtn = document.getElementById("job_chart-btn");
  jobChartBtn.classList.add("active"); // Add active styles

  // Set up an event listener to toggle the active class between buttons
  const salariesChartBtn = document.getElementById("salaries_chart-btn");

  // Make the job chart visible by default
  document.querySelector('.job-chart-container').style.display = 'block';
  document.querySelector('.salaries-chart-container').style.display = 'none';

  // Event listener for the Job Categories button
  
  // Get the title element
const titleElement = document.getElementById("magnet-title");

// Event listener for the Job Categories button
jobChartBtn.addEventListener("click", function() {
    activeChart = "job";
    jobChartBtn.classList.add("active");
    salariesChartBtn.classList.remove("active");

    // Show the job chart and hide the salaries chart
    document.querySelector('.job-chart-container').style.display = 'block';
    document.querySelector('.salaries-chart-container').style.display = 'none';

    // Update the title for Job Categories
    titleElement.textContent = "Job Categories (%)"; 

    // Call functions related to the job chart
    createJobMagnetChart(employmentDataArray, categories);
    updateJobMagnetChart(clickedList);
});

// Event listener for the Salaries button
salariesChartBtn.addEventListener("click", function() {
    activeChart = "salary";
    salariesChartBtn.classList.add("active");
    jobChartBtn.classList.remove("active");

    // Show the salaries chart and hide the job chart
    document.querySelector('.salaries-chart-container').style.display = 'block';
    document.querySelector('.job-chart-container').style.display = 'none';
    console.log("Active chart: ", activeChart); // Print the active chart

    // Update the title for Salaries
    titleElement.textContent = "Salaries ($)"; 

    // Call functions related to the salaries chart
    createSalaryMagnetChart(filteredData4);
    updateSalaryMagnetChart(clickedList);
});

document.getElementById('info-btn').addEventListener('click', function() {
  const infoBox = document.getElementById('info-box');
  if (infoBox.style.display === 'block') {
      infoBox.style.display = 'none';
  } else {
      infoBox.style.display = 'block';
  }
});


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
        d3.csv("datasets/dataset3_salaries.csv").then(function(data4){
          globalData4 = data4.map(d => { 
            d.year = +d.year;
            return d;
          }).sort((a, b) => a.year - b.year);

        let loadingFilteredData1 = globalData1.filter(d => d.level_education == "TOTAL");
        const reducedData1 = loadingFilteredData1.map(entry => ({
          country: entry.country,
          year: entry.year,
          rate: parseFloat(entry.ratio_employment_to_population) // Convert the rate to a number
        }));
        createWorldMap(reducedData1, true);
        filterDataset(2000,2023); //default 
        });
      });
    });
  });
  
}

window.onload = init;