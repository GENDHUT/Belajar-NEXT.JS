import AnimeList from "@/component/mangaAnimelist/index";
import Header from "@/component/mangaAnimelist/Header";
import Card from "@/component/mangaAnimelist/Card";
import MangaAnimeList from "@/component/mangaAnimelist/index";

const Page = async () => {
  const responseTop = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=12`
  );
  const topManga = await responseTop.json();

  const responseNew = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?status=publishing&order_by=start_date&sort=desc&limit=14`
  );
  const newManga = await responseNew.json();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Populer manga */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua..."
          linkHref="/populer/manga"
        />
        <MangaAnimeList api={topManga} />
      </section>

      {/* Manga terbaru */}
      <section>
        <div className="mt-5">
          <Header title="manga Terbaru" />
          <Card api={newManga} />
        </div>
      </section>
    </div>
  );
};

export default Page;
