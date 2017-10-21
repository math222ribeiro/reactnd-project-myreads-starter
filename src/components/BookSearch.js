import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import PageLoader from './PageLoader';
import Book from "./Book";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: [],
      loading: false
    };
    this.request = undefined;
  }

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({query: e.target.value});

    if (this.request) this.request.abort();

    if (query) {
      this.setState({loading: true});

      this.request = BooksAPI.search(query, 20, (data) => {
        let books = data.books.error ? [] : data.books;
        this.setState({
          books: this.updateBooksShelf(this.props.booksOnShelf, books),
          loading: false
        });
      }, () => (
        this.setState({
          books: [],
          loading: false
        })
      ))
    } else {
      this.setState({
        books: [],
        loading: false
      });
    }
  };

  updateBooksShelf = (booksOnShelf, allBooks) => {
    for (let i = 0; i < allBooks.length; i++) {
      for (let j = 0; j < booksOnShelf.length; j++) {
        if (allBooks[i].id === booksOnShelf[j].id) {
          allBooks[i].shelf = booksOnShelf[j].shelf;
        }
      }
    }
    return allBooks;
  };

  handleBookMoved = (book, shelf, toogleAnimation) => {
    this.props.onBookMoved(book, shelf, toogleAnimation);
  };

  render() {
    const {query, books, loading} = this.state;

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
          {loading ? (
            <PageLoader/>
          ) : (
            books.length > 0 ? (
              <ol className="books-grid">
                {books.map((book) => (
                  <Book
                    book={book}
                    key={book.id}
                    onBookMoved={this.handleBookMoved}
                  />
                ))}
              </ol>
            ) : (
              <div className="no-books">No books here.</div>
            )
          )}

        </div>
      </div>
    )
  }
}


export default BookSearch