import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({currentPage, onPageChenged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        {pages.map(p => {
            return <span className={currentPage === p && styles.selectedPage}
                         onClick={(e) => {
                             onPageChenged(p);
                         }}>{p}</span>
        })}
    </div>)

}

export default Paginator;