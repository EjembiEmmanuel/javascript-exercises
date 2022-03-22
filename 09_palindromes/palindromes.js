const palindromes = function (string) {
    let reversedString = "";
    let splitString;
    let cleanedString = "";
    let characters = "abcdefghijklmnopqrstuvwxyz1234567890";

    splitString = string.toLowerCase().split("");

    for(let i = 0; i <= splitString.length; i++) {
        if(characters.includes(splitString[i])) {
            cleanedString += splitString[i];
        }
    }

    reversedString = cleanedString.split("").reverse().join("");

    if(reversedString === cleanedString) {
        return true;
    } else {
        return false;
    }

};


// Do not edit below this line
module.exports = palindromes;
