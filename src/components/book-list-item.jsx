import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/select-book';

class BookListItem extends React.Component {
  onClickBook(book) {
    this.props.selectBook(book);
  }

  getTruncatedTitle(title) {
    return title.slice(0, 29) + (title.length > 30 ? '...' : '');
  }

  render() {
    const book = this.props.book;
    let imgUrl = 'https://placeholdit.imgix.net/~text?txtsize=20&txt=Not%20Found&w=150&h=200';
    if (book.volumeInfo.imageLinks)
      imgUrl = book.volumeInfo.imageLinks.smallThumbnail;

    return (
      <li className="list-group-item book-list-item col-sm-4 col-md-12"
        onClick={() => this.onClickBook(book)}>
        <div className="media">
          <div className="media-top">
            <img src={ imgUrl } style={{height: '100%'}}/>
          </div>
          <div className="media-body">
            <div className="media-heading">
              { this.getTruncatedTitle(book.volumeInfo.title) }
            </div>
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
