function setup() { 
  createCanvas(400, 400);

} 


var a= 200
var b= 200
var c= 3
 
function draw() { 
	background(255)
	if(a < 400) {
	
	ellipse(a,b,50,50)
	
	a=a+c
 } else {

   ellipse(a,b,50,50)
	 a=a-300
 
 }
 }
