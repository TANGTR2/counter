import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {

  render() {
    const { state, onIncrement, onDecrement,onMultiple } = this.props;
    return (
      <div className="App">
        <Counter
          state={state}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onMultiple={onMultiple}/>
      </div>
    );
  }
}

export default App;
