const palindromes = function (string) {
    let arr = [];
    arr = string.split('');
    let secondArr = [];

    for(let i = arr.length - 1; 0 <= i; --i){
        secondArr.push(arr[i]);
    };

    arr = arr.filter(char => /[a-zA-Z0-9]/.test(char));
    secondArr = secondArr.filter(char => /[a-zA-Z0-9]/.test(char));

    let resultArr = arr.join('');
    let secondResultArr = secondArr.join('');

    const x = resultArr.toUpperCase();
    const y = secondResultArr.toUpperCase();
    if (x === y){
        return true;
    } else{
        return false;
    }
};

palindromes('racecar');
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');
palindromes('rac3e3car');
palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
