import React, { useEffect } from "react";
import { useState } from "react";

export default function WindowSize() {

    const [size, setSize] = useState(getSize());

    function getSize(){
        return {
            width: window.innerWidth,
            heigth: window.innerHeight,
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize, false);

        function handleResize (){
            setSize(getSize());
            }

            return () => { /// Cleanup function, é sempre excutado antes da componente ser destruída, antes de cada render da componente
                window.removeEventListener('resize', handleResize, false);
            }

        }, []); /// Array de dependencia vazia, só é excutado no início da construção da componente
        /// Array de dependencia do Effect, que define quando é executado o meu effect
        /// Classes, componentDidMount()

    return (
        <>
        <p>Width: {size.width}, Height: {size.heigth} </p>
        </>
    );

}