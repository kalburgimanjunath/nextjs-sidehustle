import { useState, useEffect } from 'react';

import Navbar from './navbar';
export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch('/api/categories');
    setCategories(response.catgory);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>
      {categories &&
        categories.map((item) => {
          return <div>{item}</div>;
        })}
    </div>
  );
}
