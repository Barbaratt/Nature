import React from 'react';
import './index.scss';
// import { Button, SVGIcon } from 'react-md';
// import { logo } from './../assets/img/'



const header = () => {
    return (
        <div className="header">
           <ul>
            <li><img className='logo' alt="imagem3" src={require('./../assets/img/nature-quotes-1557340276.jpg')} /></li>
               <li><a href="ee">Home</a></li>
               <li><a href="dd">Quem Somos</a></li>
               <li><a href="cc">Serviços</a></li>
               <li><a href="aa">Trabalhe Conosco</a></li>
               <li><a href="bb">Contato</a></li>
           </ul>
        </div>

 
    
            // <table>
            //     <tr className="tabela">
            //         <th>1</th>
            //         <th>2</th>
            //         <th>3</th>
            //         <th>4</th>
            //         <th>5</th>
            //     </tr>
            // </table>
            // <Button raised primary iconClassName="fa fa-hand-spock-o">Spock</Button>
      
       

    )
}

export default header;

