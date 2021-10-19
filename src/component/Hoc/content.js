import React from 'react';
import HoverCounter from '../hoverCounter';
import Counter from './counter';

export default function Content() {
    return (
        <div>
            <h1>This is content </h1>
            <Counter>
                {(counter, numIncrement) => (
                    <HoverCounter count={counter} numIncrement={numIncrement} />
                )}
            </Counter>
        </div>
    );
}
