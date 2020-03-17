// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArray = [];
    if (matrix !== undefined && matrix.length !== 0) {
        matrix.forEach((element, index) => {
            if (index % 2) {
                newArray.push(...(element.reverse()));
            } else {
                newArray.push(...element);
            }
        });
        return newArray;
    } else {
        return []
    }
}
