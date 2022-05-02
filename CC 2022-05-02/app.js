// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//R: take a string and return it the same but without numbers

//Pseudo:


// we need to make a function and split the string input into array with each character as a separate element\

function stringClean(s){
   let newArr = s.split("")
    
   const filtered = newArr.filter(x=>isNaN(x) || x===" ")
    return filtered.join("")
}
//we then run a map method, that looks for any numbers and removes them if they exist
//join back into string now without numbers




console.log(stringClean('This looks5 grea8t!'))