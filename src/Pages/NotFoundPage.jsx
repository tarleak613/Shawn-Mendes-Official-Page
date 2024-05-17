import { NavLink } from 'react-router-dom';
import React from 'react'
import cat_gif from '../assets/cat-wondering.gif';
const NotFoundPage = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${cat_gif})`,
        backgroundSize: 'cover',  // Ensure the background covers the full div
        backgroundPosition: 'center' // Center the background image
      };
      const fontStyle = {
        fontFamily: "'Press Start 2P', 'system-ui'",
        fontWeight: 400,
        color: 'Black',
        fontSize: '50px',  // Adjust font size as needed
        textAlign: 'center', // Center the text horizontally
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: 0, // Remove default margin
        padding: '20px', // Add padding to increase box size,
        whiteSpace: 'nowrap'
    };
    const buttonStyle = {
        fontFamily: "'Press Start 2P', 'system-ui'",
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '8px',
        padding: '10px 20px',
        textDecoration: 'none', // Remove default link underline
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        fontSize: '20px', // Match font size with h1
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Add grey shadow
    };
  return (
        <div style={backgroundImageStyle} className="min-h-screen w-full flex items-center justify-center bg-black">
            <h1 style={fontStyle}>Page Not Found</h1>
            <NavLink to="/" style={buttonStyle}>Home</NavLink>
        </div>
  )
}

export default NotFoundPage;