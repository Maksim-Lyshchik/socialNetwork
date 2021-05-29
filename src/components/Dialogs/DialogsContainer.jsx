import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreat, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
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
        sendMessage: () => {
            dispatch(sendMessageCreat())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
withAuthRedirect
)
(Dialogs);