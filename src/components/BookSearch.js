import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from "./Book";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: []
    }
  }

  handleChange = (e) => {
    const query = e.target.value;

    if (query) {
      BooksAPI.search(query).then((res) => {
        const books = res.error ? [] : res;
        this.getBooksShelf(books);
      })
    } else {
      this.setState({books: []})
    }

    this.setState({
      query: e.target.value
    });
  };

  getBooksShelf = (allBooks) => {
    BooksAPI.getAll().then((res) => {
      const booksOnShelf = res.error ? [] : res;
      this.setState({books: this.updateBooksShelf(booksOnShelf, allBooks)});
    })
  };

  updateBooksShelf = (booksOnShelf, allBooks) => {
    for (let i = 0; i < allBooks.length; i++) {
      for (let j = 0; j < booksOnShelf.length; j++) {
        if (allBooks[i].id === booksOnShelf[j].id) {
          allBooks[i].shelf = booksOnShelf[j].shelf;
        }
      }
    }
    console.log(allBooks);
    return allBooks;
  };

  handleBookMoved = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };

  render() {
    const {query, books} = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                book={book}
                key={book.id}
                onBookMoved={this.handleBookMoved}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


export default BookSearch