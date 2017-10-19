import React, { Component } from 'react'
import Bookshelf from "./Bookshelf";

class ListBook extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <Bookshelf name="Currently Reading" />
          <Bookshelf name="Want to Read" />
          <Bookshelf name="Read" />
        </div>
      </div>
    )
  }
}

export default ListBook