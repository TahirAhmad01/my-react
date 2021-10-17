import React from 'react';
import ButtonCounter from './component/clickCounter';
import './component/css/style.css';
import Focus from './component/focus';
import Counter from './component/Hoc/counter';
import HoverCounter from './component/hoverCounter';

function App() {
    return (
        <div className="app">
            {/* <ButtonCounter />
            <HoverCounter /> */}
            {/* <User name={(IsLoggedIn) => (IsLoggedIn ? 'Tahir Ahmad' : 'Guest')} /> */}
            <Counter>
                {(count, numIncrement) => (
                    <ButtonCounter count={count} numIncrement={numIncrement} />
                )}
            </Counter>
            <Counter>
                {(count, numIncrement) => (
                    <HoverCounter count={count} numIncrement={numIncrement} />
                )}
            </Counter>
            <Counter>
                {(onFocus, numIncrement) => <Focus count={onFocus} numIncrement={numIncrement} />}
            </Counter>
        </div>
    );
}

export default App;
