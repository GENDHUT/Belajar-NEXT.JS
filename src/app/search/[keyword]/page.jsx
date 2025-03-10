import AnimeList from "@/component/mangaAnimelist/index";
import Header from "@/component/mangaAnimelist/Header";

export default async function Page({ params }) {
  const keyword = params.keyword;
  const decodeKeyword = decodeURI(keyword)


  const animeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${encodeURIComponent(decodeKeyword)}`,
    { next: { revalidate: 60 } }
  );
  const animeData = await animeResponse.json();

  const mangaResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?q=${encodeURIComponent(decodeKeyword)}`,
    { next: { revalidate: 60 } }
  );
  const mangaData = await mangaResponse.json();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Bagian Anime */}
      <section className="mb-10">
        <Header title={`Hasil Pencarian Anime untuk "${decodeKeyword}"`} />
        <AnimeList api={animeData} />
      </section>

      {/* Bagian Manga */}
      <section>
        <Header title={`Hasil Pencarian Manga untuk "${decodeKeyword}"`} />
        <AnimeList api={mangaData} />
      </section>
    </div>
  );
}
