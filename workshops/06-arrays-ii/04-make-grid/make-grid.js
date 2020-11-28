// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
    let grid = [];

    for(r = 0; r < numRows; r++) {
        let row = [];

        for(c = 0; c < numColumns; c++) {
            row.push(c + 1);
        }
        
        grid.push(row);
    }

    return grid;
}