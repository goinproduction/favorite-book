import Container from 'react-bootstrap/Container';
import BookList from './components/BookList';
import Forms from './components/Forms';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Apollo client initialization
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Container
                className='py-3 mt-3'
                style={{ backgroundColor: 'lightcyan' }}
            >
                <h1 className='text-center text-info mb-3'>Book Manager</h1>
                <hr />
                <hr />
                <Forms />
                <hr />
                <BookList />
            </Container>
        </ApolloProvider>
    );
}

export default App;
