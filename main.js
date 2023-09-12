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


//Storing object


var form = document.getElementById('my-form');

form.addEventListener('submit',getValues);

function getValues(e){
	e.preventDefault();

	var name1 = document.getElementById('name').value;
	var email1 = document.getElementById('email').value;

	localStorage.setItem('name',name);
	// localStorage.setItem('email',email);

	let myObj = {
		name : name1,
		email : email1
	};
	console.log(myObj);
	let myObjStringify = JSON.stringify(myObj)
	localStorage.setItem('myObj',myObjStringify);

	let myobjDestringify = JSON.parse(localStorage.getItem("myObj"));
	console.log(myobjDestringify);
}



//Multiple user using email as key value

var form = document.getElementById('my-form');

form.addEventListener('submit',getValues);

function getValues(e){
	e.preventDefault();

	var name1 = document.getElementById('name').value;
	var email1 = document.getElementById('email').value;
	var phone  = document.getElementById('phone').value;
	//localStorage.setItem('name',name);
	// localStorage.setItem('email',email);
	var itemList = document.getElementById('list');

	var li = document.createElement('li');
	li.className='item';
	li.appendChild(document.createTextNode(`${name1} : ${email1} : ${phone}`));

	itemList.appendChild(li);

	let myObj = {
		name : name1,
		email : email1,
		phone : phone
	};
	console.log(myObj);
	let myObjStringify = JSON.stringify(myObj)
	localStorage.setItem(email1,myObjStringify);

	/*let myobjDestringify = JSON.parse(localStorage.getItem("myObj"));
	console.log(myobjDestringify);*/
}


//remove item using delete button and local storage;


var form = document.getElementById('my-form');

form.addEventListener('submit',getValues);

function getValues(e){
	e.preventDefault();

	var name1 = document.getElementById('name').value;
	var email1 = document.getElementById('email').value;
	var phone  = document.getElementById('phone').value;
	//localStorage.setItem('name',name);
	// localStorage.setItem('email',email);
	var itemList = document.getElementById('list');

	var li = document.createElement('li');
	li.className='item';
	var delbutton  = document.createElement('button');
	delbutton.className= 'float-right delete';
	delbutton.appendChild(document.createTextNode('delete'));
	li.appendChild(document.createTextNode(`${name1}:${email1}:${phone}`));
	//console.log(li.textContent);
	li.appendChild(delbutton);
	itemList.appendChild(li);

	let myObj = {
		name : name1,
		email : email1,
		phone : phone
	};
	//console.log(myObj);
	let myObjStringify = JSON.stringify(myObj)
	localStorage.setItem(email1,myObjStringify);
}
var itemList = document.getElementById('list');
itemList.addEventListener('click',removeItem1);

function removeItem1(e){
	e.preventDefault();

	if(e.target.classList.contains('delete')){
		var li = e.target.parentElement;
		var text = li.textContent;
		var individualText = text.split(':');
		var email=individualText[1]
		localStorage.removeItem(email);
		itemList.removeChild(li);
	}
}
