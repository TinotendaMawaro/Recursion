arr = [1, 4, 1001, 17, 3, 7, 107, 38, 15, 17, 3, 7, 1, 73, 15]

function merge(array1, array2) {
  const len1 = array1.length;
  const len2 = array2.length;
  const result = [];
  
  let i = 0, j=0;

  while (i < len1 && j < len2) {
    array1[i] < array2[j] 
    ? result.push(array1[i++]) 
    : result.push(array2[j++]);
  }
  
  for (; i < len1; i++) {
    result.push(array1[i])
  }
  for (; j < len2; j++) {
    result.push(array2[j])
  }

  return result;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const halfLength = Math.ceil(array.length/2);
    const firstHalf = mergeSort(array.splice(0, halfLength));
    const secondHalf = mergeSort(array.splice(-halfLength));
  
    return merge(firstHalf, secondHalf);
  }
}

console.log(mergeSort(arr))