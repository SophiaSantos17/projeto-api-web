
import './App.css';

import api from './Services/api';
import Header from './components/Header/header';
import Formulario from './components/Form/form';
import Resultado from './components/Result/result';

import { useState } from 'react';

 

const App = () => {
  const [breedData, setBreedData] = useState([]);

  const handleFetchBreedInfo = async (breed) => {
    const data = await api(breed);
    setBreedData(data);
  };

 

  return (
    <div className="App">
      <Header />
      <Formulario onSearch={handleFetchBreedInfo} className="form-app" />
      <Resultado breedData={breedData} className="result-app"/>
    </div>
  );
};


export default App;
