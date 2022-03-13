

let decriment = true;
 countor_sec = 60;

 

const second = function(){

   const sec_id =   document.getElementById('sec');
 
    sec_id.innerText =`${countor_sec} sec`
    
    if(decriment){
        countor_sec -= 1;

        if(countor_sec==0){
            decriment= false
            min ()
           
           
        }

    }
    else{
        countor_sec = 60;
        decriment =true;
    }
}
interval =  setInterval(second,1000)



let countor_min = 4;
const min = function(){

   const min_id = document.getElementById('min');
   min_id.innerText =`${countor_min}  `


   if(countor_sec==0){
   countor_min -= 1;
    }

   if(countor_min==0){

    clearInterval(interval)
    }
   

}

let start =  function (){

   start_1 = document.getElementById('button');

   second()

}
 




 

