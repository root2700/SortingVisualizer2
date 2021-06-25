export function getQuickSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    quickSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function quickSort(auxillaryArray, startIndex, endIndex, animations) {
    let pivotIndex;
    if (startIndex < endIndex) {
        pivotIndex = partitionArray(auxillaryArray, startIndex, endIndex, animations);
        quickSort(auxillaryArray, startIndex, pivotIndex - 1, animations);
        quickSort(auxillaryArray, pivotIndex + 1, endIndex, animations);
    }
}

function partitionArray(auxillaryArray, startIndex, endIndex, animations) {
    let pivotValue = endIndex;
    
    let pivotIndex = startIndex;

    for(let i = startIndex; i < endIndex; ++i) {
        animations.push(["comparision1", i, pivotValue]);
        animations.push(["comparision2", i, pivotValue]);
        if(auxillaryArray[i] <= auxillaryArray[pivotValue]) {
            //whole swap function: 

            animations.push(["comparision1", i, pivotIndex]);
            animations.push(["swap", i, auxillaryArray[pivotIndex]]);
            animations.push(["swap", pivotIndex, auxillaryArray[i]]);
            animations.push(["comparision2", i, pivotIndex]);
            swap(auxillaryArray, i, pivotIndex);


            pivotIndex++;
        }
    }
    animations.push(["pivot1", pivotIndex, pivotValue]);
    animations.push(["swap", pivotValue, auxillaryArray[pivotIndex]]);
    animations.push(["swap", pivotIndex, auxillaryArray[pivotValue]]);
    animations.push(["pivot2", pivotIndex, pivotValue]);
    
    swap(auxillaryArray, pivotIndex, pivotValue);
    return pivotIndex;

    // let pivot = auxillaryArray[endIndex];
    // let pivotIndex = startIndex;
    // for (let i = startIndex; i <= endIndex - 1; i++) {
    //     animations.push([i, endIndex]);
    //     animations.push([i, endIndex]);
    //     if (auxillaryArray[i] <= pivot) {
    //         //Swap these two heights
    //         animations.push([i, auxillaryArray[pivotIndex]]);
    //         animations.push([pivotIndex, auxillaryArray[i]]);
    //         swap(auxillaryArray, i , pivotIndex);
    //         pivotIndex++;
    //     }
    //     else {
    //         animations.push([-1, -1]);
    //         animations.push([-1, -1]);
    //     }
    //     animations.push([-1, -1]);
    //     animations.push([-1, -1]);
    // }
    // animations.push([-1, -1]);
    // animations.push([-1, -1]);
    // animations.push([-1, -1]);
    // animations.push([-1, -1]);
    // //Swap these two heights
    // animations.push([pivotIndex, auxillaryArray[endIndex]]);
    // animations.push([endIndex, auxillaryArray[pivotIndex]]);
    // swap(auxillaryArray, pivotIndex, endIndex);
    // return pivotIndex;
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}