import React from 'react';
import Subhero from '@/Components/subhero';
import STI from '@/Components/images/sticomputer.jpg'
import UserDashboard from './UserDashboard';
import LabDashboard from './LabDashboard';
import AdminDashboard from './AdminDashboard';

export default function Dashboard({ auth }) {
    return (
       <div>
        {
            auth.user.roles == 'users' && <UserDashboard auth={auth}/>

        }
        {
            auth.user.roles == 'facilitators' && <LabDashboard auth={auth}/>
        }
         {
            auth.user.roles == 'admin' && <AdminDashboard auth={auth}/>
        }
       </div>
    );
}
