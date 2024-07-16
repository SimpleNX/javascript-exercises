const removeFromArray = function(arr, ...toBeRemoved) {
    const resultArr = arr.filter((val)=>{
        return !(toBeRemoved.includes(val));
    });
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
