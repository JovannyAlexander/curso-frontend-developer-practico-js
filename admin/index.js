import {saveArticle} from '/admin/firebase.js'

window.addEventListener('DOMContentLoaded', () => {

});

const taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
   const name = taskForm['name']
   const price = taskForm['price']
   const description = taskForm['Description']

   saveArticle(name.value, price.value, description.value);
   alert('articulo creado'); 
});

