export function getHeapSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
     animations = HeapSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("Sort Validation :  ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}



function HeapSort(array,animation){
    let animations = []
    for(let i=1;i<array.length;++i){
        let child = i; 
        while(child > 0){
            let parent1 = Math.floor((child - 1)/2);
            animations.push(["comparision1",child,parent1]);
            if(array[parent1] < array[child]){
                animations.push(["swap", parent1, array[child]]);
                animations.push(["swap", child, array[parent1]]);
                let t = array[parent1];
                array[parent1] = array[child];
                array[child] = t; 
            }
            else{
                break;
            }
            
            animations.push(["comparision2", child, parent1]);
            animations.push(["swap", child, array[parent1]]);
            child = parent1;

        }
    }

    // remove part 
    let size = array.length
    while(size > 1){
        //shift to end 
        animations.push(["comparision1", 0,size-1]);
        animations.push(["swap", size -1, array[0]]);
        animations.push(["swap", 0, array[size -1]]);
        animations.push(["comparision2", 0, size -1 ]);
        let t = array[0];
        array[0] = array[size -1];
        array[size-1] = t;
        
        size--;
        let parent1 = 0;
        let leftChild = 2* parent1 +1;
        let rightChild = 2*parent1 +2;

        while(leftChild < size){
            let maxIndex = parent1;
            animations.push(["comparision1", maxIndex,leftChild]);
            animations.push(["comparision2", maxIndex,leftChild]);
            if(array[maxIndex] <= array[leftChild]){
               
                maxIndex = leftChild;
            }

             animations.push(["comparision1", maxIndex,rightChild]);
             animations.push(["comparision2", maxIndex,rightChild]);
            if(rightChild < size && array[maxIndex] <= array[rightChild]){
                
                maxIndex = rightChild;
            }

            if(maxIndex == parent1){
                break;
            }
            
            animations.push(["comparision1", parent1,maxIndex]);
            animations.push(["swap", parent1, array[maxIndex]]);
            animations.push(["swap", maxIndex, array[parent1]]);
            animations.push(["comparision2", parent1,maxIndex]);
         
            let temp = array[maxIndex];
			array[maxIndex] = array[parent1];
			array[parent1] = temp;

            parent1 = maxIndex;
            leftChild = 2* parent1+1;
            rightChild = 2*parent1 +2;
             
        }

    }
    
    return animations

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