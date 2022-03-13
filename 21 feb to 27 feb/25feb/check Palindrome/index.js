
var a = prompt('enter the Palindrom');

// a = parsInt(a);

function str(a){
    var converInArry = a.split("")

    var reversedArry = converInArry.reverse();

    var reverstr  =  reversedArry.join('');

    if(a == reverstr){

    document.write('it is Palindrome')

   
    
    }

    else{
        document.write('it is not Palondrome')


    }


}

var output = str(a);

