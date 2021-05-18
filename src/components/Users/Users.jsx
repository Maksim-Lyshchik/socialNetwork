import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
if(props.users.length ===0) {
    props.setUsers(
        [{
            id: 1,
            fotoUrl: 'https://odnaminyta.com/wp-content/uploads/2020/11/galkin.jpg',
            followed: false,
            fullName: 'Maksim',
            status: 'hi everione!',
            location: {city: 'Hrodno', country: 'Belarus'}
        },
            {
                id: 2,
                fotoUrl: 'https://odnaminyta.com/wp-content/uploads/2020/11/galkin.jpg',
                followed: true,
                fullName: 'Nastya',
                status: 'hi girl!',
                location: {city: 'Hrodno', country: 'Belarus'}
            },
            {
                id: 3,
                fotoUrl: 'https://odnaminyta.com/wp-content/uploads/2020/11/galkin.jpg',
                followed: true,
                fullName: 'Maksim',
                status: 'hi gays!',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 4,
                fotoUrl: 'https://odnaminyta.com/wp-content/uploads/2020/11/galkin.jpg',
                followed: false,
                fullName: 'Maksim',
                status: 'hi frends!',
                location: {city: 'Warshawa', country: 'Poland'}
            },]
    )
}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.fotoUrl} className={styles.userPhoto}/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>


                </div>
            )}
    </div>
}

export default Users;