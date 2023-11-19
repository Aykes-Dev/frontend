'use client'

import Container from "react-bootstrap/esm/Container";
import NavBar from "../components/navbar/NavBar";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import UserList from "../components/chats/userList";
import styles from '../components/chats/userList.module.css';
import MessageList from "../components/chats/messageList";
import FormInputMessage from "../components/chats/formText";

export default function App() {
    console.log(localStorage.getItem('token'))
    return (
        <main className="items-center justify-between vh-100">
            <NavBar />
            <Container className="mt-4">
                <Row className={ styles.row_users_chat }>
                    <Col xs={5} md={4} lg={3} className={ styles.users } >
                        <UserList />
                    </Col>
                    <Col>
                        <Row className={ styles.row_messages }>
                            <Col className={ styles.messsges }>
                                <MessageList />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormInputMessage />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        </main>
    )
}