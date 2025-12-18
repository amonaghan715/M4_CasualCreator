let toolSelect;
let tool;
let modeSelect;
let mode;
let colorSelect
let coloring;
let weightSlider;
let thickness;

let backR = 0;
let backG = 0;
let backB = 0;
let rSlider;
let gSlider;
let bSlider;
let sRed;
let sGreen;
let sBlue;

let jSlider;
let jitterVal;
let varSlider;
let scaleVar;

let needJitter = false;
let jitterTools = ['Dots', 'Sparkles', 'Triangles', 'Squares', 'Flowers'];
let lineTools = ['Line', 'Eraser'];

let drawCol;
let hueVal = 0;
let overallAngle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background(backR, backG, backB);

	// Create button to clear canvas.
	let deleteButton = createButton('Clear');
	deleteButton.position(20, 23);
	deleteButton.mouseClicked(clearWork);

	// Make tool dropdown.
    toolSelect = createSelect();
	toolSelect.position(84, 23);
	toolSelect.option('Select brush');
	toolSelect.option('Line');
	toolSelect.option('Dots');
	toolSelect.option('Sparkles');
	toolSelect.option('Triangles');
	toolSelect.option('Squares');
	toolSelect.option('Flowers');
	toolSelect.option('Eraser');
	tool = toolSelect.selected('Select brush');

	// Made draw mode dropdown.
	modeSelect = createSelect();
	modeSelect.position(192, 23);
	modeSelect.option('Select draw mode');
	modeSelect.option('Draw on click');
	modeSelect.option('Stop on click');
	mode = modeSelect.selected('Select draw mode');

	// Make color mode dropdown.
	colorSelect = createSelect();
	colorSelect.position(329, 23);
	colorSelect.option('Change background');
	colorSelect.option('Color adjustment');
	colorSelect.option('Rainbow gradient');
	colorSelect.option('Cool gradient');
	colorSelect.option('Warm gradient');
	colorSelect.option('Random colors');
	coloring = colorSelect.selected('Change background')

	// Make slider for brush thickness.
	weightSlider = createSlider(1, 200, 20);
	weightSlider.position(485, 27);
    weightSlider.style('width', '120px')
	thickness = weightSlider.value();

	// Make slider for red value.
	rSlider = createSlider(0, 255, 0);
	rSlider.position(625, 27);
    rSlider.style('width', '120px')
	sRed = rSlider.value();

	// Make slider for green value.
	gSlider = createSlider(0, 255, 0);
	gSlider.position(765, 27);
    gSlider.style('width', '120px')
	sGreen = gSlider.value();

	// Make slider for blue value.
	bSlider = createSlider(0, 255, 0);
	bSlider.position(905, 27);
    bSlider.style('width', '120px')
	sBlue = bSlider.value();

	// Make a slider for jitter value.
	jSlider = createSlider(0, 100, 0);
	jSlider.position(1045, 27);
    jSlider.style('width', '120px')
	jitterVal = jSlider.value();

	// Make a slider for scale variation value.
    varSlider = createSlider(0, 100, 50);
	varSlider.position(1185, 27);
    varSlider.style('width', '120px')
	scaleVar = varSlider.value();

	writeStart();
}

function draw() {	
	// Assign variables according to selections.
	tool = toolSelect.selected();
	mode = modeSelect.selected();
	coloring = colorSelect.selected();
	thickness = weightSlider.value();

	// Draw a blank tool panel to begin.
	noStroke();
	fill(255);
	rect(0, 0, windowWidth, 55);

	// Adjust drawCol according to coloring mode selection.
	if (coloring == 'Change background') {
		tool = toolSelect.selected('Select brush');
		backR = rSlider.value();
		backG = gSlider.value();
		backB = bSlider.value();
		background(backR, backG, backB);

		// Redraw tool panel and start message on new background.
        writeStart();
		noStroke();
		fill(255);
		rect(0, 0, windowWidth, 55);
	} else if (tool == 'Eraser') {
        drawCol = color(backR, backG, backB);
    } else if (coloring == 'Rainbow gradient') {
		push();
		colorMode(HSB, 360, 100, 100);
		drawCol = color(hueVal, 90, 100);
		pop();
	} else if (coloring == 'Cool gradient') {
		drawCol = coolColorCycle(hueVal / 360);
	} else if (coloring == 'Warm gradient') {
		drawCol = warmColorCycle(hueVal / 360)
	} else if (coloring == 'Random colors') {
		sRed = random(0, 255);
		sGreen = random(0, 255);
		sBlue = random(0, 255);
		drawCol = color(sRed, sGreen, sBlue);
	} else {
		sRed = rSlider.value();
		sGreen = gSlider.value();
		sBlue = bSlider.value();
		drawCol = color(sRed, sGreen, sBlue);
	}

	// Run drawing function based on tool selection.
	if (lineTools.includes(tool)) {
		drawWithLine();
		needJitter = false;
	} else if (jitterTools.includes(tool)) {
		drawWithShape();
		needJitter = true;
	}

	// Set jitter and scale variation to 0 when not in use.
	if (!needJitter) {
		jSlider.value(0);
		jitterVal = jSlider.value();
		varSlider.value(0);
		scaleVar = varSlider.value();
	} else {
		scaleVar = varSlider.value();
	}

    // Display slider labels.
	noStroke();
	fill(20);
	textSize(11);
	textAlign(LEFT);
	text('Thickness: ' + thickness, 485, 18)
	text('Red: ' + sRed, 625, 18);
	text('Green: ' + sGreen, 765, 18);
	text('Blue: ' + sBlue, 905, 18);
	text('Jitter: ' + jitterVal, 1045, 18);
	text('Scale variation: ' + scaleVar, 1185, 18);

	// Draw color preview circle if colors are adjustable, erase if not.
	if (coloring == 'Color adjustment' || coloring == 'Change background') {
		strokeWeight(1);
		stroke(0);
		fill(sRed, sGreen, sBlue);
	} else {
		strokeWeight(1);
		stroke(255);
		fill(255);
	}
	circle(windowWidth - 40, 27, 30);
}

// Display the start message until canvas is cleared.
function writeStart() {
	sRed = rSlider.value();
	sGreen = gSlider.value();
	sBlue = bSlider.value();

	stroke(218, 112, 214);
	strokeWeight(2);
	fill(255);
	fill(sRed, sGreen, sBlue);
	
	textAlign(CENTER);
	textSize(40);
	text("Welcome to the Magic Easel!", width / 2, (height / 2) - 20)

	textSize(30);
	text("Make a brush selection to begin", width / 2, (height / 2) + 15);

	stroke(255);
	strokeWeight(1);
	textSize(18);
	text("Press the spacebar to take a screenshot!", width / 2, (height / 2) + 40);
}

// Use HSB mode to cycle through cool colors, skipping ugly/muddy shades.
function coolColorCycle(t) {
	push();
	colorMode(HSB, 360, 100, 100);
	let h = 230 + 60 * sin(360 * t);
	let s = 85;
	let b = 88 + 7 * sin(360*(t + 0.25));
	let c = color(h, s, b);
	pop();

	return c;
}

// Prevent drawing on the toolbar.
function canDrawHere(y) {
    return y > 55;
}

// Use HSB mode to cycle through warm colors, skipping ugly/muddy shades.
function warmColorCycle(t) {
	push();
	colorMode(HSB, 360, 100, 100);
	let h = 20 + 35 * sin(360 * t);
	h = (h + 360) % 360;
	let s = 85;
	let b = 90 + 5 * sin(360 * (t + 0.15));
	let c = color(h, s, b);
	pop();

	return c;
}

function drawWithLine() {
	strokeWeight(thickness);
	stroke(drawCol);

	if (mode == 'Stop on click') {
		if (!mouseIsPressed && canDrawHere(mouseY)) {
			line(pmouseX, pmouseY, mouseX, mouseY);
		}
	} else {
		if (mouseIsPressed && canDrawHere(mouseY)) {
			line(pmouseX, pmouseY, mouseX, mouseY);
		}
	}
	hueVal = (hueVal + 1) % 360;
}

function drawWithShape() {
	if (mode == 'Stop on click') {
		if (!mouseIsPressed && canDrawHere(mouseY)) callTool();
	} else {
		if (mouseIsPressed && canDrawHere(mouseY)) callTool();
	}
	hueVal = (hueVal + 1) % 360;
}

// Call the correct shape function based on the current tool.
function callTool() {
    // Create offset variables for x and y based on jitter percentage.
    jitterVal = jSlider.value();
    let operator = random([-1, 1]);
	let offsetX = random(0, windowWidth / 5) * (jitterVal / 100) * operator;
	let offsetY = random(0, windowHeight / 5) * (jitterVal / 100) * operator;

	if (tool == 'Dots') dot(offsetX, offsetY);
	else if (tool == 'Sparkles') sparkle(offsetX, offsetY);
	else if (tool == 'Triangles') drawTriangle(offsetX, offsetY);
	else if (tool == 'Squares') drawSquare(offsetX, offsetY);
	else if (tool == 'Flowers') flower(offsetX, offsetY);
}

function dot(offX, offY) {
	// Pick a random scale for the dot within the range set by the slider.
	let variation = varSlider.value() / 100;
	let dotScale = random(1-variation, 1);

	noStroke();
	fill(drawCol);
	circle(mouseX + offX, mouseY + offY, thickness * dotScale)
}

function sparkle(offX, offY) {
	push();

	// Move all drawing commands to follow mouse position.
	translate(mouseX + offX, mouseY + offY);

	let variation = varSlider.value() / 100;
	let starScale = (thickness / 100) * random(1-variation, 1);
	scale(starScale);

	noStroke();
	fill(drawCol);
	beginShape();
	
	vertex(0, -100);
	bezierVertex(0, -50, 50, 0, 100, 0);
	bezierVertex(50, 0, 0, 50, 0, 100);
	bezierVertex(0, 50, -50, 0, -100, 0);
	bezierVertex(-50, 0, 0,-50, 0,-100);
	
	endShape();
	pop();
}

function drawTriangle(offX, offY) {
	let variation = varSlider.value() / 100;
	let triScale = (thickness / 100) * random(1-variation, 1);

	push();
	
	translate(mouseX + offX, mouseY + offY);
	scale(triScale);
	
	noStroke();
	fill(drawCol);
	triangle(0, -50, -50, 50, 50, 50);
	
	pop();
}

function drawSquare(offX, offY) {
	let variation = varSlider.value() / 100;
	let dotScale = random(1-variation, 1);

	noStroke();
	fill(drawCol);
	square(mouseX + offX, mouseY + offY, thickness * dotScale)
}

function flower(offX, offY) {
	let variation = varSlider.value() / 100;
	let circScale = (thickness / 100) * random(1-variation, 1);

	push();

	translate(mouseX + offX, mouseY + offY);
	// Add rotation to make the flowers appear more variable.
	rotate(overallAngle);
	scale(circScale);

	beginShape();
	
	noStroke();
	fill(drawCol);
	ellipse(0, 0, 100, 50);
	rotate(60);
	ellipse(0, 0, 100, 50);
	rotate(-120);
	ellipse(0, 0, 100, 50);
	
	fill(oppColor());
	circle(0, 0, 35);
	
	endShape();

	overallAngle += 20;
	
	pop();
}

function oppColor() {
	push();
	colorMode(RGB, 255);
	let c = color(backR, backG, backB);

	colorMode(HSB, 360, 100, 100);
	let h = (hue(c) + 180) % 360;
	let s = saturation(c);
	let b = brightness(c);

	let oppCol = color(h, s, b);

	if ((backR + backG + backB) < 10) {
		oppCol = 255;
	} else if ((backR + backG + backB) > 750) {
		oppCol = 0;
	}
	pop();
	
	return oppCol;
}

// Take a screenshot if the spacebar is pressed.
function keyPressed() {
	if (keyCode == 32) {
		save('magic-brush.png');
	}
}

function clearWork() {
	colorMode(RGB, 255);
	background(backR, backG, backB);

	noStroke();
	fill(255);
	rect(0, 0, windowWidth, 55);
}
