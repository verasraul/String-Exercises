//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:
function DrEvil(amount) {

  if (amount >= 1000000) {
    console.log(amount + " dollars (pinky)")
  }
  else {
    console.log(amount + " dollars");
  }
}

DrEvil(10);
DrEvil(1000000);






//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 
function mixUp (str1, str2) {
    return str2.slice(0, 2) + str1.slice(2) + " " + str1.slice(0, 2) + str2.slice(2);
  }
  console.log(mixUp("Mix", "Pod"));





//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below
function fixStart(item) {
    let word = item.slice(1)
    return item[0] + word.replace(/p/g, '*');
  }
  console.log(fixStart("Popcorn"));





//Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, 
//it should leave it unchanged. For example: 
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below
function verbing(str) {
    if (str.length < 3) {
      return str;
    }
    else if (str.length >= 3 && str.slice(-3) != "ing") {
      if (str.endsWith("m")) {
        return str + "ming";
      }
      else {
        return str + "ing";
      }
    }
    else if (str.length >= 3 && str.slice(-3) == "ing") {
      return str + "ly";
    }
  }
  
  console.log(verbing("swim"))





//Create a function called notBad that takes a single argument, a string
//It should find the first appearance of the substring 'not' and 'bad'
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
//substring with 'good' and return the result
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just 
//return the original sentence
//For example
//notBad('This dinner is not that bad!'): 'This dinner is good!'
//notBad('This movie is not so bad!'): 'This movie is good!'
//notBad('This dinner is bad!'): 'This dinner is bad!'
//write answer below

function notBad(sentence) {
    let notIndex = sentence.indexOf('not');
    let badIndex = sentence.indexOf('bad');
    if (notIndex == -1 || badIndex == -1 || badIndex < notIndex) return sentence;
    return sentence.slice(0, notIndex) + 'good' + sentence.slice(badIndex + 3);
  }
  
  p = notBad("This movie is not so bad!")
  console.log(p);