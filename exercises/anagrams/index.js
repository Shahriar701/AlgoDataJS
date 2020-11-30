// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB){
    if(cleanString(stringA) === cleanString(stringB)){
        return true
    }

    return false;
}

function cleanString(str){
    return str.replace(/[^\w]\g/).toLowerCase().split('').sort().join('');
}
module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     const aCharMap = checkUp(stringA);
//     const bCharMap = checkUp(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     }

//     for(let a in aCharMap){
//         if(aCharMap[a] !== bCharMap[a]){
//             return false;
//         }
//     }

//     return true;
// }

// function checkUp(str){
//     const charMap = {};

//     for( let a of str.replace(/[^\w]/g, "").toLowerCase()){
//         charMap[a] = charMap[a] + 1 || 1;
//     }

//     return charMap;
// }