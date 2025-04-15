let rep=document.getElementById('rep')
let alien=document.getElementById('alien');
let ani1=document.getElementById('ani1');
let ani2=document.getElementById('ani2');
let ani3= document.getElementById('ani3');
let all=document.getElementById('all');
let timer=document.getElementById('timer');
let pass=document.getElementById('pass');
let pass2 =document.getElementById('pass2');
let intro=document.getElementById('intro');
let play=document.getElementById('play');
let play2=document.getElementById('play2');
let restart=document.getElementById('restart');
let test=document.getElementById('test');
let clicksound= new Audio('mixkit-mouse-click-close-1113.wav')
let jumpsound=new Audio('jump.wav');
let failing=new Audio('gameover.mp3');
let passed=new Audio('boomerhaur.mp3');
let intraval;



rep.style.display='none';


pass.style.display='none';
pass2.style.display='none';

alien.style.display='none';

pass.style.display='none';

ani1.style.display='none';
ani1.style.display='none';
ani2.style.display='none';
ani3.style.display='none';






let message=document.createElement('div');
 message.textContent='Game Over';
 message.classList.add('message');
 rep.appendChild(message);
 message.style.display='none';





function jump() {
        if (alien.classList != 'animate' ) {
            alien.classList.add('animate');
        }

        setTimeout(() => {
            alien.classList.remove('animate')
        }, 500);
}
restart.addEventListener('click',()=>{
        
    running();
    
    clicksound.play();
    
    failing.pause();
    failing.src='';
    
})




function running() {
    
    startTimer();
   
   
    pass.style.display='none';
    pass2.style.display='none';
    
    jumpsound.src='jump.wav';

    

    rep.addEventListener('click',()=>{      
        jumpsound.play();

    })
    all.addEventListener('click',()=>{
        jumpsound.play();
    })




    ani1.style.display = 'revert';
    ani2.style.display = 'revert';
    ani3.style.display = 'revert';
    alien.style.display = 'revert';
    timer.style.display='revert';

    rep.style.display = 'revert';


    intro.style.display = 'none';
    play.style.display = 'none';
    message.style.display = 'none';
    restart.style.display = 'none';
    test.display='revert';

   const compu=rep.offsetHeight;
   if(compu ===300 ){
       all.style.backgroundImage='url(arizonahorz.jpg)';
       timer.style.color='black';

   }
   else{
       all.style.backgroundImage='url(brightmoon.jpg)';
       timer.style.color='rgb(10, 118, 139)';
       
       
   }




    let position = setInterval(() => {
        let ani1left = parseInt(window.getComputedStyle(ani1).getPropertyValue('left'));
        let ani2left = parseInt(window.getComputedStyle(ani2).getPropertyValue('left'));
        let ani3left = parseInt(window.getComputedStyle(ani3).getPropertyValue('left'));
        let alientop = parseInt(window.getComputedStyle(alien).getPropertyValue('top'));
        
        
        if ( ani1left < 15 != ani1left < 65 && alientop > 300 && compu === 400) {



            all.style.backgroundImage = 'none';
            all.style.backgroundColor = 'darkred'
            alien.style.display = 'none';
            ani1.style.display = 'none';
            ani2.style.display = 'none';
            ani3.style.display = 'none';
            message.style.display = 'revert';
            restart.style.display = 'revert';
            failing.src='gameover.mp3';
            failing.play();
            jumpsound.pause();
            jumpsound.src='';



            clearInterval(intraval);
            timer.innerHTML='';
            timer.style.display='none';




     } 
        else if (ani2left < 15 != ani2left < 65 && alientop > 300 && compu === 400) {




            all.style.backgroundImage = 'none';
            all.style.backgroundColor = 'darkred'
            alien.style.display = 'none';
            ani1.style.display = 'none';
            ani2.style.display = 'none';
            ani3.style.display = 'none';
            message.style.display = 'revert';
            failing.src='gameover.mp3';
            failing.play();
            jumpsound.pause();
            jumpsound.src='';


            restart.style.display = 'revert';


            clearInterval(intraval);
            timer.innerHTML='';
            timer.style.display='none';



        } else if (ani3left < 15 && ani3left < 65 && alientop > 320 && compu === 400) {

            all.style.backgroundImage = 'none';
            all.style.backgroundColor = 'darkred'
            alien.style.display = 'none';
            ani1.style.display = 'none';
            ani2.style.display = 'none';
            ani3.style.display = 'none';
            message.style.display = 'revert';
            failing.src='gameover.mp3';
            failing.play();
            jumpsound.pause();
            jumpsound.src='';



            restart.style.display = 'revert';

            clearInterval(intraval);
            timer.innerHTML='';
            timer.style.display='none';




        }
        else if(ani1left < 20 != ani1left <70 && alientop >160 && compu ===300){
             all.style.backgroundImage = 'none';
            all.style.backgroundColor = 'darkred'
            alien.style.display = 'none';
            ani1.style.display = 'none';
            ani2.style.display = 'none';
            ani3.style.display = 'none';
            message.style.display = 'revert';
            failing.src='gameover.mp3';
            failing.play();
            jumpsound.pause();
            jumpsound.src='';



            restart.style.display = 'revert';
            

           clearInterval(intraval);
           timer.innerHTML='';
           timer.style.display='none';

    

            

            
           
            
        }
        else if(ani2left< 20 != ani2left <80 && alientop >170 && compu ===300){
             all.style.backgroundImage = 'none';
            all.style.backgroundColor = 'darkred'
            alien.style.display = 'none';
            ani1.style.display = 'none';
            ani2.style.display = 'none';
            ani3.style.display = 'none';
            message.style.display = 'revert';
            failing.src='gameover.mp3';
            failing.play();
            jumpsound.pause();
            jumpsound.src='';


            restart.style.display = 'revert';
            
            clearInterval(intraval);
            timer.innerHTML='';
            timer.style.display='none';

        }
         else if(ani3left< 20 != ani3left < 80 && alientop >170 && compu ===300){
             all.style.backgroundImage = 'none';
            all.style.backgroundColor = 'darkred'
            alien.style.display = 'none';
            ani1.style.display = 'none';
            ani2.style.display = 'none';
            ani3.style.display = 'none';
            message.style.display = 'revert';
            failing.src='gameover.mp3';
            failing.play();
            jumpsound.pause();
            jumpsound.src='';


            restart.style.display = 'revert';
            
            clearInterval(intraval);
            timer.innerHTML='';
            timer.style.display='none';

        }


    },)
    passed.src='boomerhaur.mp3';

    let fullseconds= 60;


        function update(){
         /*  60 can only go into 90 one time*/
         let minute = Math.floor(fullseconds / 60);
         /* this is gonna give the reminder of 30 seconds because
         * 90 divided by 60 = 1.50  which is 30 */
         let seconds = fullseconds % 60;

         if (seconds < 10) {
            seconds = `0${seconds}`;
           }
         timer.innerHTML = `${minute}:${seconds}`;

         if (fullseconds < 10){
            timer.style.color = 'darkred';
 
         };

         if ( fullseconds <= 0 && alien.style.display==='revert' ) {

            pass.style.display = 'revert';
            pass2.style.display = 'revert';
            restart.style.display='revert';
            

            passed.play();
            jumpsound.pause();
            jumpsound.src='';
            all.style.backgroundImage = 'none';
            all.style.backgroundColor = 'goldenrod';
            alien.style.display = 'none';
            ani1.style.display = 'none';
            ani2.style.display = 'none';
            ani3.style.display = 'none';
            play.style.display = 'none';
            intro.style.display = 'none';
            message.style.display = 'none';
            
            clearInterval(intraval);
            timer.innerHTML='';
            timer.style.display='none';

           };

        }

        function startTimer(){
            intraval=setInterval(()=>{
                fullseconds--;
                update();
            },1000);
        }

        const resettimer =()=>{
            clearInterval(intraval);
            fullseconds=60;
            
        }

        const stoptimer =()=>{
           clearInterval(intraval);
        }

    
    


}
function home(){


    intro.style.display='revert';
    play.style.display='revert';

    all.style.backgroundImage="url('stars.jpg')";
    play2.style.display='none';
    pass.style.display='none';
    pass2.style.display='none';
    alien.style.display='none';
    ani1.style.display='none';
    ani2.style.display='none';
    ani3.style.display='none';
    timer.style.display='none'
    homeb.style.display='none';
    message.style.display='none';
    restart.style.display='none';

}
play.addEventListener('click',()=>{
    clicksound.play();
})


home();
