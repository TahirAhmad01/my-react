import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className="clock">{new Date().toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}

export default Clock;
