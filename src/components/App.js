import React from 'react'
import {Route, Link} from 'react-router-dom'
import Header from './Header'
import ListBook from "./ListBook";
import '../styles/App.css'
import BookSearch from "./BookSearch";

// import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false
    };
  }

  toggleSearch = () => {
    this.setState((prevState) => ({
      showSearchPage: !prevState.showSearchPage
    }));
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <BookSearch />
        )}/>

        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header name="My Reads"/>
            <ListBook/>
            <Link className="open-search" to="/search">
              <a>Add a book</a>
            </Link>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
