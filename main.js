/*const btn = document.querySelector('.btn');


btn.addEventListener('mouseover', (e)=>{
	e.preventDefault();
	document.querySelector('#my-form').style.backgroundColor = 'grey';
	document.querySelector('body').classList.add('bg-dark');
	
})
btn.addEventListener('mouseout', (e)=>{
	e.preventDefault();
	document.querySelector('#my-form').style.backgroundColor = 'purple';
	document.querySelector('body').classList.add('#343a40');
	
})

const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const items = document.querySelector('.items');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
	e.preventDefault();
	document.querySelector('#my-form').style.backgroundColor = '#ccc';
	document.querySelector('body').classList.add('bg-dark');
	if(name.value ==='' || email.value === ''){
		msg.classList.add('error');
		msg.innerHTML = "Please enter all values";
		setTimeout(()=>msg.remove(),3000);
	}
	else{
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
		items.appendChild(li);
		console.log(name.value,email.value);

		name.value='';
		email.value='';
	}
}*/


var form = document.getElementById('my-form');

form.addEventListener('submit',getValues);

function getValues(e){
	e.preventDefault();

	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;

	localStorage.setItem('name',name);
	localStorage.setItem('email',email);
}