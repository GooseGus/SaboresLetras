import React, { Component } from 'react';
import './StyleEvento.css';

class AppEvento extends Component {
  render() {

    return (
   
           
        <div className='evento'>
          <img alt="" src={this.props.info.imagem} />
          <div className='Descrição' >
            <h2>{this.props.info.title}</h2>
            
            <img alt="" src="more.png" />
            <p>{this.props.info.descrição}</p>
          </div>
       </div>
    );
  }
}

export default AppEvento;