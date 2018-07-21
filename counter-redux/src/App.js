import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { state, onIncrement, onDecrement,onMultiple } = this.props;
    return (
      <div className="App">
        <p>
          Clicked: {state} times {' '}
          <button onClick={onIncrement}> + </button>
          <button onClick={onDecrement}> - </button>
          <button onClick={onMultiple}> x2 </button>
        </p >
      </div>
    );
  }
}

export default App;
