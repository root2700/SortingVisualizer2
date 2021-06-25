export function getSelectionSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    selectionSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("Sort Validation :  ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    console.log(array)
    return [animations, array];
}


function selectionSort(a,start,end,animations){
    for(let i = 0;i<=end;++i){
        let minIndex = i;
        let min = a[i];
        
        for(let j=i+1;j<=end;++j){
            animations.push(["comparision1",j,minIndex])
            animations.push(["comparision2",j,minIndex])
            if(a[j] < min ){
                min = a[j];
                minIndex = j;
            }
        }

        animations.push(["comparision1", i,minIndex]);
        animations.push(["swap", i, a[minIndex]]);
        animations.push(["swap", minIndex, a[i]]);
        animations.push(["comparision2", i, minIndex]);

        let t = a[i];
        a[i]= a[minIndex];
        a[minIndex] = t;
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