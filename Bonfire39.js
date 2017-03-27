
function sym(args) {
    var arrayA = args.filter(removeDuplicatesWithinArray);
    loopThroughAllArguments(arguments, arrayA);
    return arrayA.sort();
}

function checkAndRemoveDuplicatesBetweenArrays(removeDupesBetweenArraysCounter, arrayB, arrayA) {
    for (var i = 0; i < removeDupesBetweenArraysCounter; i++) {
        var checkIt = new RegExp(arrayB[i]);
        var trueIfDuplicate = checkIt.test(arrayA);
        if (trueIfDuplicate) {
            var removeIt = arrayA.indexOf(arrayB[i]);
            arrayA.splice(removeIt, 1);
        }
        else {
            arrayA.push(arrayB[i]);
        }
    }
    return arrayA;
}

function removeDuplicatesWithinArray (item, index, inputArray){
    return inputArray.indexOf(item) == index;
}
function loopThroughAllArguments(totalArguments, arrayA){
    for (var counter = 1; counter < totalArguments.length; counter++) {
        var arrayB = totalArguments[counter].filter(removeDuplicatesWithinArray);
        var removeDupesBetweenArraysCounter = arrayB.length;
        arrayA = checkAndRemoveDuplicatesBetweenArrays(removeDupesBetweenArraysCounter, arrayB, arrayA);
    }
}