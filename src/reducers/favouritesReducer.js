export const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || []
};

export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAV":
      const exists = state.favourites.find(photo => photo.id === action.payload.id);
      let updatedFavourites;
      if (exists) {
        // Remove from favourites
        updatedFavourites = state.favourites.filter(photo => photo.id !== action.payload.id);
      } else {
        // Add to favourites
        updatedFavourites = [...state.favourites, action.payload];
      }
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return { ...state, favourites: updatedFavourites };

    default:
      return state;
  }
};