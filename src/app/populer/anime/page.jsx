"use client";
import { useEffect, useState } from "react";
import HeaderMenu from "../utilities/HeaderMenu";
import Pagination from "../utilities/Pagination";
import MangaAnimeList from "@/component/mangaAnimelist/index";

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const anime = await response.json();
    setData(anime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // Tampilkan loading sampai data tersedia
  if (!data) return <div className="loader"></div>;

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER "#${page}"`} />
      <MangaAnimeList api={data} />
      <Pagination 
      page={page} 
      lastPage={data.pagination?.last_visible_page}
      setPage={setPage}
      className="mb-2"
      />
    </>
  );
};

export default Page;
