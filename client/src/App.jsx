import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './Components/SearchContext';
import Home from './Components/Home';
import BookDetails from './Components/BookDetails';

function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
