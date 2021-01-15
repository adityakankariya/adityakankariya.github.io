function setup() {
	createCanvas(600, 600); // make an HTML canvas element width x height pixels
	noStroke();
  }
  
function draw() {
	if(second() == 0) {
		print('The value of minute() is ' + minute());
		setup()
	}

	var s = map(second(), 0, 60, 0, TWO_PI); // Maps seconds between 0 and 2pi radians for the ring
	var m = map(minute(), 0, 60, 0, TWO_PI);
	var h = map(hour(), 0, 24, 0, TWO_PI);

	fill(98, 168, 229);
	arc(width/2, height/2, 500, 500, -HALF_PI, -HALF_PI + s); // Ring for seconds
	fill(255);
	circle(width/2, height/2, 425);
	fill(0, 51, 102);
	arc(width/2, height/2, 425, 425, -HALF_PI, -HALF_PI + m); // Ring for minutes
	fill(255);
	circle(width/2, height/2, 350);
	fill(150);
	arc(width/2, height/2, 350, 350, -HALF_PI, -HALF_PI + h); // Ring for hours
	
	fill(240);
	circle(width/2, height/2, 275); // Circle in the middle
	
}
