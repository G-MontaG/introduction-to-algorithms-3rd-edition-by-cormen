// Time complexity: O(n^2)
// Memory: 1
export default function selectionSort([...array]) {
    for (let i = 0, length = array.length; i < length - 1; i++) {
        let minIndex = i;

        // Find minimum element in the rest of array.
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // If new minimum element has been found then swap it with current i-th element.
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    return array;
}
