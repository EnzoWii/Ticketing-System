import React from 'react';
import FacilitatorLayout from '@/Layouts/facilitatorLayout';
import { CustomKanban } from '@/Components/CustomKanban';

import { Chart as ChartJS } from "chart.js/auto"
import { Bar } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';

function LabDashboard({ auth, tickets }) {

    // Sample data for unresolved items
  /* New Layout
  const unresolvedItems = {
    assets: 0,
    network: 0,
    technical: 0,
    accounts: 0,
  };

  // Calculate the number of incomplete tasks
  const incompleteTasks = 0; */
  
  // Sample data for the charts, replace these with your actual data
  const receivedTickets = [5, 10, 6, 11, 14]; // Replace with actual data
  const openTickets = 1;
  const resolvedTickets = 1;
  const totalTicketsOverTime = [5, 10, 6, 13, 14]; // Replace with actual data
  const timeLabels = ["Jan", "Feb", "Mar", "Apr", "May"]; // Replace with actual data

  return (
    <FacilitatorLayout user={auth.user}>
      {/* Three cards to contain the charts */}
      <div className="flex justify-between mt-6 mx-6">
        {/* First Card */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold mb-4">Received Tickets</h2>
            <div className="w-full h-64 md:w-full md:h-72 lg:w-full lg:h-80 xl:w-full xl:h-96">
              {/* Bar chart */}
              <Bar
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May"], // Replace with actual labels
                  datasets: [{
                    label: "Received Tickets",
                    data: receivedTickets,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                  }]
                }}
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold mb-4">Open and Resolved Tickets</h2>
            <div className="w-full h-64 md:w-full md:h-72 lg:w-full lg:h-80 xl:w-full xl:h-96">
              {/* Pie chart */}
              <Pie
                data={{
                  labels: ["Open Tickets", "Resolved Tickets"],
                  datasets: [{
                    label: "Tickets",
                    data: [openTickets, resolvedTickets],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                  }]
                }}
                options={{
                  responsive: true
                }}
              />
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-bold mb-4">Total Tickets Over Time</h2>
            <div className="w-full h-64 md:w-full md:h-72 lg:w-full lg:h-80 xl:w-full xl:h-96">
              {/* Line chart */}
              <Line
                data={{
                  labels: timeLabels, // Replace with actual labels
                  datasets: [{
                    label: "Total Tickets",
                    data: totalTicketsOverTime,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    fill: false
                  }]
                }}
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

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
