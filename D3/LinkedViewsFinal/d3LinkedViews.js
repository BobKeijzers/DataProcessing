//variable of all country codes

var country_codes = [

      ["af", "AFG", "Afghanistan"],

      ["ax", "ALA", "Åland Islands"],

      ["al", "ALB", "Albania"],

      ["dz", "DZA", "Algeria"],

      ["as", "ASM", "American Samoa"],

      ["ad", "AND", "Andorra"],

      ["ao", "AGO", "Angola"],

      ["ai", "AIA", "Anguilla"],

      ["aq", "ATA", "Antarctica"],

      ["ag", "ATG", "Antigua and Barbuda"],

      ["ar", "ARG", "Argentina"],

      ["am", "ARM", "Armenia"],

      ["aw", "ABW", "Aruba"],

      ["au", "AUS", "Australia"],

      ["at", "AUT", "Austria"],

      ["az", "AZE", "Azerbaijan"],

      ["bs", "BHS", "Bahamas"],

      ["bh", "BHR", "Bahrain"],

      ["bd", "BGD", "Bangladesh"],

      ["bb", "BRB", "Barbados"],

      ["by", "BLR", "Belarus"],

      ["be", "BEL", "Belgium"],

      ["bz", "BLZ", "Belize"],

      ["bj", "BEN", "Benin"],

      ["bm", "BMU", "Bermuda"],

      ["bt", "BTN", "Bhutan"],

      ["bo", "BOL", "Bolivia, Plurinational State of"],

      ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],

      ["ba", "BIH", "Bosnia and Herzegovina"],

      ["bw", "BWA", "Botswana"],

      ["bv", "BVT", "Bouvet Island"],

      ["br", "BRA", "Brazil"],

      ["io", "IOT", "British Indian Ocean Territory"],

      ["bn", "BRN", "Brunei Darussalam"],

      ["bg", "BGR", "Bulgaria"],

      ["bf", "BFA", "Burkina Faso"],

      ["bi", "BDI", "Burundi"],

      ["kh", "KHM", "Cambodia"],

      ["cm", "CMR", "Cameroon"],

      ["ca", "CAN", "Canada"],

      ["cv", "CPV", "Cape Verde"],

      ["ky", "CYM", "Cayman Islands"],

      ["cf", "CAF", "Central African Republic"],

      ["td", "TCD", "Chad"],

      ["cl", "CHL", "Chile"],

      ["cn", "CHN", "China"],

      ["cx", "CXR", "Christmas Island"],

      ["cc", "CCK", "Cocos (Keeling) Islands"],

      ["co", "COL", "Colombia"],

      ["km", "COM", "Comoros"],

      ["cg", "COG", "Congo"],

      ["cd", "COD", "Congo, the Democratic Republic of the"],

      ["ck", "COK", "Cook Islands"],

      ["cr", "CRI", "Costa Rica"],

      ["ci", "CIV", "Côte d'Ivoire"],

      ["hro", "HRV", "Croatia"],

      ["cu", "CUB", "Cuba"],

      ["cw", "CUW", "Curaçao"],

      ["cy", "CYP", "Cyprus"],

      ["cz", "CZE", "Czech Republic"],

      ["den", "DNK", "Denmark"],

      ["dj", "DJI", "Djibouti"],

      ["dm", "DMA", "Dominica"],

      ["do", "DOM", "Dominican Republic"],

      ["ec", "ECU", "Ecuador"],

      ["eg", "EGY", "Egypt"],

      ["sv", "SLV", "El Salvador"],

      ["gq", "GNQ", "Equatorial Guinea"],

      ["er", "ERI", "Eritrea"],

      ["est", "EST", "Estonia"],

      ["et", "ETH", "Ethiopia"],

      ["fk", "FLK", "Falkland Islands (Malvinas)"],

      ["fo", "FRO", "Faroe Islands"],

      ["fj", "FJI", "Fiji"],

      ["fin", "FIN", "Finland"],

      ["fra", "FRA", "France"],

      ["gf", "GUF", "French Guiana"],

      ["pf", "PYF", "French Polynesia"],

      ["tf", "ATF", "French Southern Territories"],

      ["ga", "GAB", "Gabon"],

      ["gm", "GMB", "Gambia"],

      ["ge", "GEO", "Georgia"],

      ["dui", "DEU", "Germany"],

      ["gh", "GHA", "Ghana"],

      ["gi", "GIB", "Gibraltar"],

      ["gre", "GRC", "Greece"],

      ["gl", "GRL", "Greenland"],

      ["gd", "GRD", "Grenada"],

      ["gp", "GLP", "Guadeloupe"],

      ["gu", "GUM", "Guam"],

      ["gt", "GTM", "Guatemala"],

      ["gg", "GGY", "Guernsey"],

      ["gn", "GIN", "Guinea"],

      ["gw", "GNB", "Guinea-Bissau"],

      ["gy", "GUY", "Guyana"],

      ["ht", "HTI", "Haiti"],

      ["hm", "HMD", "Heard Island and McDonald Islands"],

      ["va", "VAT", "Holy See (Vatican City State)"],

      ["hn", "HND", "Honduras"],

      ["hk", "HKG", "Hong Kong"],

      ["hu", "HUN", "Hungary"],

      ["is", "ISL", "Iceland"],

      ["in", "IND", "India"],

      ["id", "IDN", "Indonesia"],

      ["ir", "IRN", "Iran, Islamic Republic of"],

      ["iq", "IRQ", "Iraq"],

      ["ier", "IRL", "Ireland"],

      ["im", "IMN", "Isle of Man"],

      ["il", "ISR", "Israel"],

      ["ita", "ITA", "Italy"],

      ["jm", "JAM", "Jamaica"],

      ["jp", "JPN", "Japan"],

      ["je", "JEY", "Jersey"],

      ["jo", "JOR", "Jordan"],

      ["kz", "KAZ", "Kazakhstan"],

      ["ke", "KEN", "Kenya"],

      ["ki", "KIR", "Kiribati"],

      ["kp", "PRK", "Korea, Democratic People's Republic of"],

      ["kr", "KOR", "Korea, Republic of"],

      ["kw", "KWT", "Kuwait"],

      ["kg", "KGZ", "Kyrgyzstan"],

      ["la", "LAO", "Lao People's Democratic Republic"],

      ["lv", "LVA", "Latvia"],

      ["lb", "LBN", "Lebanon"],

      ["ls", "LSO", "Lesotho"],

      ["lr", "LBR", "Liberia"],

      ["ly", "LBY", "Libya"],

      ["li", "LIE", "Liechtenstein"],

      ["lt", "LTU", "Lithuania"],

      ["lu", "LUX", "Luxembourg"],

      ["mo", "MAC", "Macao"],

      ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],

      ["mg", "MDG", "Madagascar"],

      ["mw", "MWI", "Malawi"],

      ["my", "MYS", "Malaysia"],

      ["mv", "MDV", "Maldives"],

      ["ml", "MLI", "Mali"],

      ["mt", "MLT", "Malta"],

      ["mh", "MHL", "Marshall Islands"],

      ["mq", "MTQ", "Martinique"],

      ["mr", "MRT", "Mauritania"],

      ["mu", "MUS", "Mauritius"],

      ["yt", "MYT", "Mayotte"],

      ["mx", "MEX", "Mexico"],

      ["fm", "FSM", "Micronesia, Federated States of"],

      ["md", "MDA", "Moldova, Republic of"],

      ["mc", "MCO", "Monaco"],

      ["mn", "MNG", "Mongolia"],

      ["me", "MNE", "Montenegro"],

      ["ms", "MSR", "Montserrat"],

      ["ma", "MAR", "Morocco"],

      ["mz", "MOZ", "Mozambique"],

      ["mm", "MMR", "Myanmar"],

      ["na", "NAM", "Namibia"],

      ["nr", "NRU", "Nauru"],

      ["np", "NPL", "Nepal"],

      ["nld", "NLD", "Netherlands"],

      ["nc", "NCL", "New Caledonia"],

      ["nz", "NZL", "New Zealand"],

      ["ni", "NIC", "Nicaragua"],

      ["ne", "NER", "Niger"],

      ["ng", "NGA", "Nigeria"],

      ["nu", "NIU", "Niue"],

      ["nf", "NFK", "Norfolk Island"],

      ["mp", "MNP", "Northern Mariana Islands"],

      ["nor", "NOR", "Norway"],

      ["om", "OMN", "Oman"],

      ["pk", "PAK", "Pakistan"],

      ["pw", "PLW", "Palau"],

      ["ps", "PSE", "Palestine, State of"],

      ["pa", "PAN", "Panama"],

      ["pg", "PNG", "Papua New Guinea"],

      ["py", "PRY", "Paraguay"],

      ["pe", "PER", "Peru"],

      ["ph", "PHL", "Philippines"],

      ["pn", "PCN", "Pitcairn"],

      ["pl", "POL", "Poland"],

      ["port", "PRT", "Portugal"],

      ["pr", "PRI", "Puerto Rico"],

      ["qa", "QAT", "Qatar"],

      ["re", "REU", "Réunion"],

      ["ro", "ROU", "Romania"],

      ["ru", "RUS", "Russian Federation"],

      ["rw", "RWA", "Rwanda"],

      ["bl", "BLM", "Saint Barthélemy"],

      ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],

      ["kn", "KNA", "Saint Kitts and Nevis"],

      ["lc", "LCA", "Saint Lucia"],

      ["mf", "MAF", "Saint Martin (French part)"],

      ["pm", "SPM", "Saint Pierre and Miquelon"],

      ["vc", "VCT", "Saint Vincent and the Grenadines"],

      ["ws", "WSM", "Samoa"],

      ["sm", "SMR", "San Marino"],

      ["st", "STP", "Sao Tome and Principe"],

      ["sa", "SAU", "Saudi Arabia"],

      ["sn", "SEN", "Senegal"],

      ["rs", "SRB", "Serbia"],

      ["sc", "SYC", "Seychelles"],

      ["sl", "SLE", "Sierra Leone"],

      ["sg", "SGP", "Singapore"],

      ["sx", "SXM", "Sint Maarten (Dutch part)"],

      ["sk", "SVK", "Slovakia"],

      ["si", "SVN", "Slovenia"],

      ["sb", "SLB", "Solomon Islands"],

      ["so", "SOM", "Somalia"],

      ["za", "ZAF", "South Africa"],

      ["gs", "SGS", "South Georgia and the South Sandwich Islands"],

      ["ss", "SSD", "South Sudan"],

      ["esp", "ESP", "Spain"],

      ["lk", "LKA", "Sri Lanka"],

      ["sd", "SDN", "Sudan"],

      ["sr", "SUR", "Suriname"],

      ["sj", "SJM", "Svalbard and Jan Mayen"],

      ["sz", "SWZ", "Swaziland"],

      ["swe", "SWE", "Sweden"],

      ["ch", "CHE", "Switzerland"],

      ["sy", "SYR", "Syrian Arab Republic"],

      ["tw", "TWN", "Taiwan, Province of China"],

      ["tj", "TJK", "Tajikistan"],

      ["tz", "TZA", "Tanzania, United Republic of"],

      ["th", "THA", "Thailand"],

      ["tl", "TLS", "Timor-Leste"],

      ["tg", "TGO", "Togo"],

      ["tk", "TKL", "Tokelau"],

      ["to", "TON", "Tonga"],

      ["tt", "TTO", "Trinidad and Tobago"],

      ["tn", "TUN", "Tunisia"],

      ["tr", "TUR", "Turkey"],

      ["tm", "TKM", "Turkmenistan"],

      ["tc", "TCA", "Turks and Caicos Islands"],

      ["tv", "TUV", "Tuvalu"],

      ["ug", "UGA", "Uganda"],

      ["ua", "UKR", "Ukraine"],

      ["ae", "ARE", "United Arab Emirates"],

      ["gb", "GBR", "United Kingdom"],

      ["us", "USA", "United States"],

      ["um", "UMI", "United States Minor Outlying Islands"],

      ["uy", "URY", "Uruguay"],

      ["uz", "UZB", "Uzbekistan"],

      ["vu", "VUT", "Vanuatu"],

      ["ve", "VEN", "Venezuela, Bolivarian Republic of"],

      ["vn", "VNM", "Viet Nam"],

      ["vg", "VGB", "Virgin Islands, British"],

      ["vi", "VIR", "Virgin Islands, U.S."],

      ["wf", "WLF", "Wallis and Futuna"],

      ["eh", "ESH", "Western Sahara"],

      ["ye", "YEM", "Yemen"],

      ["zm", "ZMB", "Zambia"],

      ["zw", "ZWE", "Zimbabwe"]

    ];



//all countrycodes with available data

countries = ["ALB", "ARM", "AUT", "BEL", "BLR", "BGR", "CHE", "CZE", "DEU", "DNK", "ESP", "EST", "FIN", "FRA", "GBR", "GRC", "HRV",

"HUN", "IRL", "ITA", "LTU", "LVA", "MDA", "MKD", "NLD", "NOR", "POL", "PRT", "ROU", "SRB", "SVK",

"SVN", "SWE", "UKR"];





d3.json("d3map.json", function(error, json) {

  if (error) return console.warn(error);

  data = json;



      //all variables to be used

      var y_2013_rel = []

      var y_2014_rel = []

      var y_2015_rel = []



      var y_2013_abs = []

      var y_2014_abs = []

      var y_2015_abs = []



      // go through all countries out of json array

      for (i = 0; i < data.length; i++)

      {

        //go through all countries with countrycodes

        for (j = 0; j < country_codes.length; j++)

        {

          //if country names match,

          if (data[i].country === country_codes[j][1])

          {

            //update variables

            y_2013_rel[country_codes[j][1]] = {year: data[i].year2013_rel};

            y_2014_rel[country_codes[j][1]] = {year: data[i].year2014_rel};

            y_2015_rel[country_codes[j][1]] = {year: data[i].year2015_rel};



            y_2013_abs.push({country:data[i].country, year: data[i].year2013_abs});

            y_2014_abs.push({country:data[i].country, year: data[i].year2014_abs});

            y_2015_abs.push({country:data[i].country, year: data[i].year2015_abs});





          }

        }

      }



//function to give every datapoint a fillkey

function fillEU(dataset){

      for (i = 0; i < countries.length; i++) {

        if (dataset[countries[i]].year >= -5 && dataset[countries[i]].year < -0.5)

            dataset[countries[i]]["fillKey"] = '1';

        else if (dataset[countries[i]].year >= -0.5 && dataset[countries[i]].year <0)

            dataset[countries[i]]["fillKey"] = '2';

        else if (dataset[countries[i]].year >= 0 && dataset[countries[i]].year <0.5)

            dataset[countries[i]]["fillKey"] = '3';

        else if (dataset[countries[i]].year >= 0.5 && dataset[countries[i]].year <1)

           dataset[countries[i]]["fillKey"] = '4';

        else if (dataset[countries[i]].year >= 1)

            dataset[countries[i]]["fillKey"] = '5';

  };

}





//create map centered at Europe

  var graph = new Datamap({

          element: document.getElementById("container1"),

          projection: 'mercator',

          setProjection: function(element) {

            var projection = d3.geo.equirectangular()

              .center([10, 52])

              .rotate([4.4, 0])

              .scale(500)

              .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

            var path = d3.geo.path()

              .projection(projection);

            return {path: path, projection: projection};

          },

          // create tooltip

          geographyConfig: {

            highlightBorderColor: '#1702b5',

            popupTemplate: function(geography, data) {

              return '<div class="hoverinfo"><b>' + geography.properties.name + '</b></br> Population growth (%): ' +  data.year + ' '

            },

          highlightBorderWidth: 1

          },

          // fill scale

          fills: {

              '1' : "#E04949",

              '2' : '#E17E7E',

              '3' : '#8DC483',

              '4' : '#60C54E',

              '5' : '#29DA16',

              defaultFill: 'black'

           }

    });







var dataset_rel;

var dataset_abs;

var slide = document.getElementById('slide'),

    sliderDiv = document.getElementById("sliderAmount");



//default year for data

fillEU(y_2013_rel);

graph.updateChoropleth(y_2013_rel);

sliderDiv.innerHTML = "Year: 2013";

MakeBarChart(y_2013_abs);



// on change of slider, refill the countries with colours

slide.onchange = function() {

    sliderDiv.innerHTML = "Year: " + this.value;

    //check which year is given by slider

    if (this.value == 2013){

    dataset_rel = y_2013_rel;

    dataset_abs = y_2013_abs;

    }



    else if (this.value == 2014){

      dataset_rel = y_2014_rel;

      dataset_abs = y_2014_abs;



    }

    else if (this.value == 2015){

      dataset_rel = y_2015_rel;

      dataset_abs = y_2015_abs;

    }

    fillEU(dataset_rel)

    graph.updateChoropleth(dataset_rel)

    MakeBarChart(dataset_abs);



}





//function to create data variable for BarChart

function MakeBarChart(dataset){



  data = dataset;



//create margins

  var margin = {top: 20, right: 30, bottom: 30, left: 40},

      width = 1200 - margin.left - margin.right,

      height = 400 - margin.top - margin.bottom;



  var x = d3.scale.ordinal()

      .rangeRoundBands([0, width], .1);



  var y = d3.scale.linear()

      .range([height, 0]);



  var xAxis = d3.svg.axis()

      .scale(x)

      .orient("bottom");



  var yAxis = d3.svg.axis()

      .scale(y)

      .orient("left");



  var tip = d3.tip()

      .attr('class', 'd3-tip')

      .offset([-10, 0])

      .html(function(d) {

        return "<span id='hover_data'><strong>Country: </strong>" + d.country + "<br><strong>Population: </strong>" + d.year+"</span>";

      });



//create new svg

d3.select("#barchart").selectAll("svg").remove();

var chart = d3.select("#barchart")

                  .append("svg")

                    .attr("class", "chart")

                    .attr("width", width + margin.left + margin.right)

                    .attr("height", height + margin.top + margin.bottom)

                  .append("g")

                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



  chart.call(tip);

  x.domain(data.map(function(d) { return d.country; }));

  y.domain([0, d3.max(data, function(d) { return parseFloat(d.year/1000000+10); })]);



  chart.append("g")

        .attr("class", "x axis")

        .attr("transform", "translate(0," + height + ")")

        .call(xAxis);



  chart.append("g")

        .attr("class", "y axis")

        .call(yAxis);



  chart.selectAll(".bar")

        .data(data)

      .enter().append("rect")

        .attr("class", "bar")

        .attr("x", function(d) { return x(d.country); })

        .attr("y", function(d) {return y(parseFloat(d.year/1000000)); })

        .attr("height", function(d) { return height - y(parseFloat(d.year/1000000)); })

        .attr("width", x.rangeBand())



        .on('mouseover', tip.show)

        .on('mouseout', tip.hide);



       d3.selectAll('.x .tick')

        .data(data)

        .on('mouseover', tip.show)

        .on('mouseout', tip.hide);





  function type(d) {

    d.value = +d.value; // coerce to number

    return d;

  }

}

});

