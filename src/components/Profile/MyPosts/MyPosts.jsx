import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch()
    }

    return <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
        <div className={s.content}>
            { postsElement }
        </div>
    </div>
}

export default MyPosts