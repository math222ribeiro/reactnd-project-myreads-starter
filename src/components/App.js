import React from 'react'
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
        {this.state.showSearchPage ? (
          <BookSearch toggleSearch={this.toggleSearch}/>
        ) : (
          <div className="list-books">
            <Header name="My Reads"/>
            <ListBook />
            <div className="open-search">
              <a onClick={this.toggleSearch}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
