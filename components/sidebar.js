import { useState, useEffect } from 'react';

import Navbar from './navbar';
export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    await fetch('/api/categories')
      .then((res) => res.json())
      .then((result) => setCategories(result.category));
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="sidebar">
      {categories &&
        categories.map((item) => {
          return <div>{item}</div>;
        })}
    </div>
  );
}
