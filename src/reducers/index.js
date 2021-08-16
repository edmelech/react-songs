import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Lateralus', duration: '4:05' },
    { title: 'One Armed Scissor', duration: '2:30' },
    { title: 'Chop Suey', duration: '3:15' },
    { title: 'Blood & Thunder', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
