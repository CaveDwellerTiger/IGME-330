import {getRandomColor, getRandomInt} from "./utils.js";
import {drawRectangle, drawArc, drawLine} from "./canvas-utils.js";

// #0 - in this class we will always use ECMAScript 5's "strict" mode
		// See what 'use strict' does here:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
	
		let ctx;
		let paused = false;
		let canvas;
		let createRectangles = true;
		let createArcs = false;
		let createLines = false;
		let running = false;

		const init = () => {
			console.log("page loaded!");
			// #1 Now that the page has loaded, start drawing!
			
			// A - `canvas` variable points at <canvas> tag
			canvas = document.querySelector("canvas");
			
			// B - the `ctx` variable points at a "2D drawing context"
			ctx = canvas.getContext("2d");

			// Giant red rectangle, main "screensaver"
			drawRectangle(ctx, 20, 20, 600, 440, "red", 0);
			
			// Giant green rectangle
			drawRectangle(ctx, 120, 120, 400, 300, "green", 10, "black");

			// Lime green square in the top left
			drawRectangle(ctx, 20, 20, 40, 40, "#00FF00", 0);
			
			// Left middle black line, left "whisker"
			drawLine(ctx, 0, 300, 300, 300, 3);

			// "New" purple rectangle
			drawRectangle(ctx, 350, 350, 200, 280, "purple", 0);

			// New blue outline rectangle using strokeRect()
			ctx.strokeStyle = "blue";

			ctx.strokeRect(380, 150, 200, 100);

			// We don't have a drawStrokeRect function so this one will stay the same


			// ------ Circles ------
            // // Pink Regular circle
			drawArc(ctx, 110, 50, 40, "pink", 5);

			// Pink semi-circle
			drawArc(ctx, 200, 50, 40, "pink", 5, "black", 0, Math.PI);

			// Left eye
			drawArc(ctx, 300, 220, 20, "white", 5);

			// Right eye
			drawArc(ctx, 360, 220, 20, "white", 5);


			// ---- One line ----
            // // Right middle black line, right "whisker"
			drawLine(ctx, 360, 300, 640, 300, 3);

            
			// --- cs-canvas-5 stuff ---
			drawArc(ctx,100,100,50,"green",10,"pink",0,Math.PI);
			drawLine(ctx,0,100,640,300);
			drawLine(ctx,0,100,640,300,10,"coral");

			// C - all fill operations are now in red
			ctx.fillStyle = "red"; 
			
			// D - fill a rectangle with the current fill color

			setupUI();
		}

		const setupUI = () => {
			document.querySelector("#btn-play").onclick = () => {
				if (!running){
					paused = false;
					running = true;
					update();
				}
			}
			document.querySelector("#btn-pause").onclick = () => {
				running = false;
				paused = true;
			}

			document.querySelector("#btn-clear").onclick = () => {
				ctx.clearRect(0, 0, 640, 480);
				ctx.fillStyle = "red";
				ctx.fillRect(20, 20, 600, 440);
			}

			canvas.onclick = canvasClicked;

			document.querySelector("#cb-rectangles").onclick = (e) => {
				createRectangles = e.target.checked;
			};

			document.querySelector("#cb-arcs").onclick = (e) => {
				createArcs = e.target.checked;
			}

			document.querySelector("#cb-lines").onclick = (e) => {
				createLines = e.target.checked;
			}
		}

		const drawRandomRect = (ctx) => {
			drawRectangle(ctx, getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(0, 90), getRandomInt(0, 90), getRandomColor(), getRandomInt(2, 12), getRandomColor());
		}

		const drawRandomArc = (ctx) => {
			drawArc(ctx, getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(0, 45), getRandomColor(), getRandomInt(2, 12), getRandomColor(), getRandomInt(0, Math.PI), getRandomInt(Math.PI, Math.PI * 2));
		}

		const drawRandomLine = (ctx) => {
			drawLine(ctx, getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(0, 640), getRandomInt(0, 480), getRandomInt(2, 12), getRandomColor());
		}

		const canvasClicked = (e) => {
			let rect = e.target.getBoundingClientRect();
			let mouseX = e.clientX - rect.x;
			let mouseY = e.clientY - rect.y;
			console.log(mouseX, mouseY);
			for(let i=0; i < 10; i++){
				let x = getRandomInt(-100, 100) + mouseX;
				let y = getRandomInt(-100, 100) + mouseY;
				let radius = getRandomInt(10, 25);
				let color = getRandomColor();
				drawArc(ctx, x, y, radius, color)
			}
		}

		const update = () => {
			if (paused) { return; }
			requestAnimationFrame(update);
			if (createRectangles) drawRandomRect(ctx);
			if (createArcs) drawRandomArc(ctx);
			if (createLines) drawRandomLine(ctx);
		}

		// #3 Call init
		init();