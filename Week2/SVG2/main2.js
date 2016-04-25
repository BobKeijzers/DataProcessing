/* <!-- Data Processing week 2 SVG1
Bob Keijzers 11201800 -->*/

/*/* use this to test out your function */
// Array that contains the countries and data in JSON.
var countries = [["ie", "1.20"], 
["no", "1.19"],
["es", "0.81"],
["is", "0.65"],
["swe", "0.57"],
["gb", "0.56"],
["fra", "0.45"],
["ita", "0.30"],
["nld", "0.37"],
["nor", "0.22"],
["al", "0.27"],
["den", "0.22"],
["mk", "0.25"],
["pt", "0.21"],
["ch", "0.21"],
["sk", "0.12"],
["gr", "0.01"],
["fi", "0.05"],
["be", "0.07"],
["at", "0.03"],
["ba", "0.01"],
["pl", "-0.06"],
["md", "-0.07"],
["hr", "-0.12"],
["cz", "-0.12"],
["si", "-0.16"],
["hu", "-0.17"],
["dui", "-0.18"],
["ro", "-0.25"],
["lt", "-0.28"],
["by", "-0.36"],
["rs", "-0.47"],
["lv", "-0.60"],
["ua", "-0.62"],
["ee", "-0.74"],
["bg", "-0.78"]];

//Array that contains the colors.
color = ["#E04949","#E17E7E","#8DC483","#60C54E","#29DA16"]

//Function that initiates change color function.
window.onload = function() {
 	 changeColor(countries, color);
}

 //changeColor takes a path ID and a color (hex value)
 //and changes that path's fill color 

function changeColor(id, color) {
	//iterate over country array
	for (var i = 0; i < countries.length; i++) {
		var country = document.getElementById(countries[i][0])
			//coloring
			if (countries[i][1] >= -5 && countries[i][1] < -0.5){ 	
				country.style.fill = color[0] 
			}
			else if (countries[i][1] >=-0.5 && countries[i][1] < 0){
				country.style.fill = color[1] 
			}    
			else if (countries[i][1] >=0 && countries[i][1] < 0.5){
				country.style.fill = color[2] 	
			}  
			else if (countries[i][1] >=0.5 && countries[i][1] < 1){
				country.style.fill = color[3] 
			}
			else if (countries[i][1] >=1 && countries[i][1] < 5){
				country.style.fill = color[4] 
			}
		}
}
