// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let max = 0;

    let maxChar = '';

    const charMax = {}

    for (char of str) {
        charMax[char] ? charMax[char]++ : charMax[char] = 1;
    }

    for (let char in charMax) {

        if (charMax[char] > max) {
            max = charMax[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
