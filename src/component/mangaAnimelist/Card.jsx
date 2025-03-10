"use client";
import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ api }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative pb-4">
      {/* Tombol Scroll Kiri */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <CaretLeft size={32} />
      </button>

      {/* Container slider */}
      <div ref={containerRef} className="flex space-x-6 overflow-x-auto">
        {api.data.map((manga, index) => (
          <Link
            key={`${manga.mal_id}-${index}`}
            href={`/${manga.mal_id}`}
            className="min-w-[180px] sm:min-w-[200px] md:min-w-[250px] bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
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

      {/* Tombol Scroll Kanan */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <CaretRight size={32} />
      </button>
    </div>
  );
};

export default Card;
