import React,{Component} from 'react'
import Counter from './Counter'

export default class CounterGroup extends Component{
    constructor(props){
        super(props)
    }

    bulidCounterGroup(){
        let counterGroup =[]
        for(let i=0;i<this.props.counterNum;i++){
            counterGroup.push(<Counter />)
        }
        return counterGroup
    }

    render(){
        return(
            <div>
                {this.bulidCounterGroup()}
            </div>
        )
    }
}