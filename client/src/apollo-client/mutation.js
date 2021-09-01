import { gql } from '@apollo/client';

export const addSingleBook = gql`
    mutation addSingleBookMutation(
        $name: String
        $genre: String
        $authorId: ID!
    ) {
        createBook(name: $name, genre: $genre, authorId: $authorId) {
            id
            name
        }
    }
`;
