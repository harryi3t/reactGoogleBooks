import React from 'react';
import BookList from '../containers/book-list';
import BookDetails from '../containers/book-details';
import SearchBar from '../containers/search-bar';

class App extends React.Component {
  render() {
    return (
      <div>
        <br /> <SearchBar /> <br />
        <div className="col-md-4 col-sm-12">
          <BookList />
        </div>
        <div className="col-md-8 col-sm-12">
          <BookDetails />
        </div>
      </div>
    );
  }
}

export default App;
