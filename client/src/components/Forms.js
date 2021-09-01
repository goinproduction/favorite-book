import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthors, getBooks } from '../apollo-client/queries';
import { addSingleBook } from '../apollo-client/mutation';

const Forms = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        authorId: '',
    });

    const { name, genre, authorId } = newBook;

    const onInputChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addBook({
            variables: { name, genre, authorId },
            refetchQueries: [{ query: getBooks }],
        });
        setNewBook({ name: '', genre: '', authorId: '' });
    };

    const { loading, data } = useQuery(getAuthors);
    const [addBook] = useMutation(addSingleBook);
    return (
        <Row>
            <Col>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='Book name'
                            name='name'
                            onChange={onInputChange}
                            value={name}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='Book genre'
                            name='genre'
                            onChange={onInputChange}
                            value={genre}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        {loading ? (
                            <p>Loading authors...</p>
                        ) : (
                            <Form.Control
                                as='select'
                                name='authorId'
                                onChange={onInputChange}
                                value={authorId}
                                required
                            >
                                <option value='' disabled>
                                    Select author
                                </option>
                                {data.authors.map((author) => (
                                    <option key={author.id} value={author.id}>
                                        {author.name}
                                    </option>
                                ))}
                            </Form.Control>
                        )}
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
