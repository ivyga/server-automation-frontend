import React, { useState } from 'react';
// TODO: We need a demo that efficiently captures form input

import {
    PrimaryButton,
    SecondaryButton,
    SuccessButton,
    DangerButton,
    WarningButton,
    InfoButton,
    LightButton,
    DarkButton,
} from '../../../common/components/buttons';
import { FailureAlert, SuccessAlert, WarningAlert } from '../../../common/components/alerts';
import { Card } from '../../../common/components/cards';
import { Modal } from '../../../common/components/modals';
import { Badge } from '../../../common/components/badges';
import { Input } from '../../../common/components/form-components';
import { Table } from '../../../common/components/tables';
import { HorizontalMenu } from '../../../common/components/navbars';

import wwtLogo from '../../../images/wwt-logo.png';

export const StyleDemo = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const tableHeaders = ['Name', 'Age', 'Country'];
    const tableData = [
        ['Alice', '25', 'USA'],
        ['Bob', '30', 'UK'],
        ['Charlie', '35', 'Canada'],
    ];

    return (
        <>
            <h1>Style Demonstration</h1>
            <p>Here are common comments using bootstrap.</p>

            <h2>Navbar</h2>
            <HorizontalMenu
                brand="MyApp"
                links={[
                    { label: 'Home', href: '#' },
                    { label: 'About', href: '#' },
                    { label: 'Contact', href: '#' },
                ]}
            />

            <h2>Buttons</h2>
            <div className="mb-3">
                <PrimaryButton label="Primary Button" onClick={() => alert('Primary clicked!')} />
                &nbsp;
                <SecondaryButton label="Secondary Button" />
                &nbsp;
                <SuccessButton label="Success Button" />
                &nbsp;
                <DangerButton label="Danger Button" />
                &nbsp;
                <WarningButton label="Warning Button" />
                &nbsp;
                <InfoButton label="Info Button" />
                &nbsp;
                <LightButton label="Light Button" />
                &nbsp;
                <DarkButton label="Dark Button" />
                &nbsp;
            </div>

            <h2>Alerts</h2>
            <div className="mb-3">
                <SuccessAlert message="This is a success alert!" dismissible />
                <WarningAlert message="This is a warning alert!" dismissible />
                <FailureAlert message="This is a failure alert!" dismissible />
            </div>

            <h2>Cards</h2>
            <div className="mb-3">
                <Card title="Card Title" text="This is a simple card example." imgSrc={wwtLogo} footer="Card Footer" />
            </div>

            <h2>Modal</h2>
            <div className="mb-3">
                <PrimaryButton label="Open Modal" onClick={() => setModalOpen(true)} />
                <Modal
                    title="Modal Title"
                    body="This is the modal content."
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    footer={<DangerButton label="Close" onClick={() => setModalOpen(false)} />}
                />
            </div>

            <h2>Badges</h2>
            <div className="mb-3">
                <Badge text="New" variant="success" />
                &nbsp;
                <Badge text="Warning" variant="warning" />
            </div>

            <h2>Form Input</h2>
            <div className="mb-3">
                <Input label="Name" id="name" placeholder="Enter your name" value="" />
                <Input label="Email" id="email" type="email" placeholder="Enter your email" value="" />
            </div>

            <h2>Table</h2>
            <div className="mb-3">
                <Table headers={tableHeaders} data={tableData} />
            </div>
        </>
    );
};

// TODO: We need a demo that captures form input
// export const MyForm: React.FC = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         status: '',
//     });

//     const nameRef = useRef<HTMLInputElement>(null);
//     const descriptionRef = useRef<HTMLInputElement>(null);
//     const statusRef = useRef<HTMLInputElement>(null);

//     // Store the last focused input ref
//     const lastFocusedRef = useRef<React.RefObject<HTMLInputElement>>(nameRef);

//     // Handle input change
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { id, value } = e.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [id]: value,
//         }));
//         lastFocusedRef.current = e.target; // Update last focused input
//     };

//     // Handle form submit
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log(formData);
//     };

//     // Restore focus on re-render (after state change)
//     useEffect(() => {
//         if (lastFocusedRef.current) {
//             lastFocusedRef.current.focus();
//         }
//     }, [formData]);

//     return (
//         <form onSubmit={handleSubmit}>
//             <Input
//                 label="Name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 inputRef={nameRef}
//             />
//             <Input
//                 label="Description"
//                 id="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Enter a description"
//                 inputRef={descriptionRef}
//             />
//             <Input
//                 label="Status"
//                 id="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 placeholder="Enter status"
//                 inputRef={statusRef}
//             />

//             <button type="submit" className="btn btn-primary mt-3">
//                 Submit
//             </button>
//         </form>
//     );
// };
