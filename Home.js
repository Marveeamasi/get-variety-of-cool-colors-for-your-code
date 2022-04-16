/*  ..home......................*/

// toggle menu
function toggleMenu(){
let x = document.getElementById('listContainer');
if(x.className === 'listContainer'){
x.className += ' responsive';
}
else{
x.className === 'listContainer';
}
}

//getName

let btn = document.getElementById('inputForm');
let form = document.getElementById('form');
form.addEventListener('submit',function(e){
let b = btn.value;
let user = document.getElementById('user');
user.innerText = b ;

e.preventDefault();
})



