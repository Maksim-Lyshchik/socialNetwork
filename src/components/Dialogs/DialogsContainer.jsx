import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreat, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage

    let newMessageBody = props.store.getState().messagesPage.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreat());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        < Dialogs updateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  messagesPage={state}
                  newMessageBody={newMessageBody}/>
    )
}

export default DialogsContainer;