let hr = document.getElementById('h');
let mn = document.getElementById('m');
let sc = document.getElementById('s');
// console.log(mn)

function displayTime(){
    let date = new Date();
    
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let hrotation = (30 * hh) + (mm / 2);
    let mrotation = 6 * mm;
    let srotation = 6 * ss;
    // console.log(mn)

    h.style.transform = `rotate(${hrotation}deg)`;
    m.style.transform = `rotate(${mrotation}deg)`;
    s.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime,500);