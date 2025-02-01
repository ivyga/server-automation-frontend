import React from 'react';
import { Alert } from '../../../common/components/alerts';

export const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Server Provisioning Overview</h1>
            <Alert>
                <p>Release v4.6.2 (1/1/2025)</p>
                <a href="https://wwt.sharepoint.com/:u:/r/sites/GICSoftwareEngineering/SitePages/Self-Service-Patch-Release-Notes.aspx?csf=1&web=1&e=LoxQ3s">
                    Click here to see patch notes on Sharepoint.
                </a>
            </Alert>
            <div className="link-item">
                <br></br>
                <a href="/firmware">Firmware:</a>
                <br></br>
                This page displays all the currently available firmware files in the database and allows the user to
                upload any files they might need for future builds.
            </div>
            <div className="link-item">
                <br></br>
                <a href="/burn-in-test-pro">Burn-In Test Pro:</a>
                <br></br>
                This page displays all the currently available burn-in scripts in the database and allows the user to
                upload any scripts they might need for future builds.
            </div>
            <div className="link-item">
                <br></br>
                <a href="/create-build">Build Creation:</a>
                <br></br>
                This page allows the user to create a new build.
            </div>
            <div className="/update-build">
                <br></br>
                <a href="#build-update">Build Update:</a>
                <br></br>
                This page allows the user to update an existing build.
            </div>
            <div className="link-item">
                <br></br>
                <a href="/view-build">Build View:</a>
                <br></br>
                This page allows the user to view the settings and ETO snapshot of an existing build.
            </div>
            <div className="link-item">
                <br></br>
                <a href="/csv-upload">CSV Upload:</a>
                <br></br>
                This page allows the user to upload and submit a CSV for any rack ready for provisioning.
            </div>
            <div className="/server-status">
                <br></br>
                <a href="#server-status">Server Status:</a>
                <br></br>
                This page allows the user to view the current status of any rack.
            </div>
            <div className="link-item">
                <br></br>
                <a href="/dhcp-table">DHCP Table:</a>
                <br></br>
                This page allows the user to see the current leased out DHCP addresses.
            </div>
        </div>
    );
};
