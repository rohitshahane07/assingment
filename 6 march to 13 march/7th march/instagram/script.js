// alert('dkf')

let home_page = function(){
    const  home = document.getElementById('home_btn');
    home.addClassList('post')

}
let a = document.getElementById('home_btn')
a.addEventListener('click', home_page)

let serch_page = function(){
    const  serch= document.getElementById('serch_btn');
    serch.removeClassList('post')

}

let b = document.getElementById('serch_btn')
b.addEventListener('click', serch_page)