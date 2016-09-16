import React from 'react';
import { connect } from 'react-redux';

class BookDetails extends React.Component {
  getAuthors(authors) {
    return (
      <div>
        {authors.map((author, index) => {
          let comma = ', ';
          if (index === authors.length-1)
            comma = '';
          return <span key={author}>{author}{comma}</span>;
        })}
      </div>
    );
  }

  getStars(avgRating) {
    let stars = [];
    for(var i=0; i<avgRating; i++) {
      stars.push(<span className="star full" key={'star-' + i}></span>);
    }
    // there is point after decimal like 4.5, add half star
    if (avgRating % 1 !== avgRating)
      stars.push(<span className="star half" key={'star-' + i}></span>);
    return <div>{stars}</div>;
  }

  getPageCount(volume) {
    if (volume.pageCount)
      return <div>{volume.pageCount} pages</div>;
    else
      return null;
  }

  render() {
    const book = this.props.selectedBook;

    if (!book)
      return <h1>Enter a title and press Search</h1>;

    const volume = book.volumeInfo;

    return (
      <div className="media book-details">
        <h3>{ volume.title }</h3>
        <span className="subtitle">{ volume.subtitle }</span>
        <div className="media-left">
          <img src={ volume.imageLinks.thumbnail }/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            { this.getAuthors(volume.authors) }
            { this.getStars(volume.averageRating) }
            { this.getPageCount(volume) }
            <div className="volume-description">{ volume.description }</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedBook: state.books.selectedBook
  };
}

export default connect(mapStateToProps)(BookDetails);
