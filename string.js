let string = "pmp";

console.log(string.split('').reverse().join(''));

let reversedString = '';
for(let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
}

console.log(reversedString);

// Check if String is a palindrome
function isPalindrome(str) {
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr;
}

console.log(isPalindrome(string));

// Check if the String is anagrams.

let String1 = "listen";
let String2 = "silent";


function isAnagram(str1, str2) {
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

// But we can use hash maps to reduce time complexity.

console.log(isAnagram(String1, String2));

// Longest common prefix.
function longestCommonPrefix(str) {
    if (!str.length) return "";
    let prefix = str[0];
    // Assume the first word as the prefix
    for (let i = 1; i < str.length; i++) {
        while (str[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            // Reduce prefix length
            if (!prefix) return "";
            // If prefix becomes empty, return ""
        }
    }
    return prefix;
}

// Example Usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));   // Output: ""

// Count occurrences of a substring.

let StringToCountOccurrences = "The quick brown fox jumps over The lazy dog.";

let subString = 'The';

console.log(StringToCountOccurrences.split(subString));

// Another way to count occurrences using regex.
console.log((StringToCountOccurrences.match(new RegExp(subString, 'gi')) || []).length);


// Implement substr() (substring search).


let stringToSearch = "the quick brown fox jumps over the lazy dog.";

function substr(stringToSearch, substring){
    return substring.match(new RegExp(substring, 'gi'))? stringToSearch.indexOf(substring) : -1;
}

console.log("Substring to Detect:", substr(stringToSearch, 'the')); // Output: 0

// Check if the String contain only number.
let stringToCheck = "asdf12345sadf";

const result = /^[0-9]+$/.test(stringToCheck); // Output: true
console.log(result);

// Check if the String contains only alphabetic characters.

// Convert String to Number;
let number = "234"
console.log(Number(number));


// Find duplicates characters in a string.

// .length
// Output: false





