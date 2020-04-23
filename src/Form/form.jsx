import React from 'react';
import './form.scss';

const form = () => {
    return (
        <div className="form">
            <p>Envie seu nome e email que entraremos em contato !</p>
            <br></br>
            
            <form class = "form2" action="/pagina-processa-dados-do-form" method="post">
                <div>
                    <label for="nome">Nome </label>
                    <br></br>
                    <input type="text" id="nome" />
                </div>
                <br></br>
                <div>
                    <label for="email">E-mail </label>
                    <br></br>
                    <input type="email" id="email" />
                </div>
                <br></br>
                <div>
                    <label for="msg">Mensagem </label>
                    <br></br>
                    <textarea id="msg"></textarea>
                </div>
                <br></br>
                <div class="button">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default form;