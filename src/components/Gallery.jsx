import { useState, useReducer, useCallback, useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import ImageCard from "./ImageCard.jsx";
import { favouritesReducer, initialState } from "../reducers/favouritesReducer";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(favouritesReducer, initialState);
  // ✅ useCallback prevents recreation of the function on every render
  const toggleFavourite = useCallback((photo) => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo,
    });
  }, []);

  const handleSearch = useCallback((e) => setSearch(e.target.value), []);
  // ✅ useMemo prevents recomputing filteredPhotos unless photos or search changes
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-lg font-medium">Loading photos...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      {/* SEARCH BAR */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by author..."
          value={search}
          onChange={handleSearch}
          className="w-full max-w-md p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      {/* Grid*/}
      {filteredPhotos.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No images found for this author
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <ImageCard
              key={photo.id}
              photo={photo}
              toggleFavourite={toggleFavourite}
              isFavourite={
                !!state.favourites.find((fav) => fav.id === photo.id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
