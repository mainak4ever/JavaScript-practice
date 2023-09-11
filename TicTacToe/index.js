var sign = "X"

function boxClicked(id) {
    if (document.getElementById(id).innerText == "") {
        document.getElementById(id).innerText = sign;

        checkResult()
        if (sign == "X") {
            sign = "O"
            document.getElementById('playerId').innerText = "Player 2"
        } else {
            sign = "X";
            document.getElementById('playerId').innerText = "Player 1"
        }
    }
}

function checkResult() {
    if (document.getElementById("box1").innerText == sign && document.getElementById("box2").innerText == sign &&
        document.getElementById("box3").innerText == sign || document.getElementById("box4").innerText == sign && document.getElementById("box5").innerText == sign &&
        document.getElementById("box6").innerText == sign || document.getElementById("box7").innerText == sign && document.getElementById("box8").innerText == sign &&
        document.getElementById("box9").innerText == sign || document.getElementById("box1").innerText == sign && document.getElementById("box4").innerText == sign &&
        document.getElementById("box7").innerText == sign || document.getElementById("box2").innerText == sign && document.getElementById("box5").innerText == sign &&
        document.getElementById("box8").innerText == sign || document.getElementById("box3").innerText == sign && document.getElementById("box6").innerText == sign &&
        document.getElementById("box9").innerText == sign || document.getElementById("box1").innerText == sign && document.getElementById("box5").innerText == sign &&
        document.getElementById("box9").innerText == sign || document.getElementById("box3").innerText == sign && document.getElementById("box5").innerText == sign &&
        document.getElementById("box7").innerText == sign) {
        isGameFinished = true;
        return;
    }

    var cellsFilled = document.querySelectorAll("td:not(:empty)").length;
    if (cellsFilled === 9) {
        isGameFinished = true;
    }
}