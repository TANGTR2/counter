import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.inputText = React.createRef();
  }

  multiple=()=>{
    const multiplier = this.inputText.current.value
    const onMultiple = this.props.onMultiple;
    onMultiple(multiplier)
  }

  render() {
    const { state, onIncrement, onDecrement,onMultiple } = this.props;
    return (
      <div className="App">
        <p>
          Clicked: {state} times {' '}
          <button onClick={onIncrement}> + </button>
          <button onClick={onDecrement}> - </button>
          <input type="text" defaultValue={0} ref={this.inputText}></input>
          <button onClick={this.multiple}> x </button>
        </p >
      </div>
    );
  }
}

export default App;
