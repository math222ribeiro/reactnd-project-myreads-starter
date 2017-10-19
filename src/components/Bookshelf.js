import React, {Component} from 'react'
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    const {name} = this.props;
    const books = [
      {
        author: "Author",
        title: "Title"
      },

      {
        author: "Author",
        title: "Title"
      }
    ];

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (<Book title={book.title} author={book.author} key={index}/>))}
          </ol>
        </div>
      </div>
    )
  }

}

export default Bookshelf