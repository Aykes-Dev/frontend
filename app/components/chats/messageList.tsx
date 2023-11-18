import { List, Box, Paper } from "@mui/material";
import { Container } from "react-bootstrap";

export default function MessageList() {
    const messages = [
        {
            author: 'Vova Tsapkin',
            text: 'Hi, Andrey'
        },
        {
            author: 'Andrey Savostyanov',
            text: 'Hello, Vova'
        }
    ]
    return (
        <List>
            {messages.map((message) => (
                <Box key={message.text}>
                    <Paper 
                        className={ message.author === 'Andrey Savostyanov' ? 'p-3 text-end w-75 me-0 ms-auto mb-3' : 'p-3 w-75 mb-3' }
                        elevation={12}>
                        {message.text}
                    </Paper>
                </Box>
            ))}
        </List>
    )
}