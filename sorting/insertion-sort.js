export function insertionSort([...array]) {
    for (let j = 1, length = array.length; j < length; j++) {
        let key = array[j];
        let i = j - 1;
        while (i >= 0 && array[i] > key) {
            array[i + 1] = array[i];
            i--;
        }
        array[i + 1] = key;
    }
    return array;
}

export function descendingInsertionSort(array) {
    return insertionSort(array).reverse();
}
