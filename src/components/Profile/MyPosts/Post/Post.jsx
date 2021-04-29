import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
          <img src='https://i.pinimg.com/originals/d8/be/ae/d8beaedfd933509beaf3202d156491aa.jpg' />
          {props.message}
          <div>
            <span>{props.likeCounts} Like </span>
          </div>
        </div>
    )
}

export default Post