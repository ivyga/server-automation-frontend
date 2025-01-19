import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './NavBar.scss';

export interface NavBarProps {
    isForSmallScreens?: boolean;
}

// TODO: Fix bug where the dropown nav menu shows under an alert.
export const NavBar: React.FC<NavBarProps> = ({ isForSmallScreens = false }) => {
    const className = isForSmallScreens ? 'app-nav-hamburger' : 'app-nav-bar'; // See NavBar.scss
    return (
        <Navbar bg="light" expand="lg" className={className}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Builds" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/create-build">Create</NavDropdown.Item>
                        <NavDropdown.Item href="/update-build">Update</NavDropdown.Item>
                        <NavDropdown.Item href="/view-build">View</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Firmware" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/firmware-upload">Upload</NavDropdown.Item>
                        <NavDropdown.Item href="/firmware-bundle">Bundle</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Servers" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/csv-upload">CSV Upload</NavDropdown.Item>
                        <NavDropdown.Item href="/server-status">Status</NavDropdown.Item>
                        <NavDropdown.Item href="/dhcp-table">DHCP</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/statistics">Statistics</Nav.Link>
                    <NavDropdown title="Links" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://wwt.sharepoint.com/sites/GICSoftwareEngineering/SitePages/Self-Service-Automation.aspx">
                            Sharepoint
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://wwt.sharepoint.com/:u:/r/sites/GICSoftwareEngineering/SitePages/Self-Service-Patch-Release-Notes.aspx?csf=1&web=1&e=LoxQ3s">
                            Patch Notes
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://wwt.sharepoint.com/sites/GICSoftwareEngineering/SitePages/Operating-Instructions_SelfService.aspx">
                            Manuals
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://wwt.sharepoint.com/sites/GICSoftwareEngineering/SitePages/Instructional-Videos_Self-Service.aspx">
                            Videos
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
