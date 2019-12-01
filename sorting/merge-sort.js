// Time complexity: O(n*log(n))
export function mergeSort([...array]) {
    // If array is empty or consists of one element then return this array since it is sorted.
    if (array.length <= 1) {
        return array;
    }

    // Split array on two halves.
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, array.length);

    // Sort two halves of split array
    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);

    // Merge two sorted arrays into one.
    return mergeSortedArrays(leftSortedArray, rightSortedArray);
}

function mergeSortedArrays(leftArray, rightArray) {
    let sortedArray = [];

    // In case if arrays are not of size 1.
    while (leftArray.length && rightArray.length) {
        let minimumElement = null;

        // Find minimum element of two arrays.
        if (leftArray[0] <=rightArray[0]) {
            minimumElement = leftArray.shift();
        } else {
            minimumElement = rightArray.shift();
        }

        // Push the minimum element of two arrays to the sorted array.
        sortedArray.push(minimumElement);
    }

    // If one of two array still have elements we need to just concatenate
    // this element to the sorted array since it is already sorted.
    if (leftArray.length) {
        sortedArray = sortedArray.concat(leftArray);
    }

    if (rightArray.length) {
        sortedArray = sortedArray.concat(rightArray);
    }

    return sortedArray;
}
