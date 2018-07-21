import React, { Component } from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count:0}
    }

    increase =() =>{
        this.setState({count:this.state.count +1})
        this.props.count(1)
    }

    decrease =() =>{
        this.setState({count:this.state.count -1})
        this.props.count(-1)
    }

    render(){
        return (
            <div>
               <button onClick = {this.increase}> + </button>
               <button onClick = {this.decrease}> - </button>
               <span> count: {this.state.count}</span>
           </div>
        )  
    }
}