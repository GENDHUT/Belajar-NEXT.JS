import Header from "@/component/mangaAnimelist/Header";
import CardAnime from "@/component/mangaAnimelist/CardAnime";
import AnimeList from "@/component/mangaAnimelist/indexAnime";

const Page = async () => {
  const responseTop = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`
  );
  const topAnime = await responseTop.json();

  const responseNew = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?status=airing&order_by=start_date&sort=desc&limit=14`
  );
  const newAnime = await responseNew.json();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Populer anime */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua..."
          linkHref="/populer/anime"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* anime terbaru */}
      <section>
        <div className="mt-5">
          <Header title="anime Terbaru" />
          <CardAnime api={newAnime} />
        </div>
      </section>
    </div>
  );
};

export default Page;
