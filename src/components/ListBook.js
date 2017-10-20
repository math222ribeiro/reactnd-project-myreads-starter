import React, {Component} from 'react'
import Bookshelf from "./Bookshelf";
import PageLoader from './PageLoader'
import * as BooksAPI from '../utils/BooksAPI'

class ListBook extends Component {
  state = {
    books: [],
    loading: false
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    this.setState({loading: true});
    BooksAPI.getAll().then((books) => {
      this.setState({books});
      this.setState({loading: false});
    })
  };

  onBookMoved = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(() => {
      changedBook.shelf = shelf;
      this.setState((prevState) => {
        prevState.books.filter(book => book.id !== changedBook.id).concat([changedBook])
      });
    })
  };

  render() {
    const allBooks = this.state.books;
    const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead');
    const read = allBooks.filter(book => book.shelf === 'read');

    return this.state.loading ? (
      <PageLoader />
    ) : (
      <div className="list-books-content">
        <div>
          <Bookshelf name="Currently Reading" books={currentlyReading} onBookMoved={this.onBookMoved}/>
          <Bookshelf name="Want to Read" books={wantToRead} onBookMoved={this.onBookMoved}/>
          <Bookshelf name="Read" books={read} onBookMoved={this.onBookMoved}/>
        </div>
      </div>
    )
  }
}

export default ListBook