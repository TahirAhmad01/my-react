import React from 'react';

class Button extends React.Component {
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

