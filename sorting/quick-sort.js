// Time complexity: O(n^2)
// Memory: log(n)
export function quickSort([...array]) {
    // If array has less than or equal to one elements then it is already sorted.
    if (array.length <= 1) {
        return array;
      }
  
      // Init left and right arrays.
      const leftArray = [];
      const rightArray = [];
  
      // Take the first element of array as a pivot.
      const pivotElement = array.shift();
      const centerArray = [pivotElement];
  
      // Split all array elements between left, center and right arrays.
      while (array.length) {
        const currentElement = array.shift();
  
        if (currentElement === pivotElement) {
          centerArray.push(currentElement);
        } else if (currentElement < pivotElement) {
          leftArray.push(currentElement);
        } else {
          rightArray.push(currentElement);
        }
      }
  
      // Sort left and right arrays.
      const leftArraySorted = quickSort(leftArray);
      const rightArraySorted = quickSort(rightArray);
  
      // Let's now join sorted left array with center array and with sorted right array.
      return leftArraySorted.concat(centerArray, rightArraySorted);
}
