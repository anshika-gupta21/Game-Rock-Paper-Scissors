let userscore = 0;
let compscore = 0;
const options = document.querySelectorAll(".opt");

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");
const drawGame = () =>
{
    console.log("Game was draw!!");
    msg.innerText = "Game was draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}
const getcompchoice = ()=>
{
    const choices = ["rock", "paper","scissors"]

    const idx = Math.floor((Math.random()*3));
    return choices[idx];
}

const winner = (userWin, userchoice,compchoice) =>
{
    if (userWin === true) {
        console.log("You Win :)");
        msg.innerText = `You Win :) Your ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    }
    else{
        console.log("You Lose :(")
        msg.innerText = `You Lose :( ${compchoice} beats your ${userchoice}. `;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
}
}
const playgame = (userchoice)=>
{
    console.log(userchoice);
    const compchoice = getcompchoice();
    console.log(compchoice);
    if(userchoice === compchoice)
    {
        drawGame();
    }
    else 
    {
        let userWin = true;
        if(userchoice == "rock" )
        {
            userWin = compchoice==="paper"?false:true;
        }
        else if(userchoice === "paper")
        {
            userWin = compchoice==="rock"?true:false;
        }
        else{
            userWin = compchoice ==="paper"?true:false;
        }
        winner(userWin,userchoice,compchoice);
        
    }
    
}
options.forEach((opt)=>
{
    opt.addEventListener("click",()=>{
        const userchoice = opt.getAttribute("id");
        playgame(userchoice);
    });
});