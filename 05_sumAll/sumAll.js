const sumAll = function(intial, final) {
    let sum = 0;
    if(intial < 0 || final < 0 || typeof intial !== "number" || typeof final !== "number"){
        return "ERROR";
    }

    if(intial > final){
        let i = final;
        final = intial;
        intial = i;
    }
    while(intial <= final){
        sum += intial;
        intial++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
