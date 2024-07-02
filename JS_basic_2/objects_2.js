// const tinderUser = new Object() ;
// console.log(tinderUser)

let userDetail = {
	email : "email@gmail.com" ,
	myFullName : {
		nickName : {
			firstName : "Sachin" ,
			lastName : "Rajput" ,
		}
	}
}

// console.log(userDetail.myFullName?.nickName.lastName)

// MERGE OBJECTS
const obj1 = {1 : 'a' , 2 : 'b' } ;
const obj2 = {4 : 'd' , 5 : 'e' } ;
const obj3 = {7 : 'g' , 8 : 'h'} ;

let combine = Object.assign( obj1 , obj2 , obj3) ;
// console.log(combine === obj1) ;

// combine using spread
let spread = {...obj1 , ...obj2 , ...obj3} ;
// console.log(spread)


const users = [
	{
		name : "sachin" ,
		rollno : 34 ,
	} ,
	{
		name : "raj" ,
		rollno : 54 ,
	} ,
	{
		name : "rahul" ,
		rollno : 34 , 
	}
]

// console.log(`User name is ${users[1].name} and the roll no is ${users[1].rollno}`)

let User = {
	email :"abc@gmail.com" ,
	name : "sachin" ,
}


// console.log("Keys => " +  Object.keys(User))
// console.log( "Values => " +  Object.values(User))
// console.log(Object.entries(User)) ;



console.log(User.hasOwnProperty("email"))
console.log(User.hasOwnProperty('firstName'))










