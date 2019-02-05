import React from 'react'
import Routes from './Routes'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: '10%',
          width: '90%',
          top: '5%',
          height: '95%',
          padding: 10
        }}
      >
        <Routes />
      </div>
    )
  }
}

export default App
