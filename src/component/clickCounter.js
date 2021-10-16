import React from 'react';

export default function ButtonCounter({ count, numIncrement }) {
    return (
        <div>
            <button onClick={numIncrement}>Clicked {count} times</button>
        </div>
    );
}
