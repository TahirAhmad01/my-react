import React from 'react';

export default function Focus({ count, numIncrement }) {
    return (
        <div>
            <input type="text" onFocus={numIncrement} value="amar" />

            <div>{count}</div>
        </div>
    );
}
