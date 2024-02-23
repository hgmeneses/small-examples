import React, {Component} from 'react'
import Gato from './components/Gato/Gato'

const otrosDatos = {
  raza: 'tropical',
  peleasNocturnas: 300,
}

class App extends Component {
  state = {
    fuerza: 100,
    vidasRestantes: 7,
    name: 'Pirry', /* es importante recordar que al usar el operador spread si coinciden las llaves se tomara el ultimo valor dado */
  }

  render() {
    return (
      <div>
        <Gato name="Garfield" age="2 años" {...otrosDatos} {...this.state} />
      </div>
    )
  }
}

export default App
