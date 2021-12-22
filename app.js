//Question 1 - What does the following code return?
new Set([1,1,2,2,3,4]) // a set of {1,2,3,4}

//Question 2 - What does the following code return?
// [...new Set("referee")].join(""); // returns the string "ref"

//Question 3 - What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {[1,2,3] => true}, 1: {[1,2,3] => false}

//hasDuplicate - Write a function, hasDuplicate, which accepts an array and returns true or false if that array contains a duplicate
function deDupe(arr) {
   let dedupedSet = new Set(arr);
   return [...dedupedSet]
};

const dedupe = arr => [...new Set(arr)];

const hasDupe = arr => new Set(arr).size !== arr.length;

//vowelCount - Write a function called vowelCount that accepts a string and returns a map where the keys are numbers and values of the count of vowels in the string

function isVowel(char) {
    const vowels = "aeiou";
    return vowels.includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    for (char of str) {
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            };
        }
    }
    return vowelMap;
}