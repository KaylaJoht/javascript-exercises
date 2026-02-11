const removeFromArray = function() {
    let argus = Array.from(arguments);
    let arr = argus[0];
    let ans = {};
    for(let i = 1; i < argus.length; i++){
        arr = arr.filter(num => num !== argus[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
