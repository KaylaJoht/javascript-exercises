const reverseString = function(word) {
    let ans = "";
    for(let i = 0; i < word.length; i++){
        ans = word[i] + ans;
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
