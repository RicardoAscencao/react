import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../messageSlice";

export default function MessageInput() {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addMessage(value));
        setValue('');
    }

    return (
    <section className="message-input">
    <h1>Message Input</h1>
    <input type="text" placeholder="Sende your Message ..." value={value} onChange={ e => setValue(e.target.value)}/>
    <button onClick={handleSubmit}>Send</button>
    <button onClick={() => dispatch(addMessage('Ol´Mundo Cruel'))}>Favorito</button>
    </section>
    );
}