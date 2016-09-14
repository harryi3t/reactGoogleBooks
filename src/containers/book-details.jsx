import React from 'react';
import { connect } from 'react-redux';

class BookDetails extends React.Component {
  render() {
    const book = this.props.selectedBook;

    if (!book)
      return <h1>Enter a title and press Search</h1>;

    return (
      <div className="media book-details">
        <div className="media-top">
          <img src={ book.volumeInfo.imageLinks.thumbnail }
            width="500px"/>
        </div>
        <div className="media-body">
          <div className="media-heading"> { book.volumeInfo.title } </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedBook: state.selectedBook
  };
}

export default connect(mapStateToProps)(BookDetails);
