const reverseString = function() {
    const string = '';
    let array = [];

    for(let i = string.length - 1; i>=0; i--){
        array.push(string.charAt(i))
    }

    let newString = array.join("");

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
