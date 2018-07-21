import React, {Component} from 'react';
import Counter from "./Counter";
export default class CounterGroup extends Component {

    counters(){
        const {state, onIncrement, onDecrement,onMultiple} = this.props;
        let counters=[]
        for(let i=0;i<this.props.amount;i++){
            counters.push(<Counter
                state={state[i]}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onMultiple={onMultiple}
                index={i}
                key={i}/>
            )
        }
        return counters;
    }

    render() {
        return (
            <div> {this.counters()} </div>);
    }
}
