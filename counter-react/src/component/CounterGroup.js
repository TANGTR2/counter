import React,{Component} from 'react'
import Counter from './Counter'

export default class CounterGroup extends Component{
    constructor(props){
        super(props)
        this.state = {sum:0}
    }

    sum =(count) => {
        this.setState({sum:this.state.sum + count})
    }

    bulidCounterGroup(){
        let counterGroup =[]
        for(let i=0;i<this.props.counterNum;i++){
            counterGroup.push(<Counter count={this.sum}/>)
        }
        return counterGroup
    }

    render(){
        return(
            <div>
                {this.bulidCounterGroup()}
                <span>sum: {this.state.sum}</span>
            </div>
        )
    }
}