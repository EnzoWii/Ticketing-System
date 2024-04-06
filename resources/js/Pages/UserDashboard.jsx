import React from 'react'
import Subhero from '@/Components/subhero';
import STI from '@/Components/images/sticomputer.jpg'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function UserDashboard({auth}) {
    
  return (
    <AuthenticatedLayout
    user={auth.user}
>
    <Head title="Dashboard" />

    <div className='bg-white'>
    <Subhero />
    </div>

</AuthenticatedLayout>
  )
}

export default UserDashboard
