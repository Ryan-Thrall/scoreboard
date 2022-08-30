let homeDisplay = document.getElementById("home-score-text");
let awayDisplay = document.getElementById("away-score-text");

let homeScore = 0;
let awayScore = 0;

function homeScores() {
  homeScore += 1;
  if (homeScore < 10) {
    homeDisplay.innerHTML = "0" + homeScore;
  } else {
    homeDisplay.innerHTML = homeScore;
  }

}

function awayScores() {
  awayScore += 1;
  if (awayScore < 10) {
    awayDisplay.innerHTML = "0" + awayScore;
  } else {
    awayDisplay.innerHTML = awayScore;
  }
}

function reset() {
  homeDisplay.innerHTML = "00";
  awayDisplay.innerHTML = "00";
}