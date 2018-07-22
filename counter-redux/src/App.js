import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CounterGroup
          amount={2}/>
      </div>
    );
  }
}

export default App;