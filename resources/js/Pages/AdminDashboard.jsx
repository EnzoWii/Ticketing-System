import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import React from 'react';


export default function AdminDashboard({ auth }) {
    return (
        <AdminLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
