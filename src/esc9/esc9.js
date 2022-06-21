//operador de roposo, saca las propiedades de un objeto no construido SPREAD OPERATOR
const obj = {
    name: 'german',
    age: 29,
    country: 'mx',
};

let {name, ...all} = obj;
console.log(name,all); //german { age: 29, country: 'mx' }
let { country, ...addInfo } = obj;
console.log(`country: ${country}`);
console.log(`additional information: `, addInfo);

//PROPAGACION PARA UNIR ELEMENTOS A UN OBJETO
const obj1 = {
    name: 'german',
    age: 29,
};
const obj2 = {
    ...obj1,
    country: 'mx',
};
console.log(obj2); //{ name: 'german', age: 29, country: 'mx' }

//PCUANDO HA TERMINADO EL LLAMADO Y EJECUTAR UN CODIGO
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test Errror'))
    })
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9{2}])/
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);