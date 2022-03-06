function click_me() {

    var i = prompt('enter the number');
    i = parseInt(i);

    for ( i = 0 ; i <100; i++){

        
        if(i % 15 == 0){
            document.write('Fizz-Buzz')
        }

        else if (i % 3 == 0){
            document.write('Fizz')
        }

        else if (i % 5 == 0){
            document.write('Buzz')
        }

        else{
            document.write(i)
        }
    }


    

}



