import React from 'react';
import s from './AddMessage.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Element} from "../../../hoc/widhChildProps";

export const Textarea = Element('textarea');
const maxLength50 = maxLenghtCreator(50);

const AddMessageForm = (props) => {
    let newMessageBody = props.newMessageBody;


    return (
            <form onSubmit={props.handleSubmit} className={s.addText}>
                <div>
                    <Field component={Textarea} name='newMessageBody' placeholder='Enter your message'
                           validate={[required, maxLength50]}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogMessageForm'})(AddMessageForm)

export default AddMessageFormRedux;