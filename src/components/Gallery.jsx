import useFetchPhotos from "../hooks/useFetchPhotos";
import ImageCard from "./ImageCard.jsx"

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  if (loading) {
    return( <p className="text-center mt-10 text-lg font-medium">Loading photos...</p>);
  }

  if (error) {
    return (<p className="text-center text-red-500">{error}</p>);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))}
</div>
  );
}

export default Gallery;