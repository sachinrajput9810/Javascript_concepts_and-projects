// LOOPS ON ARRAY

// for of 
let arr = [1,2,3,4,5] ;

for(let val of arr){
	// console.log(val)
}

let string = "this is world!!"
for(let char of string){
	// console.log(`chars are ${char}`)
}

// MAPS IN JS
let map = new Map() ;
map.set("alpha" , 1) ;
map.set("beta" , 2) ;
map.set("gamma" , 3) ;
map.set("omega" , 4) ;
map.set("phi" , 5) ;

// console.log(map) ;

// for of  on maps using the destructuring of the array i.e [key , value]

// for(let [key,value] of map){
// 	console.log(key , ':- ' , value) ;
// }

// for of on objects
// let object = {
// 	name : "sachin" ,
// 	roll_no : 34 ,
// 	pin : 201005 ,
// }

// for(let [key,value] of object){
// 	console.log(obj)   // for of dont work on the objects iterations
// }


// FOR IN LOOP

// let myobj = {
// 	name : "sachin" ,
//  	roll_no : 34 ,
//  	pin : 201005 ,
// }

// for(let key in myobj){
// 	console.log(`key is ${key} and value is ${myobj[key]}`)
// }


// let myArray = ["js" , "cpp" , "python" , "ruby"] ;
// for(let val in myArray) console.log(myArray[val])  // val is the index returned


// for in on map 
const myMap = new Map() ;
myMap.set("en" , "english") ;
myMap.set("hi" , "hindi") ;
myMap.set("fra" , "french") ;

for(let key in myMap){
	// console.log(key) ;    // cant use for in loop on the map 
}




//   FOR EACH LOOP
 let lang = ["cpp" , "js" , "java" , "python"] ;

//  lang.forEach( function (itr){
// 	console.log(itr)
//  })


// lang.forEach( (item) => {console.log(item)})   // using callback fn

function print(item){
	console.log(item)
}
// lang.forEach(print)


// Extension of callback fun 

// lang.forEach( (value , item , lang) => {
// 	console.log(value , item , lang)
// })


// GETTING THE OBJECTS IN THE ARRAY [IMPORTANT]

let object = [
	{
		name : "sachin" ,
		batch : 2023 ,
		address : "delhi"
	} ,
	{
		name : "raj" ,
		batch : 2021 ,
		address : "ayodhaya" 
	}
]


// object.forEach( (item) => {
// 	console.log(`My name is ${item.name} from ${item.batch} , living in ${item.address}  `)
// })  

// filter  method

let myArr = [1,2,3,4,5,6,7] ;
// let myFilter = myArr.filter( (val) => {
// 	return val > 4
// }) ;
// console.log(myFilter);

// let res = []
// let myFilter = myArr.forEach( (num) => {
// 	if(num > 1) res.push(num) ; 
// })
// console.log(res);


// let map1 = myArr.map( (x) =>{return  x+3}) ;
// console.log(map1)


// chaining
// map fun to update the values of the array

let chain = myArr.map( (num) => (num*2)).map( (num) => (num-1)).filter( (num) => (num >= 10))
// console.log(chain)

// reduce

let value = [2,3,4] ;
let result = value.reduce( (acc , curr) => {
	console.log(`acc val is : ${acc} and curr val is ${curr}`) ;
	return acc + curr
} , 5) ;

console.log(result)





















































































































