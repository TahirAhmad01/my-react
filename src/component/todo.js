import React, { useEffect, useState } from 'react';

function Todo() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tisk = () => {
        setDate(new Date());
    };

    useEffect(() => {
        console.log('effect rendering');
        document.title = `clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        setInterval(tisk, 1000);
    });

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h1>Time: {date.toLocaleTimeString()}</h1>
            <button type="button" onClick={addClick}>
                click me
            </button>
        </div>
    );
}

export default Todo;
