import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div
      key={book.id}
      className="bg-slate-50 shadow-md rounded-lg p-4 m-4 w-72"
      onClick={handleBookClick}
    >
      <img src={book.image} alt={book.title} className="w-46 h-52 mx-auto" />
      <h2 className="text-lg font-medium text-black mt-4">{book.title}</h2>
      <p className="text-sm text-gray-500 mt-2">{book.author}</p>
    </div>
  );
};

export default BookCard;
