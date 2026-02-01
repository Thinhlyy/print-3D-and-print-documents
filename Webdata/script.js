let seconds = 0, minutes = 0, hours = 0;
let timer = null;
let status = "stopped";

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    // Định dạng hiển thị 00:00:00
    let display = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
    document.getElementById("display").innerHTML = display;
}

document.getElementById("startStop").onclick = function() {
    if (status === "stopped") {
        timer = window.setInterval(stopWatch, 1000);
        this.innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(timer);
        this.innerHTML = "Start";
        status = "stopped";
    }
};

document.getElementById("reset").onclick = function() {
    window.clearInterval(timer);
    seconds = 0; minutes = 0; hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
};