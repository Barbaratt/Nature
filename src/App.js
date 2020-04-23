import React from 'react';
import './App.css';
import Home from './home';
import MenuButtonExamples from './menu/menu';
import Grid from './grid/grid';
import Form from './Form/form';


function App() {
  return (
    <div className="App">
      <Home />

      <Grid />
     
      <Form />
      
      <MenuButtonExamples />

    </div>
  );
}

export default App;