let box=document.getElementById('box');
let display=document.getElementById('display')
let clearbuttion=document.getElementById('sc');
const getlength=display.value;
let think=false;
let word;
let  click= new Audio('gunclick.mp3')
let rim=box.offsetHeight;



setInterval(()=>{
    if(display.value.length >36){
        display.value='error'
        setTimeout(()=>{
            display.style.display='none';
        },1000)
        setTimeout(()=>{
            display.style.display='revert';
            display.value='';
        },1000)

    }
    else if(display.value.length > 18 && rim >599){

        display.value='error'
        setTimeout(()=>{
            display.style.display='none';
        },1000)
        setTimeout(()=>{
            display.style.display='revert';
            display.value='';
        },1000)


    }
    
})




function going(input){
    display.value += input;
    think=false; 
    click.play();

   
 if(think===false && word.length > 0){
   word=''
   display.value=word;
   
 }

            
          
}
function clear(){
    display.value ='';
    click.play();

}

function running(){
    try{
      word=display.value= eval(display.value);
       think=true;
       word=word.toString();
       
      
       

       
    }catch(error){
        display.value='Error';
    }
    think=true;
}
clearbuttion.addEventListener('click',clear);
