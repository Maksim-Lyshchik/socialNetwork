import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreat, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageBody: state.messagesPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(sendMessageCreat())},
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;