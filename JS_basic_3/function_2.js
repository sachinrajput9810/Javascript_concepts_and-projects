function calculatePrice(val1 , ...price){
	return price ;
}

// console.log(calculatePrice(100 , 200 , 300))

// let user = {
// 	name : "sachin"  ,
// 	price : 200 ,
// 	item : "bag" ,
// }

function userDetail(object){
	console.log(`Username is ${object.name} , price is ${object.price} of the  ${object.item}`)
}

userDetail({
	name : "sachin"  ,
	price : 500 ,
	item : "bag" ,
})

let myNewArray  = [1,2,3,4] ;

function secondValue(array){
	return array[1] ;
}

console.log(secondValue(myNewArray)) ;



