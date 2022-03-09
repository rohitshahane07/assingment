// alert('hlo


const todo = [];

const render = function(){
    
    parent_contaner = document.getElementById('list_container');

    for(let i=0; i<todo.length ; i += 1){

   const single_todo_item = todo[i]

    const new_li = document.createElement('li');
    
    new_li.innerText =single_todo_item;

    parent_contaner.appendChild(new_li)
  }
}

const add = function(){
   const ip= document.getElementById('todo_input')
   const new_todo = ip.value;
   todo.push(new_todo)

   ip.value='';

   render()

}
const btn = document.getElementById('add_btn');
btn.addEventListener('click', add)
