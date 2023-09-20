import React from 'react';
import './result.css';

 

const Resultado = ({ breedData }) => {
    return (
        <div className='container'>
            {breedData.length > 0 ? (
            breedData.map((breedInfo) => (
                <div key={breedInfo.id} className='dogInfo'>

                    <div className='infos-raca'>Raça: </div>

                    <div className='nameRaca'>{breedInfo.name}</div>

                    <div className='infos-raca'>Altura: {breedInfo.height.metric} cm</div>

                    <div className='infos-raca'>Peso: {breedInfo.weight.metric} kg</div>
                    
                    <img className='imgRaca' width='300px' height='300px' src={`https://cdn2.thedogapi.com/images/${breedInfo.reference_image_id}.jpg`} alt={breedInfo.name} />
                </div>
            ))
            ) : (
                <div className='infos-raca'>Não há informações sobre essa raça.</div>
            )}
        </div>
    );
};

 

export default Resultado;