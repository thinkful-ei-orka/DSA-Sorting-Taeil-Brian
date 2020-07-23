// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 


// 21,1,26,45,29,28,2,9  -  16,49,39,27,43,34,46,40 
// 21,1,26,45 - 29,28,2,9 - 16,49,39,27 - 43,34,46,40
// 21,1 - 26,45 - 29,28 - 2,9 - 16,49 - 39,27 - 43,34 - 46,40
// 21 - 1 - 26 - 45 - 29 - 28 - 2 - 9 - 16 - 49 - 39 - 27 - 43 - 34 - 46 -40

// 1,21 - 26,45 - 28,29 - 2,9 - 16,49 - 27,39 - 34,43 - 40,46
// 1,21,26,45 - 2,9,28,29 - 16,27,39,49 - 34,40,43,46
// 1,2,9,21,26,28,29,45 - 16,27,34,39,40,43,46,49
// 1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49

// 1) a) 21,1 - 26,45 - 29,28 - 2,9 - 16,49 - 39,27 - 43,34 - 46,40
//    b) 21 - 1 
//    c) 21 - 1
//    d) 43 - 34

// 2) 1) The pivot could have been either 14 or 17
//    2) a) 3 - 9 - 10 --12--  14, 13, 15 - 16, 17, 19
//       b) 10, 3, 9, 12 -13- --14-- 15, 16 -17- 19

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++){
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j)
    return j;
}

function qsort (array, start = 0, end = array.length) {
    if (start >= end){
        return array;
    }

    const middle = partition(array, start, end);
    array = qsort(array, start, middle);
    array = qsort(array, middle + 1, end);

    return array;

}

function mSort(left, right, array){
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i< right.length; i++) {
        array[outputIndex++] = right[i];
    }

    return array
}

console.log(mSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 
    24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 
    2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 
    68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 
    28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 
    91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 
    46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 
    17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 
    98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 
    51, 54, 84, 34, 53, 78, 40, 14, 5]))
