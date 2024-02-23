import React, {Component} from 'react'

class App extends Component {

  manejador = (e) => {
      console.log(e) /* tengo acceso a los eventos proporcionados para react y que son iguales a los de html */
      console.log(e.nativeEvent) /* con el metodo `nativeEvent` tengo accesso a los eventos nativos del navegador*/
      e.preventDefault()
  }

  render() {
    return (
      <div>
        <a
          href="https://google.com"
          onClick={this.manejador}
        >
          GOOGLE
        </a>
      </div>
    )
  }
}

export default App
