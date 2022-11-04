const clock = document.querySelector("h2#clock");
//clock.innerText = "";

function sayClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //clock.innerText = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

//setTimeout(sayClock, 5000);
//뿌야

//처음 호출
sayClock();
//매초 호출
setInterval(sayClock, 1000);