import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import FilterByCourseScreen from './screens/FilterByCourseScreen';
import './App.css';

export default function App() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Cheeseburger', description: 'Juicy grilled beef patty with melted cheddar cheese.', price: 9.99, course: 'Main' },
    { name: 'Caesar Salad', description: 'Crispy romaine lettuce with creamy Caesar dressing.', price: 7.99, course: 'Starter' },
    { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten chocolate center.', price: 5.99, course: 'Dessert' },
    { name: 'Grilled Salmon', description: 'Perfectly grilled salmon served with lemon butter sauce.', price: 12.99, course: 'Main' },
    { name: 'French Onion Soup', description: 'Rich beef broth with caramelized onions and melted cheese.', price: 6.99, course: 'Starter' },
  ]);

  const addMenuItem = (item) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">Chef's Menu App</h1>
        </header>

        {/* Routes */}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomeScreen menuItems={menuItems} />} />
            <Route path="/add-menu" element={<AddMenuScreen addMenuItem={addMenuItem} />} />
            <Route path="/filter-by-course" element={<FilterByCourseScreen menuItems={menuItems} />} />
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <nav className="bottom-nav">
          <Link to="/" className="nav-item">
            <span className="material-icons">home</span>
            <p>Home</p>
          </Link>
          <Link to="/add-menu" className="nav-item">
            <span className="material-icons">add_circle</span>
            <p>Add Menu</p>
          </Link>
          <Link to="/filter-by-course" className="nav-item">
            <span className="material-icons">filter_list</span>
            <p>Filter</p>
          </Link>
        </nav>
      </div>
    </Router>
  );
}
