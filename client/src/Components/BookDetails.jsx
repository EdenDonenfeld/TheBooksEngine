import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const BookDetails = () => {
  const { id: bookId } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    async function fetchBookDetails(bookId) {
      // Fetch book details using bookId
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        const data = await response.json();
        if (!data) {
          setBook({});
        }
        setBook({
          title: data.volumeInfo.title || 'No Title Available',
          author: data.volumeInfo.authors?.[0] || 'Unknown Author',
          pages: data.volumeInfo.pageCount || 'Unknown',
          publishedDate: data.volumeInfo.publishedDate || 'Unknown',
          description:
            data.volumeInfo.description || 'No Description Available',
          image: data.volumeInfo.imageLinks?.thumbnail || '',
          rating: data.volumeInfo.averageRating || 0,
        });
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }
    fetchBookDetails(bookId);
  }, [bookId]);

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < book.rating ? '#FFD700' : 'none'}
          strokeWidth="1.5"
          stroke="#FFD700" // Golden border for empty stars
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
          />
        </svg>
      ));
  };

  return (
    <div className="bg-babyBlue min-h-screen flex flex-col font-crimson">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-1">{renderStars()}</div>
          <h1 className="text-3xl font-bold text-black">{book.title}</h1>
          <div className="text-gray-800 space-y-3">
            <p>By {book.author}</p>
            {book.pages && <p>{book.pages} pages</p>}
            {book.publishedDate && <p>Published in {book.publishedDate}</p>}
            {book.description && <p>{book.description}</p>}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="rounded-lg shadow-lg max-w-64 h-80 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
