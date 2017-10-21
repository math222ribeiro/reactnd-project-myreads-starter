import React from 'react'
import {Route, Link} from 'react-router-dom'
import Header from './Header'
import ListBook from "./ListBook";
import '../styles/App.css'
import BookSearch from "./BookSearch";
import * as BooksAPI from '../utils/BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: false
  };

  getAllBooks = () => {
    this.setState({loading: true});
    BooksAPI.getAll().then((books) => {
      this.setState({books});
      this.setState({loading: false});
    })
  };

  componentDidMount() {
    this.getAllBooks();
  }

  onBookMoved = (changedBook, shelf, completion) => {
    BooksAPI.update(changedBook, shelf).then(() => {
      changedBook.shelf = shelf;
      completion();
      this.setState((prevState) => ({
        books: prevState.books.filter(book => book.id !== changedBook.id).concat([changedBook])
      }));
    })
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch booksOnShelf={this.state.books} onBookMoved={this.onBookMoved} />
        )}/>

        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header name="My Reads"/>
            <ListBook books={this.state.books} onBookMoved={this.onBookMoved} loading={this.state.loading}/>
            <div className="open-search">
              <Link to="/search"/>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp

