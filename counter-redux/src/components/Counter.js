import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.inputText = React.createRef();
  }

  multiple=()=>{
    const multiplier = this.inputText.current.value
    const onMultiple = this.props.onMultiple;
    onMultiple(multiplier,this.props.index)
  }

  render() {
    const { state, onIncrement, onDecrement,onMultiple,index } = this.props;
    return (
        <div>
          Clicked: {state} times {' '}
          <button onClick={()=>onIncrement(index)}> + </button>
          <button onClick={()=>onDecrement(index)}> - </button>
          <input type="text" defaultValue={0} ref={this.inputText}></input>
          <button onClick={this.multiple}> x </button>
        </div >
    );
  }
}

export default Counter;