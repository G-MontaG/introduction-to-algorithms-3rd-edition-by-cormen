import { selectionSort } from "../selection-sort";

describe('Selection sort', () => {
    describe('selectionSort function', () => {
        test('should sort array of number in ascending order',() => {
            expect(selectionSort([2, 4, 6, 1])).toStrictEqual([1, 2, 4, 6]);
            expect(selectionSort([9, 3, 1, 5])).toStrictEqual([1, 3, 5, 9]);
        });
        test('should not mutate original array',() => {
            let array = [2, 4, 6, 1];
            selectionSort(array);
            expect(array).toStrictEqual([2, 4, 6, 1]);
        });
        test('should not mutate original array even if it stay the same',() => {
            let array = [1, 2, 4, 6];
            let sortedArray = selectionSort(array);
            expect(array).not.toBe(sortedArray);
        })
        test('should not mutate original array even if it contain one item',() => {
            let array = [1];
            let sortedArray = selectionSort(array);
            expect(array).not.toBe(sortedArray);
        })
    });
});
