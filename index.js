import './style.css';

const divContent = document.getElementById('app');
divContent.innerHTML = '<h1>Hola mundo</h1>';

const contador = () => {
  let numero = 0;

  const incrementa = () => {
    numero++;
    //console.log(numero);
  };
  return incrementa;
};

const incrementar = contador();
incrementar();
incrementar();
incrementar();

// quitar duplicados de array
const names = ['Jose', 'Jose', 'Luis', 'Luis'];

const uniqueNames = names.reduce((acc, current) => {
  !acc.includes(current) && acc.push(current);
  return acc;
}, []);

const numbers = [2, 2];

const total = numbers.reduce((sum, number) => sum + number, 0);

console.log(uniqueNames);
console.log(total);

// Ejemplo de acceso al this
const externalString = 'Luis';
const object = {
  name: 'Jose',
  normalFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => console.log(this.name, this),
};

object.normalFunction();
object.arrowFunction();
