import React, { useState } from "react";

const NameForm = ({ onSubmit, errorMessage }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mt-10 bg-white p-6 rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-4">
        Welcome! Please enter your first name
      </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border border-gray-300 p-2 mb-4 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg w-64 hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default NameForm;
