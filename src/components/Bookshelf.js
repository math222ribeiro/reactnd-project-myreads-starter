import React, {Component} from 'react';
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    const {name, books} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && (
              books.map((book, index) => (
                <Book book={book}
                      key={book.id}
                      onBookMoved={this.props.onBookMoved}
                />
                )
              )
            )}
          </ol>
        </div>
      </div>
    )
  }

}

export default Bookshelf