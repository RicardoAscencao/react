import React, { useEffect, useState } from 'react';

export default function UsingLocalStorage () {

    /* localStorage.setItem('nome', 'Nuno');
    localStorage.setItem('pais', 'Pt');
    console.log(localStorage.getItem('nome'));
    localStorage.removeItem('pais');
    //localStorage.clear(); */


    const [user, setUser] = useState('');
    const [xpto, setXpto] = useState('xpto state');

    useEffect(() => {
    /// inicio na construção da componente, verificar se tenho um user guardado
    const storedUser = localStorage.getItem('user');

    if(setUser) {
        setUser(storedUser);
    }

    }, [])

    useEffect(() => {
    localStorage.setItem('user', user);
    console.log('user', user);
    }, [user])

    useEffect(() => {
        console.log('Chamado effect...');
})


return (
        <>
            <h1>Using  Depencies in Effect</h1>
            <select value={user} onChange={ (event) => setUser(event.target.value)}>
                <option>Nuno</option>
                <option>Pedro</option>
                <option>Maria</option>
                <option>António</option>
                <option>João</option>
                <option>Inês</option>
            </select><br />
            <button onClick={()=> setXpto('alterado')}> {xpto}</button>
        </>
 
    );


}