// Time complexity: O(n*(log(n))^2)
// Memory: 1
export default function shellSort([...array]) {
    // Define a gap distance.
    let gap = Math.floor(array.length / 2);

    // Until gap is bigger then zero do elements comparisons and swaps.
    while (gap > 0) {
        // Go and compare all distant element pairs.
        for (let i = 0, length = array.length; i < (length - gap); i++) {
            let currentIndex = i;
            let gapShiftedIndex = i + gap;

            while (currentIndex >= 0) {
                // Compare and swap array elements if needed.
                if (array[gapShiftedIndex] < array[currentIndex]) {
                    const tmp = array[currentIndex];
                    array[currentIndex] = array[gapShiftedIndex];
                    array[gapShiftedIndex] = tmp;
                }

                gapShiftedIndex = currentIndex;
                currentIndex -= gap;
            }
        }

        // Shrink the gap.
        gap = Math.floor(gap / 2);
    }

    // Return sorted copy of an original array.
    return array;
}
