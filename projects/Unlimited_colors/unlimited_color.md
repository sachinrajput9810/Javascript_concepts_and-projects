# Unlimited Color

## Project Code


``` HTML Code
// HTML Code
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Unlimited Colors</title>
</head>
<body style="background-color: grey;">
	<h1>Click on start to start changing the colors </h1>
	<button id="start" style="border-radius: 10px; width: 100px; height: 40px; font-size: larger;">Start</button>
	<button id="stop" style="border-radius: 10px; width: 100px; height: 40px; font-size: larger;">Stop</button>

</body>
<script src="unlimited_color.js">	
</script>
</html> 


```


``` Javascript  
// Javascript Code


let randomColor = function(){
	let hexString = "0123456789ABCDEF"
	let hexCode = '#' ;
	for(let i=0 ; i < 6 ; i++){
		hexCode += hexString[Math.floor( Math.random()*16 ) ] ;
	}
	return hexCode ;
}

// console.log(randomColor())


let interval ;
let startColorChange = function(){
	if(!interval) interval = setInterval(colorChange , 1000) ;

	function colorChange(){
		document.body.style.backgroundColor = randomColor() ;
	}
} 


let stopColorChange = function(){
	clearInterval(interval)
	interval = null ;
} ;




document.querySelector("#start").addEventListener('click' , startColorChange) ;
document.querySelector("#stop").addEventListener('click' , stopColorChange) ;



```