import React from 'react';
import s from './Dialogs.module.css';
import AddMessage from "./AddMessage/AddMessage";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messagesData.map((m) => <Message message={m.message}/>);
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
            </div>
            <AddMessage updateNewMessageBody={props.updateNewMessageBody}
                        sendMessage={props.sendMessage}
                        newMessageBody={props.newMessageBody}
                        isAuth={props.isAuth}/>
        </div>

    )
}

export default Dialogs;