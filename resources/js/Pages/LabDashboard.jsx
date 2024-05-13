import React from 'react';
import FacilitatorLayout from '@/Layouts/facilitatorLayout';
import { CustomKanban } from '@/Components/CustomKanban';

function LabDashboard({ auth, tickets }) {
  // Sample data for unresolved items
  const unresolvedItems = {
    assets: 0,
    network: 0,
    technical: 0,
    accounts: 0,
  };

  // Calculate the number of incomplete tasks
  const incompleteTasks = 0;

  return (
    <FacilitatorLayout user={auth.user}>
      <CustomKanban tickets={tickets}/>
      {/* New Layout */}
      {/* Commenting out the tables and to-do list */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {/* Unresolved Tickets */}
        {/* <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Unresolved Tickets</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-sm">Assets:</div>
            <div className="text-sm">{unresolvedItems.assets}</div>
            <div className="text-sm">Network:</div>
            <div className="text-sm">{unresolvedItems.network}</div>
            <div className="text-sm">Technical:</div>
            <div className="text-sm">{unresolvedItems.technical}</div>
            <div className="text-sm">Accounts:</div>
            <div className="text-sm">{unresolvedItems.accounts}</div>
          </div>
        </div> */}
        {/* Total */}
        {/* <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Total</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-sm">Resolved Number:</div>
            <div className="text-sm">0</div> {/* Example value */}
            {/* <div className="text-sm">Received Number:</div>
            <div className="text-sm">0</div> {/* Example value */}
            {/* <div className="text-sm">Unresolved Number:</div>
            <div className="text-sm">0</div> {/* Example value */}
            {/* <div className="text-sm">Open Number:</div>
            <div className="text-sm">{incompleteTasks}</div> {/* Display the number of incomplete tasks */}
            {/* <div className="text-sm">Unassigned Number:</div>
            <div className="text-sm">0</div> {/* Example value */}
          {/* </div>
        </div>
      </div> */}
      {/* To Do List */}
      {/* <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">To Do List (3)</h2>
        <div className="text-sm">
          {/* Placeholder for to-do list items */}
          {/* - Task 1: Description of Task 1 */}
          {/* - Task 2: Description of Task 2 */}
          {/* - Task 3: Description of Task 3 */}
        {/* </div>
      </div> */}
    </FacilitatorLayout>
  );
}

export default LabDashboard;
