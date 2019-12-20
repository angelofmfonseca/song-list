import uuid from "uuid/v1";

export const songReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return [
        ...state,
        { title: action.song.title, artist: action.song.artist, id: uuid() }
      ];
    case "REMOVE_SONG":
      return state.filter(song => song.id !== action.id);
    default:
      return state;
  }
};
