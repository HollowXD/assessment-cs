// 1. Sum Zero
function sumZero () {
    let array = [0, 1, 2, 3, 4, 5]
    let value = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
            if (array[i] + array[j] === 0) {
        value = true;
            } 
        }
    }
    }
}

// 2. Unique Characters
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
 }

 // 3. Pangram Sentence
function isPangram(str) {
    mark = new Array(26).fill(false);
    let index;
    for (let i = 0; i < str.length; i++) {
        if ('A' <= str[i] && str [i] <= 'Z') {
            index = str.charCodeAt(i) - 'A'.charCodeAt(0);
        } else if ('a' <= str[i] && str[i] <= 'z') {
            index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        } else continue;
        mark[index] = true;
    }
    for (let i = 0; i <= 25; i++) {
        if (mark[i] == false) {
            return false;
        }
    }
    return true;
}

// 4. Longest Word
function findLongestWord (str) {
    let strSplit = str.split('');
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}