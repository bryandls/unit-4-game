$(document).ready(function () {
    
    var guessedNumber = 0;
    var targetNumber = 0;
    var crystal1 = 0;
    var crystal3 = 0;
    var crystal2 = 0;
    var crystal4 = 0;
    var tWins = 0;
    var tLosses = 0;

    
    
    function initializeGame() {
        guessedNumber = 0;
        targetNumber = Math.floor(Math.random() * 40) + 30;
        $("#target-number").text(targetNumber);
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;
        
        crystal1 = Math.floor(Math.random() * 11) + 1;
        console.log(crystal1);
        crystal2 = Math.floor(Math.random() * 11) + 1;
        console.log(crystal2);
        crystal3 = Math.floor(Math.random() * 11) + 1;
        console.log(crystal3);
        crystal4 = Math.floor(Math.random() * 11) + 1;
        console.log(crystal4);
        
        $("#crystal1").val(crystal1);
        $("#crystal2").val(crystal2);
        $("#crystal3").val(crystal3);
        $("#crystal4").val(crystal4);
        $("#guessed-number").text(0);
    }

    
    initializeGame();
   
    console.log(targetNumber);
    
    
    $(".number").on("click", function () {
        if (guessedNumber < targetNumber) {
            guessedNumber += parseInt($(this).val());
            $("#guessed-number").text(guessedNumber);
        }
        else if (guessedNumber === targetNumber) {
            alert("You win!");
            tWins++;
            $("#wins").text("Total wins: " + tWins);
            initializeGame();
        }
        else {
            alert("You lost! Try again!")
            tLosses++;
            $("#losses").text("Total Losses: " + tLosses);
            initializeGame();
        }
    })
    console.log("first number is " + guessedNumber)
    $("#target-number").text(targetNumber);

});