/*
 It has base case to stop
 Base Case: The stopping condition that prevent infinite loops.
 Recursive Case: The function call itself with modified arguments.
 Stack Memory: Each recursive call adds a new frame to the call stack.
*/

// Print Number;

function printNumber(n){
    if(n === 0) return "";
    console.log(n);
    printNumber(n - 1);
}

function printNumberToN(n, start = 1){
    if(start > n) return "";
    console.log(start);
    printNumberToN(n, start + 1);

}

function factorialOfNumber(n){
    if(n === 0 || n === 1) return 1;
    return n * factorialOfNumber(n - 1);
}

// Sum of First Natural Number.
function sum(n){
    if(n === 0) return 0;
    return n + sum(n - 1);
}

// Fibonacci Series.
function fibonacci(n) {
    if (n <= 1) return n; // Base Case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive Case
}

let n = 10;
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
}
// Reverse a string.

function reverseAString(str){
    if(str === "") return  "";
    return reverseAString(str.slice(1) + str[0]);
}

// Check if the String is palindrome.
function isPalindrome(str, start = 0, end = str.length -1 ){
    if(start >= end) return true; // Base Case.
    if(str[start] !== str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);
}

// Binary Search.
function BinarySearch(arr, target, left = 0, right = arr.length - 1){
    if(left > right){
        return -1
    }
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) return mid;
    if(arr[mid] > target) return BinarySearch(arr, target, left, mid - 1);
    return BinarySearch(arr, target, mid + 1, right);
}




