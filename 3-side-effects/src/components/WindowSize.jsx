import React, { useState } from "react";

export default function WindowSize() {

    const [size, setSize] = useState(getSize());

    function getSize(){
        return {
            width: window.innerWidth,
            heigth: window.innerHeight,
        }
    }

    return (
        <>
        <p>Width: {size.width}, Height: {size.heigth} </p>
        </>
    );

}