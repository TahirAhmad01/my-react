import React from 'react';
import './component/css/style.css';
import Counter from './component/todo';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        );
    }
}
