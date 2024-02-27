import React, {Component} from 'react'
import './global.css'

class Hijo extends Component {
  manejadorClick = () => {
    this.props.onSaludar('Ninja en react')
  }
  render() {
    return (
      <div className="box blue">
        <h2>Hijo</h2>
        <button onClick={this.manejadorClick}>Saludar</button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    name: '',
  }
  manejador = (name) => {
    this.setState({name})
    alert(name)
  }

  render() {
    return (
      <div className="box red">
        <h1>Padre</h1>
        <Hijo onSaludar={this.manejador} />
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default App
