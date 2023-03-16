import './style.css';

const divContent = document.getElementById('app');
divContent.innerHTML = '<h1>Hola mundo</h1>';

const contador = () => {
  let numero = 0;

  const incrementa = () => {
    numero++;
    console.log(numero);
  };
  return incrementa;
};

const incrementar = contador();
incrementar();
incrementar();
incrementar();
