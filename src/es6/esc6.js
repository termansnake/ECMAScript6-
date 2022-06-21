// FORMA ANTIGUA
function newFunction(name,age,country) {
    var name = name || 'german';
    var age = age || 29;
    var country = country || Mexico;
    console.log(name,age,country);
}
//ECMA6
function newFunction2(name = 'GERMAN',age = 29,country ='MX') {
    console.log(name,age,country);
}

newFunction2('juan',41,'ds');
newFunction2(); //

//template literlas = separar o unir varios elementos   
let hello = "hello";
let world = "world";
let epicfrase =  `${hello} ${world}`;
console.log(epicfrase)

//Multilinea
//antes
let lorem = "djesioj iofj eiojoij oijs doijsf oijsdpowowie \n" + "otra frase epica mas";
//esc6
let lorem2 = `otra frase epicaq que necesitrmos mas 
ahora es otra fras suoer mas epica
`;
console.log(lorem)
console.log(lorem2)

//estructuracion de elementos
let person = {
    'name': 'german',
    'age': 32,
    'country': 'mx'
}
//antes
console.log(person.name,person.age);
//despues ec6
let { name, age, country} = person;
console.log(name,age,country);

//Operador de propagacion, unimos arrays 
let team1 = ['german', 'sonia', 'ricardo']
let team2 = ['valeria', 'yessica', 'jose']

let education = ['david', ...team1, ...team2];
console.log(education)

//ejemplo de scope
{
    var globalvar ="variable global";
}

{
    let globalLet = "global let";
    console.log(globalLet)
}
console.log(globalvar);


const a = "b";
console.log(a);
//objetos jaja  

let nombre = 'german';
let edad = ' 29';
//antes
obj = {
    nombre: nombre,
    edad : edad
};
//ecma
obj2 = { nombre, edad}
console.log(obj2)

//arrow functions 
const names = [
    {
        name: 'german', age: 29
    },
    {
        name: 'mons', age: 25
    }
]
let listOfNames =  names.map(function(item){
    console.log(item.name);
})
let listOfNames2 =  names.map(item =>  console.log(item.name) );

//const listOfNames3 =  (nombre, edad) => {...} --varios elementos
   
//const listOfNames4 = name => { ---un solo elemento

//ASINCRONISMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
//promesaaaaa
const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if(true) {
            resolve('hey!');
        } else {
            reject('ups!');
        }
    });
}
helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error))

/// herencia
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//modulos exportar e importar 
import hello from './module'
console.log(hello())

//generators 
function* helloWorld () {
    if (true) {
        yield 'hello, ';
    } 
    if (true) {
        yield 'world';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
//salida
// hello, 
// world
// undefined