// // Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(window)
// console.log(document.querySelector('.container'));

// // Multiple Element Selectors
// console.log(document.querySelectorAll('li'));
//console.log(document.getElementsByClassName('container'));

// const items = document.querySelectorAll('li');
// items.forEach((item) => console.log(item));

// const list = document.querySelector('.items');

//list.remove();

//list.lastElementChild.remove()
// list.firstElementChild.textContent = 'Hello world';
// list.children[1].textContent = 'Meeka';
// list.lastElementChild.innerHTML = '<h1>black</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'green';

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const userList = document.querySelector('#users');
    const msg = document.querySelector('.msg');

    if(name.value === '' || email.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please add required fields'

        setTimeout(() => msg.remove(), 3000)
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode( `${name.value} : ${email.value}`))
        userList.appendChild(li)

        name.value = '';
        email.value = '';
    }


})