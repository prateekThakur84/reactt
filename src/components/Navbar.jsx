import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold text-blue-600">Git Practice</h1>
      <ul className="flex gap-6 text-gray-700">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
