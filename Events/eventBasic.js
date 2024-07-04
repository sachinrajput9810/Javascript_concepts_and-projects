// document.querySelector("#event").addEventListener('click' , function(e){
// 	console.log(e)
// })

// Important topics
// type , timestamp , defaultPrevented
// target , toElement , srcElement , currentTarget
// clientX , clientY , screenX , screenY
// altKey , CtrlKey , shiftKey , keyCode


// event propagation -> bubbling(default) and capturing (with true value)

// document.querySelector("#one").addEventListener('click',function(e){
// 	console.log(e)
// 	console.log("clicked one")
// 	e.stopPropagation() ;
// } , false)

// document.querySelector("#outside").addEventListener('click',function(e){
// 	console.log("clicked outside")

// } , false)


// to remove the block on clicking it
document.querySelector("#outside").addEventListener('click', function(e){
	console.log(e.target.parentNode)
	e.target.remove() ;
})