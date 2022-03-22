const reverseString = function(string) {
    let reversedString = "";
    let splitString;

    splitString = string.split("");
    reversedString = splitString.reverse().join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
