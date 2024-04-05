import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import Subhero from '@/Components/subhero';
import STI from '@/Components/images/sticomputer.jpg'

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className='bg-white'>
            <Subhero />
            </div>

        </AuthenticatedLayout>
    );
}
