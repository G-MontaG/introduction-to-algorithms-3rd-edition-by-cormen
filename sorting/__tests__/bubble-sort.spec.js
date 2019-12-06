import bubbleSort from "../bubble-sort";

describe('Bubble sort', () => {
    test('should sort array of number in ascending order', () => {
        expect(bubbleSort([2, 4, 6, 1])).toStrictEqual([1, 2, 4, 6]);
        expect(bubbleSort([9, 3, 1, 5])).toStrictEqual([1, 3, 5, 9]);
        expect(bubbleSort([2, 4, 6, 1, 9, 3, 1, 5])).toStrictEqual([1, 1, 2, 3, 4, 5, 6, 9]);
        expect(bubbleSort([2, -4, 6, 1])).toStrictEqual([-4, 1, 2, 6]);
        expect(bubbleSort([-9, -3, -1, -5])).toStrictEqual([-9, -5, -3, -1]);
    });
    test('should not mutate original array', () => {
        let array = [2, 4, 6, 1];
        bubbleSort(array);
        expect(array).toStrictEqual([2, 4, 6, 1]);
    });
    test('should not mutate original array even if it stay the same', () => {
        let array = [1, 2, 4, 6];
        let sortedArray = bubbleSort(array);
        expect(array).not.toBe(sortedArray);
    })
    test('should not mutate original array even if it contain one item', () => {
        let array = [1];
        let sortedArray = bubbleSort(array);
        expect(array).not.toBe(sortedArray);
    })
});
