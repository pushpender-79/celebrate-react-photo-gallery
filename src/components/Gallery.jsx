import useFetchPhotos from "../hooks/useFetchPhotos";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {photos.map((photo) => (
        <div key={photo.id} className="bg-white rounded shadow">
          
          <img
            src={`https://picsum.photos/id/${photo.id}/400/300`}
            alt={photo.author}
            className="w-full h-40 object-cover rounded-t"
          />

          <p className="p-2 text-sm font-medium">{photo.author}</p>

        </div>
      ))}
    </div>
  );
}

export default Gallery;