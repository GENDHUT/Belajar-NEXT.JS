"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch =(event) => {
      const keyword = searchRef.current.value
      if (!keyword) return
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault();
            router.push(`/search/${keyword}`)
        }
    }
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="cari disini..."
        className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none focus:bg-gray-600"
        ref = {searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute inset-y-0 right-0 flex items-center pr-3 hover:bg-gray-700 rounded-r transition-colors duration-300 cursor-pointer" onClick={handleSearch}>
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
};

export default InputSearch;
