



// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let msgcontainer = document.querySelector(".msg-container");
// let newgamebtn = document.querySelector("#new-btn");
// let msg = document.querySelector("#msg");

// let turn = true;

// const winpattern = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// // Reset game
// const resetGame = () => {
//     turn = true;
//     enableboxes();
//     msgcontainer.classList.add("hide");
// };

// // Disable all boxes
// const disabledboxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// // Enable all boxes
// const enableboxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// // Show winner
// const showWinner = (winner) => {
//     msg.innerText = `Congratulations! Winner is ${winner}`;
//     msgcontainer.classList.remove("hide");
//     disabledboxes();
// };

// // Check winner
// const checkwinner = () => {

//     for (let pattern of winpattern) {

//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//         if (pos1val !== "" && pos2val !== "" && pos3val !== "") {

//             if (pos1val === pos2val && pos2val === pos3val) {
//                 showWinner(pos1val);
//                 return;
//             }
//         }
//     }
// };

// // Box click event
// boxes.forEach((box) => {

//     box.addEventListener("click", () => {

//         if (turn) {
//             box.innerText = "O";
//             turn = false;
//         } else {
//             box.innerText = "X";
//             turn = true;
//         }

//         box.disabled = true;

//         checkwinner();

//     });

// });

// // Reset and New Game buttons
// newgamebtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let newgamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turn = true;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame = () => {
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const checkwinner = () => {

    for (let pattern of winpattern) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {

            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
    }
};

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }

        box.disabled = true;

        checkwinner();

    });

});

// Reset and New Game buttons
newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
