import React, {Component} from 'react'

class Book extends Component {
  handleBookshelfChange = (e) => {
    this.props.onBookMoved(this.props.book, e.target.value);
  };

  render() {
    const {authors, title, imageLinks, shelf} = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks.thumbnail})`
            }}/>
            <div className="book-shelf-changer">
              <select value={shelf || "none"} onChange={this.handleBookshelfChange} >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors && authors.map((author) => (
            <div className="book-authors" key={author}>{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default Book