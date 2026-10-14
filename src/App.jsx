import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    technology: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Survey submitted successfully!");

    console.log("Survey Data:", formData);

    setFormData({
      name: "",
      email: "",
      age: "",
      technology: "",
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Technology Survey Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label>Age Group:</label>
        <select
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        >
          <option value="">Select Age Group</option>
          <option value="Under 18">Under 18</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="Above 35">Above 35</option>
        </select>
        <br /><br />

        <label>Favourite Technology:</label>
        <select
          name="technology"
          value={formData.technology}
          onChange={handleChange}
          required
        >
          <option value="">Select Technology</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="Cloud Computing">Cloud Computing</option>
        </select>
        <br /><br />

        <button type="submit">Submit Survey</button>
      </form>
    </div>
  );
}

export default App;
