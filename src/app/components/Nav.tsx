import React, { useState, ReactNode } from 'react';

interface NavLink {
    label: string;
    href: string;
}

interface NavProps {
    links: NavLink[];
    brandName: string;
    children?: ReactNode;
}

const Nav: React.FC<NavProps> = ({ links, brandName, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 text-white shadow-md">
            <div className="container mx-auto flex items-center p-4">
                {/* Brand Name */}
                <div className="text-lg font-bold flex-shrink-0">
                    <a href="/" className="hover:underline">
                        {brandName}
                    </a>
                </div>

                {/* Middle Content */}
                <div className="hidden md:flex mx-4 flex-grow justify-center items-center">{children}</div>

                {/* Links for non-small screens */}
                <ul className="hidden md:flex space-x-4 ml-auto">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="hover:text-gray-300 transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon for small screens */}
                <button className="md:hidden ml-auto focus:outline-none" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Dropdown Links for small screens */}
            <ul
                className={`md:hidden bg-blue-500 w-48 absolute right-4 transition-all duration-300 ease-in-out rounded-md shadow-lg ${
                    isOpen ? 'top-14' : 'top-[-490px]'
                }`}
            >
                {links.map((link, index) => (
                    <li key={index} className="my-2 px-4">
                        <a href={link.href} className="hover:text-gray-300 transition-colors block">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
