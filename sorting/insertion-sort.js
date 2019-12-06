// Time complexity: O(n^2)
// Memory: 1
export default function insertionSort([...array]) {
    // If array is empty or consists of one element then return this array since it is sorted.
    if (array.length <= 1) {
        return array;
    }

    // Go through all array elements...
    for (let i = 0, length = array.length; i < length; i++) {
        let currentIndex = i;

        // Go and check if previous elements and greater then current one.
        // If this is the case then swap that elements.
        while (array[currentIndex - 1] !== undefined &&
            array[currentIndex] < array[currentIndex - 1]) {
            // Swap the elements.
            const tmp = array[currentIndex - 1];
            array[currentIndex - 1] = array[currentIndex];
            array[currentIndex] = tmp;

            // Shift current index left.
            currentIndex--;
        }
    }
    return array;
}

export function descendingInsertionSort(array) {
    return insertionSort(array).reverse();
}
