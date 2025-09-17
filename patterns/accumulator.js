/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */

//1 ,2, 3, 4,5
export function factorial(n) {
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


/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if(typeof n !== `number`){
    return null; 
  }
  if(n <= 0){
    return []; 
  }
 let numArray = []; 
 for (let i = 1; numArray.length <= n; i++) {
  numArray.push(i)
  
 }
 return numArray; 


}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
//this is our input
export function getLongestString(strings) {
  let strArray = strings.split(` `);
  let longestWord = strArray[0];

  for(let i = 1; i < strArray.length; i++) {
    if(longestWord.length < strArray[i].length) {
      longestWord = strArray[i];
    }
  }
  return longestWord;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let total = 0; 
  for(let i = 0; i< attendance.length; i++){
    if(attendance[i]){
      total += 1; 
    }
  }
  return total;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  if(typeof dna != `string`){
    return null; 
  }

  let string = ""
  for(let i = 0; i<dna.length; i++){
    if(dna[i] === `A`){
      string += `T`; 
    }
    if (dna[i] === `T`){
      string += "A"
    }
    if(dna[i] === `C`){
      string += `G`; 
    }
    if (dna[i] === `G`){
      string += "C"
    }
  }
  return string; 
}
