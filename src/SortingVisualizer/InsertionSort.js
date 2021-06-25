export function getInsertionSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    insertionSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("Sort Validation :  ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    console.log(array)
    return [animations, array];
}


function insertionSort(a,start,end,animations){
    for(let i = 1;i<=end;++i){
        let key = a[i];
        let j = i-1;

        while(j>=0 && a[j] > key){
            animations.push(["comparision1", j,j+1]);
            animations.push(["swap", j+1, a[j]]);
            animations.push(["comparision2", j, j+1]);
            a[j+1] = a[j];
            --j;
        }

        animations.push(["comparision1", i,j+1]);
        animations.push(["swap", j+1, key]);
        animations.push(["comparision2", i, j+1]);

        a[j+1] = key;
    }
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