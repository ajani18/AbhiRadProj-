queue()
.defer(d3.json, "/classes")
.await(graphData);
// var mongoose = require('mongoose');
// var Data = require('./dataModels/data');
// var app = require('./app');
// var d3 = require("d3");
// Set the dimensions of the canvas / graph

var margin = {top: 30, right: 20, bottom: 30, left: 50},
width = 600 - margin.left - margin.right,
height = 270 - margin.top - margin.bottom;
// 2017-10-09T19:01:00.000Z
//var parseDate = d3.utcParse("%Y-%m-%dT%H:%M%S.000Z");
var parseDate = d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");
// console.log(parseDate("2017-10-09T24:01:00.000"));
graphData();
// getData();
//
// function getData() {
//   Data
//   .find()
//   .sort()
//   .exec(function (err, docs) {
//     if(err) return console.error(err);
//     else {
//         data = docs; //data = docs in database
//         graphData();
//
//     }
//   });
//
// }
// console.log("Hello");

// Set the ranges
function graphData(err, data){

  // console.log(data);

  var x = d3.time.scale().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);

  // Define the axes
  var xAxis = d3.svg.axis().scale(x)
  .orient("bottom").ticks(5);

  var yAxis = d3.svg.axis().scale(y)
  .orient("left").ticks(5);

  // Define the line
  var valueline = d3.svg.line()
  .x(function(d, i) {
    // var date = new Date();
    // console.log(date.getDate()  );
    return x(parseDate(d.date));
  })
  .y(function(d) { return y(d.temp); });

  // Adds the svg canvas
  var svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
  "translate(" + margin.left + "," + margin.top + ")");

  // d3.csv("/javascripts/energy.csv", function(error, data) { //indentation?
  //     data.forEach(function(d) {
  //         d.date = parseDate(d.date);
  //         d.close = +d.close;
  //     });
  //
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) {
    // console.log(parseDate(d.date));
    return parseDate(d.date); }));
  y.domain([0, d3.max(data, function(d) { return d.temp; })]);

  // Add the valueline path.
  svg.append("path")
  .attr("class", "line")
  .attr("d", valueline(data))
  .attr("stroke", "black")
  .attr("fill", "none");

  // Add the X Axis
  svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

  // Add the Y Axis
  svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

  svg.append("text")
    .attr("transform",
          "translate(" + (width/2) + " ," +
                           (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("Date");

   svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("F");

  // });
}
