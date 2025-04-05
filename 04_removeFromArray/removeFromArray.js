const removeFromArray = function(arr, ...argument) {
    for(let i = 0; i < arr.length; i++){

        for(let y = 0; y < argument.length; y++){

            if(arr[i] === argument[y]){
                arr.splice(i, 1);
                i--;
            }
        }
        
    };
    return arr;
};

removeFromArray([1, 2, 3], "1", 3)

// Do not edit below this line
module.exports = removeFromArray;
