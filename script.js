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