

function factorial(n) {
  if(typeof n !== 'number') {
    return NaN
  }

  if(n < 0){
    return undefined; 
  }
  if(n===0){
    return 1; 
  }
  let total = 1; 
  for (let i = n; i > 0; i--) {
    
    total *= i; 
  }
  return total; 


}

// console.log(factorial(0));


function buildNArray(n) {
  if(typeof n !== `number`){
    return null; 
  }
  if(n <= 0){
    return []; 
  }
 let numArray = []; 
 for (let i = 1; numArray.length < n; i++) {
    console.log('before the push', numArray)
  numArray.push(i)
  console.log('after num is pushed', numArray)
 }
 return numArray; 


}

// console.log(buildNArray(4))

const newStr = 'this is rainbow a for us';

const strArray = newStr.split(' ');
// console.log(strArray[3].length);


function getLongestString(strings) {
  let strArray = strings.split(` `);
  let longestWord = strArray[0];
    console.log('current longest word: ', longestWord)
  for(let i = 1; i < strArray.length; i++) {
    console.log(`checking to see if: ${longestWord} is shorter than: ${strArray[i]}`)
    if(longestWord.length < strArray[i].length) {
        console.log(`the word is shorter so we re-assign the current longest word to: ${strArray[i]}`)
      longestWord = strArray[i];
    }
  }
  return longestWord;

}

console.log(getLongestString(newStr));