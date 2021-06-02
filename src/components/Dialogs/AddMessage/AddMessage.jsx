import React from 'react';
import s from './AddMessage.module.css';
import {Field, reduxForm} from "redux-form";





const AddMessageForm = (props) => {
    let newMessageBody = props.newMessageBody;

    return (
            <form onSubmit={props.handleSubmit} className={s.addText}>
                <div>
                    <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogMessageForm'})(AddMessageForm)

export default AddMessageFormRedux;