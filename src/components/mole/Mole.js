import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
  
  render() {
    return (
      <div className="den">
        {this.props.den.isMoleVisible ? <img src={MoleIcon} className="Mole" alt="Mole" onClick={this.props.onMoleWhacked}/> : null }
      </div>
    )
  }
}

export default Mole
