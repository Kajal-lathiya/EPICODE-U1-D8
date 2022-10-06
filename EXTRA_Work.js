// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 1 ===================================');
let num = [1, 3, 5];
let reverseNumber = num.reverse();
console.log('reverseNumber:', reverseNumber);
console.log('==============================================================================');
/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 2 ===================================');
const arr = [3, 5, 8, 100, 20];
const max = Math.max(...arr);
console.log('large number of array is', max);
console.log('==============================================================================');

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 3 ===================================');
const min = Math.min(...arr);
console.log('minimun number of array is', min);
console.log('==============================================================================');

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 4 ===================================');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = array.filter(number => {
    return number % 2 === 0;
});

console.log('Get even numerical values:', even);
console.log('==============================================================================');

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 5 ===================================');
const newArray = array.filter(number => {
    return number % 2 !== 0;
});
console.log('Delete even enties:', newArray);
console.log('==============================================================================');

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 6 ===================================');
const str = 'hello world';
const noVowels = str.replace(/[aeiou]/gi, '');
console.log('String:', str);
console.log('Remove vovels in string:', noVowels);
console.log('==============================================================================');
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 7 ===================================');
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numArray.length; i++) {
    numArray[i] += 1;
}
console.log('Increasing all the numerical values in a array by 1:', numArray);
console.log('==============================================================================');

/* EXTRA 8
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
console.log('\n =============================EXERCISE 1 ===================================');
let strArray = ["strive", "is", "great"];
let lengthArray = [];
let length;
for (var i = 0; i < strArray.length; i++) {
    length = strArray[i].replaceAll(strArray[i], strArray[i].length);
    lengthArray.push(length);
}
console.log('strArray:', strArray);
console.log('lengthArray:', lengthArray);
console.log('==============================================================================');