import React from 'react';
import FacilitatorLayout from '@/Layouts/facilitatorLayout';

function LabDashboard({ auth }) {
  // Sample data for unresolved items
  const unresolvedItems = {
    assets: 10,
    network: 5,
    technical: 8,
    accounts: 3,
  };

  // Sample data for to-do list
  const todoList = [
    { id: 1, task: "Task 1", status: "Incomplete", description: "Description of Task 1" },
    { id: 2, task: "Task 2", status: "Incomplete", description: "Description of Task 2" },
    { id: 3, task: "Task 3", status: "Complete", description: "Description of Task 3" },
    { id: 4, task: "Task 4", status: "Incomplete", description: "Description of Task 4" },
    { id: 5, task: "Task 5", status: "Complete", description: "Description of Task 5" },
  ];

  // Calculate the number of incomplete tasks
  const incompleteTasks = todoList.filter(task => task.status === "Incomplete").length;

  return (
    <FacilitatorLayout user={auth.user}>
      <div className="flex">
        <div className="w-full lg:w-1/3 border border-gray-400 p-4">
          <div className="mb-4">
            <p className="font-semibold">Unresolved Tickets</p>
            <p>Category</p>
          </div>
          <div className="flex justify-between">
            <p>Assets</p>
            <p>{unresolvedItems.assets}</p>
          </div>
          <div className="flex justify-between">
            <p>Network</p>
            <p>{unresolvedItems.network}</p>
          </div>
          <div className="flex justify-between">
            <p>Technical</p>
            <p>{unresolvedItems.technical}</p>
          </div>
          <div className="flex justify-between">
            <p>Accounts</p>
            <p>{unresolvedItems.accounts}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 border border-gray-400 p-4">
          <div className="mb-4">
            <p className="font-semibold pb-2">Total</p>
            <div className="flex justify-between">
              <p>Resolved Number</p>
              <p>10</p> {/* Example value */}
            </div>
            <div className="flex justify-between">
              <p>Received Number</p>
              <p>20</p> {/* Example value */}
            </div>
            <div className="flex justify-between">
              <p>Unresolved Number</p>
              <p>30</p> {/* Example value */}
            </div>
            <div className="flex justify-between">
              <p>Open Number</p>
              <p>{incompleteTasks}</p> {/* Display the number of incomplete tasks */}
            </div>
            <div className="flex justify-between">
              <p>Unassigned Number</p>
              <p>50</p> {/* Example value */}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 border border-gray-400 p-4">
          <div className="mb-4">
            <p className="font-semibold pb-2">To Do List (3)</p>
            {todoList.map(item => item.status === "Incomplete" && (
              <div key={item.id} className="flex justify-between">
                <p>{item.task}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FacilitatorLayout>
  );
}

export default LabDashboard;
