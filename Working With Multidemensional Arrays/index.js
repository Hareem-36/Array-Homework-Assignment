var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function printDiagonal(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i][i]);
    }
}
function sumMatrix(matrix) {
    var sum = 0;
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var element = row_1[_a];
            sum += element;
        }
    }
    return sum;
}
console.log("Diagonal elements:");
printDiagonal(matrix);
console.log("Sum of all elements:", sumMatrix(matrix));
