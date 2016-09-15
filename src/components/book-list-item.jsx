import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/select-book';

class BookListItem extends React.Component {
  onClickBook(book) {
    this.props.selectBook(book);
  }

  render() {
    const book = this.props.book;
    let imgUrl = 'https://placeholdit.imgix.net/~text?txtsize=20&txt=Not%20Found&w=150&h=200';
    if (book.volumeInfo.imageLinks)
      imgUrl = book.volumeInfo.imageLinks.smallThumbnail;

    return (
      <li className="list-group-item book-list-item"
        onClick={() => this.onClickBook(book)}>
        <div className="media">
          <div className="media-top">
            <img src={ imgUrl } />
          </div>
          <div className="media-body">
            <div className="media-heading"> { book.volumeInfo.title } </div>
          </div>
        </div>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookListItem);
