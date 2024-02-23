import React, {Component} from 'react'

const styles = {
  height: '200px',
  background: 'gold',
  padding: '1em',
  boxSizing: 'border-box',
}

class App extends Component {
  state = {
    x: 0,
    y: 0,
  }

  manejadorButton = () => {
    alert('HEY Ninja')
  }

  manejador = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    return (
      <div>
        <button
          /* onClick={this.manejador} */
          /* onMouseUp={this.manejador} */
          /* onMouseDown={this.manejador} */
          onDoubleClick={this.manejadorButton}
        >
          Dispara
        </button>

        <div style={styles} onMouseMove={this.manejador}>
          <div>
            x: {this.state.x}
          </div>
          <div>
            y: {this.state.y}
          </div>
        </div>
      </div>
    )
  }
}

export default App
