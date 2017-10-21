import React, {Component} from 'react';
import Bookshelf from "./Bookshelf";
import PageLoader from './PageLoader';

class ListBook extends Component {
  render() {
    this.allBooks = this.props.books;
    const shelves = [
      {
        id: "currentlyReading",
        name: "Currently Reading"
      },

      {
        id: "wantToRead",
        name: "Want to Read",
      },

      {
        id: "read",
        name: "Read"
      }
    ];

    return this.props.loading ? (
      <PageLoader/>
    ) : (
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Bookshelf
              name={shelf.name}
              key={shelf.id}
              books={this.allBooks.filter(book => book.shelf === shelf.id)}
              onBookMoved={this.props.onBookMoved}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ListBook