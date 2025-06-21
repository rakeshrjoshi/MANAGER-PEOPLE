import React from "react";

const Dashboard = ({ data }) => {
  return (
    <div className="bg-gray-50 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      {data.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Mobile</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{person.name}</td>
                <td className="border px-4 py-2">{person.address}</td>
                <td className="border px-4 py-2">{person.mobile}</td>
                <td className="border px-4 py-2">{person.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;