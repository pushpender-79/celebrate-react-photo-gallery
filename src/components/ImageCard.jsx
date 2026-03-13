function ImageCard({ photo }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">

      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />

      <div className="flex justify-between items-center p-3">

        <p className="text-sm font-semibold text-gray-700">
          {photo.author}
        </p>

        <button className="text-gray-400 hover:text-red-500 text-xl">
          ❤️
        </button>

      </div>

    </div>
  );
}

export default ImageCard;