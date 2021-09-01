import Container from 'react-bootstrap/Container';
import BookList from './components/BookList';

function App() {
    return (
        <Container
            className='py-3 mt-3'
            style={{ backgroundColor: 'lightcyan' }}
        >
            <h1 className='text-center text-info mb-3'>Book Manager</h1>
            <hr />
            <hr />
            <BookList />
        </Container>
    );
}

export default App;
