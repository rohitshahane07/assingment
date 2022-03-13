// alert('gi')

let conver_json = function(response){
      return response.json()
}

let handal =function(showing){
      let img = document.getElementById('showing_img');

      for( let i=0; i<8 ; i +=1){
          result = showing.data[i]
        //   console.log(result)
      } 
      img.src = result
    
}

fetch('https://api.giphy.com/v1/gifs/trending?api_key=fZBniyhZ3cF0bDEP46XXJIx0vF40Xi5t')
.then(conver_json)
.then(handal)


let fn2 = function(serch_data){
         
      console.log('serch_data')

      fetch('https://api.giphy.com/v1/gifs/search?api_key=fZBniyhZ3cF0bDEP46XXJIx0vF40Xi5t')
      .then(conver_json)
      .then(fn2)
  
}

let btn = document.getElementById('button')

btn.addEventListener('click',fn2)

