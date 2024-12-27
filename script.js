function clock(){
    let hours = document.querySelector('.hour');
    let minutes = document.querySelector('.min');
    let seconds = document.querySelector('.sec');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}


function week(){
    let w = document.querySelector('.w')
    let d = document.querySelector('.d')
    let pman = document.querySelector('.pmam')
    let date = new Date();
    let day = date.getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let week = days[day];
    w.innerHTML = week.toUpperCase();
    let month = date.getMonth();
    let months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12'];
    let mon = months[month];
    let year = date.getFullYear();
    let dat = date.getDate();
    d.innerHTML = dat + '/' + mon + '/' + year;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = h >= 12 ? 'PM' : 'AM';
    pman.innerHTML = ampm.toUpperCase();

}

week();



let interval = setInterval(clock, 1000);

let container = document.querySelector('.container');
 setInterval(async function() {
 if(container.style.backgroundColor === 'pink'){
     container.style.backgroundColor = 'crimson';
 }
 else{
     container.style.backgroundColor = 'pink';
 }
 },1000)
