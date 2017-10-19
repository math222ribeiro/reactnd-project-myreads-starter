import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.query;

    if (query) {
      BooksAPI.search(query, 3).then((res) => {
        const books = res.error ? [] : res;
        this.setState({ books });
        console.log(books[0])
      })
    }
  };

  render() {
    const { query, books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Search by title or author" value={query} onChange={this.handleChange}/>
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                title={book.title}
                authors={book.authors}
                imgURL={book.imageLinks.thumbnail}
                key={book.industryIdentifiers[0].identifier}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


export default BookSearch