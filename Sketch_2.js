function setup() { 
  createCanvas(400, 400);

} 
function draw() { 
	background(255)
	var a= mouseX
	var b= mouseY
	if (a>200) {
	
	ellipse(a,b,70,70)
	
	ellipse(a+12,b-12,15,15)
	
	ellipse(a-12,b-12,15,15)
	
	arc(a,b+5,12,12,TWO_PI,PI)
		
} else {
		
  	
  	ellipse(a,b,70,70)
	
		ellipse(a+12,b-12,15,15)
	
		ellipse(a-12,b-12,15,15)
	
  arc(a,b+15,12,12,PI,TWO_PI)
		

}

}
