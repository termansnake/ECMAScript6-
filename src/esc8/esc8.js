// devuelve la clave y valores de una matriz
const data = {
    frontend: 'german',
    backend: 'diego',
    design: 'garrocha',
}

const entries = Object.entries(data); //Objet.entries
console.log(entries);
console.log(entries.length);

//Devuelve los valores de un objeto a un arreglo .values 
const data1 = {
    frontend: 'german',
    backend: 'diego',
    design: 'garrocha',
}
const values = Object.values(data1); //Object.values
console.log(values);
console.log(values.length);

//padding
const string = 'hello';
console.log(string.padStart(7,'hi')) //agrega una pabra
console.log(string.padEnd(12,'--------'))

//async await
const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    //const hello2 = await
    console.log(hello);
}
helloAsync(); // espera 3 segundos para imprimir el valor 

//correctamente
const anotherFunction = async () => {
    try {
        const hello = await helloWorld;
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();
///OTRO EJEMPLO 
const delay = () => {
    return new Promise(
        resolve => setTimeout(resolve, 1000)
    )
};
const counter = async() => {
    await delay();
    console.log('one second')
    await delay();
    console.log('two seconds')
    await delay();
    console.log('three seconds')
    await delay();
    console.log('four seconds')
    await delay();
    console.log('five seconds')
};
counter();
