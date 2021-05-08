import React from 'react';
import s from './AddMessage.module.css';
import {sendMessageCreat, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";




const AddMessage = (props) => {


    let newMessageBody = props.store.getState().messagesPage.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreat());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
            <div className={s.addText}>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Send</button>
                </div>
            </div>
    )
}

export default AddMessage;