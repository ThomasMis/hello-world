//
// Thomas Mis
// Creative Coding
// Fall 2023
// Assignment 2: Hello World
//
// This sketch defines a simple san serif typeface
// and displays the word HELLO. I will admit that I
// originally intended to display the complete phrase
// HELLO WORLD, but creating R and D characters that
// looked good on screen was going to take more time
// than I was willing to dedicate to this project.
//
// The program uses the rect() and circle() functions
// to define each glyph. It also leverages changing the
// default color blending mode to combine CYAN, MAGENTA,
// and YELLOW. The result of this blending is going to
// be a WHITE font - fun with color theory!
//
// To make the final visual more interesting, I played
// around with adding randomness. Hopefully the
// animated effect is not too vomit inducing.
//

function setup() {
    //
    // The default frame rate was headache inducing.
    // Slowing the bouncing effect down to 12 fps
    // resulted in a more tolerable animation.
    //
    frameRate(12);
    createCanvas(1280, 320);
}

function draw() {
    clear();
    background(0);
    noStroke();
    blendMode(SCREEN);

    //
    // Yellow
    //
    fill(255, 255, 0);
    drawHello(100 + random(4), 100 + random(4));

    //
    // Cyan
    //
    fill(0, 255, 255);
    drawHello(100 + random(4), 100 + random(4));

    //
    // Magenta
    //
    fill(255, 0, 255);
    drawHello(100 + random(4), 100 + random(4));
}

//
// Draw the word HELLO.
//
function drawHello(x, y) {
    //
    // Notes for the casual code reviewer:
    // The typographical terms stem, bar, and
    // arm describe different kinds of vertical
    // and horizontal strokes that define the
    // glyphs of a font.
    //
    // Calculating the horizontal offset of
    // the characters in the word HELLO uses
    // both the characterWidth and spaceWidth
    // constant values. These were kept separate
    // so that it was easier to experiment with
    // finding a spacing value that looked good.
    //
    // Finally, the astute observer will notice
    // that I am playing with the kerning between
    // the final L and O characters. Having a
    // completely monospace font did not look
    // good on the screen.
    //
    const stemWidth = 40;
    const stemHeight = 120;
    const barWidth = 40;
    const barHeight = 30;
    const armWidth = 80;
    const armHeight = 30;
    const characterWidth = 120;
    const spaceWidth = 30;
    const heightOffset = 45;

    drawShapeH(x, y);
    drawShapeE(x + characterWidth + spaceWidth, y);
    drawShapeL(x + 2 * (characterWidth + spaceWidth), y);
    drawShapeL(x + 3 * (characterWidth + spaceWidth), y);
    drawShapeO(x + 3.9 * (characterWidth + spaceWidth), y);

    //
    // Draw an uppercase H.
    //
    function drawShapeH(x, y) {
        rect(x, y, stemWidth, stemHeight);
        rect(x + stemWidth, y + heightOffset, barWidth, barHeight);
        rect(x + (stemWidth + barWidth), y, stemWidth, stemHeight);
    }

    //
    // Draw an uppercase E.
    //
    function drawShapeE(x, y) {
        rect(x, y, stemWidth, stemHeight);
        rect(x + stemWidth, y, armWidth, armHeight);
        rect(x + stemWidth, y + heightOffset, armWidth, armHeight);
        rect(x + stemWidth, y + 2 * heightOffset, armWidth, armHeight);
    }

    //
    // Draw an uppercase L.
    //
    function drawShapeL(x, y) {
        rect(x, y, stemWidth, stemHeight);
        rect(x + stemWidth, y + 2 * heightOffset, armWidth, armHeight);
    }

    //
    // Draw an uppercase O.
    //
    function drawShapeO(x, y) {
        var circleOffset = stemHeight / 2;
        circle(x + circleOffset, y + circleOffset, stemHeight);
    }
}
