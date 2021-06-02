import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreat, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/widhAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageBody: state.messagesPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreat(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
withAuthRedirect
)
(Dialogs);