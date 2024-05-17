import React from 'react';
import albumsData from '../albums.json';
import Navbar from './Navbar';

const Albums = () => {
  // Access the albums array from the albumsData object
  const albums = albumsData.albums;

  return (
    <>
    <Navbar/>
      <div className="flex flex-wrap justify-center">
      {albums.map((album, index) => (
        <div key={album.id} className="m-4 border border-gray-300 rounded-lg shadow-md w-64">
          <div className="p-4">
            <div className="text-center">
              <img src={album.image} alt={album.title} className="w-full h-64 object-cover" />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-center">{album.title}</h2>
              <p className="text-gray-600 italic">Featured: {album.featured ? 'Yes' : 'No'}</p>
              <p className="text-gray-600 italic">Singer: {album.singer}</p>
              <p className="text-gray-600 italic">Producer: {album.producer}</p>
              <p className="text-gray-600 italic">Release Date: {album.date}</p>
              <p className="text-gray-600 italic">Copies Sold: {album.copies_sold}</p>
              <p className="text-gray-600 italic">Online Streaming: {album.online_streaming}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Albums;
