import React from 'react';
import ButtonCounter from './component/clickCounter';
import './component/css/style.css';
import Counter from './component/Hoc/counter';
import Section from './component/Hoc/section';

function App() {
    return (
        <div className="app">
            <Counter>
                {(count, numIncrement) => (
                    <ButtonCounter count={count} numIncrement={numIncrement} />
                )}
            </Counter>
            <Section />
        </div>
    );
}

export default App;
