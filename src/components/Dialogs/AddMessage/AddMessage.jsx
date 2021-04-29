import React from 'react';
import s from './AddMessage.module.css'


const AddMessage = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
            <div className={s.addText}>
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Send</button>
                </div>
            </div>
    )
}

export default AddMessage;