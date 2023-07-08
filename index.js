const FinalTimeraw = "nov 7, 2023 00:00:00:00";

const FinalTime = new Date(FinalTimeraw).getTime();

document.getElementById("finaltime").innerHTML = FinalTimeraw;


const timer = setInterval(function () {

    const CurrentTime = new Date().getTime();

    const LeftTime = FinalTime - CurrentTime;

    let days = Math.floor(LeftTime / (1000 * 60 * 60 * 24));

    let hour = Math.floor((LeftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let min = Math.floor((LeftTime % (1000 * 60 * 60)) / (1000 * 60));

    let sec = Math.floor((LeftTime % (1000 * 60)) / (1000));

    let milsec = Math.floor((LeftTime % (1000)));

    document.getElementById("time").innerHTML = days + "D " + hour + "H " + min + "M " + sec + "S " + milsec;

    if (LeftTime < 0) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = "Countdown finished!";
    };

}, 0);