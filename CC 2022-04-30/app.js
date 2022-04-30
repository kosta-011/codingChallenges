// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//P: dont worry about uppercase, only lowercase vowels should be removed

//R: word without 'a,e,i,o,u'

//E:

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"

//PSEUDO:

//create a function shortcut(word)

//.split to make word in array => [h,e,l,l,o]
// arr.map(x=> 'aeiou'.includes(x)? arr.pop(x): x)
//arr.join("")

function shortcut(word){
   return word.split("")

    .filter(x=>!'aeiou'.includes(x))
    .join("")
}
    


console.log(shortcut('hello'))