import React from 'react';

export default function HoverCounter({ count, numIncrement }) {
    return (
        <div>
            <h1 onMouseOver={numIncrement}>Hover Mouse {count} times</h1>
        </div>
    );
}
