let arr = [3,4,5,6] ;
arr.push(7) ;
arr.push(8) ; // push element
arr.pop() // remove from last
// console.log(arr)

// unshift 
// arr.unshift(2) ;
arr.shift() ;
// console.log(arr) ;

// console.log(arr.includes(5))
// console.log(arr.indexOf(43))

// console.log(typeof arr) ;
// console.log(typeof arr.join())

// console.log(arr , "A") ;

// slice and splice => slice temporary gives the element from the range (i,j) but splice deletes the element from (i , j) permanent
let array = [1,2,3,4,5,6,7,8] ;
console.log(array.slice(1,3)) ;
console.log(array) ;

console.log(array.splice(1,3)) ;
console.log(array)