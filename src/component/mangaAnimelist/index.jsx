import Image from "next/image";
import Link from "next/link";

const MangaAnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {api.data?.map((manga, index) => (
        <Link
          key={`${manga.mal_id}-${index}`}
          href={`/${manga.mal_id}`}
          className="bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <div className="overflow-hidden">
            <Image
              src={manga.images.webp.image_url}
              alt={manga.title}
              width={600}
              height={400}
              className="object-contain w-full h-full transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="md:text-xl text-md font-bold text-center text-gray-600 transition-colors duration-300 hover:text-gray-800">
              {manga.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MangaAnimeList;
