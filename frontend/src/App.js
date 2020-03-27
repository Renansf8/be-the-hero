import React from 'react';  //importando o useState para alterar o estado na interface

import './global.css';

import Routes from './routes';

function App() {
  return (
      <Routes />   
   );
}

export default App;


// um componetne do react é uma função que retorna HTML
// JSX = quando um HTML esta escrito dentro do javascript
// toda vez que clicar no botão vai chamar o increment que aciona o counter += 1
// um componente do react "ex: Header" tem sempre que começar com letra maisúscula
 // o useState retorna um array [valor, atualização do valor]