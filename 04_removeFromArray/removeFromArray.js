const removeFromArray = function(array, ...args) {
    let toDelete = args;
    for(let i = array.length; i >= 0; i--) {
        if(toDelete.includes(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
