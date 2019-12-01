import { mergeSort } from '../merge-sort';

describe('Merge sort', () => {
    describe('mergeSort function', () => {
        test('should sort array of number in ascending order',() => {
            expect(mergeSort([2, 4, 6, 1])).toStrictEqual([1, 2, 4, 6]);
            expect(mergeSort([9, 3, 1, 5])).toStrictEqual([1, 3, 5, 9]);
        });
        test('should not mutate original array',() => {
            let array = [2, 4, 6, 1];
            mergeSort(array);
            expect(array).toStrictEqual([2, 4, 6, 1]);
        });
    });
});
