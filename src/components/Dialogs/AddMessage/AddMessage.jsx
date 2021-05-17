import React from 'react';
import s from './AddMessage.module.css';
import {sendMessageCreat, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";





const AddMessage = (props) => {


    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body);
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