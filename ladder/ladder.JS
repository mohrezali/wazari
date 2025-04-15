let game=document.getElementById('game');
let tittle=document.createElement('div');
let restart=document.getElementById('restart');
let restart2=document.getElementById('restart2');
let restart3= document.getElementById('restart3');
let restart4=document.getElementById('restart4');
let restart5=document.getElementById('restart5');
let homebutton=document.getElementById('homebutton');
let menub=document.getElementById('menub');
let next1=document.getElementById('next1');
let next2=document.getElementById('next2');
let next3=document.getElementById('next3');
let next4=document.getElementById('next4');


restart.addEventListener('click',()=>{
    audio4.play();
})
restart2.addEventListener('click',()=>{
    audio4.play();
})
restart3.addEventListener('click',()=>{
    audio4.play();
})
restart4.addEventListener('click',()=>{
    audio4.play();
})
restart5.addEventListener('click',()=>{
    audio4.play();
})
next1.addEventListener('click',()=>{
    audio4.play();
})
next2.addEventListener('click',()=>{
    audio4.play();
})
next3.addEventListener('click',()=>{
    audio4.play();
})
next4.addEventListener('click',()=>{
    audio4.play();
})





homebutton.style.display='none';
next1.style.display='none';
next2.style.display='none';
next3.style.display='none';
next4.style.display='none';
restart.style.display='none';
restart2.style.display='none';
restart3.style.display='none';
restart4.style.display='none';
restart5.style.display='none';
tittle.textContent='Hello';
tittle.classList.add('tittle');
game.appendChild(tittle);

let tittle2=document.createElement('p');
tittle2.textContent='Welcome to Ladder Escape';
tittle2.classList.add('tittle2');
game.appendChild(tittle2);

let tittle3=document.createElement('p');
tittle3.textContent='Ladder Escape';
tittle3.classList.add('tittle3');
game.appendChild(tittle3);

let play=document.getElementById('play');
let emoji=document.getElementById('emoji');
let box1= document.getElementById('box1');
let box2=document.getElementById('box2')
let box3= document.getElementById('box3');
let box4=document.getElementById('box4');
let box5= document.getElementById('box5');
let box6=document.getElementById('box6');

let phone=parseInt(window.getComputedStyle(box1).getPropertyValue('left'));



box1.addEventListener('click',()=>{
    if(phone===100){
        emoji.style.top='0px';
        audio2.play();
    }
    else if(phone===40){
        emoji.style.top='0px';
        audio2.play();
    }
})
box2.addEventListener('click',()=>{
    if(phone===100){
       emoji.style.top='50px';
       audio2.play();
    }
    else if(phone===40){
        emoji.style.top='83.3px';
        audio2.play();
    }
});
box3.addEventListener('click',()=>{
    if(phone===100){
       emoji.style.top='100px';
       audio2.play();
    }
    else if(phone===40){
        emoji.style.top='166.6px';
        audio2.play();
    }
});
box4.addEventListener('click',()=>{
    if(phone===100){
       emoji.style.top='150px';
       audio2.play();
    }
    else if(phone===40){
        emoji.style.top='249.9px';
        audio2.play();
    }
})
box5.addEventListener('click',()=>{
    if(phone===100){
       emoji.style.top='200px';
       audio2.play();
    }
    else if(phone===40){
        emoji.style.top='333.2px';
        audio2.play();
    }

});
box6.addEventListener('click',()=>{
    if(phone===100){
       emoji.style.top='250px';
       audio2.play();
    }
    else if(phone===40){
        emoji.style.top='416.5px';
        audio2.play();
    }
})
menub.addEventListener('click', ()=>{
    menu();
    audio4.play();
})
emoji.style.display='none';
box1.style.display='none';
box2.style.display='none';
box3.style.display='none';
box4.style.display='none';
box5.style.display='none';
box6.style.display='none';

menub.style.display='none';

 let message=document.createElement('P');
    message.textContent='Game Over';
    message.classList.add('message');
    message.style.display='none';
    game.appendChild(message);

 let pass=document.createElement('p');
 pass.textContent="Congratulations ! ";
 pass.classList.add('pass');
 game.appendChild(pass);
 pass.style.display='none';

 let pass2=document.createElement('p');
 pass2.textContent="You passed Level 1";
 pass2.classList.add('pass2');
 game.appendChild(pass2);
 pass2.style.display='none';

 let pass3=document.createElement('p');
 pass3.textContent= '';
 pass3.classList.add('pass3')
 game.appendChild(pass3);

 let level1=document.createElement('div');
 level1.textContent='Level 1';
 level1.classList.add('level1');
 game.appendChild(level1);
 level1.style.display='none'

 let level2=document.createElement('div');
 level2.textContent='Level 2';
 level2.classList.add('level2');
 game.appendChild(level2);
 level2.style.display='none';

 let level3=document.createElement('div');
 level3.textContent='Level 3';
 level3.classList.add('level3');
 game.appendChild(level3);
 level3.style.display='none';

 let level4=document.createElement('div');
 level4.textContent='Level 4';
 level4.classList.add('level4');
 game.appendChild(level4);
 level4.style.display='none';

 let level5=document.createElement('div');
 level5.textContent='Level 5';
 level5.classList.add('level5');
 game.appendChild(level5);
 level5.style.display='none';

 let animation1 = document.createElement('div');
 animation1.classList.add('animation1');
 game.appendChild(animation1);

 let animation2 = document.createElement('div');
 animation2.classList.add('animation2');
 game.appendChild(animation2);

 let animation3 = document.createElement('div');
 animation3.classList.add('animation3');
 game.appendChild(animation3);

 let animation4 = document.createElement('div');
 animation4.classList.add('animation4');
 game.appendChild(animation4)

 let animation5 = document.createElement('div');
 animation5.classList.add('animation5');
 game.appendChild(animation5);

 let animation6 = document.createElement('div');
 animation6.classList.add('animation6');
 game.appendChild(animation6);

 let animation7 = document.createElement('div');
 animation7.classList.add('animation7');
 game.appendChild(animation7);

 let animation8 = document.createElement('div');
 animation8.classList.add('animation8');
 game.appendChild(animation8);

 let animation9 = document.createElement('div');
 animation9.classList.add('animation9');
 game.appendChild(animation9);

 let animation10 = document.createElement('div');
 animation10.classList.add('animation10');
 game.appendChild(animation10);

 let animation11 = document.createElement('div');
 animation11.classList.add('animation11');
 game.appendChild(animation11);

 let animation12 = document.createElement('div');
 animation12.classList.add('animation12');
 game.appendChild(animation12);

  let animation13 = document.createElement('div');
 animation13.classList.add('animation13');
 game.appendChild(animation13);

  let animation14 = document.createElement('div');
 animation14.classList.add('animation14');
 game.appendChild(animation14);

  let animation15 = document.createElement('div');
 animation15.classList.add('animation15');
 game.appendChild(animation15);

  let animation16 = document.createElement('div');
 animation16.classList.add('animation16');
 game.appendChild(animation16);

 let animation17 = document.createElement('div');
 animation17.classList.add('animation17');
 game.appendChild(animation17);

 

  let animation18 = document.createElement('div');
 animation18.classList.add('animation18');
 game.appendChild(animation18);

  let animation19 = document.createElement('div');
 animation19.classList.add('animation19');
 game.appendChild(animation19);

  let animation20 = document.createElement('div');
 animation20.classList.add('animation20');
 game.appendChild(animation20);


level1.addEventListener('click',()=>{
    go1();
    audio4.play();
});


level2.addEventListener('click',()=>{
    go2();
    audio4.play();
});


level3.addEventListener('click',()=>{
    go3();
    audio4.play();
});


level4.addEventListener('click',()=>{
    go4();
    audio4.play();
});

level5.addEventListener('click',()=>{
    go5();
    audio4.play();
});

let audio= new Audio('failling.wav');
let audio2= new Audio('jump.wav');
let audio3=new Audio('compelted.wav')
let audio4=new Audio('mixkit-mouse-click-close-1113.wav')




function home(){
    tittle.style.display='revert';
    tittle2.style.display='revert';
    play.style.display='revert';
    game.style.backgroundColor='darkred';


    pass.style.display='none';
    pass2.style.display='none';
    message.style.display='none';
    level1.style.display='none';
    level2.style.display='none';
    level3.style.display='none';
    level4.style.display='none';
    level5.style.display='none';
    restart.style.display='none';
    restart2.style.display='none';
    restart3.style.display='none';
    restart4.style.display='none';
    restart5.style.display='none';
    homebutton.style.display='none';
    emoji.style.display='none';
    box1.style.display='none';
    box2.style.display='none';
    box3.style.display='none';
    box4.style.display='none';
    box5.style.display='none';
    box6.style.display='none';
    menub.style.display='none';

    animation5.style.display = 'none';
    animation6.style.display = 'none';
    animation7.style.display = 'none';
    animation8.style.display = 'none';
    animation9.style.display = 'none';
    animation10.style.display = 'none';
    animation11.style.display = 'none';

    animation12.style.display = 'none';
    animation1.style.display='none';
    animation2.style.display='none';
    animation3.style.display='none';
    animation4.style.display='none';
    animation14.style.display='none';
    animation13.style.display='none';
    animation15.style.display='none';
    animation16.style.display='none';
    animation17.style.display='none';
    animation18.style.display='none';
    animation19.style.display='none';
    animation20.style.display='none';
    next1.style.display='none';
    next2.style.display='none';
    next3.style.display='none';
    next4.style.display='none';

    if(phone === 40){
       game.style.backgroundColor='transparent';
       game.style.border='none';
       game.style.left='5%';
       tittle.style.color='red';
       tittle2.innerHTML='Welcome to ';
       whole.style.backgroundColor='transparent';
       tittle3.style.display='revert';
       
       


       
    }



}
homebutton.addEventListener('click',home);

function menu(){
tittle.style.display='none';
tittle2.style.display='none';
tittle3.style.display='none';
game.style.backgroundColor='black';
play.style.display='none';
pass.style.display='none';
pass2.style.display='none';
pass3.style.display='none';
restart.style.display='none';
restart2.style.display='none';
restart3.style.display='none';
restart4.style.display='none';
restart5.style.display='none';
menub.style.display='none';

level1.style.display='revert';

level2.style.display='revert';

level3.style.display='revert';

level4.style.display='revert';

level5.style.display='revert';

homebutton.style.display='revert';

emoji.style.display='none';
box1.style.display='none';
box2.style.display='none';
box3.style.display='none';
box4.style.display='none';
box5.style.display='none';
box6.style.display='none';
 animation5.style.display = 'none';
    animation6.style.display = 'none';
    animation7.style.display = 'none';
    animation8.style.display = 'none';
    animation9.style.display = 'none';
    animation10.style.display = 'none';
    animation11.style.display = 'none';
    animation12.style.display = 'none';
    animation1.style.display='none';
    animation2.style.display='none';
    animation3.style.display='none';
    animation4.style.display='none';
    animation14.style.display='none';
    animation13.style.display='none';
    animation15.style.display='none';
    animation16.style.display='none';
    animation17.style.display='none';
    animation18.style.display='none';
    animation19.style.display='none';
    animation20.style.display='none';
    next1.style.display='none';
    next2.style.display='none';
    next3.style.display='none';
    next4.style.display='none';

        if(phone === 40){
            game.style.backgroundColor='transparent';
            whole.style.backgroundColor='transparent';
            
            game.style.top='10%';
            game.style.left='8%';
        }




}
play.addEventListener('click',()=>{
    menu();
    audio4.play();
})





function go1(){

     nip = setTimeout(() => {

        audio3.play();
        pass.style.display = 'revert';
        pass2.style.display = 'revert';
        pass2.innerHTML='You passed Level1 ';
        next1.style.display='revert';
    

        if(phone=== 40){
            whole.style.backgroundColor='black';
            game.style.top='10%';
            
            pass2.innerHTML='You Passed';
            pass3.innerHTML='Level 1'

        }




        restart.style.display = 'none';
        restart2.style.display='none';
        restart3.style.display='none';
        restart4.style.display='none';
        restart5.style.display='none';
        next2.style.display='none';
        animation1.style.display = 'none';
        animation2.style.display = 'none';
        animation3.style.display = 'none';
        animation4.style.display = 'none';
        animation14.style.display='none';
        animation13.style.display='none';
        animation15.style.display='none';
        animation16.style.display='none';
        animation17.style.display='none';
        animation18.style.display='none';
        animation19.style.display='none';
        animation20.style.display='none';

        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'none';
        box5.style.display = 'none';
        box6.style.display = 'none';
        emoji.style.display = 'none';
        level1.style.display = 'none';
        level2.style.display = 'none';
        level3.style.display = 'none';
        level4.style.display='none';
        level5.style.display='none';






    }, 25000);



        game.style.backgroundColor = 'goldenrod';
        whole.style.backgroundColor='transparent'
        box1.style.display = 'revert';
        box2.style.display = 'revert';
        box3.style.display = 'revert';
        box4.style.display = 'revert';
        box5.style.display = 'revert';
        box6.style.display = 'revert';
        emoji.style.display = 'revert';
        animation1.style.display = 'revert';
        animation2.style.display = 'revert';
        animation3.style.display = 'revert';
        animation4.style.display = 'revert';

        if(phone === 40){
            game.style.backgroundColor='transparent';

        }



        tittle.style.display = 'none';
        tittle2.style.display = 'none';
        tittle3.style.display='none';
        message.style.display = 'none';
        play.style.display = 'none';
        pass.style.display = 'none';
        next1.style.display='none';
        next2.style.display='none';
        next3.style.display='none';
        next4.style.display='none';
        pass2.style.display = 'none';
        homebutton.style.display = 'none';
        restart.style.display = 'none';
        restart2.style.display = 'none';
        restart3.style.display = 'none';
        restart4.style.display='none';
        restart5.style.display='none';
        animation5.style.display = 'none';
        animation6.style.display = 'none';
        animation7.style.display = 'none';
        animation8.style.display = 'none';
        animation9.style.display = 'none';
        animation10.style.display = 'none';
        animation11.style.display = 'none';
        animation12.style.display = 'none';
        animation14.style.display='none';
        animation13.style.display='none';
        animation15.style.display='none';
        animation16.style.display='none';
        animation17.style.display='none';
        animation18.style.display='none';
        animation19.style.display='none';
        animation20.style.display='none';

        level1.style.display = 'none';
        level2.style.display = 'none';
        level3.style.display = 'none';
        level4.style.display='none';
        level5.style.display='none';
        menub.style.display='none';

    



        let fork = setInterval(() => {
            let emojitop = parseInt(window.getComputedStyle(emoji).getPropertyValue('top'));
            let ani1 = parseInt(window.getComputedStyle(animation1).getPropertyValue('left'));
            let ani2 = parseInt(window.getComputedStyle(animation2).getPropertyValue('left'));
            let ani3 = parseInt(window.getComputedStyle(animation3).getPropertyValue('left'));
            let ani4 = parseInt(window.getComputedStyle(animation4).getPropertyValue('left'));


            if (ani1 < 150 && ani1 > 100 && emojitop > 190 && phone===100) {

                audio.play();
                message.style.display = 'revert';
                game.style.backgroundColor = 'black';
                restart.style.display = 'revert';
                clearTimeout(nip);


                tittle.style.display = 'none';
                tittle2.style.display = 'none';
                pass.style.display = 'none';
                pass2.style.display = 'none';

                restart2.style.display = 'none';
                restart3.style.display = 'none';
                restart4.style.display='none';
                restart5.style.display='none';
                level1.style.display = 'none';
                level2.style.display = 'none';
                level3.style.display = 'none';
                animation1.style.display = 'none';
                animation2.style.display = 'none';
                animation3.style.display = 'none';
                animation4.style.display = 'none';
                box1.style.display = 'none';
                box2.style.display = 'none';
                box3.style.display = 'none';
                box4.style.display = 'none';
                box5.style.display = 'none';
                box6.style.display = 'none';
                emoji.style.display = 'none';
                next1.style.display = 'none';
                next2.style.display = 'none';
                homebutton.style.display='revert';


            }
            else if(ani1 > 40 && ani1 < 80 && emojitop > 300 && phone===40){
                message.style.display = 'revert';
                game.style.backgroundColor = 'black';
                restart.style.display = 'revert';
                clearTimeout(nip);
                audio.play();
                whole.style.backgroundColor='black';
                homebutton.style.display='revert';

               


                


                tittle.style.display = 'none';
                tittle2.style.display = 'none';
                pass.style.display = 'none';
                pass2.style.display = 'none';

                restart2.style.display = 'none';
                restart3.style.display = 'none';
                restart4.style.display='none';
                restart5.style.display='none';
                level1.style.display = 'none';
                level2.style.display = 'none';
                level3.style.display = 'none';
                animation1.style.display = 'none';
                animation2.style.display = 'none';
                animation3.style.display = 'none';
                animation4.style.display = 'none';
                box1.style.display = 'none';
                box2.style.display = 'none';
                box3.style.display = 'none';
                box4.style.display = 'none';
                box5.style.display = 'none';
                box6.style.display = 'none';
                emoji.style.display = 'none';
                next1.style.display = 'none';
                next2.style.display = 'none';
            }
            else if (ani2 < 150 && ani2 > 100 && emojitop> 90 && phone===100){

                message.style.display = 'revert';
                game.style.backgroundColor = 'black';
                restart.style.display = 'revert';
                clearTimeout(nip);
                audio.play();
                homebutton.style.display='revert';


                tittle.style.display = 'none';
                tittle2.style.display = 'none';
                restart2.style.display = 'none';
                restart3.style.display = 'none';
                pass.style.display = 'none';
                pass2.style.display = 'none';
                level1.style.display = 'none';
                level2.style.display = 'none';
                level3.style.display = 'none';
                animation1.style.display = 'none';
                animation2.style.display = 'none';
                animation3.style.display = 'none';
                animation4.style.display = 'none';
                box1.style.display = 'none';
                box2.style.display = 'none';
                box3.style.display = 'none';
                box4.style.display = 'none';
                box5.style.display = 'none';
                box6.style.display = 'none';
                emoji.style.display = 'none';
                next1.style.display = 'none';
                next2.style.display = 'none';


            }
            else if(ani2 > 40 && ani2 <80 && emojitop >150 && phone===40){
                 message.style.display = 'revert';
                game.style.backgroundColor = 'black';
                restart.style.display = 'revert';
                clearTimeout(nip);
                audio.play();
                whole.style.backgroundColor='black';
                homebutton.style.display='revert';

                
               

                tittle.style.display = 'none';
                tittle2.style.display = 'none';
                restart2.style.display = 'none';
                restart3.style.display = 'none';
                pass.style.display = 'none';
                pass2.style.display = 'none';
                level1.style.display = 'none';
                level2.style.display = 'none';
                level3.style.display = 'none';
                animation1.style.display = 'none';
                animation2.style.display = 'none';
                animation3.style.display = 'none';
                animation4.style.display = 'none';
                box1.style.display = 'none';
                box2.style.display = 'none';
                box3.style.display = 'none';
                box4.style.display = 'none';
                box5.style.display = 'none';
                box6.style.display = 'none';
                emoji.style.display = 'none';
                next1.style.display = 'none';
                next2.style.display = 'none';


            }
            else if (ani3 < 150 && ani3 > 100 && emojitop < 120 && phone===100) {


                message.style.display = 'revert';
                game.style.backgroundColor = 'black';
                restart.style.display = 'revert';
                clearTimeout(nip);
                audio.play();
                homebutton.style.display='revert';


                tittle.style.display = 'none';
                tittle2.style.display = 'none';
                restart2.style.display = 'none';
                restart3.style.display = 'none';
                pass.style.display = 'none';
                pass2.style.display = 'none';
                level1.style.display = 'none';
                level2.style.display = 'none';
                level3.style.display = 'none';
                animation1.style.display = 'none';
                animation2.style.display = 'none';
                animation3.style.display = 'none';
                animation4.style.display = 'none';
                box1.style.display = 'none';
                box2.style.display = 'none';
                box3.style.display = 'none';
                box4.style.display = 'none';
                box5.style.display = 'none';
                box6.style.display = 'none';
                emoji.style.display = 'none';
                next1.style.display = 'none';
                next2.style.display = 'none';


            }
            else if(ani3 > 40 && ani3 <80 && emojitop < 180 && phone===40){

                message.style.display = 'revert';
                game.style.backgroundColor = 'black';
                restart.style.display = 'revert';
                clearTimeout(nip);
                audio.play();
                whole.style.backgroundColor='black';
                homebutton.style.display='revert';

                
               


                tittle.style.display = 'none';
                tittle2.style.display = 'none';
                restart2.style.display = 'none';
                restart3.style.display = 'none';
                pass.style.display = 'none';
                pass2.style.display = 'none';
                level1.style.display = 'none';
                level2.style.display = 'none';
                level3.style.display = 'none';
                animation1.style.display = 'none';
                animation2.style.display = 'none';
                animation3.style.display = 'none';
                animation4.style.display = 'none';
                box1.style.display = 'none';
                box2.style.display = 'none';
                box3.style.display = 'none';
                box4.style.display = 'none';
                box5.style.display = 'none';
                box6.style.display = 'none';
                emoji.style.display = 'none';
                next1.style.display = 'none';
                next2.style.display = 'none';

            }

            else if (ani4 < 150 && ani4 > 100 && emojitop > 130 && phone===100) {


                message.style.display = 'revert';
                game.style.backgroundColor = 'black';
                restart.style.display = 'revert';
                clearTimeout(nip);
                audio.play();
                homebutton.style.display='revert';


                tittle.style.display = 'none';
                tittle2.style.display = 'none';
                restart2.style.display = 'none';
                restart3.style.display = 'none';
                pass.style.display = 'none';
                pass2.style.display = 'none';
                level1.style.display = 'none';
                level2.style.display = 'none';
                level3.style.display = 'none';
                animation1.style.display = 'none';
                animation2.style.display = 'none';
                animation3.style.display = 'none';
                animation4.style.display = 'none';
                box1.style.display = 'none';
                box2.style.display = 'none';
                box3.style.display = 'none';
                box4.style.display = 'none';
                box5.style.display = 'none';
                box6.style.display = 'none';
                emoji.style.display = 'none';
                next1.style.display = 'none';
                next2.style.display = 'none';


            }
            else if(ani4 > 40 && ani4 <80 && emojitop > 160 && phone===40){
                message.style.display = 'revert';
                game.style.backgroundColor = 'black';
                restart.style.display = 'revert';
                clearTimeout(nip);
                audio.play();
                whole.style.backgroundColor='black';
                homebutton.style.display='revert';


                tittle.style.display = 'none';
                tittle2.style.display = 'none';
                restart2.style.display = 'none';
                restart3.style.display = 'none';
                pass.style.display = 'none';
                pass2.style.display = 'none';
                level1.style.display = 'none';
                level2.style.display = 'none';
                level3.style.display = 'none';
                animation1.style.display = 'none';
                animation2.style.display = 'none';
                animation3.style.display = 'none';
                animation4.style.display = 'none';
                box1.style.display = 'none';
                box2.style.display = 'none';
                box3.style.display = 'none';
                box4.style.display = 'none';
                box5.style.display = 'none';
                box6.style.display = 'none';
                emoji.style.display = 'none';
                next1.style.display = 'none';
                next2.style.display = 'none';
            }

        })


}

function go2() {

    kim=setTimeout(()=>{
       clearInterval(fim);
        pass.style.display = 'revert';
        pass2.innerHTML='You passed Level2 '
        pass2.style.display = 'revert';
        next2.style.display='revert'
        audio3.play();
        if(phone === 40){
            whole.style.backgroundColor='black';
            pass3.style.display='revert'

            pass2.innerHTML='You Passed';
            pass3.innerHTML='Level 2';
            
        }





        restart.style.display = 'none';
        restart2.style.display='none';
        restart3.style.display='none';
        restart4.style.display='none';
        restart5.style.display='none';
        animation5.style.display = 'none';
        animation6.style.display = 'none';
        animation7.style.display = 'none';
        animation8.style.display = 'none';
        animation17.style.display='none';
        animation18.style.display='none';
        animation19.style.display='none';
        animation20.style.display='none';


        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'none';
        box5.style.display = 'none';
        box6.style.display = 'none';
        emoji.style.display = 'none';
        level1.style.display = 'none';
        level2.style.display = 'none';
        level3.style.display = 'none';
        level4.style.display='none';
        level5.style.display='none';






    },25000);



    game.style.backgroundColor = 'goldenrod';
    box1.style.display = 'revert';
    box2.style.display = 'revert';
    box3.style.display = 'revert';
    box4.style.display = 'revert';
    box5.style.display = 'revert';
    box6.style.display = 'revert';
    emoji.style.display = 'revert';
    animation5.style.display = 'revert';
    animation6.style.display = 'revert';
    animation7.style.display = 'revert';
    animation8.style.display = 'revert';

    if(phone===40){
        game.style.backgroundColor='transparent';
        whole.style.backgroundColor='transparent';

    }



    next1.style.display='none';
    next2.style.display='none';
    next3.style.display='none';
    next4.style.display='none';
    tittle.style.display = 'none';
    tittle2.style.display = 'none';
    message.style.display = 'none';
    play.style.display = 'none';
    pass.style.display = 'none';
    pass2.style.display = 'none';
    pass3.style.display='none';
    homebutton.style.display = 'none';
    restart.style.display = 'none';
    restart2.style.display = 'none';
    restart3.style.display = 'none';
    restart4.style.display='none';
    restart5.style.display='none';
    animation1.style.display = 'none';
    animation2.style.display = 'none';
    animation3.style.display = 'none';
    animation4.style.display = 'none';
    animation9.style.display = 'none';
    animation10.style.display = 'none';
    animation11.style.display = 'none';
    animation12.style.display = 'none';
    animation14.style.display='none';
    animation13.style.display='none';
    animation15.style.display='none';
    animation16.style.display='none';
     animation17.style.display='none';
    animation18.style.display='none';
    animation19.style.display='none';
    animation20.style.display='none';
    menub.style.display='none';

    level1.style.display = 'none';
    level2.style.display = 'none';
    level3.style.display = 'none';
    level4.style.display='none';
    level5.style.display='none';





    let fim=setInterval(()=> {
        let emojitop = parseInt(window.getComputedStyle(emoji).getPropertyValue('top'));
        let ani5 = parseInt(window.getComputedStyle(animation5).getPropertyValue('left'));
        let ani6=parseInt(window.getComputedStyle(animation6).getPropertyValue('left'));
        let ani7 = parseInt(window.getComputedStyle(animation7).getPropertyValue('left'));
        let ani8=parseInt(window.getComputedStyle(animation8).getPropertyValue('left'));


        if(ani5 < 150 && ani5 > 100 && emojitop < 190 && phone===100){

            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart2.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart3.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation5.style.display = 'none';
            animation6.style.display = 'none';
            animation7.style.display = 'none';
            animation8.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }
        else if(ani5 > 40 && ani5 <80 && emojitop < 219 && phone===40){
            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart2.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart3.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation5.style.display = 'none';
            animation6.style.display = 'none';
            animation7.style.display = 'none';
            animation8.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }

        else if(ani6 < 150 && ani6 > 100 && emojitop > 140 && phone===100){

         message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart2.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart3.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation5.style.display = 'none';
            animation6.style.display = 'none';
            animation7.style.display = 'none';
            animation8.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);


        }
        else if(ani6 > 40 && ani6 <80 && emojitop > 230 && phone===40){
               message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart2.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart3.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation5.style.display = 'none';
            animation6.style.display = 'none';
            animation7.style.display = 'none';
            animation8.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }
        else if(ani7 < 150 && ani7 > 100 && emojitop < 120 && phone===100){

            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart2.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart3.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation5.style.display = 'none';
            animation6.style.display = 'none';
            animation7.style.display = 'none';
            animation8.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);




        }
        else if(ani7 > 40 && ani7 <80 && emojitop < 220 && phone===40){
             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart2.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart3.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation5.style.display = 'none';
            animation6.style.display = 'none';
            animation7.style.display = 'none';
            animation8.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }
        else if(ani8 < 150 && ani8 > 100 && emojitop > 30 && phone===100){

            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart2.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart3.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation5.style.display = 'none';
            animation6.style.display = 'none';
            animation7.style.display = 'none';
            animation8.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }
        else if(ani8 > 40 && ani8 <80 && emojitop > 80 && phone===40){
            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart2.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart3.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation5.style.display = 'none';
            animation6.style.display = 'none';
            animation7.style.display = 'none';
            animation8.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }

    })
}

function go3(){

       kim=setTimeout(()=>{

        clearInterval(fim);
        pass.style.display = 'revert';
        pass2.innerHTML='You passed Level3 '
        pass2.style.display = 'revert';
        next3.style.display='revert';
        audio3.play();
        if(phone === 40){
            whole.style.backgroundColor='black';
            pass3.style.display='revert'

            pass2.innerHTML='You Passed';
            pass3.innerHTML='Level 3';
            
        }




        restart.style.display = 'none';
        restart2.style.display='none';
        restart3.style.display='none';
        restart4.style.display='none';
        restart5.style.display='none';
        animation9.style.display = 'none';
        animation10.style.display = 'none';
        animation11.style.display = 'none';
        animation12.style.display = 'none';
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'none';
        box5.style.display = 'none';
        box6.style.display = 'none';
        emoji.style.display = 'none';
        level1.style.display = 'none';
        level2.style.display = 'none';
        level3.style.display = 'none';
        level4.style.display='none';
        level5.style.display='none';

    },25000);




    game.style.backgroundColor = 'goldenrod';
    box1.style.display = 'revert';
    box2.style.display = 'revert';
    box3.style.display = 'revert';
    box4.style.display = 'revert';
    box5.style.display = 'revert';
    box6.style.display = 'revert';
    emoji.style.display = 'revert';
    animation9.style.display='revert';
    animation10.style.display='revert';
    animation11.style.display='revert';
    animation12.style.display='revert';

    if(phone === 40){
        whole.style.backgroundColor='transparent';
        game.style.backgroundColor='transparent';


    }


    tittle.style.display = 'none';
    tittle2.style.display = 'none';
     next1.style.display='none';
     next2.style.display='none';
     next3.style.display='none';
     next4.style.display='none';
    message.style.display = 'none';
    play.style.display = 'none';
    pass.style.display = 'none';
    pass2.style.display = 'none';
    pass3.style.display='none';
    homebutton.style.display = 'none';
    restart.style.display = 'none';
    restart2.style.display='none';
    restart3.style.display='none';
    restart4.style.display='none';
    restart5.style.display='none';
    animation1.style.display = 'none';
    animation2.style.display = 'none';
    animation3.style.display = 'none';
    animation4.style.display = 'none';
    animation5.style.display = 'none';
    animation6.style.display = 'none';
    animation7.style.display = 'none';
    animation8.style.display = 'none';
    animation14.style.display='none';
    animation13.style.display='none';
    animation15.style.display='none';
    animation16.style.display='none';
    animation17.style.display='none';
    animation18.style.display='none';
    animation19.style.display='none';
    animation20.style.display='none';
    menub.style.display='none';

    level1.style.display = 'none';
    level2.style.display = 'none';
    level3.style.display = 'none';
    level4.style.display='none';
    level5.style.display='none';




        let fim=setInterval(()=> {
        let emojitop = parseInt(window.getComputedStyle(emoji).getPropertyValue('top'));
        let ani9 = parseInt(window.getComputedStyle(animation9).getPropertyValue('left'));
        let ani10=parseInt(window.getComputedStyle(animation10).getPropertyValue('left'));
        let ani11 = parseInt(window.getComputedStyle(animation11).getPropertyValue('left'));
        let ani12=parseInt(window.getComputedStyle(animation12).getPropertyValue('left'));


        if(ani9 < 150 && ani9 > 100 && emojitop < 143 && phone===100){

            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart3.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation9.style.display = 'none';
            animation10.style.display = 'none';
            animation11.style.display = 'none';
            animation12.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani9 > 40 && ani9 <80 && emojitop < 243 && phone===40){

            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart3.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation9.style.display = 'none';
            animation10.style.display = 'none';
            animation11.style.display = 'none';
            animation12.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani10 < 150 && ani10 > 100 && emojitop > 180 && phone===100){

             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart3.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation9.style.display = 'none';
            animation10.style.display = 'none';
            animation11.style.display = 'none';
            animation12.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);


        }
        else if(ani10 > 40 && ani10 <80 && emojitop > 300 && phone===40){
                  message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart3.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation9.style.display = 'none';
            animation10.style.display = 'none';
            animation11.style.display = 'none';
            animation12.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani11 < 150 && ani11 > 100 && emojitop < 190 && phone===100){

             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart3.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation9.style.display = 'none';
            animation10.style.display = 'none';
            animation11.style.display = 'none';
            animation12.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);



        }
        else if(ani11 > 40 && ani11 <80 && emojitop < 310 && phone===40){
             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart3.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation9.style.display = 'none';
            animation10.style.display = 'none';
            animation11.style.display = 'none';
            animation12.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani12 < 150 && ani12 > 100 && emojitop > 60 && phone===100){

             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart3.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation9.style.display = 'none';
            animation10.style.display = 'none';
            animation11.style.display = 'none';
            animation12.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);


        }
        else if(ani12 > 40 && ani12 <80 && emojitop > 160 && phone===40){
            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart3.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation9.style.display = 'none';
            animation10.style.display = 'none';
            animation11.style.display = 'none';
            animation12.style.display = 'none';
            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }

    })

}
function go4(){



       kim=setTimeout(()=>{

        clearInterval(fim);
        pass.style.display = 'revert';
        pass2.innerHTML='You passed Level4 '
        pass2.style.display = 'revert';
        next4.style.display='revert';
        audio3.play();

        if(phone === 40){
            whole.style.backgroundColor='black';
            pass3.style.display='revert'

            pass2.innerHTML='You Passed';
            pass3.innerHTML='Level 4';
            
        }




        restart.style.display = 'none';
        restart2.style.display='none';
        restart3.style.display='none';
        restart4.style.display='none';
        restart5.style.display='none';
        animation13.style.display = 'none';
        animation14.style.display = 'none';
        animation15.style.display = 'none';
        animation16.style.display = 'none';
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'none';
        box5.style.display = 'none';
        box6.style.display = 'none';
        emoji.style.display = 'none';
        level1.style.display = 'none';
        level2.style.display = 'none';
        level3.style.display = 'none';
        level4.style.display='none';
        level5.style.display='none';

    },25000);



    game.style.backgroundColor = 'goldenrod';
    box1.style.display = 'revert';
    box2.style.display = 'revert';
    box3.style.display = 'revert';
    box4.style.display = 'revert';
    box5.style.display = 'revert';
    box6.style.display = 'revert';
    emoji.style.display = 'revert';
    animation13.style.display='revert';
    animation14.style.display='revert';
    animation15.style.display='revert';
    animation16.style.display='revert';
    if(phone === 40){
        whole.style.backgroundColor='transparent';
        game.style.backgroundColor='transparent';
    }


    tittle.style.display = 'none';
    tittle2.style.display = 'none';
     next1.style.display='none';
     next2.style.display='none';
     next3.style.display='none';
     next4.style.display='none';
    message.style.display = 'none';
    play.style.display = 'none';
    pass.style.display = 'none';
    pass2.style.display = 'none';
    pass3.style.display='none';
    homebutton.style.display = 'none';
    restart.style.display = 'none';
    restart2.style.display='none';
    restart3.style.display='none';
    restart4.style.display='none';
    restart5.style.display='none';
    menub.style.display='none';

    animation1.style.display = 'none';
    animation2.style.display = 'none';
    animation3.style.display = 'none';
    animation4.style.display = 'none';
    animation5.style.display = 'none';
    animation6.style.display = 'none';
    animation7.style.display = 'none';
    animation8.style.display = 'none';
    animation9.style.display = 'none';
    animation10.style.display = 'none';
    animation11.style.display = 'none';
    animation12.style.display = 'none';
    animation17.style.display='none';
    animation18.style.display='none';
    animation19.style.display='none';
    animation20.style.display='none';



    level1.style.display = 'none';
    level2.style.display = 'none';
    level3.style.display = 'none';
    level4.style.display='none';
    level5.style.display='none';


    let fim=setInterval(()=> {
        let emojitop = parseInt(window.getComputedStyle(emoji).getPropertyValue('top'));
        let ani13 = parseInt(window.getComputedStyle(animation13).getPropertyValue('left'));
        let ani14=parseInt(window.getComputedStyle(animation14).getPropertyValue('left'));
        let ani15 = parseInt(window.getComputedStyle(animation15).getPropertyValue('left'));
        let ani16=parseInt(window.getComputedStyle(animation16).getPropertyValue('left'));


        if(ani13 < 150 && ani13 > 100 && emojitop < 200 && phone===100){

            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart4.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation14.style.display='none';
            animation13.style.display='none';
            animation15.style.display='none';
            animation16.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani13 > 40 && ani13 <80 && emojitop < 400 && phone===40){
                 message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart4.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation14.style.display='none';
            animation13.style.display='none';
            animation15.style.display='none';
            animation16.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani14 < 150 && ani14 > 100 && emojitop > 40 && emojitop < 230 && phone===100){

             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart4.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation14.style.display='none';
            animation13.style.display='none';
            animation15.style.display='none';
            animation16.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);


        }
        else if(ani14 > 40 && ani14 <80 && emojitop > 80 && emojitop < 350 && phone===40){
             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart4.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation14.style.display='none';
            animation13.style.display='none';
            animation15.style.display='none';
            animation16.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani15 < 150 && ani15 > 100 && emojitop > 140 && phone===100){

             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart4.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation14.style.display='none';
            animation13.style.display='none';
            animation15.style.display='none';
            animation16.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);



        }
         else if(ani15 > 40 && ani15 <80 && emojitop > 220 && phone===40){
              message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart4.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation14.style.display='none';
            animation13.style.display='none';
            animation15.style.display='none';
            animation16.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }
        else if(ani16 < 150 && ani16 > 100 && emojitop < 120 && phone===100){

             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart4.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation14.style.display='none';
            animation13.style.display='none';
            animation15.style.display='none';
            animation16.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);


        }
         else if(ani16 > 40 && ani16 <80 && emojitop < 150 && phone===40){
              message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart4.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation14.style.display='none';
            animation13.style.display='none';
            animation15.style.display='none';
            animation16.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }

    })


}

function go5(){

       kim=setTimeout(()=>{

        clearInterval(fim);
        pass.style.display = 'revert';
        pass2.innerHTML='You passed Level5 '
        pass2.style.display = 'revert';
        menub.style.display='revert';
        game.style.backgroundColor='goldenrod';
        audio3.play();

        if(phone === 40){
            whole.style.backgroundColor='black';
            pass3.style.display='revert'
            game.style.backgroundColor='transparent';

            pass2.innerHTML='You Passed';
            pass3.innerHTML='Level 5';
            
        }




         next1.style.display='none';
         next2.style.display='none';
        restart.style.display = 'none';
        restart2.style.display='none';
        restart3.style.display='none';
        restart4.style.display='none';
        restart5.style.display='none';
        animation17.style.display = 'none';
        animation18.style.display = 'none';
        animation19.style.display = 'none';
        animation20.style.display = 'none';
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'none';
        box5.style.display = 'none';
        box6.style.display = 'none';
        emoji.style.display = 'none';
        level1.style.display = 'none';
        level2.style.display = 'none';
        level3.style.display = 'none';
        level4.style.display='none';
        level5.style.display='none';

    },25000);


    game.style.backgroundColor = 'darkred';
    box1.style.display = 'revert';
    box2.style.display = 'revert';
    box3.style.display = 'revert';
    box4.style.display = 'revert';
    box5.style.display = 'revert';
    box6.style.display = 'revert';
    emoji.style.display = 'revert';
    animation17.style.display='revert';
    animation18.style.display='revert';
    animation19.style.display='revert';
    animation20.style.display='revert';
    menub.style.display='none';

    if(phone === 40){
        whole.style.backgroundColor='transparent';
        game.style.backgroundColor='transparent';
    }


    tittle.style.display = 'none';
    tittle2.style.display = 'none';
    next1.style.display='none';
    next2.style.display='none';
    next3.style.display='none';
    next4.style.display='none';
    message.style.display = 'none';
    play.style.display = 'none';
    pass.style.display = 'none';
    pass2.style.display = 'none';
    pass3.style.display='none';
    homebutton.style.display = 'none';
    restart.style.display = 'none';
    restart2.style.display='none';
    restart3.style.display='none';
    restart4.style.display='none';
    restart5.style.display='none';

    animation1.style.display = 'none';
    animation2.style.display = 'none';
    animation3.style.display = 'none';
    animation4.style.display = 'none';
    animation5.style.display = 'none';
    animation6.style.display = 'none';
    animation7.style.display = 'none';
    animation8.style.display = 'none';
    animation9.style.display = 'none';
    animation10.style.display = 'none';
    animation11.style.display = 'none';
    animation12.style.display = 'none';
    animation13.style.display='none';
    animation14.style.display='none';
    animation15.style.display='none';
    animation16.style.display='none';



    level1.style.display = 'none';
    level2.style.display = 'none';
    level3.style.display = 'none';
    level4.style.display='none';
    level5.style.display='none';

    let fim=setInterval(()=> {
        let emojitop = parseInt(window.getComputedStyle(emoji).getPropertyValue('top'));
        let ani17 = parseInt(window.getComputedStyle(animation17).getPropertyValue('left'));
        let ani18=parseInt(window.getComputedStyle(animation18).getPropertyValue('left'));
        let ani19 = parseInt(window.getComputedStyle(animation19).getPropertyValue('left'));
        let ani20=parseInt(window.getComputedStyle(animation20).getPropertyValue('left'));


        if(ani17 < 150 && ani17 > 100 && emojitop > 140 && phone===100){

            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart5.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation17.style.display='none';
            animation18.style.display='none';
            animation19.style.display='none';
            animation20.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani17 > 40 && ani17 <80 && emojitop > 230 && phone===40){
                message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart5.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation17.style.display='none';
            animation18.style.display='none';
            animation19.style.display='none';
            animation20.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }
        else if(ani19 < 150 && ani19 > 100 && emojitop > 40 && emojitop <260 && phone===100){

             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart5.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation17.style.display='none';
            animation18.style.display='none';
            animation19.style.display='none';
            animation20.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);

        }
        else if(ani19 > 40 && ani19 <80 && emojitop > 100 && emojitop < 340 && phone===40){
            message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart5.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation17.style.display='none';
            animation18.style.display='none';
            animation19.style.display='none';
            animation20.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }

        else if(ani20 < 150 && ani20 > 100 && emojitop < 235 && phone===100){

             message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart5.style.display = 'revert';
            audio.play();
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation17.style.display='none';
            animation18.style.display='none';
            animation19.style.display='none';
            animation20.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);


        }
        else if(ani20 > 40 && ani20 <80 && emojitop < 150 && phone===40){
              message.style.display = 'revert';
            game.style.backgroundColor = 'black';
            restart5.style.display = 'revert';
            audio.play();
            whole.style.backgroundColor='black';
            homebutton.style.display='revert';



            tittle.style.display = 'none';
            tittle2.style.display = 'none';
            restart.style.display='none';
            restart2.style.display='none';
            pass.style.display = 'none';
            pass2.style.display = 'none';
            level1.style.display = 'none';
            level2.style.display = 'none';
            level3.style.display = 'none';
            animation17.style.display='none';
            animation18.style.display='none';
            animation19.style.display='none';
            animation20.style.display='none';

            box1.style.display = 'none';
            box2.style.display = 'none';
            box3.style.display = 'none';
            box4.style.display = 'none';
            box5.style.display = 'none';
            box6.style.display = 'none';
            emoji.style.display = 'none';
            next1.style.display='none';
            next2.style.display='none';


            clearTimeout(kim);
        }

    })
}

home();