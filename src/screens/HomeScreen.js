import React, { useState, useEffect } from 'react';
import { FaHamburger, FaUtensils, FaFilter } from 'react-icons/fa';

export default function HomeScreen({ menuItems }) {
  const totalItems = menuItems.length;
  const averagePrice =
    totalItems > 0
      ? (menuItems.reduce((sum, item) => sum + parseFloat(item.price), 0) / totalItems).toFixed(2)
      : 0;

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h2>Welcome, Chef!</h2>
        <p>Manage your restaurant menu with ease.</p>
        <div className="features">
          <div className="feature-item">
            <FaHamburger className="feature-icon" />
            <p>View Menu</p>
          </div>
          <div className="feature-item">
            <FaUtensils className="feature-icon" />
            <p>Add Dishes</p>
          </div>
          <div className="feature-item">
            <FaFilter className="feature-icon" />
            <p>Filter Courses</p>
          </div>
        </div>
      </div>

      {/* Menu Metrics */}
      <div className="menu-metrics">
        <p>Total Items: <strong>{totalItems}</strong></p>
        <p>Average Price: <strong>${averagePrice}</strong></p>
      </div>

      {/* Menu List */}
      <div className="menu-section">
        <h3>Menu Items</h3>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <div className="menu-item-header">
                <h4>{item.name}</h4>
                <span>${item.price}</span>
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
