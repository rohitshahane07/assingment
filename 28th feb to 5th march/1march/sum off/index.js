


function update() {

    var first_elem = document.getElementById('first');

    var second_elem = document.getElementById('second');

    var span_elem = document.getElementById('answer');

    // access value

    var  new_input = first_elem.value;

    var  second_new_input = second_elem.value;



// sum of both

    

      var a = parseInt(new_input)

      var b = parseInt(second_new_input)

     
     var sum = a + b;

    

     span_elem.innerText = sum;

     
 
     
      
}
