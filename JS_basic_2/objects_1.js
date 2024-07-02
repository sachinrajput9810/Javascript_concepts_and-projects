let obj = {}
obj.name = "sachin" ;
obj.age = 23 ;
obj.batch = 2023 ;
// console.log(obj)

let myObj = {
	firstName : "Sachin" ,
	lastName : "Rajput" ,
	address : "Ghaziabad" ,
	fullName : function(){
		return this.firstName + " " + this.lastName ;
	} ,
	days : ["Monday" , "Tuesday"] ,
	"full name" : "Sachin Rajput" ,
}

// console.log(myObj["full name"]) ;

// IMP USE OF SYMBOLS (primitive data type in object) 
// We need , to use [] for accessing the symbol in the object
let mySymbol = Symbol("key") ;
let obj1 = {
	name : "sachin" ,
	batch : 2023 ,
	location : "delhi" ,
	[mySymbol] : "rajput" ,
}
// console.log(obj1)
// obj1.location = "UP" ;
// Object.freeze(obj1) ;   // to freeze the changes in the object
obj1.location = "Haryana" ;

obj1.spark = function(){
	console.log("sprinkle the sparkel")
}

obj1.greeting = function(){
	console.log(`Hello my obj1 my name is ${this.name}`)
}

console.log(obj1.greeting()) ;









