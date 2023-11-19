'use client'

import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}


export default function UserList() {
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    const users = ['Дима Спирин', 'Andrey Savostyanov', 'Vova Tsapkin', 'David David', 'Andrey Savostyanov', 'Vova Tsapkin', 'David David', 'Andrey Savostyanov', 'Vova Tsapkin', 'David David', 'Andrey Savostyanov', 'Vova Tsapkin', 'David David', 'Andrey Savostyanov', 'Vova Tsapkin', 'David David', 'Andrey Savostyanov', 'Vova Tsapkin', 'David David', ]
    return (
        <List dense={dense}>
            {users.map((user, index) => (
                <ListItem key={ index }>
                    <ListItemAvatar>
                        <Avatar {...stringAvatar(user)} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={ user }
                        secondary={secondary ? 'Secondary text' : null}
                    />
                </ListItem>
            ))}
        </List>
    )
}