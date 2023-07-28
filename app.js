// const name = 'George';
// const age = 14;
// const rating = 4.5;
// const Alive = true;
// const x = null;
// const y = undefined;

// console.log(typeof(Alive));
// console.log(typeof(rating));
// console.log(typeof y);

//Strings

// const s = 'Hello World!';
// const t = 'Programming, IT, AI, ML'

// console.log(s.length);
// console.log(s.substring(0, 7));
// console.log(t.split(', '));
// console.log(s.toUpperCase())
// console.log(s.replace('e', 'a'));

//Arrays
// const cars = ['Dodge Challenger', 'Dodge Charger', 'Ford Mustang'];

// cars.push('Chevy Camaro');
// cars.unshift('Lamborghini Urus');

// console.log(cars);
// console.log(cars.length);
// console.log(cars.slice(0, 3));

// cars.pop()
// cars[0] = 'Lamborghini Revuelto'
// console.log(cars);

// cars.splice(3,  1)
// console.log(cars);


//Object Literals
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 12,
//     hobbies: ['reading', 'eating', 'sleeping'],
//     address: {
//         ipAddress: 'localhost',
//         port: 5000,
//         DNS: undefined
//     }

// }

// console.log(person.firstName);
// console.log(person.hobbies[1]);
// console.log(person.address.port);

// const {firstName, lastName, address: {ipAddress}} = person
// console.log(ipAddress);

// person.email = 'local@gmail.com'

// console.log(person);


// const todos= [
//     {
//         id: 1,
//         text: 'read a book',
//         completed: true,
//     },

//     {
//         id: 2,
//         text: 'do laundry',
//         completed: false,
//     },

//     {
//         id: 3,
//         text: 'code up server',
//         completed: true,
//     },
// ]

// todos[0].status = 'pending';
// todos[1].text = 'sleep in'

// console.log(todos);
// console.log(todos[0].text);

// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON);

// loops

// for(let i = 0; i <= 10; i++){
//     console.log(`for loop no. ${i}`);
// }

// let  x = 0;
// while (x < 10) {
//     console.log(`while loop no. ${x}`);
//     x++;
    
// }

// const cars = ['Dodge Challenger', 'Ford Mustang', 'Chevy Camaro']
// for(let i = 0 ; i < cars.length; i++){
//     console.log(cars[i]);
// }

// cars.unshift('Dodge Charger')
// cars.push('Lamborghini Urus')

// for(let car in cars){
//     console.log(cars[car]);
// }


// forEach, Map, Filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// })

// const todoMap = todos.map(function(todo){
//     return todo.text
// })

// console.log(todoMap);

// const todoFilter = todos.filter(function(todo){
//     return (todo.completed === true)
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoFilter);



// conditionals

// let num = 11;

// if (num > 10){
//     console.log('greater than 10');
// }
// else if(num === 10){
//     console.log('equals to 10');
// }
// else{
//     console.lolg('not greater than 10')
// }

// ternary operator
// let color  = num > 10 ? 'blue':'red'

//switch statements
// switch(color){
//     case 'blue':
//         console.log('color is blue');
//         break
    
//     case 'red':
//         console.log('color is red');
//         break
    
//     default:
//         console.log('color is neither red nor blue')
// }


// functions
// function addNums(num_1 = 1, num_2 = 1){
//     return num_1 + num_2;
// }

// console.log(addNums(5,5));

// Arrow functions

// const addNums = (num_1=1, num_2=1) => num_1 + num_2;

// console.log(addNums(2,2));


//OOP

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getfullname() {
//         return this.firstName + " " + this.lastName;
//     }
//     getdob() {
//         return this.dob.getFullYear();
//     }
// }


// person1 = new Person('John', 'Doe', '12-07-2002')
// console.log(person1.getfullname());
// console.log(person1.getdob());


