import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import Styling from './Styling.css';

const App = () => {
  return (
    <div className="customcontainer">
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="colum eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
