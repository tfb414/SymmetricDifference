function sym(firstArray) {
    var masterArray = firstArray.filter(shouldLeaveOneInstanceOfADuplicateWithinArray);
    return loopThroughAllArguments(arguments, masterArray).sort();
}
function shouldLeaveOneInstanceOfADuplicateWithinArray(item, index, inputArray) {
    return inputArray.indexOf(item) === index;
}
function loopThroughAllArguments(totalArguments, masterArray) {
    for (var i = 1; i < totalArguments.length; i++) {
        var currentArray = totalArguments[i].filter(shouldLeaveOneInstanceOfADuplicateWithinArray);
        masterArray = shouldConcatArraysAndRemoveAllInstancesOfDuplicates(currentArray, masterArray);
    }
    return masterArray;
}
function shouldConcatArraysAndRemoveAllInstancesOfDuplicates(currentArray, masterArray) {
    masterArray = masterArray.concat(currentArray).filter(shouldFilterOutAllInstancesOfDuplicates);
    return masterArray;
}
function shouldFilterOutAllInstancesOfDuplicates(iHaveToHaveSomethingHereOrItDoesNotWorkButDontKnowWhy, item, inputArray) {
    return inputArray.lastIndexOf(inputArray[item]) === inputArray.indexOf(inputArray[item]);
}