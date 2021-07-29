module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < i; j++) {
                if (i % 2 === 1) {
                    matrix[i].reverse();
                }
            }
        }
    }
    return matrix.flat();
}
