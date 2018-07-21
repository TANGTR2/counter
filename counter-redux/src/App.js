import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';

class App extends Component {

  render() {
    const { state, onIncrement, onDecrement,onMultiple } = this.props;
    return (
      <div className="App">
        <CounterGroup
          state={state}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onMultiple={onMultiple}
          amount={2}/>
      </div>
    );
  }
}

export default App;
