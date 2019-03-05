// Eight changing variables
var targetScore = "";
var currentScore = 0;
var winCount = 0;
var lossCount = 0;
var crystals = "";
var greenCrystal = "";
var yellowCrystal = "";
var redCrystal = "";
var blueCrystal = "";

//On pade load, load random number
$(document).ready(function () {
    console.log("ready")
    targetScore = parseInt(targetScore);
    $("#target-score-text").text(targetScore);
});
// One reusable function to create our random numbers
targetScore = Math.floor((Math.random() * 100) + 30);
console.log();


var greenNumber = Math.floor((Math.random() * 10) + 3);
var redNumber = Math.floor((Math.random() * 10) + 3);
var yellowNumber = Math.floor((Math.random() * 10) + 3);
var blueNumber = Math.floor((Math.random() * 10) + 3);

// Assign values to four crystals and when pushed each crystal gets a random value
$(".green").click(function () {
    greenCrystal = greenNumber;
    currentScore = currentScore + greenCrystal;
    console.log("Green value: " + greenCrystal);
});
$(".red").click(function () {
    redCrystal = redNumber;
    currentScore = currentScore + redCrystal;
    console.log("Red value: " + redCrystal);
});
$(".yellow").click(function () {
    yellowCrystal = yellowNumber;
    currentScore = currentScore + yellowCrystal;
    console.log("Yellow value: " + yellowCrystal);
});
$(".blue").click(function () {
    blueCrystal = blueNumber;
    currentScore = currentScore + blueCrystal;
    console.log("Blue value: " + blueCrystal);
});

// Add crystals together and log into HTML
$(".crystal").click(function () {
    currentScore = parseInt(currentScore);
    $("#current-score-text").text(currentScore);

    // Adjsut our wins and losses
    if (targetScore === currentScore) {
        console.log("made it here")
        alert("Winner!!");
        winCount++;
        $("#wins-text").text(winCount);
        greenCrystal = "";
        yellowCrystal = "";
        redCrystal = "";
        blueCrystal = "";
        greenNumber = Math.floor((Math.random() * 10) + 3);
        redNumber = Math.floor((Math.random() * 10) + 3);
        yellowNumber = Math.floor((Math.random() * 10) + 3);
        blueNumber = Math.floor((Math.random() * 10) + 3);
        targetScore = Math.floor((Math.random() * 100) + 30);
        currentScore = 0;
        $("#current-score-text").empty();
        $("#target-score-text").empty();
    }
    if (targetScore < currentScore) {
        console.log("made it here")
        alert("You exceeded the target score!");
        lossCount++;
        $("#losses-text").text(lossCount);
        greenCrystal = "";
        yellowCrystal = "";
        redCrystal = "";
        blueCrystal = "";
        greenNumber = Math.floor((Math.random() * 10) + 3);
        redNumber = Math.floor((Math.random() * 10) + 3);
        yellowNumber = Math.floor((Math.random() * 10) + 3);
        blueNumber = Math.floor((Math.random() * 10) + 3);
        targetScore = Math.floor((Math.random() * 100) + 30);
        currentScore = 0;
        $("#current-score-text").empty();
        $("#target-score-text").empty();
    }
    targetScore = parseInt(targetScore);
    $("#target-score-text").text(targetScore);
});

// Clear out variables and reset game

// Create a click event for our 4 crystals

// var score = score + crystal value

// if statement that checks scores and breaks us out of the game given a bust or a win