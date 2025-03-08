import Image from "next/image";
import AnimeList from "@/component/animeList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=12`
  );
  const anime = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="md:text-3xl text-xl font-bold">Populer Manga</h1>
        <Link
          href="/populer"
          className="md:text-2xl text-blue-500 hover:text-blue-800 font-bold"
        >
          Lihat Semua...
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {anime.data.map((data) => (
          <AnimeList
            key={data.mal_id}
            id={data.mal_id} 
            title={data.title}
            images={data.images.webp.image_url}
            type={data.type}
            chapters={data.chapters}
            volumes={data.volumes}
            status={data.status}
            score={data.score}
            synopsis={data.synopsis}
            genres={data.genres[0]?.name}  
            authors={data.authors[0]?.name} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
