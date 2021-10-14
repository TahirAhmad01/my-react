import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonCounter extends React.Component {
    state = {
        number: '0',
    };

    render() {
        const { number } = this.state;
        return (
            <div>
                <button>Clicked {number} times</button>
            </div>
        );
    }
}

export default ButtonCounter;
