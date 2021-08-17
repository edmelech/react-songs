import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Lateralus', duration: '9:22' },
    { title: 'One Armed Scissor', duration: '4:20' },
    { title: 'Chop Suey', duration: '3:30' },
    { title: 'Blood and Thunder', duration: '3:48' }
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
