let first = [1,2,3,4,5] ;
let second = [1,2,3,4,5] ;
first.push(second) ;
// console.log(first[5][4]) ;

let fruit = ["apple" , "banana" , "grapes"] ;
let veggie = ["bhindi" , "tori"] ;
let join = fruit.concat(veggie) ;
// console.log(join) ;


// spread operator
let numbers = [1,2,3,4,5] ;
let alpha = ['a' , 'b' ,'c' , 'd' , 'e'] ;
// console.log([...numbers , ...alpha])

// concat method
let a = [2,3,4,5,5] ;
let b = [10 , 20 ,30] ;
let c = a.concat(b) ;
// console.log(c) ;

// flat method 
let arr = [ 1, ,3 ,[4,5,6,7] , [2,3,[4,2,[5,3]]]] ;
let new_array = arr.flat(2)
// console.log(new_array)

// to convert the string , object into array during data scrapping

// console.log(Array.from({
// 	name : "sachin" ,
// 	roll_no : 34
// }))

// Arrays of
let one = 1 ;
let two = 2 ;
let three = 3 ;
console.log(Array.of(one,  two , three)) ;









