# M4: CasualCreator
Github repo link: https://github.com/amonaghan715/M4_CasualCreator.git

**The Magic Easel**

Welcome to the Magic Easel, your tool for relaxing and creating beautiful art! The Magic Easel is a tool to help users draw anything they want using its built in brush and color tools. The selectors and sliders can be combined to create thousands of different drawing experiences, so users can play and draw to their hearts' content. A user can draw anything they want, erase if they make a mistake, clear the canvas if they feel like starting over, or take a screenshot to show off their amazing creation.

Author: Anna Monaghan

Course: Computational Creativity CSCI 3725

Date 12/18/25

# Table of Contents
**index.html**: An HTML file containing the code needed to translate the tool from the sketch.js file and display it in a browser.

**sketch.js**: A JavaScript file containing all of the code to create the Magic Easel.

# Installation Instructions and Requirements
To run this program on your own machine:
1) Download the files
2) Navigate to where index.html is stored
3) Open index.html in your browser**

**Note: For best experience and to prevent toolbar difficulties, I would strongly advise using the Magic Easel with your browser in full screen mode.

# Tools and Controls
**Clear**  This button erases the canvas entirely for the user to start over.

**Brush selection**  This dropdown contains all of the tool options for the user to draw with:
- Line - Draws a line following the mouse.
- Dots - Draws dots following the mouse.
- Sparkles - Draw sparkles following the mouse. The sparkles are drawn using bezier vertices.
- Triangles - Draws triangles following the mouse.
- Squares - Draws squares following the mouse.
- Flowers - Draws flowers following the mouse. The flowers have a random rotation pattern to increase visual interest.
- Eraser - A line tool that matches the color of the background.

**Select draw mode**  This dropdown contains the two drawing mode options:
- Draw on click - Draws on the canvas only when mouse is begin pressed. This is the default draw mode option.
- Stop on click - Draws only when the mouse is not being pressed. This mode enables a smoother drawing experience but the user has slightly less control (I prefer this one!).

**Color selection**  This dropdown contains the options for how the draw color is selected:
- Change background - Allows the user to change the color of the background using the red, green, and blue color sliders. This is the default color mode option. When selected, 'Change background' clears the canvas of anything drawn so far.
- Color adjustment - Allows the user to select and adjust their line color using the red, green, and blue color sliders.
- Rainbow gradient - Controls the draw color to create a smooth rainbow gradient.
- Cool gradient - Controls the draw color to create a smooth gradient in greens, blues, and purples.
- Warm gradient - Controls the draw color to create a smooth gradient in reds, oranges, and yellows.
- Random colors - Selects a new color each time the draw() function runs by randomizing the red, green, and blue values.

**Thickness** This slider adjusts the weight of the line (or the size of the shape, in shape brush cases).

**Red**  This slider adjusts the red value present in the draw color.**

**Green**  This slider adjusts the green value present in the draw color.**

**Blue**  This slider adjusts the blue value present in the draw color.**

**Jitter**  This slider adjusts how closely the drawn shapes follow the mouse path (not enabled for the 'Line' tool).

**Scale variation**  This slider adjusts how widely the drawn shapes vary in size from the set weight/thickness (not enabled for the 'Line' tool).

**Note: The color sliders are only effective in the 'Change background' and 'Color adjustment' modes. When color sliders are enabled, a color preview will be shown in the top right corner of the window.

# Personal Meaning
When I find myself incredibly stressed out or overwhelmed, my go to activity has always been to grab a piece of paper and doodle. I don't draw anything in particular--just lines and shapes and patterns--but it always helps me shut my brain off and relax for a bit. As I was attempting to brainstorm ideas for this project, I found myself overwhelmed by the possibilities and the work that I knew it would take to create a product that I was proud to turn in. I turned to my trusty destressing method, and voila! I had my idea. During reading period in particular, I feel like everyone is so stressed all the time, and I wanted to make a way for people to be able to turn off their brains and relax for a bit. Thus, I took my little coping strategy and brought it to life on my computer. I have shared it with/tested it on a few friends already (see the photos included in the repo for screenshots of the work they were excited to share!), and was able to give them a brief respite from their work and stress with a bit of fun and satisfying drawing. In a way, I feel like the creation of this project has been a kind of casual creator in itself for me: I had tons of fun creating and refining it, I found p5.js to be a smooth experience that gave me immediate feedback, and I am super proud and excited to share what I have created with friends and family (I already sent my family the link).

# Challenging Myself With This System

# AI Usage Statement
ChatGPT 5.2 was used in this project to assist with equations for computing RGB and HSB values for colors and gradients.

Prompts used:
- How can I find the opposite of a color based on rgb values?
- How would I find the values for a cool color gradient that cycles?
- How would I do the same for a warm color gradient?
