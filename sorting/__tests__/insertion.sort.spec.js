import { insertionSort, descendingInsertionSort } from "../insertion-sort";

describe('Insertion sort', () => {
    describe('insertionSort function', () => {
        test('should sort array of number in ascending order',() => {
            expect(insertionSort([2, 4, 6, 1])).toStrictEqual([1, 2, 4, 6]);
            expect(insertionSort([9, 3, 1, 5])).toStrictEqual([1, 3, 5, 9]);
        });
    });
    describe('descendingInsertionSort function', () => {
        test('should sort array of number in descending order',() => {
            expect(descendingInsertionSort([2, 4, 6, 1])).toStrictEqual([6, 4, 2, 1]);
            expect(descendingInsertionSort([9, 3, 1, 5])).toStrictEqual([9, 5, 3, 1]);
        });
    });
});
