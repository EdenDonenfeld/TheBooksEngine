import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [beforeSearch, setBeforeSearch] = useState(true);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        results,
        setResults,
        beforeSearch,
        setBeforeSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
