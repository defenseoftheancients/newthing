var countDate = new Date('Jan 1, 20020 00:00:00').getTime();
function newYear() {
    var now = new Date().getTime();
    var gap = countDate - now;
    
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let d = Math.floor(gap/day);
    let h = Math.floor((gap%day)/hour);
    let m = Math.floor((gap%hour)/minute);
    let s = Math.floor((gap%minute)/ second);
    console.log(d);
    document.getElementById('day').innerText = "0";
    document.getElementById('hour').innerText = h
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}
setInterval(function () {
    newYear();
}, 1000);