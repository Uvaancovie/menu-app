import React, { useState } from 'react';

export default function AddMenuScreen({ addMenuItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && course) {
      addMenuItem({ name, description, price, course });
      setName('');
      setDescription('');
      setPrice('');
      setCourse('');
      alert('Menu item added successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="add-menu-container">
      <h2>Add New Dish</h2>
      <form onSubmit={handleSubmit} className="add-menu-form">
        <label>
          Dish Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Course:
          <select value={course} onChange={(e) => setCourse(e.target.value)} required>
            <option value="">Select a Course</option>
            <option value="Starter">Starter</option>
            <option value="Main">Main</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
}
