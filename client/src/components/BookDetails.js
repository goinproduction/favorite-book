import React from 'react';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { getSingleBook } from '../apollo-client/queries';

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(getSingleBook, {
        variables: {
            id: bookId,
        },
    });

    if (loading) return <p>Loading book details...</p>;
    if (bookId !== null && error) return <p>Error loading details</p>;

    const book = !loading && !error ? data.book : null;

    return (
        <Card bg='info' text='white' className='shadow'>
            <Card.Body>
                {book === null ? (
                    <Card.Text>Please select a book</Card.Text>
                ) : (
                    <>
                        <Card.Title>{book.name}</Card.Title>
                        <Card.Subtitle>{book.genre}</Card.Subtitle>
                        <p>{book.author.name}</p>
                        <p>{book.author.age}</p>
                        <p>All book written by {book.author.name}</p>
                        <ul>
                            {book.author.books.map((book) => (
                                <li key={book.id}>{book.name}</li>
                            ))}
                        </ul>
                    </>
                )}
            </Card.Body>
        </Card>
    );
};

export default BookDetails;
