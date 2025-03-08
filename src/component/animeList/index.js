import Image from "next/image";
import Link from "next/link";

const AnimeList = ({
    id,
  title,
  images,
  type,
  chapters,
  volumes,
  status,
  score,
  synopsis,
  genres,
  authors,
}) => {
  return (
    <Link href={`/${id}`} className="bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="overflow-hidden">
        <Image 
          src={images}
          alt={title}
          width={600} 
          height={400} 
          className="object-contain w-full h-full transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="md:text-xl text-md font-bold text-center text-gray-600 transition-colors duration-300 hover:text-gray-800">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default AnimeList;
