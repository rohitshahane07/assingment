function done(){
     
    var a = document.getElementById('password');

    var b = document.getElementById('confirm_password')

    // acecss the value

    var value_a = a.value;
    var value_b = b.value;

    input_a =   parseInt(value_a);
    input_b = parseInt(value_b);

    if(input_a == input_b){
        
        submit = document.getElementById('submit-form_notify').innerText='Successfull Form submited';
    
    }

    else{
        
        wrong_pass =document.getElementById('wrong_password_notify').innerText='Password and Confirm Passwor dosent match'
    }


}