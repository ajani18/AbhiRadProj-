queue()
.defer(d3.json, "/classes")
.await(graphData);


var margin = {top: 30, right: 20, bottom: 30, left: 50},
width = 600 - margin.left - margin.right,
height = 270 - margin.top - margin.bottom;
// 2017-10-09T19:01:00.000Z

var parseDate = d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");
var bisectDate = d3.bisector(function (d) { return parseDate(d.date); }).left;

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
  //         d.date  = parseDate(d.date);
  //         d.close = +d.close;
  //     });
  //
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) {
    return parseDate(d.date); }));
  y.domain([0, d3.max(data, function(d) { return d.temp; })]);

  // Add the valueline path.
  svg.append("path")
  .attr("class", "line")
  .attr("d", valueline(data))
  .attr("stroke", "#FF00FF")
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
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x",0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("Temperature(F°)");

  svg.append("text")
  .attr("transform",
        "translate(" + (width/2) + " ," +
                       (height + margin.top + 20) + ")")
  .style("text-anchor", "middle")
  .text("Date");

  var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 4.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function () { focus.style("display", null); })
      .on("mouseout", function () { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
      var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.date > d1.date - x0 ? d1 : d0;
      focus.attr("transform", "translate(" + x(parseDate(d.date)) + "," + y(d.temp) + ")");
      focus.select("text").text((d.temp));
  }

  // });
}
