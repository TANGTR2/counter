import {connect} from 'react-redux'
import Counter from '../components/Counter';
import {increment, decrement, multiple} from '../actions/index';

const mapStateToProps = (state, ownProps) =>{
    return {
        state: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        onMultiple:(multiplier,index) => dispatch(multiple(multiplier,index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)