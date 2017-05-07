function setup() { 
  createCanvas(400, 400);
} 

function draw() { 

	var a= mouseX
	var b= mouseY

	
	ellipse(a,b,75,75)
  fill (200,100,0)
	
	ellipse(a-14,b-14,15,15)
  
  ellipse(a+14,b-14,15,15)
	
  arc(a,b+5,22,22,TWO_PI,PI)
}
