// Data Processing
// Bob Keijzers 11201800

//Cross hair line graph of population estimates of Europe in the period 2015-2080

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var formatDate = d3.time.format("%y");

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("data4.json", type, function(error, data) {
  if (error) throw error;
  console.log(data);

  x.domain(d3.extent(data, function(d) { return d.x; }));
  y.domain(d3.extent(data, function(d) { return d.y; }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Population");

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
});

function type(d) {
  d.x = formatDate.parse(d.x);
  d.y = +d.y;
  return d;
}

// create cross hair along x axis
    var crossX = svg.append("line")
      .style("stroke", "black")
      .attr("x1", 0)
      .attr("y1", 10)
      .attr("x2", width)
      .attr("y2", 10)
      .attr('opacity', 0);

    // create cross hair along y axis.
    var crossY = svg.append("line")
      .style("stroke", "black")
      .attr("x1", 10)
      .attr("y1", 0)
      .attr("x2", 10)
      .attr("y2", height)
      .attr('opacity', 0);

    // mousemove
    svg.on('mousemove', function(data){
      mouse = d3.mouse(this);

    // move y-line to mouse position
    crossY.style('opacity', 1)
      .attr('x1', mouse[0])
      .attr('x2', mouse[0])
    //
    crossX.style('opacity', 1)
      .attr('y1', mouse[1])
      .attr('y2', mouse[1])
    })