let whole=document.getElementById('whole');
let tittle=document.getElementById('tittle');
let word=document.getElementById('word');
let father=document.getElementById('father');
let dady=document.getElementById('dady');
let dady2=document.getElementById('dady2');
let dady3=document.getElementById('dady3');
let intrival;
let button=document.getElementById('button')

let fullpass='';
let fullpass2='';
let fullpass3='';
let clickcount=0;
let clicked=false;
let clicked2=false;
let clicked3=false;

let letter='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$&/!@$';



const brain=father.offsetHeight;

let click= new Audio('mouseclick.mp3');




function running(){ 
    

   
        for(let i=0; i < 8; i++){
            const random=Math.floor(Math.random() * letter.length)
            fullpass += letter[random];
            
           
        }
    
        setTimeout(()=>{
            return fullpass;
        })

        word.innerHTML=fullpass;
        word.style.left='25%';
         word.style.fontSize='70px'
         word.style.top='-30%';

        if(brain  < 660 && brain > 590){
         word.style.left='25%';
         word.style.fontSize='33px'
         word.style.top='-5%';
         tittle.style.backgroundColor='red';
        }
        

    
    
    
    
   
    
    
   
    
}
function running2(){ 
    for(let i=0; i < 12; i++){
        const random=Math.floor(Math.random() * letter.length )
        fullpass2 += letter[random];
        
        
        
    }
    setTimeout(()=>{
        return fullpass2;
    })

    word.innerHTML=fullpass2;
    word.style.left='10%';
     word.style.fontSize='70px'
     word.style.top='-30%';

     if(brain  < 660 && brain > 590){
        word.style.left='10%';
        word.style.fontSize='33px'
        word.style.top='-5%';
        tittle.style.backgroundColor='red';
       }



}



function running3(){ 
    for(let i=0; i < 20; i++){
        const random=Math.floor(Math.random() * letter.length )
        fullpass3 += letter[random];
        
        
        
    }
    setTimeout(()=>{
        return fullpass3;
    })

    word.innerHTML=fullpass3;
    word.style.left='2%';
    word.style.fontSize='55px';
    word.style.top='-10%';

    if(brain  < 660 && brain > 590){
        word.style.left='0%';
        word.style.fontSize='26px'
        word.style.top='8%';
        tittle.style.backgroundColor='red';
    }




}





dady.addEventListener('click',()=>{
    setTimeout(()=>{
        if(clicked===true){
            running();
            

        }
        else{
            running='none'
        }
        if(fullpass.length > 8){
            word.innerHTML='';
            fullpass=fullpass.slice(8,16);
            word.innerHTML=fullpass;
    
        }
    })

    click.play();

    
    
   
   
    
    clicked=true;
    clickcount++;
    
    
   
});

dady2.addEventListener('click',()=>{
    
    clicked2 = true;
    
    if(clicked2 === true){
        running2();
    }
    else{
        clicked2 = 'none'
    }
    
    if(fullpass2.length > 12){
            word.innerHTML='';
            fullpass2=fullpass2.slice(12,24);
            word.innerHTML=fullpass2;
    };
    click.play();

    
    

})
 dady3.addEventListener('click',()=>{

    clicked3 = true;
    
    if(clicked3 === true){
        running3();
    }
    else{
        clicked3 = 'none'
    }
    
    if(fullpass3.length > 20){
            word.innerHTML='';
            fullpass3=fullpass3.slice(20,40);
            word.innerHTML=fullpass3;
    };
    click.play();


   

 })

 

