const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?!', likesCount: 20},
        {id: 2, message: 'Its my new post', likesCount: 10},
        {id: 3, message: 'I stady React!', likesCount: 50},
        {id: 4, message: 'xdfgdfg', likesCount: 30},
        {id: 5, message: 'Hi wqwe', likesCount: 30},
        {id: 6, message: 'Hi xcvbxcvb', likesCount: 30}
    ],
    newPostText: 'it-kamasutra',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
  }

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;