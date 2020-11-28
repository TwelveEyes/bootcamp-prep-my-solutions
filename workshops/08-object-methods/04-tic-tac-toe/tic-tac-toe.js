// YOUR CODE BELOW
let ticTacToe = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    move: function(chara, rowNum, colNum) {
        if(this.board[rowNum][colNum] === null) this.board[rowNum][colNum] = chara;

        console.log(this.board);

        return this.board;
    },
    clear: function() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]

        console.log(this.board);

        return this.board;
    }
}