import React, { useState } from 'react';

export default function FilterByCourseScreen({ menuItems }) {
  const [selectedCourse, setSelectedCourse] = useState('');

  const filteredItems =
    selectedCourse === ''
      ? menuItems
      : menuItems.filter((item) => item.course === selectedCourse);

  return (
    <div className="filter-container">
      <h2>Filter by Course</h2>
      <label className="filter-label">
        Select Course:
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="filter-select"
        >
          <option value="">All</option>
          <option value="Starter">Starter</option>
          <option value="Main">Main</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <div className="menu-section">
        <ul className="menu-list">
          {filteredItems.map((item, index) => (
            <li key={index} className="menu-item">
              <div className="menu-item-header">
                <h4>{item.name}</h4>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <p>{item.description}</p>
              <small>Course: {item.course}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
