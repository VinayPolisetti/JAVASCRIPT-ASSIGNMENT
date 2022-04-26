var reqNum = Math.floor(Math.random() * 100);
var ctr = 0;
var gl = 5;
const userInput = document.querySelector('#guessField');
document.getElementById("subt").addEventListener("click", function(e){
    e.preventDefault();
    var guess = parseInt(userInput.value);
    ctr++;
    var name = document.getElementById("left");
    name.textContent = gl-ctr;
        if(guess==reqNum)
        {
            var name = document.getElementById("lowOrHi");
            name.textContent = "Congratulations";
            var name = document.getElementById("winlose");
            name.textContent = "Game Over. You Won and took "+ctr+" guesses";
            document.getElementById("subt").disabled = true;
        }
        else if(guess < reqNum)
        {
            var name = document.getElementById("lowOrHi");
            name.textContent = "Too low. Number of Guesses remaining : "+(gl-ctr);
        }
        else if(guess > reqNum)
        {
            var name = document.getElementById("lowOrHi");
            name.textContent = "Too High. Number of Guesses remaining : "+(gl-ctr);
        }
        if(gl-ctr == 0)
        {
            var nam = document.getElementById("winlose");
            nam.innerHTML = "Game Over. You Lose<br /> Better Luck Next Time <br />The Number is "+reqNum;
            document.getElementById("subt").disabled = true;
        }
});