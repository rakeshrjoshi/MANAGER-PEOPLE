import React, { useState } from "react";

const PersonForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", address: "", mobile: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.mobile || !form.date) {
      alert("All fields are required.");
      return;
    }
    onAdd(form);
    setForm({ name: "", address: "", mobile: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 mb-6 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" />
        <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded" />
        <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" className="border p-2 rounded" />
        <input type="date" name="date" value={form.date} onChange={handleChange} className="border p-2 rounded" />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Person</button>
    </form>
  );
};

export default PersonForm;