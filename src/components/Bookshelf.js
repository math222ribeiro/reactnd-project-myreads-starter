import React, {Component} from 'react'
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    const {name} = this.props;
    const books = [];

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (<Book title={book.title} authors={book.authors} key={index}/>))}
          </ol>
        </div>
      </div>
    )
  }

}

export default Bookshelf