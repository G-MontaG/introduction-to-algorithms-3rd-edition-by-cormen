// Time complexity: O(n^2)
// Memory: 1
export default function bubbleSort([...array]) {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;

    for (let i = 1, lenght = array.length; i < lenght; i++) {
        swapped = false;

        for (let j = 0; j < lenght - i; j++) {
            // Swap elements if they are in wrong order.
            if (array[j + 1] < array[j]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                // Register the swap.
                swapped = true;
            }
        }

        // If there were no swaps then array is already sorted and there is
        // no need to proceed.
        if (!swapped) {
            return array;
        }
    }

    return array;
}
