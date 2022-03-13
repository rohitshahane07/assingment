// document.write('weghwoei')

 var  a = prompt('enter first word');

var   b = prompt('enter second word');

function Analagram (a,b){
    
    // convert in arry
    var convertInarry = a.split('');
    var convertInarryb= b.split('');
    // sort the arry
    var sorta         = convertInarry.sort();
    var sortb         = convertInarryb.sort('');
    //  convert into String
    var convertStr_a  = sorta.join('');
    var convertStr_b = sortb.join('');

    if(convertStr_a  == convertStr_b ){
        document.write('it is Analagram')
    }
    else{
        document.write('it is not Analagram plz enter Analagram')
    }



}

var output = Analagram(a,b);
console.log(output)

