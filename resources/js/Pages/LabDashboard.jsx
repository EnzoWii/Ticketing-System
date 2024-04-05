import React from 'react';
import FacilitatorLayout from '@/Layouts/facilitatorLayout';

function LabDashboard({auth}) {
  return (
    <FacilitatorLayout user={auth.user}>
    <div>

        {/* Add content for FacilitatorLayout component */}

    </div>
    </FacilitatorLayout>
  );
}

export default LabDashboard;
