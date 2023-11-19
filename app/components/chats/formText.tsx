import * as React from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";

export default function FormInputMessage() {
    return (
        <Form>
            <Row className='m-auto'>
                <Col xs={8} sm={8} lg={10} xl={10}>
                    <Form.Control type="text"
                        placeholder="Enter text"
                        />
                </Col>
                <Col>
                    <Button type="submit">Send</Button>
                </Col>
            </Row>
        </Form>
    );
}