const reverseString = function(initialString) {
    const chars = [];
    let finalString = "";
    for(const char of initialString)
        chars.push(char);
    let n = chars.length;
    for(let i = 1; i<=n; i++)
        finalString += chars.at(-i);
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
