// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns) {
    if(numColumns > 0) {
        for(r = 0; r < originalGrid.length; r++) {
            for(c = numColumns; c > 0; c--) {
                originalGrid[r].pop();
            }
        }
    }

    return originalGrid;
}