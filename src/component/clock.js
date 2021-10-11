import React from 'react';
import Button from './button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTime = setInterval(() => this.trick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTime);
    }

    trick() {
        this.setState({
            date: new Date(),
        });
    }

    handCLick (locale) {
        this.setState({
            locale,
        })
    }

    render() {
        const { date,locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="clock">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change = {this.handCLick.bind(this, 'en-US')}></Button>
            </div>
            
        );
    }
}

export default Clock;
