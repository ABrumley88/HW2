
function setup() { 
  createCanvas(400, 400);
} 
var a= 200
var b= 200
var c= 3
 
function draw() { 
	background(255)
	
	ellipse(a,b,50,50)
	
	if(a>400) {
		c=-3
} else 
	
	
  if(a<0) {
	c=3

  }
	a=a+c
}
