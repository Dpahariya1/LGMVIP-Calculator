
let enter =document.getElementById('enter');
let screenvalue='';
const buttonn= document.querySelectorAll('button');
for(items of buttonn){
    items.addEventListener('click', (e)=>{
        
        buttonText= e.target.innerText;
        // if button is X
        if(buttonText=='X'){
           screenvalue =screenvalue.slice(0,screenvalue.length-1);
           enter.value = screenvalue;
        }
        // if button is C
        else if(buttonText=='C'){
            screenvalue="";
            enter.value= screenvalue;

        }
        // if button is =
        else if(buttonText=='='){
           
             if(screenvalue.indexOf('^')!=-1){
                let t= parseInt(screenvalue);
                let k=screenvalue.indexOf('^');
                
                let z = parseInt(screenvalue.slice(k+1,screenvalue.length));
               
                screenvalue="";
                screenvalue +=Math.pow(t,z);
                enter.value=screenvalue;
                
             }
             else if(screenvalue.indexOf('!')!=-1){
                 
                 let k=1;
                 for(let i=parseInt(screenvalue.slice(0,screenvalue.length-1)); i>=1 ; i--){
                    
                     k= k*i;
                 }
                 screenvalue="";
                 screenvalue +=k;
                 enter.value=screenvalue;
             }
             enter.value= eval(screenvalue);
            
        }
        else if(buttonText=='1/x'){
            enter.value= eval(1/screenvalue);
        }
        else if(buttonText=='xy'){ 
            screenvalue +='^';
            enter.value=screenvalue;
        }
        else if(buttonText=='x!'){
            screenvalue +='!';
            enter.value=screenvalue;
           
        }

        else{
            screenvalue += buttonText;
            enter.value = screenvalue;
        }
    });
}
