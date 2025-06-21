import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [data, setData] = useState([]);

  const addPerson = (person) => {
    setData([...data, person]);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">People Manager</h1>
      <PersonForm onAdd={addPerson} />
      <Dashboard data={data} />
    </div>
  );
}

export default App;