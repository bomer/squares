/* Globals*/
		var ONE_FRAME_TIME = 1000 / 60 ;
		/*  */
		function init(){

		}

		
		function mainLoop() {
			console.log("Logic");

		}
		


		/* Drawing */
		function draw(){

			window.requestAnimationFrame(draw);
		}

		/* Loops*/
		setInterval(mainLoop, ONE_FRAME_TIME); 
		window.requestAnimationFrame(draw);
		