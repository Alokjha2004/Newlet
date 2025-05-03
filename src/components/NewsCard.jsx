// src/components/NewsCard.jsx
export default function NewsCard({ article }) {
  const { urlToImage, title, description, url, source, publishedAt } = article;

  const formattedDate = new Date(publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="w-full sm:w-[45%] md:w-[30%] bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100"
    >
      <div className="h-48 sm:h-44 md:h-40 w-full relative">
        <img
          src={urlToImage || "https://via.placeholder.com/400x225?text=No+Image"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded">
          {source?.name || "Unknown Source"}
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="font-semibold text-base md:text-lg text-gray-800 mb-2 line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>
        <div className="text-xs text-gray-400 mt-auto">{formattedDate}</div>
      </div>
    </div>
  );
}
