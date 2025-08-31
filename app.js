let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const clickAudio = document.getElementById("clickSound");
let mainContent = document.getElementById("main-content");

let turnO = true; //playerX,playerO

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    mainContent.style.display = "block";
};




boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO) {
            //playerO
            box.innerText ="O";
            turnO = false;
        } else {
            //playerO
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;

        // Play the shared audio
        if (clickAudio) {
            clickAudio.currentTime = 0;
            clickAudio.play();
        }


        checkWinner();
    });

});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }

};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

};
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    mainContent.style.display = "none"; // Hide main content
    disableBoxes();
};



const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        } 
    }
};

newBtn.addEventListener("click", () => {
    if (clickAudio) {
        clickAudio.currentTime = 0;
        clickAudio.play();
    }
    resetGame();
});
resetBtn.addEventListener("click", () => {
    if (clickAudio) {
        clickAudio.currentTime = 0;
        clickAudio.play();
    }
    resetGame();
});



