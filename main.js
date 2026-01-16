// 1. . Write a function called countOccurrences()
// that takes in a string and a character and returns
// the number of occurrences of that character in the string.


// const countOccurrences = (str, char)=>{
//     let count = 0;
//     for(i=0; i<str.length; i++){
//         if(str[i]===char){
//             count++;
//         }
//     }
//     return count;
// }

// const result = countOccurrences("Happy haApPy", "P");
// console.log(result);


//It count charr wheter you write capital or small it count first
//  tolowerCase than it is not a question just for fun

// const countOccurrences = (str, char)=>{
//     let str2 = str.toLowerCase();
//     let char2 = char.toLowerCase();
//     let count = 0;
//     for(i=0; i<str2.length; i++){
//         if(str2[i]===char2){
//             count++;
//         }
//     }
//     return count;
// }

// const result = countOccurrences("HaPpy haApPy", "P");
// console.log(result);



// 2. Write a function called findMaxNumber that takes
// in an array of numbers and returns the largest number
// in the array.


//4 solution only syntax different not anything
//solution 1
// const findMaxNumber = (arr)=>{
//     let max = arr[0];
//     for(i=0; i<arr.length; i++){
//         if(max<arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// const result = findMaxNumber([1,4,2,92,,0,7,6,5,2,66,2,8,0,])
// console.log(result);
 
//solution 2
//Started loop wit 1 not 0

// const findMaxNumber = (arr)=>{
//     let max = arr[0];
//     for(i=1; i<arr.length; i++){
//         if(max<arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// const result = findMaxNumber([10,4,2,92,,0,7,6,5,2,66,2,8,0,])
// console.log(result);

//solution 3
// const findMaxNumber = (arr)=>{
//     let max = arr[0];
//     for(i=1; i<arr.length; i++){
//         if(max<arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// // let arr = [10,4,2,92,,0,7,6,5,2,66,2,8,0]
// //both write
//  const arr = [10,4,2,92,,0,7,6,5,2,66,2,8,0]
// const result = findMaxNumber(arr)
// console.log(result);

// solution 4
// const findMaxNumber = (arr1)=>{
//     let max = arr1[0];
//     for(i=1; i<arr1.length; i++){
//         if(max<arr1[i]){
//             max = arr1[i];
//         }
//     }
//     return max;
// }
//  const arr = [10,4,2,92,,0,7,6,5,2,66,2,8,0]
// const result = findMaxNumber(arr)
// console.log(result);



// 3. Write a function called titleCase that takes in a string
// and returns the string with the first letter of each word
// capitalized.




// 4. Write a function called reverseString that takes in a
// string and returns the reverse of that string.


// 5. Write a function called countVowels that takes in a
//  string and returns the number of vowels in the string.



// 6. Write a function called removeDuplicates that takes in
// an array and returns a new array with duplicates
// removed.


// 7. A palindrome is a word, phrase, number, or other
// sequence of characters which reads the same backward or
// forward. An example of a palindrome is "madam".
