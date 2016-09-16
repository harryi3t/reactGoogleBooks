import React from 'react';
import { connect } from 'react-redux';
import BookListItem from '../components/book-list-item';

class BookList extends React.Component {
  render() {
    const bookList = this.props.books.map(
      book => <BookListItem book={book} key={book.etag} />
    );

    return (
      <div className="book-list">
        <ul className="col-md-12 col-sm-12 list-group">
          {bookList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.list
  };
}

export default connect(mapStateToProps)(BookList);
