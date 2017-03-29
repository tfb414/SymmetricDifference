function sym(firstArray) {
    var masterArray = firstArray.filter(removeDuplicatesWithinArray);
    return loopThroughAllArguments(arguments, masterArray).sort();
}
function removeDuplicatesWithinArray(item, index, inputArray) {
    return inputArray.indexOf(item) === index;
}
function loopThroughAllArguments(totalArguments, masterArray) {
    for (var i = 1; i < totalArguments.length; i++) {
        var currentArray = totalArguments[i].filter(removeDuplicatesWithinArray);
        masterArray = shouldRemoveDuplicatesBetweenArrays(currentArray, masterArray);
    }
    return masterArray;
}
function shouldRemoveDuplicatesBetweenArrays(currentArray, masterArray) {
    masterArray = masterArray.concat(currentArray).filter(shouldFilterOutDuplicates);
    return masterArray;
}

function shouldFilterOutDuplicates(iHaveToHaveSomethingHereOrItDoesNotWorkButDontKnowWhy, item, inputArray) {
    return inputArray.lastIndexOf(inputArray[item]) === inputArray.indexOf(inputArray[item]);
}