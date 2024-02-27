import React, {Component} from 'react'

class PersistenceEvents extends Component {
  state = {
    color: 'blue',
  }

  handlerChange = (event) => {
    const color = event.target.value
    console.log(event.target.value)

    this.setState((state) => ({
      color,
    }))
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerChange} />
        <h1 style={{color: this.state.color}}>{this.state.color}</h1>
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      <PersistenceEvents />
    </div>
  )
}

export default App
