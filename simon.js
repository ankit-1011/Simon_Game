let gameSeq = [];
let userSeq = [];


let started = false;
let level = 0;
let score=0;
let highSco=0;

let h2=document.querySelector("h2")
let btns=["pink","yellow","blue","green"]
let h3=document.querySelector("h3")


document.addEventListener("click", function() 
{
  if (started==false) 
    {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn)
{
  btn.classList.add("flash");
  setTimeout(function()
  {
    btn.classList.remove("flash");
  },250);
}

function levelUp()
{
    level++;
    score+=10;
    highSco=score;
    h3.textContent="Score:"+score;
    h2.textContent = "Level: " + level;
    let randomIdx = Math.floor(Math.random() * 4);
    let colorClass=btns[randomIdx];
  
    let randomColor=document.querySelector("."+colorClass)
    gameSeq.push(colorClass)
    btnFlash(randomColor);
}



function checkAnswer()
{console.log(level)
  let idx=level-1;
 if(userSeq[idx]===gameSeq[idx])
 {
 if(userSeq.length==gameSeq.length)
 {
  levelUp();
 }
 }
 else{
  highestScore()
  h2.textContent="game over!Press any key to start";
  started=false;
  userSeq=[];
  gameSeq=[]
  level=0;
  score=0;

 }
}



function btnPress()
{
console.log(this)
btnFlash(this);
userColor=this.getAttribute("id")
userSeq.push(userColor)
checkAnswer();
}

let btnpress=document.querySelectorAll(".btn")
for(btn of btnpress)
{
  btn.addEventListener("click",btnPress);
}

function highestScore() {
  if (score > highSco) {
    highSco = score;
    console.log("You beat your highest score!");
  } else {
    console.log("You didn't beat your highest score");
  }
  console.log("Highest Score: " + highSco);
}
