import { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

