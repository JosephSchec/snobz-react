import React, { useState } from 'react'
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import DOMPurify from 'dompurify';
const password = process.env.REACT_APP_PASS

export default function FeedBack(props) {
    const { show, hide } = props;
    const [message, setMessage] = useState('');
    function send() {
        if (message.trim() === "") {
            alert('Textarea Cannot Be Left Blank, We Apreciate Any Feedback');

        } else {

            window.Email.send({
                Host: "smtp.gmail.com",
                Username: "snobzfeed@gmail.com",
                Password: password,
                To: 'snobzfeed@gmail.com',
                From: "snobzfeed@gmail.com",
                Subject: "Heres Some Feedback",
                Body: `${message}`
            }).then(
                setMessage('')
            );
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={hide}
                backdrop="static"
                keyboard={false}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Feedback:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingTextarea2" label="This site is awesome but it can be better by...">
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            onChange={e => setMessage(DOMPurify.sanitize(e.target.value))}
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        send(); hide();

                    }}>Send</Button>
                    <Button onClick={hide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
