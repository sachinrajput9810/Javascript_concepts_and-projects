function sum(num1 , num2){   // we say parameters in case of fun declaration
	return (num1 + num2) ;
}

// console.log(sum(2,3))  // we call arguments in case of function call

// login message

function loginUserMessage(userName = "Alexa"){  // default username passed in case argument isnt passed into the function 
	if(!userName){
		return "Apna name enter karo"
	}
	return (`${userName} just logged into the system`) ;
}

const response =  loginUserMessage("Albert Newton") ;
console.log(response)