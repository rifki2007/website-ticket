import React from 'react';
import { Link } from 'react-router-dom';

function CardEvent({ event }) {
  // Pastikan event ada dan punya properti yang diperlukan
  if (!event) {
    return <div className="text-center py-4">No event data</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Gambar dengan fallback */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={event.image || 'public/img/gambar1.jpg'} 
          alt={event.title || 'Event image'}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x200?text=Event+Image';
            e.target.className = 'w-full h-full object-cover';
          }}
        />
      </div>
      
      {/* Konten Card */}
      <div className="p-6">
        {/* JUDUL - Pastikan ini muncul */}
        <h3 className="text-xl font-bold mb-2 text-gray-800">
          {event.title || 'Untitled Event'}
        </h3>
        
        {/* DESKRIPSI */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {event.description || 'No description available'}
        </p>
        
        {/* TANGGAL & HARGA */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{event.date || 'Date not set'}</span>
          </div>
          <span className="text-lg font-bold text-blue-600">
            Rp {(event.price || 0).toLocaleString('id-ID')}
          </span>
        </div>
        
        {/* TOMBOL */}
        <Link 
          to={`/event/${event.id || '1'}`}
          className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CardEvent;