import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Forms = () => {
    return (
        <Row>
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='Book name'
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='Book genre'
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as='select' defaultValue='Select author'>
                            <option disabled>Select author</option>
                        </Form.Control>
                    </Form.Group>
                    <Button className='float-right' varian='info' type='submit'>
                        Add Book
                    </Button>
                </Form>
            </Col>
            <Col>
                <Form>
                    <Form.Group className='invisible'>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='Author name'
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type='number'
                            placeholder='Age'
                        ></Form.Control>
                    </Form.Group>
                    <Button className='float-right' varian='info' type='submit'>
                        Add Author
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default Forms;
