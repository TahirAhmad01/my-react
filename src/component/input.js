import React from 'react';

function Input({ type, placeholder }, ref) {
    return <input type={type} placeholder={placeholder} ref={ref} />;
}

const refFor = React.forwardRef(Input);

export default refFor;
