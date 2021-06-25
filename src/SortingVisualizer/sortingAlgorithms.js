export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice(); //creaing a copy of mainarray 
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

export function getBubbleSortAnimations(array){ 
  const animations = [];
  if (array.length <= 1) return array;
  for(let i=0;i<array.length;++i){
    for(let j =0;j<array.length-1-i;++j){
      animations.push([j,j+1]); //red color 
      animations.push([j,j+1]); // remove red color 
      
      if(array[j] > array[j+1]){
        animations.push([j,j+1]);
        let t = array[j];
        array[j]= array[j+1];
        array[j+1]= t;
      }
      else{
        animations.push([-1,-1])
      }
    }
  }
  
  console.log(array)
  return animations;
}


// export function QuickSortAnimations(array){
//   let animations = [];
//   quickSortHelper(array,0,array.length -1,animations);
//   return animations;
// }
//  export function quickSortHelper(arr,start,end,animations){
//     if(start >=end){
//       return;
//     }
//     let index = partition(arr,start,end);
//     quickSortHelper(arr,start,index-1,animations)
//     quickSortHelper(arr,index+1,end,animations)
//   }

//   function partition(arr,start,end,animations){
//     let pivotIndex = start;
//     let pivotValue = arr[end];
//     for(let i = start;i<end;++i){
//       // animations.push([pivotValue,i])
//       // animations.push([pivotValue,i])
//       if(arr[i]<pivotValue){
//         let t = arr[i];
//         arr[i] = arr[pivotIndex];
//         arr[pivotIndex] = t;
//         // animations.push([pivotValue,i,pivotIndex])
//         pivotIndex++;
//       }
      
//     }
//       let i = end;
//         let t = arr[i];
//         arr[i] = arr[pivotIndex];
//         arr[pivotIndex] = t;
//   }


function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  //remaining part of the sub arrays: 
  
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

