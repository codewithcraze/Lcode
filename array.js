//. Array

// Reverse and Array.
let array = [1,2,3,4,5];
console.log(array.reverse());

for(let i = 0; i < array.length/2; i++) {
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
}

console.log(array);
// Find Maximum and Minimum in Array.
let arrayTwo = [1, 2, 3, 4, 5];
let max = Math.max(...arrayTwo);
let min = Math.min(...arrayTwo);

let maxValue = Number.NEGATIVE_INFINITY;
let minValue = Number.POSITIVE_INFINITY;

for(let i = 0; i < arrayTwo.length; i++) {
    if(arrayTwo[i] > maxValue){
        maxValue = arrayTwo[i];
    }else if(arrayTwo[i] < minValue) {
        minValue = arrayTwo[i];
    }
}

console.log("Max: " + max);
console.log("Min: " + min);

// Find the K largest and K the smallest number in array.

let arrayThree = [1, 4, 3, 2, 5, 9, 8];

function findKthLargest(array, k) {
    return array.sort((a, b) => b - a);
}

// Move all Zeros to the end of the array.

let arrayFour = [1, 0, 2, 0, 3, 4, 0, 5];
let zeros = arrayFour.filter(num => num === 0);
let nonZeros = arrayFour.filter(num => num!== 0);

arrayFour = nonZeros.concat(zeros);

// Rotate and Array.

// Naive Approach.
let arrayFive = [1, 2, 3, 4, 5];
let rotation = 2;

for(let i = 0; i < rotation; i++) {
    arrayFive.push(arrayFive.shift());
}

console.log(arrayFive);


function rotateRight(arr) {
    if (arr.length === 0) return arr;
    // Handle empty array case

    let last = arr[arr.length - 1];
    // Store the last element

    // Shift elements to the right
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = last;
    // Place the last element at the start
    return arr;
}

// Example Usage
// let array = [1, 2, 3, 4, 5];
console.log(rotateRight(array)); // Output: [5, 1, 2, 3, 4]


// To Handle Case where rotation value is greater than array length
// We can use modulo operator to get the actual rotation value within the array length k = k % arr.length



// Find A missing number in an array.

let arraySix = [1, 2, 3, 4, 5, 7, 8, 9];

// using formula (n * (n + 1)) / 2;
let value = (arraySix.length + 1) * (arraySix.length + 2) / 2;
let sum = arraySix.reduce((a, b) => a + b, 0);
console.log(value, sum)
const missingNumber = value - sum;
console.log("Missing Number: " + missingNumber);

// Check if array is sorted in ascending order.

let arrayIsAscending = [5, 2, 3, 4, 1];

for(let i = 0; i < arrayIsAscending.length - 1; i++) {
    if(arrayIsAscending[i] > arrayIsAscending[i + 1]) {
        console.log("Array is not sorted in ascending order.");
        break;
    }
    else {
        console.log("Array is sorted in ascending order.");
    }
}

// Find the union and intersection of two arrays.

let arrayOne = [1, 2, 3, 4, 5];
let arrayX = [4, 5, 6, 7, 8];

let union = [...new Set([...arrayOne,...arrayX])];
// Using Set to remove duplicates.
console.log("Union: " + union);

let intersection = arrayOne.filter(num => arrayX.includes(num));

console.log("Intersection: " + intersection);

// Count pairs with a given sum.

let arraySeven = [1, 2, 3];
let targetSum = 5;

let countPairs = 0;

for(let i = 0; i < arraySeven.length; i++) {
    if(arraySeven.includes(targetSum - arraySeven[i])) {
        countPairs++;
    }
}
console.log(countPairs);

// Find duplicates in an array.

const arrayToFindDuplicates = [1, 2, 3, 4, 5, 2, 3, 4, 5];

let hashMap = new Map();

for(let i = 0; i < arrayToFindDuplicates.length; i++) {
    if(hashMap.has(arrayToFindDuplicates[i])) {
        hashMap.set(arrayToFindDuplicates[i], hashMap.get(arrayToFindDuplicates[i]) + 1);
    }else{
        hashMap.set(arrayToFindDuplicates[i], 1);
    }
}

for(let [key, value] of hashMap.entries()) {
    if(value > 1) {
        console.log("Duplicate: " + key, value);
    }
}

// Find the majority element in an array.
let arrayEight = [1, 2, 3, 4, 5, 2, 2, 3, 4, 5, 5];

let countMap = {};

// Count occurrences
for (let i = 0; i < arrayEight.length; i++) {
    if (countMap[arrayEight[i]]) {
        countMap[arrayEight[i]]++;
    } else {
        countMap[arrayEight[i]] = 1;
    }
}

let maxDupli = Number.NEGATIVE_INFINITY;
let maxElement = null;

// Find the element with the highest frequency
for (let [key, value] of Object.entries(countMap)) {
    if (value > maxDupli) {
        maxDupli = value;
        maxElement = Number(key);
    }
}

console.log(maxElement); // Output: 2 (since 2 appears 3 times, the most frequent)

// TODO: Merge two sorted arrays.

let sortedArray = [];
let ArrayOne = [1, 3, 5, 7];
let ArrayTwo = [2, 4, 6, 8];
let i = 0, j = 0;
// Pointers for both arrays
while (i < ArrayOne.length && j < ArrayTwo.length) {
    if (ArrayOne[i] < ArrayTwo[j]) {
        sortedArray.push(ArrayOne[i]);
        i++;
    } else {
        sortedArray.push(ArrayTwo[j]);
        j++;
    }
}
// Add remaining elements from ArrayOne (if any)
while (i < ArrayOne.length) {
    sortedArray.push(ArrayOne[i]);
    i++;
}
// Add remaining elements from ArrayTwo (if any)
while (j < ArrayTwo.length) {
    sortedArray.push(ArrayTwo[j]);
    j++;
}
console.log(sortedArray);

// Find the first non-repeating element.
































