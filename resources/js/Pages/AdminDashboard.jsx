import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // Import Modal from react-modal

export default function AdminDashboard({ auth }) {
    const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '' }); // State for new user data

    useEffect(() => {
        // Fetch users data here if needed
    }, []);

    // Sample users data
    const sampleUsers = [
        { id: 1, name: 'John Doe', role: 'Admin', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', role: 'Facilitator', email: 'jane@example.com' },
        // Add more sample users as needed
    ];

    // Calculate total users, facilitators, and admins
    const totalUsers = sampleUsers.length;
    const totalFacilitators = sampleUsers.filter(user => user.role === 'Facilitator').length;
    const totalAdmins = sampleUsers.filter(user => user.role === 'Admin').length;
    const totalAccounts = totalUsers + totalFacilitators + totalAdmins;

    const openModal = () => {
        setModalIsOpen(true); // Open modal
    };

    const closeModal = () => {
        setModalIsOpen(false); // Close modal
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCreateAccount = () => {
        console.log('Creating account:', newUser); // Log new user data
        closeModal(); // Close modal after creating account
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-4">
                    {/* User Table */}
                    <div className="col-span-2">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 h-full">
                            <h2 className="text-xl font-semibold mb-4">User Table</h2>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roles</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* Render user data */}
                                    {sampleUsers.map(user => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Summary */}
                    <div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 h-full">
                            <h2 className="text-xl font-semibold mb-4">Summary</h2>
                            <p>Total Users: {totalUsers}</p>
                            <p>Total Facilitators: {totalFacilitators}</p>
                            <p>Total Admins: {totalAdmins}</p>
                            <p>Total Accounts: {totalAccounts}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Account Button */}
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create Account
                </button>
            </div>

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    content: {
                        width: '60%',
                        maxWidth: '500px',
                        padding: '20px',
                        borderRadius: '8px'
                    }
                }}
            >
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-lg font-semibold mb-4">Create Account</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" value={newUser.name} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" value={newUser.email} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" value={newUser.password} onChange={handleInputChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="text-right">
                        <button onClick={handleCreateAccount} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Create
                        </button>
                    </div>
                </div>
            </Modal>
        </AdminLayout>
    );
}
