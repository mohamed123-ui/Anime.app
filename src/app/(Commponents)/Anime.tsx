"use client";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface Anime {
  id: number;
  name: string;
  score: string;
  kind: string;
  image: { original: string };
}

export default function AnimeList() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function fetchAnimes(page: number) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://shikimori.one/api/animes?limit=10&page=${page}`
      );
      const data = await response.json();
      setAnimes(data);
      setTotalPages(20); 
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    setCurrentPage(page);
    fetchAnimes(page);
  }, [searchParams]);

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
  };

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-8 "> Explore Anime </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {animes.map((anime) => (
          <div key={anime.id} className="border hover:scale-3d rounded-lg overflow-hidden shadow-md">
            <Image width={200}
            height={200}
              src={`https://shikimori.one${anime.image?.original}`}
              alt={anime.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{anime.name}</h2>
          <div className='flex items-center justify-between'>
          <p className='flex items-center justify-between 
          '> <FaStar className='text-yellow-300' />
          {anime.score}</p>
          <p className='font-bold'>type: {anime.kind}</p>
          </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 w-full gap-3 md:m-auto ">
      <div className='w-full m-2 md:w-1/2'>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 m-2 rounded ${
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
     
      </div>
    </div>
  );
}