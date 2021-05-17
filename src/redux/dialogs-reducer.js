const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    dialogs: [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Mariya'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Rita'},
        {id: 7, name: 'Sasha'},
        {id: 8, name: 'Valera'}
    ],
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'World'},
        {id: 4, message: 'Say'},
        {id: 5, message: 'klick'},
        {id: 6, message: 'Yes'},
        {id: 7, message: 'No'},
        {id: 8, message: 'Exisesise'}
    ],
    newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 9, message: body}],
                newMessageBody: '',
            };
        default:
            return state;
    }
}

export const sendMessageCreat = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;