import React, { useState, ReactNode, FC } from 'react';

export interface NavLink {
    label: string;
    href?: string;
    component?: FC<any>;
    sublinks?: NavLink[];
}

export interface NavProps {
    links: NavLink[];
    brandName: string;
    siteLogo?: string;
    children?: ReactNode;
}

export const Nav: React.FC<NavProps> = ({ links, brandName, siteLogo = null, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSublinkIndex, setOpenSublinkIndex] = useState<number | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSublinks = (index: number) => {
        setOpenSublinkIndex(openSublinkIndex === index ? null : index);
    };

    return (
        <nav className="shadow-md p-4">
            <div className="flex items-center justify-between px-4 w-full">
                {/* Brand Logo and Name */}
                <div className="flex items-center space-x-2">
                    {siteLogo && <img src={siteLogo} alt="Site Logo" className="h-10 w-auto" />}
                    <a href="/" className="text-lg font-bold hover:underline">
                        {brandName}
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        {links.map((link, index) => (
                            <li key={index} className="relative group">
                                <a
                                    href={link.href || '#'}
                                    className="hover:text-gray-300 transition-colors"
                                    onClick={(e) => {
                                        if (link.sublinks) {
                                            e.preventDefault();
                                            toggleSublinks(index);
                                        }
                                    }}
                                >
                                    {link.label}
                                </a>
                                {link.sublinks && (
                                    <ul className="hidden group-hover:block absolute bg-black text-white shadow-md rounded mt-2 space-y-2 p-4 w-64">
                                        {link.sublinks.map((sublink, subIndex) => (
                                            <li key={subIndex} className="p-2">
                                                <a
                                                    href={sublink.href}
                                                    className="block hover:text-gray-300 transition-colors"
                                                >
                                                    {sublink.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right-aligned Children and Hamburger Menu */}
                <div className="flex items-center space-x-4">
                    {/* Children */}
                    <div className="hidden md:block">{children}</div>

                    {/* "Hamburger" Icon */}
                    <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <line
                                x1="4"
                                y1="6"
                                x2="20"
                                y2="6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <line
                                x1="4"
                                y1="12"
                                x2="20"
                                y2="12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <line
                                x1="4"
                                y1="18"
                                x2="20"
                                y2="18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dropdown Menu for Small Screens */}
            <ul
                className={`md:hidden bg-blue-500 w-64 absolute right-4 transition-all duration-300 ease-in-out rounded-md shadow-lg ${
                    isOpen ? 'top-14' : 'top-[-490px]'
                }`}
            >
                {links.map((link, index) => (
                    <li key={index} className="my-2 px-4">
                        <a
                            href={link.href || '#'}
                            className="hover:text-gray-300 transition-colors block"
                            onClick={(e) => {
                                if (link.sublinks) {
                                    e.preventDefault();
                                    toggleSublinks(index);
                                }
                            }}
                        >
                            {link.label}
                        </a>
                        {link.sublinks && openSublinkIndex === index && (
                            <ul className="mt-2 space-y-2 bg-gray-700 rounded-md p-4 w-64">
                                {link.sublinks.map((sublink, subIndex) => (
                                    <li key={subIndex} className="p-2">
                                        <a href={sublink.href} className="block hover:text-gray-300 transition-colors">
                                            {sublink.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
