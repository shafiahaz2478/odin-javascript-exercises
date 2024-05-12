const removeFromArray = function() {
    let output = [];
    let arg = arguments[0];
    console.log("start: " +arg);
    for(let i = 1 ; i < arguments.length;i++){
        let value = arguments[i];
        if(!(typeof value === "string")){ 
            arg.splice(value - 1, 1);
        }
        
    }

    for (let i = 1; i < arguments.length; i++) {
        const value = arguments[i];
        for(let j = 0; j < arg.length;j++){
            if(arg[j] === value){
                
                arg.splice(j , 1);
                j--;
                

            }
        }
        
    }
    console.log(arg);
    return arg;
}

// Do not edit below this line
module.exports = removeFromArray;
