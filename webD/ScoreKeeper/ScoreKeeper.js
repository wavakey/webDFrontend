const p1Button=document.querySelector('#p1Button');
const p2Button=document.querySelector('#p2Button');
const p1Display=document.querySelector('#p1Display');
const p2Display=document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#playto');

let p1Score=0;
let p2Score=0;

let winningScore = 3 ;

winningScoreSelect.addEventListener('change',function()
{
   winningScore = parseInt(this.value);
   reset();
});


let isGameOver=false;

p1Button.addEventListener('click',function()
{
     if(!isGameOver)
    {
      p1Score=p1Score+1;
      if(p1Score=== winningScore)
      {
        isGameOver=true;
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
        p1Button.disabled = true;
        p2Button.disabled = true;
      }
      p1Display.textContent=p1Score;
    }
});

p2Button.addEventListener('click',function()
{
    if(!isGameOver)
    {
      p2Score=p2Score+1;
      if(p2Score=== winningScore)
      {
        isGameOver=true;

        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
        p1Button.disabled = true;
        p2Button.disabled = true;
      }
      p2Display.textContent=p2Score;
    }
});

const resetButton=document.querySelector('#resetButton');
resetButton.addEventListener('click',reset);

function reset()
{
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;

    p1Display.classList.remove('winner');
    p2Display.classList.remove('loser'); 
    p2Display.classList.remove('winner');
    p1Display.classList.remove('loser'); 
    p1Button.disabled = false;
    p2Button.disabled = false; 
}