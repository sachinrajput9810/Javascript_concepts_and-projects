let body = document.querySelector('body') ;
let buttons = document.querySelectorAll('.button') ;

buttons.forEach((btn) =>{
	btn.addEventListener('click' , function(event){
		// console.log(event)
		// console.log(event.target)
		if(event.target.id === 'grey'){
			body.style.backgroundColor =  event.target.id ;
		}
		if(event.target.id === 'blue'){
			body.style.backgroundColor =  event.target.id ;
		}
		if(event.target.id === 'yellow'){
			body.style.backgroundColor =  event.target.id ;
		}
		if(event.target.id === 'white'){
			body.style.backgroundColor =  event.target.id ;
		}
		if(event.target.id === 'purple'){
			body.style.backgroundColor =  event.target.id ;
		}
	}) ;
}) ;