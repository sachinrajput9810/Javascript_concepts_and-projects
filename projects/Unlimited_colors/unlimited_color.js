

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
