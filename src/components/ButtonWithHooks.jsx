import React, { useState } from 'react';

function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is the default state of a Function component.");
    const [key2, setKey2] = useState(0);

    return (
        <>
            <div>{key1}</div>
            <div>{key2}</div>
            <button onClick={() => setKey1("Function Button Clicked")}>Function Button</button>
            <button onClick={() => setKey2(1)}>Change the number</button>
        </>
    )
};

export default ButtonWithHooks;