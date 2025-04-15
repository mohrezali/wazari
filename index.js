let whole=document.getElementById('whole');
let box1=document.getElementById('box1');
let dady=document.getElementById('dady');
let text=document.getElementById('text');
let sam=document.getElementById('sam');

let box2=document.getElementById('box2');
let box3=document.getElementById('box3');
let box4=document.getElementById('box4');
let box5=document.getElementById('box5');
let box6=document.getElementById('box6');

box1.addEventListener('click',sound);
box2.addEventListener('click',sound);
box3.addEventListener('click',sound);
box4.addEventListener('click',sound);
box5.addEventListener('click',sound);
box6.addEventListener('click',sound);



let boop= new Audio('boop.mp3');

function sound(){
    boop.play();
}








