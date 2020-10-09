
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    let arr = matrix;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        arr[i] = arr[i].reverse();
      }
    }
    return arr.join().split(',');
  }
