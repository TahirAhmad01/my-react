import React from 'react';

export default class Counter extends React.Component {
    state = {
        count: 0,
    };

    numIncrement = () => {
        this.setState((preNumber) => ({
            count: preNumber.count + 1,
        }));
    };

    render() {
        const { children } = this.props;
        const { count } = this.state;
        return children(count, this.numIncrement);
    }
}
