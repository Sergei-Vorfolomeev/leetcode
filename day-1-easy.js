// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other, append the additional letters
// onto the end of the merged string. Return the merged string.

const mergeAlternately = function(word1, word2) {
    const maxLength = word1.length > word2.length ? word1.length : word2.length
    let res = ''
    for(let i=0; i<maxLength; i++) {
        res = res + (word1[i] ?? '') + (word2[i] ?? '')
    }
    return res
};

const word1 = "abcd"
const word2 = "PQ"

const res = mergeAlternately(word1, word2) // aPbQcd
console.log(res)