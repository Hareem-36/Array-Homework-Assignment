const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  function printDiagonal(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i][i]);
    }
  }
  
  function sumMatrix(matrix: number[][]): number {
    let sum = 0;
    for (let row of matrix) {
      for (let element of row) {
        sum += element;
      }
    }
    return sum;
  }
  
  console.log("Diagonal elements:");
  printDiagonal(matrix);
  
  console.log("Sum of all elements:", sumMatrix(matrix));