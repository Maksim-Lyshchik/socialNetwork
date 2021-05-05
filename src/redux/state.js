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

    addPost() {
        let newPost = {
            id: 7,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        }
    },
}


window.store = store;
export default store;