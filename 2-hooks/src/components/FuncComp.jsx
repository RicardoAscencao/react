import { useState } from "react";

export default function FuncComp () {

    const [name, setName] = useState('')

    const handleChange = (event) => setName(event.target.value);

    return (
        <div>
            <h1>Funcion</h1>
            <p>My Name is {name}</p>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    );
}