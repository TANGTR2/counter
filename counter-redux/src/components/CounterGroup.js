import React, {Component} from 'react';
import Counter from "../container/CounterContainer";
export default class CounterGroup extends Component {

    counters(){
        let counters=[]
        for(let i=0;i<this.props.amount;i++){
            counters.push(<Counter
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
