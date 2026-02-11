const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) return 'ERROR';
    let lb = a;
    let ub = b;
    if(a > b){
        lb = b;
        ub = a;
    }
    let ans = ((ub - lb + 1)*(ub + lb))/2;

    console.log(ans);

    return ans;
};

// Do not edit below this line
module.exports = sumAll;
