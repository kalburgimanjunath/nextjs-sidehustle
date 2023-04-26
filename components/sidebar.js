import { useState, useEffect } from 'react';

import Navbar from './navbar';
export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch('api/category');
    setCategories(response.catgory);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categories);
  return <div></div>;
}
