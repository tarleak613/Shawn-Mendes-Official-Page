import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white overflow-hidden flex justify-center">
      <div className="flex justify-between max-w-screen-md w-full">
        <a href="#" className="px-4 py-2 no-underline">FAQ</a>
        <a href="#" className="px-4 py-2 no-underline">Contact Us</a>
        <a href="#" className="px-4 py-2 no-underline">Terms of Use</a>
        <a href="#" className="px-4 py-2 no-underline">Privacy Policy</a>
        <a href="#" className="px-4 py-2 no-underline">Refund Policy</a>
        <a href="#" className="px-4 py-2 no-underline">&copy; 2022 | Shawn Mendes</a>
      </div>
    </div>
  );
};

export default Footer;
