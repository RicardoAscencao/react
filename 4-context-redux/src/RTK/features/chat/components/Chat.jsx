import MessageView from './MessageView';
import MessageInput from './MessageInput';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllMessages } from '../messageSlice';

export default function Chat() {

    const {messages} = useSelector(state => state.chat);
    const dispatch = useDispatch()

    return (
        <section className="chat">
            <h1>Chat - {messages.length}</h1>
            <button onClick={()=> dispatch(clearAllMessages())}>Clear all message</button>
               <MessageView />
               <MessageInput />
        </section>
    );
}