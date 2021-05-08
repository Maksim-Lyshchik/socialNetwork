import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?!', likesCount: 20},
                {id: 2, message: 'Its my new post', likesCount: 10},
                {id: 3, message: 'I stady React!', likesCount: 50},
                {id: 4, message: 'xdfgdfg', likesCount: 30},
                {id: 5, message: 'Hi wqwe', likesCount: 30},
                {id: 6, message: 'Hi xcvbxcvb', likesCount: 30}
            ],
            newPostText: 'it-kamasutra',
        },
        messagesPage: {
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
        },
        /*    sitebar: [
                {id: 1, name: Profile, link: profile},
                {id: 2, name: Messages, link: dialogs},
                {id: 3, name: News, link: news},
                {id: 4, name: Music, link: music},
                {id: 5, name: Settings, link: settings},
                {id: 6, name: Friends, link: friendsbar},
                ]*/
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer()(this._state.messagesPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);
    }
}




window.store = store;
export default store;