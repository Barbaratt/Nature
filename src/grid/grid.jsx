import React from 'react';
import './grid.scss';


const grid = () => {
    return (
        <div className="grid">
            <img className='image' alt="imagem3" src={require('./../assets/img/nature-quotes-1557340276.jpg')} />
            <img className='image' alt="imagem1" src={require('./../assets/img/images.jpg')} />
            <img className='image' alt="imagem2" src={require('./../assets/img/Nature-climate.jpg')} />
            <img className='image' alt="imagem3" src={require('./../assets/img/nature-quotes-1557340276.jpg')} />
            <img className='image' alt="imagem1" src={require('./../assets/img/images.jpg')} />
            <img className='image' alt="imagem2" src={require('./../assets/img/Nature-climate.jpg')} />
        </div>
    )
}

export default grid;