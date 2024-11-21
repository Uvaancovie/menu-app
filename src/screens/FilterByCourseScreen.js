import React, { useState } from 'react';

export default function FilterByCourseScreen() {
  const menuItems = [
    { name: 'Soup', course: 'Starter', price: 5 },
    { name: 'Steak', course: 'Main', price: 15 },
    { name: 'Ice Cream', course: 'Dessert', price: 7 },
  ];

  const [selectedCourse, setSelectedCourse] = useState('');
  const filteredItems =
    selectedCourse === ''
      ? menuItems
      : menuItems.filter((item) => item.course === selectedCourse);

  return (
    <div>
      <h2>Filter Menu by Course</h2>
      <label>
        Select Course:
        <select onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">All</option>
          <option value="Starter">Starter</option>
          <option value="Main">Main</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} ({item.course})
          </li>
        ))}
      </ul>
    </div>
  );
}
