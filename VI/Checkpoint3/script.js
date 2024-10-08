


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