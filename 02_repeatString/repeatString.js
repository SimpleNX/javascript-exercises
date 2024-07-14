const repeatString = function(intialString, repititons) {
    let resultString = "";
    if(repititons<0)
        return "ERROR";
    for(let i=1; i<=repititons; i++)
        resultString += intialString;
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
