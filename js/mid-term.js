var timer = () => {
    let time = new Date();
    let hour = (time.getHours() % 12).toString();
    let minute = time.getMinutes().toString();
    let second = time.getSeconds().toString();
    let outputTime = document.getElementById('timer');
    //single number with 0
    if (hour.length < 2) {
        hour = "0" + hour;
    }
    if (minute.length < 2) {
        minute = "0" + minute;
    }
    if (second.length < 2) {
        second = "0" + second;
    }
    //define AM and PM with the polite
    if (time.getHours() < 12) {
        outputTime.innerHTML = hour + " " + ":" + " " + minute + " " + ":" + " " + second + " " + "AM";
        document.getElementById('polite').innerHTML = "Good Morning !";
    } else {
        outputTime.innerHTML = hour + " " + ":" + " " + minute + " " + ":" + " " + second + " " + "PM";
        document.getElementById('polite').innerHTML = "Good Afternoon !";
    }
    if (time.getHours() == 12) {
        outputTime.innerHTML = hour + " " + ":" + " " + minute + " " + ":" + " " + second + " " + "PM";
    }
    if (hour >= 17) {
        outputTime.innerHTML = hour + " " + ":" + " " + minute + " " + ":" + " " + second + " " + "PM";
        document.getElementById('polite').innerHTML = "Good Evening !";
    }
    if (hour >= 19) {
        outputTime.innerHTML = hour + " " + ":" + " " + minute + " " + ":" + " " + second + " " + "PM";
        document.getElementById('polite').innerHTML = "Good Night !";
    }

}
setInterval(timer, 1000);