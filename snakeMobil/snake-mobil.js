let game2=document.getElementById('game2');
let resetb2=document.getElementById('resetb2');
let startb=document.getElementById('startb')
let letter=document.getElementById('letter');

let score=document.getElementById('score');
let ctx2=game2.getContext('2d');
let gamewidth2=360;
let gameheight2=600;
const box=20;
let running2=false;
let xvolocity2=box;
let yvalocity2=0;
let foodx2 ;
let foody2 ;
let start;
let end;
let score2 = 0;
let start2;
let end2;
let click=new Audio('roblox-click.mp3');
let bonus=new Audio('bonus.wav');
let tacobell=new Audio('tacobell.mp3');

let snake2=[

    {x:box * 4, y:120},
    {x:box * 3, y:120},
    {x:box* 2, y:120},
    {x:box,y:120},
    {x:0,y:120}
];





window.addEventListener('touchstart',(event)=>{

    start2=event.touches[0].clientY;


})
window.addEventListener('touchend',(event)=>{
    end2=event.changedTouches[0].clientY;
    const diff2=end2 - start2;
    if(diff2 < -100 && yvalocity2 != 20){
        xvolocity2=0;
        yvalocity2= -20;
    }
    else if(diff2 > 100 && yvalocity2 != -20){
        xvolocity2= 0;
        yvalocity2= 20;

    };

})

window.addEventListener('touchstart',(event)=>{
        
    start=event.touches[0].clientX;

});

window.addEventListener('touchend',(event)=>{
    end=event.changedTouches[0].clientX;
    let diff= end - start;


    if(diff > 100 && xvolocity2 != -20 ){
            xvolocity2 = 20;
            yvalocity2 = 0;
    }
    else if(diff <= -100 && xvolocity2 != 20){
        xvolocity2 = -20;
        yvalocity2 =0;
    }

});

resetb2.addEventListener('click',()=>{
    resetgame2();
    click.play();
});

startb.addEventListener('click',()=>{
    gamestart2();
    click.play();
})

function ready(){
    game2.style.border='0px solid '
    ctx2.font='900 35px MV Boli ';
    ctx2.fillStyle='goldenrod';
    ctx2.fillText("Hello Welcome to", 50,140);
    score.style.display='none';
    letter.style.display='none';

    ctx2.font='900 60px MV Boil';
    ctx2.fillStyle='red';
    ctx2.fillText('Snake Game',10,230);
    score.style.display='none';
    letter.style.display='none';

    ctx2.font='900 79px MV Boil';
    ctx2.fillStyle='red';
    ctx2.fillText('2.0',120,320);
    

    
}




function gamestart2(){

    game2.style.border='5px solid black';

    running2 = true;
    createfood2();
    drawfood2();
    nexttick2();
    startb.style.display='none';
    resetb2.style.display='none';
    score.style.display='revert';
    letter.style.display='revert';
    score.style.color='black';



};
function nexttick2(){
       if(running2){
           setTimeout(() => {
               clearbored2();
               drawfood2();
               movesnake2();
               drawsnake2();
               checkgameover2();
               nexttick2();
           }, 75)

       }
       else{
           displaygameover2()
       }
};

function clearbored2(){
    ctx2.clearRect(0,0,gamewidth2,gameheight2);
};
function createfood2(){
    function randomefood(min,max){
        let randome=Math.round((Math.random() * (max - min )) / box) * box;
        return randome;
    }
    foodx2= randomefood(0 ,gamewidth2 - box);
    foody2= randomefood(0,gameheight2 - box);
    console.log(foodx2);
    console.log(foody2);
}
function drawfood2(){
    ctx2.fillStyle='rgb(232,51,35)';
    ctx2.fillRect(foodx2,foody2,box,box)

};
function movesnake2() {


    const head = {
        x: snake2[0].x + xvolocity2,
        y: snake2[0].y + yvalocity2
    };
    snake2.unshift(head);
     if (snake2[0].x == foodx2 && snake2[0].y == foody2) {

         createfood2();
         score2= score2 +1;

         score.innerHTML=score2;
         bonus.play();
    }
    else {
         snake2.pop();
    }
    

    if(score2 > 9 && score2 < 19){
        score.style.color='blue';
    }
    else if(score2 > 18 && score2 < 39){
        score.style.color='green';
    }
    else if(score2 > 38 && score2 < 69){
        score.style.color='red';
    }
    else if(score2 > 68){
        score.style.color='gold'
    }
    else{
        score.style.color='rgb(0, 128, 126)';
    }
    
 

};

function drawsnake2(){
    ctx2.fillStyle='purple';
    ctx2.strokeStyle='black';


    snake2.forEach(snakepart =>{
        ctx2.fillRect(snakepart.x,snakepart.y,box,box)
        ctx2.strokeRect(snakepart.x,snakepart.y,box,box)
        ctx2.roundRect(snakepart.x,snakepart.y,box,box,100)
    })
};


function checkgameover2(){
    switch(true){
        case(snake2[0].x < 0):
            running2=false;
            displaygameover2();
            resetb2.style.display='revert';
            break;
        case(snake2[0].x >= gamewidth2):
            running2=false;
            displaygameover2();
            resetb2.style.display='revert';
            break;
        case(snake2[0].y < 0):
            running2=false;
            displaygameover2();
            resetb2.style.display='revert';
            break;
        case(snake2[0].y >= gameheight2):
            running2 =false;
            displaygameover2();
            resetb2.style.display='revert';
            
        
    }
};
function displaygameover2(){
    ctx2.font='68px times ';
    ctx2.fillStyle='red';
    ctx2.textAlign='center';
    ctx2.fillText("Game Over",gamewidth2 / 2 , gameheight2 /2)
    score2=0;
    score.innerHTML=score2;
    tacobell.play();
    
    running2 =false;
};
function resetgame2(){
    xvolocity2 = box;
    yvalocity2 = 0;
    snake2=[
    {x:box * 4, y:120},
    {x:box * 3, y:120},
    {x:box * 2, y:120},
    {x:box,y:120},
    {x:0,y:120}
    ]
    xvolocity2= 20;
    yvalocity2= 0;


    gamestart2()

};

ready();
resetb2.style.display='none';