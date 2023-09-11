var playBtnElement = document.getElementById("playBtn");
var audioPlayer = document.getElementById("audioPlayer");
var pauseButtonElement = document.getElementById("pauseBtn");
var restartBtnElement = document.getElementById("restartBtn");
var forwardBtnElement = document.getElementById("forwardBtn");
var backwardBtnElement = document.getElementById("backwardBtn");
var halfSpeedBtnElement = document.getElementById("halfSpeedbtn");
var normalSpeedbtnElement = document.getElementById("normalSpeedbtn");
var doubleSpeedBtn = document.getElementById("doubleSpeedbtn");
var progressBarElement = document.getElementById("progress-bar");

playBtnElement.addEventListener("click", function () {
    audioPlayer.play();
})

pauseButtonElement.addEventListener("click", function () {
    audioPlayer.pause();
    console.log((audioPlayer.currentTime / audioPlayer.duration) * 100);
})

restartBtnElement.addEventListener("click", function () {
    audioPlayer.currentTime = 0;
})

forwardBtnElement.addEventListener("click", function () {
    audioPlayer.currentTime = audioPlayer.currentTime + 10;
})

backwardBtnElement.addEventListener("click", function () {
    audioPlayer.currentTime = audioPlayer.currentTime - 10;
})

halfSpeedBtnElement.addEventListener("click", function () {
    audioPlayer.playbackRate = 0.5
});

normalSpeedbtnElement.addEventListener("click", function () {
    audioPlayer.playbackRate = 1
})

doubleSpeedBtn.addEventListener("click", function () {
    audioPlayer.playbackRate = 2
})

audioPlayer.addEventListener("timeupdate", function () {
    var audioPlayerPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100

    if (audioPlayerPercentage < 30) {
        progressBarElement.style.backgroundColor = "red"
    } else if (audioPlayerPercentage >= 30 && audioPlayerPercentage < 70) {
        progressBarElement.style.backgroundColor = "yellow"
    } else {
        progressBarElement.style.backgroundColor = "green"
    }
    progressBarElement.style.width = (audioPlayer.currentTime / audioPlayer.duration) * 100 + "%"
    /*
    widthOfProgressBar =  (audioPlayer.currentTime /  audioPlayer.duration) * 100 )
    */
})