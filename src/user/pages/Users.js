import React from 'react'

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name:'Bryan',
            image:'https://picx.zhimg.com/v2-4bba972a094eb1bdc8cbbc55e2bd4ddf_1440w.jpg?source=172ae18b',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;