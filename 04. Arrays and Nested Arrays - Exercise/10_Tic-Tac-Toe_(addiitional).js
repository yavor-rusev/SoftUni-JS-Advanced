function ticTacToe(moves) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isFirstPlayer = true;
    let marker = isFirstPlayer ? "X" : "O";

    for (let move of moves) {
        let [x, y] = move.split(" ").map(Number);
        marker = isFirstPlayer ? "X" : "O";

        if (checkFree(dashboard)) {
            if (dashboard[x][y] === false) {
                dashboard[x][y] = marker;
                isFirstPlayer = !isFirstPlayer;

            } else {
                console.log("This place is already taken. Please choose another!");
                continue;
            }
        }

        if (checkWin(dashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            printDashboard(dashboard);
            return;
        }
    }

    console.log("The game ended! Nobody wins :(");
    printDashboard(dashboard);

    function checkFree(dashBoard) {
        return dashBoard.flat().includes(false);
    }

    function checkWin(dashBoard, marker) {
        let win = false;

        for (let i = 0; i <= 2; i++) {
            if (dashBoard[i][0] === marker && dashBoard[i][1] === marker && dashBoard[i][2] === marker) {
                win = true;
            } else if (dashBoard[0][i] === marker && dashBoard[1][i] === marker && dashBoard[2][i] === marker) {
                win = true;
            }
        }

        if (dashBoard[0][0] === marker && dashBoard[1][1] === marker && dashBoard[2][2] === marker ||
            dashBoard[0][2] === marker && dashBoard[1][1] === marker && dashBoard[2][0] === marker) {
            win = true;
        }

        return win;
    }

    function printDashboard(dashboard) {
        dashboard.forEach(x => console.log(x.join("\t")));
    }
}

ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);

// ticTacToe([
//     "0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"
// ]);

// ticTacToe([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"
// ]);

// ticTacToe([
//     "0 0",
//     "0 0",
//     "0 0",
//     "0 0",
//     "0 0",
//     "0 0",
//     "0 0",
//     "0 0",
//     "0 0",
//     "0 0"
// ]);
