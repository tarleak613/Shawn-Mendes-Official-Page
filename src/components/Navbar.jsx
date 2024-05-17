import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaInstagram, FaSpotify, FaTwitter, FaYoutube, FaApple } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Tour", href: "/not-found-page", current: false },
  { name: "Album", href: "/albums", current: false },
  { name: "Merchandise", href: "/merchandise", current: false },
];

const fontStyle = {
  fontFamily: "'Raleway', 'sans-serif'",
  fontWeight: "40",
  fontSize: "30px",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ cartCount }) => {
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();

  const handleNavigationClick = () => {
    setShowHeader(false);
  };

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/shanwnmendes", icon: FaInstagram },
    { name: "Spotify", href: "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr", icon: FaSpotify },
    { name: "Twitter", href: "https://twitter.com/ShawnMendes", icon: FaTwitter },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCAvCL8hyXjSUHKEGuUPr1BA", icon: FaYoutube },
    { name: "Apple", href: "https://music.apple.com/us/artist/shawn-mendes/890403665", icon: FaApple },
  ];

  return (
    <Disclosure as="nav" className="bg-black py-3">
      {({ open }) => (
        <>
          <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between ${!showHeader ? "hidden" : ""}`}>
            <div className="flex items-center justify-start w-1/3">
              <div className="flex space-x-4 ml-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleNavigationClick}
                    className={classNames(
                      location.pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={location.pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-1/3 text-center">
              <h1 className="text-white text-4xl md:text-6xl" style={fontStyle}>
                Shawn Mendes
              </h1>
            </div>
            <div className="flex items-center justify-end w-1/3">
              {location.pathname === "/merchandise" ? (
                <Link to="/not-found-page" className="relative text-gray-300 hover:bg-gray-700 hover:text-white rounded-full p-2">
                  <FaShoppingCart className="h-6 w-6" />
                  <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1" style={{ transform: 'translate(50%, -50%)' }}>
                    {cartCount}
                  </span>
                </Link>
              ) : (
                <div className="flex mr-1">
                  {socialLinks.map((socialLink, index) => (
                    <a
                      key={index}
                      href={socialLink.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-full p-2"
                    >
                      <socialLink.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
