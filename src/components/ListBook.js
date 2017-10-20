import React, {Component} from 'react'
import Bookshelf from "./Bookshelf";
import PageLoader from './PageLoader'

class ListBook extends Component {
  render() {
    const allBooks = this.props.books;
    const onBookMoved = this.props.onBookMoved;
    const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead');
    const read = allBooks.filter(book => book.shelf === 'read');

    return this.props.loading ? (
      <PageLoader />
    ) : (
      <div className="list-books-content">
        <div>
          <Bookshelf name="Currently Reading" books={currentlyReading} onBookMoved={onBookMoved}/>
          <Bookshelf name="Want to Read" books={wantToRead} onBookMoved={onBookMoved}/>
          <Bookshelf name="Read" books={read} onBookMoved={onBookMoved}/>
        </div>
      </div>
    )
  }
}

export default ListBook