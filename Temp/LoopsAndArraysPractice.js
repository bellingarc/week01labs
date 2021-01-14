//problem one
// for(let i=0;i<=15;i++){
//     if (i%2 == 0){
//         console.log(`${i} is even.`)
//     } else {
//         console.log(`${i} is odd.`)
//     }
// }

// for(let i=0;i<=15;i++){
//     console.log((i%2 == 0 ? `${i} is even`:`${i} is odd`))
// }

//problem two

//this problem is a compound problem regarding array methods
//all shall use the following number array
myNums = [14,26,3,3,56,47,92,119.5]
//best array method for ordering items least to greatest
console.log(myNums.sort((a,b) => {return a - b}))
//best array method for printing last value
console.log(myNums.pop())
//best array method for adding value to end of array
//*****PUSH RETURNS NEW LENGTH*****/
myNums.push(11)
console.log(myNums)
//best method for combining two arrays
console.log(myNums.concat([1,1,2,3,5,8,13,21]))
//best method for printing array backwards
console.log(myNums.reverse())
//best method for comparing if two arrays are equal
console.log(myNums==[3,14,26,47,56,92,11])

//best method for returning an array without duplicates
uniqueArray = myNums.filter((x,i,a) => a.indexOf(x) == i)
console.log(uniqueArray)
//best method for printing out each element of an array individually
myNums.forEach(element => {console.log(element)})  
//best method for printing out each element of an array plus 2
console.log(myNums.map(a => a+2 ))
//best method for returning an array of only numbers less than 5
filteredArray = myNums.filter(a => a<5)
console.log(filteredArray)