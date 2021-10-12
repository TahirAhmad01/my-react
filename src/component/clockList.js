import React from "react";
import Clock from "./clock";

export default function ClockList ({quantities = []}) {
    return(
        <div>
            {quantities.map( () => (
                <Clock key={Math.random()} />
            ))}
        </div>
    );
}