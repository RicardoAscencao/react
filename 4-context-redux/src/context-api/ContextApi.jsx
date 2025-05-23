import React, { useContext, useState } from "react";

const appContext = React.createContext();

export default function ContextApi() {

    const [nome, setNome] = useState ('Nuno');

    return (
        <appContext.Provider value={ {nome, setNome} }>
            <section>
                <h1>Componente Context Api</h1>
                <Hello />
            </section>
        </appContext.Provider>
    );
}

 function Hello(){
    return (
        <section>
            <Greetings/>
        </section>
    )
 }

  function Greetings(){

    const context = useContext(appContext);

    return (
        <section>
            <h1>Componente Greetings</h1>
            <p>Recebido do avô (via Pai): {context.nome}</p>
            <button onClick={ ()=> context.setNome('Inês')}>Mudar Nome</button>
        </section>
    )
 }