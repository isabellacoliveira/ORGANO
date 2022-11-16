import Banner from './componentes/banner/banner';
import Formulario from './componentes/Formulario';
import React, { useState } from "react";
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {
 
  const times = [
    // temos que criar um objeto que receba o time, as cores primarias e secundarias
    {
      nome: 'Progamacao', 
      corPrimaria: '#D9F7E9', 
      corSecundaria: '#57c278'
    }, 
    {
      nome: 'Front-end', 
      corPrimaria: '#E8F8FF', 
      corSecundaria: '#82CFFA'
    }, 
    {
      nome: 'Data Science', 
      corPrimaria: '#F0F8E2', 
      corSecundaria: '#A6D157'
    }, 
    {
      nome: 'Devops', 
      corPrimaria: '#FDE7E8', 
      corSecundaria: '#E06B69'
    }, 
    {
      nome: 'UX e Design', 
      corPrimaria: '#FAE9F5', 
      corSecundaria: '#DB6EBF'
    }, 
    {
      nome: 'Mobile', 
      corPrimaria: '#FFF5D9', 
      corSecundaria: '#FFBA05'
    }, 
    {
      nome: 'Inovação e Gestão', 
      corPrimaria: '#FFEEDF', 
      corSecundaria: '#FF8A29'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
    

  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
                              key={time.nome} 
                              nome={time.nome} 
                              corPrimaria={time.corPrimaria} 
                              corSecundaria={time.corSecundaria}
                              // o nome tem que ser igual 
                              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                  />)}
                  <Rodape />
    </div>

  );
}

export default App;
