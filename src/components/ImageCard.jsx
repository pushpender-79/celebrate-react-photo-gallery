function ImageCard({ photo, toggleFavourite, isFavourite }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />

      <div className="flex justify-between items-center p-3">
        <p className="text-sm font-semibold text-gray-700">{photo.author}</p>

        <button
          onClick={() => toggleFavourite(photo)}
          className={`text-xl transition-colors duration-200 ${isFavourite ? "text-red-500 scale-125" : "text-gray-400 hover:text-red-500"}`}
        >
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default ImageCard;
