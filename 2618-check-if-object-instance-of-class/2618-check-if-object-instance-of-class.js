/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined) return false
    while (Object.getPrototypeOf(obj) !== null){
        obj = Object.getPrototypeOf(obj)
        if (obj.constructor === classFunction) return true
    }
    return false
};
