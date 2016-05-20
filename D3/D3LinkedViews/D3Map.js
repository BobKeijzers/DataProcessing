// Data Processing
// Bob Keijzers 11201800

// Interactive map of Europe with population growth rates. With Mouse-over tooltip function

$("#container1").datamap({
   scope: 'europe',
   geography_config: {
     borderColor: 'rgba(255,255,255,0.3)',
     highlightBorderColor: 'rgba(0,0,0,0.5)',
   },

var data; 

d3.json("data.json", function(error, json) {
	if (error) return console.warn(error);
	data = json;
	var dictionary = {}
	console.log(data["UKR"])

	// data is a dictionary that contains country code as key, population growth as value.
	// Loop through dictionary and fill matching id of country based on value.
	for (key in data){
		if (value >= -5 && value < -0.5){
        dictionary[key] = {fillKey : 'class1'};
	    }
	    else if (value >= -0.5 && value < 0){
	        dictionary[key] = {fillKey : 'class2'};
	    }
	    else if (value >= 0 && value < 0.5){
	        dictionary[key] = {fillKey : 'class3'};
	    }
	    else if (value >= 0.5 && value < 1){
	        dictionary[key] = {fillKey : 'class4'};
	    }
	    else if (value >= 1 && value < 5){
	        dictionary[key] = {fillKey : 'class5'};
	    }
	};

	//create new data map.
   	var map = new Datamap({element: document.getElementById('container'),

   	//on click send geography info to chart function.
   	done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            graph(geography.id);
        })
    },

	fills: {
        'class1': '#E04949',
        'class2': '#E17E7E',
        'class3': '#8DC483',
        'class4': '#60C54E',
        'class5': '#29DA16',
      	defaultFill: 'black'
    },

    // add associative array 
    data : dictionary
	});
});

function addTooltip(accessor) {
    return function(selection) {
        var tooltipDiv;
        var bodyNode = d3.select('body').node();

        selection.on("mouseover", function(topoData, countryIndex) {
            if (!accessor(topoData, countryIndex)) {
                return;
            }
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltipmap').remove();
            formatValue(topoData, countryIndex);

            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltipmap');
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style('left', (absoluteMousePos[0] + 10) + 'px')
                .style('top', (absoluteMousePos[1] - 15) + 'px')
                .style('opacity', 1)
                .style('z-index', 1070);
            accessor(topoData, countryIndex) || '';
        })

            .on('mousemove', function(topoData, countryIndex) {
                if (!accessor(topoData, countryIndex)) {
                    return;
                }
                var absoluteMousePos = d3.mouse(bodyNode);
                tooltipDiv.style('left', (absoluteMousePos[0] + 10) + 'px')
                    .style('top', (absoluteMousePos[1] - 15) + 'px');
                var tooltipText = accessor(topoData, countryIndex) || '';
                tooltipDiv.html(tooltipText);
            })

            .on("mouseout", function(topoData, countryIndex) {
                if (!accessor(topoData, countryIndex)) {
                    return;
                }
                tooltipDiv.remove();
            });
    };