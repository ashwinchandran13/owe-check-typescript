let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;

isLoggedIn = false;

let ninjas: string[] = [];
ninjas.push('asd');

let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(33);
mixed.push(true);

console.log(mixed);


let uid: string|number;
uid = 23;
uid = 'adsa';


let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    isLoggedIn: boolean
}

ninjaTwo = {
    name: 'mario',
    age: 20,
    isLoggedIn: false,
    
}

