import React, {Component} from 'react'
import Bookshelf from "./Bookshelf";
import * as BooksAPI from '../utils/BooksAPI'

class ListBook extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  };

  onBookMoved = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(() => {
      changedBook.shelf = shelf;
      this.setState((prevState) => {
        books: prevState.books.filter(book => book.id !== changedBook.id).concat([changedBook])
      });
    })
  };

  render() {
    const allBooks = this.state.books;
    const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead');
    const read = allBooks.filter(book => book.shelf === 'read');

    return (
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