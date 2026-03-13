import useFetchPhotos from "../hooks/useFetchPhotos";
import ImageCard from "./ImageCard.jsx"
import { useState } from "react";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");
  const filteredPhotos = photos.filter((photo) =>
    photo.author.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return( <p className="text-center mt-10 text-lg font-medium">Loading photos...</p>);
  }

  if (error) {
    return (<p className="text-center text-red-500">{error}</p>);
  }

  return (
<div className="p-6">
      {/* SEARCH BAR */}
<div className="flex justify-center mb-10">
      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
</div>
  );
}

export default Gallery;