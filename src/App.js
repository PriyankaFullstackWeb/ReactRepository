import logo from './logo.svg';
import './App.css';
import { BookProvider } from './components/BooksContext/BooksContext';
import Navbar from './components/BooksContext/Navbar';
import BooksList from './components/BooksContext/BooksList';
import AddBook from './components/BooksContext/AddBook'
import Counter from './components/Reducer/Counter'

function App() {
  return (
    <div className="App">
  <BookProvider>
  <Navbar/>
  <AddBook />
    <BooksList/>
    
  </BookProvider>
<Counter />
    </div>
  );
}

export default App;
