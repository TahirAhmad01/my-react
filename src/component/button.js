import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps){
        const {change: currentChange} = this.props;
        const {change: nextChange} = nextProps;

        if(currentChange === nextChange){
            return false
        }
        return true
    }
    render(){
        const {change} = this.props;
        return(
            <button onClick={change}>
                Click me
            </button>
        )
    }
};

export default Button;

