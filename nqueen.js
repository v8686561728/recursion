const queen = (queens) => {
  let board = Array(queens)
for(let i=0;i<queens;i++){
    board[i]= Array(queens).fill(0)
}
 
//   let board = [ [ 0, 0, 0, 0 ], [ 0, 0, 'Q', 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]

//   console.log(isSafe(2,1,board))
//   console.log(board)
 fillQueen(board, queens, 0)
 console.log(board)
  // print(fillQueen(board,queens,0))
};

const fillQueen = (board, q, c) => {
  if (c >= q) return true;

  for (let i = 0; i < q; i++) {
    if (isSafe(i, c, board)) {
      board[i][c] = "Q";
      if(fillQueen(board, q, c + 1)===true) return true;
      board[i][c] = 0;
    }
   
  }
  return board;
};
const print = (board) => {
  board.forEach((row) => {
    console.log(row);
  });
};

const isSafe = (x, y, board) => {
//   if (board[x].indexOf("Q") > -1) return false;

//   for (let i = 0; i < board.length; i++) {
//     if (board[i][y] === "Q") return false;
//   }

//   for (let i = x, j = y; i < board.length && j < board.length; i++, j++) {
//     if (board[i][j] === "Q") return false;
//   }
//   for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
//     if (board[i][j] === "Q") return false;
//   }

//   for (let i = x, j = y; i >= 0 && j < board.length; i--, j++) {
//     if (board[i][j] === "Q") return false;
//   }
//   for (let i = x , j = y ; i < board.length && j >= 0; i++, j--) {
//     if (board[i][j] === "Q") return false;
//   }
 // Check this row on left side
 for(let i = 0; i < y; i++){
    if(board[x][i] == 'Q')
        return false 
}

// Check upper diagonal on left side
for (i = x, j = y; i >= 0 && j >= 0; i--, j--)
    if (board[i][j]== 'Q')
        return false

// Check lower diagonal on left side
for (i = x, j = y; j >= 0 && i < board.length; i++, j--)
    if (board[i][j]== 'Q')
        return false
  return true;
};

queen(4);
