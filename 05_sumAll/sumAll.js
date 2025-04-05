const sumAll = function(start, end) {
    let temp;

    if(start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    }

    if(start > end){
        temp = start;
        start = end;
        end = temp;
    }

    let length = end - start;
    let number = start;
    temp = start;

    for(let i = 0; i < length; i++){
        temp++;
        number = number + temp;
    }
    return number;
};

sumAll(10, [90, 1])

// Do not edit below this line
module.exports = sumAll;
