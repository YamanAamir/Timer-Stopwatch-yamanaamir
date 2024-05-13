//     TIMER
let timerPg = document.getElementById("timer")
let stopWatchPg = document.getElementById("stop-watch")
let tSec = `00`;
let tMin = 5;
let playTimer = false
let interval;
let displayTime = document.getElementById("displayTime")

let tFunc = () => {
    timerPg.style.display = "block"
    stopWatchPg.style.display = "none"
    document.getElementById("t-btn").style.borderBottom = "2px solid black"
    document.getElementById("s-btn").style.borderBottom = "none"
}

let sFunc = () => {
    timerPg.style.display = "none"
    stopWatchPg.style.display = "block"
    document.getElementById("s-btn").style.borderBottom = "2px solid black"
    document.getElementById("t-btn").style.borderBottom = "none"
}

displayTime.innerHTML = `${tMin}m ${tSec}s`
function timer() {
    if (tSec == 0) {
        tMin--
        tSec = 60
    }

    tSec--
    displayTime.innerHTML = `${tMin}m ${tSec}s`

    if (tMin == 0 && tSec == 0) {
        clearInterval(interval)
        swal("Your Time has been Completed")
        clearInterval(interval)
        tSec = 60
        tMin = 5
        document.getElementById("t-start").innerHTML = 'Start'.toUpperCase()
        ResetTimer()
    }
}

function startTimer() {
    if (playTimer) {
        event.target.innerText = 'Start'.toUpperCase()
        clearInterval(interval)
        playTimer = false
    } else {
        event.target.innerText = 'Pause'.toUpperCase()
        interval = setInterval(timer, 1000)
        playTimer = true
    }
}

function ResetTimer() {
    clearInterval(interval)
    tSec = `00`
    tMin = 5
    document.getElementById("t-start").innerHTML = 'Start'.toUpperCase()
    displayTime.innerHTML = `${tMin}m ${tSec}s`
    playTimer = false
}

// STOP WATCH
let startStopWatch = document.getElementById("startStopWatch")
let milliSec = 0, wSec = 0, wMin = 0, wHour = 0, playWatch = false;

startStopWatch.innerHTML = ` ${wMin}m ${wSec}s ${milliSec}`
function Watch() {
    milliSec++
    startStopWatch.innerHTML = ` ${wMin}m ${wSec}s ${milliSec}`
    if (milliSec == 59) {
        wSec++
        milliSec = `00`
    }
    if (wSec == 59) {
        wMin++
        wSec = `00`
    }
    if (wMin == 59) {
        wHour++
        wMin = `00`
        clearInterval(stopInterval)
        swal("1 Hour Completed")
        startStopWatch.innerHTML = ` ${wHour}Hr`
        resetWatch()
    }
}


let stopInterval;
function startWatch() {
    if (playWatch) {
        event.target.innerText = 'start'.toUpperCase()
        clearInterval(stopInterval)
        playWatch = false
    } else {
        event.target.innerText = 'Pause'.toUpperCase()
        stopInterval = setInterval(Watch, 10);
        playWatch = true
    }
}

function resetWatch() {
    clearInterval(stopInterval)
    milliSec = 0, wSec = 0, wMin = 0, wHour = 0;
    startStopWatch.innerHTML = ` ${wMin}m ${wSec}s ${milliSec}`
    document.getElementById("start-watch").innerHTML = 'Start'.toUpperCase()
    playWatch = false

}