import React, { useState } from 'react';
import BookCard from './BookCard';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState([]);
  const [beforeSearch, setBeforeSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchResults = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=12`
      ).then((response) => response.json());
      setResults(
        (response.items || []).map((item) => ({
          id: item.id,
          title: item.volumeInfo.title || 'No Title Available',
          image: item.volumeInfo.imageLinks?.thumbnail || '',
          author: item.volumeInfo.authors?.[0] || 'Unknown Author',
        }))
      );
    } catch (error) {
      console.log('Error fetching data', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (!searchValue.trim()) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }
    fetchResults();
    setBeforeSearch(false);
  };

  return (
    <main className="flex-1 flex flex-col items-center py-12 font-crimson">
      <p className="text-2xl text-black tracking-wider font-medium mb-6">
        Search for book name
      </p>

      <div className="flex items-center space-x-4 mt-4">
        <input
          type="text"
          className={`text-lg border border-gray-300 px-4 py-2 rounded-lg h-12 w-96 focus:outline-none focus:ring-2 focus:ring-borderBlue focus:border-borderBlue ${
            isError ? 'input-error' : ''
          }`}
          placeholder="Search for books"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="bg-darkerBlue text-white px-4 py-2 rounded-lg"
          type="button"
          onClick={handleSearch}
        >
          <svg
            className="w-4 h-7"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {isLoading ? (
          <p className="text-black text-lg">Loading...</p>
        ) : results.length > 0 ? (
          results.map((result) => <BookCard book={result} />)
        ) : !beforeSearch ? (
          <p className="text-black text-lg">No results found</p>
        ) : null}
      </div>
    </main>
  );
};

export default Search;
