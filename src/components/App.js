import React from 'react'
import {Route, Link} from 'react-router-dom'
import Header from './Header'
import ListBook from "./ListBook";
import '../styles/App.css'
import BookSearch from "./BookSearch";
//import * as BooksAPI from '../utils/BooksAPI'

class BooksApp extends React.Component {
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
            <div className="open-search">
            <Link to="/search">
            </Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
