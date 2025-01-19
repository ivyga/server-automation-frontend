import React, { useState } from 'react';

interface NavbarProps {
    brand?: string; // Optional brand name
    logoSrc?: string; // Optional logo image source
    logoAlt?: string; // Optional alt text for the logo
    links: { label: string; href: string }[];
}

// Horizontal Menu (for larger screens)
// export const HorizontalMenu: React.FC<NavbarProps> = ({ links }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light horizontal-menu d-none d-lg-flex">
//       <div className="container-fluid">
//         <ul className="navbar-nav">
//           {links.map((link, index) => (
//             <li className="nav-item" key={index}>
//               <a className="nav-link" href={link.href}>
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

export const HorizontalMenu = ({ links }) => {
    return (
        <nav className="horizontal-menu">
            <ul className="menu-list">
                {links.map((link, idx) => (
                    <li key={idx} className="menu-item">
                        {link.subLinks ? (
                            <div className="dropdown">
                                <a className="dropdown-toggle" href={link.href}>
                                    {link.label}
                                </a>
                                <ul className="dropdown-menu">
                                    {link.subLinks.map((subLink, subIdx) => (
                                        <li key={subIdx}>
                                            <a href={subLink.href}>{subLink.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <a href={link.href}>{link.label}</a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Hamburger Menu (for smaller screens)
export const HamburgerMenu: React.FC<NavbarProps> = ({ links }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar navbar-light bg-light hamburger-menu d-flex d-lg-none">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                {menuOpen && (
                    <div className="mt-3 hamburger-menu-choices">
                        <ul className="list-group">
                            {links.map((link, index) => (
                                <li className="list-group-item" key={index}>
                                    <a className="nav-link" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};
