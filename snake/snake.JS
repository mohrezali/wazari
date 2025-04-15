let game=document.getElementById('game');
let ctx=game.getContext('2d');
let score=document.getElementById('score');
let resetb=document.getElementById('resetb');
let gamewidth=game.width;
let gameheight=game.height;
const unitesize=25;
let running=false;
let xvolocity=unitesize;
let yvalocity=0;
let foodx;
let foody;
let score2= 0;
let bonus= new Audio('bonus.wav');
let click= new Audio('roblox-click.mp3');
let loser= new Audio('tacobell.mp3');

let snake=[

    {x:unitesize * 4, y:0},
    {x:unitesize * 3, y:0},
    {x:unitesize * 2, y:0},
    {x:unitesize,y:0},
    {x:0,y:0}
]
window.addEventListener('keydown',changedirection);
resetb.addEventListener('click',()=>{
    resetgame();
    click.play();
});





function gamestart(){

    running = true;
    createfood();
    drawfood();
    nexttick();


    resetb.style.display='none';
};
function nexttick(){
       if(running){
           setTimeout(() => {
               clearbored();
               drawfood();
               movesnake();
               drawsnake();
               checkgameover();
               nexttick();
           }, 75)

       }
       else{
           displaygameover()
       }
};
function clearbored(){
    ctx.fillStyle='white';
    ctx.fillRect(0,0,gamewidth,gameheight);
};
function createfood(){
    function randomefood(min,max){
        let randome=Math.round((Math.random() * (max - min) +min) / unitesize) * unitesize;
        return randome;
    }
    foodx= randomefood(0 ,gamewidth - unitesize);
    foody= randomefood(0,gamewidth - unitesize);
}
function drawfood(){
    ctx.fillStyle='green';
    ctx.fillRect(foodx,foody,unitesize,unitesize)

}
function movesnake() {


    const head = {
        x: snake[0].x + xvolocity,
        y: snake[0].y + yvalocity
    };
    snake.unshift(head);
     if (snake[0].x == foodx && snake[0].y == foody) {

         score2 = score2 + 1;
         score.innerHTML = score2;
         bonus.play();

        createfood();
    }
    else {
         snake.pop();
    }

};

function drawsnake(){
    ctx.fillStyle='purple';
    ctx.strokeStyle='black';
    snake.forEach(snakepart =>{
        ctx.fillRect(snakepart.x,snakepart.y,unitesize,unitesize)
        ctx.strokeRect(snakepart.x,snakepart.y,unitesize,unitesize)
    })
};
function changedirection(event){
    const keypressed= event.keyCode;
    const left=37;
    const up=38;
    const right=39;
    const down=40;

    const goingup=(yvalocity == -unitesize);
    const goingdown=(yvalocity == unitesize);
    const goingright=(xvolocity == unitesize);
    const goingleft=(xvolocity == -unitesize);

    switch(true){
        case(keypressed == left && !goingright && running):
            xvolocity =-unitesize;
            yvalocity = 0;
            break;
        case(keypressed == up && !goingdown):
            xvolocity = 0;
            yvalocity =-unitesize;
            break;
        case(keypressed == right && !goingleft ):
            xvolocity = unitesize;
            yvalocity = -0;
            break
        case(keypressed == down && !goingup):
            xvolocity=0;
            yvalocity=unitesize;
    }

};
function checkgameover(){
    switch(true){
        case(snake[0].x < 0 ):
            running=false;
            displaygameover();
            resetb.style.display='revert';
            break;
        case(snake[0].x >= gamewidth):
            running=false;
            displaygameover();
            resetb.style.display='revert';
            break;
        case(snake[0].y < 0):
            running=false;
            displaygameover();
            resetb.style.display='revert';
            break;
        case(snake[0].y >= gameheight):
            running =false;
            displaygameover();
            resetb.style.display='revert';
    }
};
function displaygameover(){
    loser.play();
    ctx.font='70px MV Boli '
    ctx.fillStyle='red';
    ctx.textAlign='center';
    ctx.fillText("Game Over",gamewidth / 2 , gameheight /2)
    running =false;
};
function resetgame(){
    score2 =0;
    score.innerHTML=score2;
    xvolicity = unitesize;
    yvolicity = 0;
    snake=[

    {x:unitesize * 4, y:0},
    {x:unitesize * 3, y:0},
    {x:unitesize * 2, y:0},
    {x:unitesize,y:0},
    {x:0,y:0}
    ]
    xvolocity= 25;
    yvalocity= 0;


    gamestart()

}
gamestart();
