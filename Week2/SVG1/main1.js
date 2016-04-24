// <!-- Data Processing week 2 SVG1
// Bob Keijzers 11201800 -->   

        /* use this to test out your function */

 function start() {
 	changeColor('nor', '#0000FF');
	changeColor('nld', '#b00125');
	changeColor('dui', '#00FF00');
	changeColor('fra', '#502d17');
};

 window.onload = start;
/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */


function changeColor(id, color) {
	document.getElementById(id).style.fill = color;
}
