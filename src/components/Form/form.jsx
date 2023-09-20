import React, { useState } from 'react';
import '../Form/form.css';

const Formulario = ({ onSearch }) => {
    const [breed, setBreed] = useState('');
    const handleSearch = () => {
        onSearch(breed);
    };

    return (
        <div className="form">
            <input className='input-form' placeholder="Digite a raça (Inglês)" onChange={(e) => setBreed(e.target.value)} value={breed} />
            <button className='button-form' onClick={handleSearch}>Buscar Raça</button>
            </div>
    );
};

 
export default Formulario;