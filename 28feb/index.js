function click_me() {

    var i = prompt('enter the number');
    i = parseInt(i);

    for ( i = 0 ; i <101; i++){
        if(i % 3 == 0){
            document.write('Fizz')
        }

        else if (i % 5 == 0){
            document.write('Buzz')
        }
    }


    document.write(i)

}



