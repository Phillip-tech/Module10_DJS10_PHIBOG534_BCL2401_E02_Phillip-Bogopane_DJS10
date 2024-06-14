import { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://sjsonplaceholder.typicode.com/posts?lang=en');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          setError('Data fetching failed');
        } finally {
          setLoading(false);
        }
      };

      
    fetchPosts();
  }, []);


  return (
    <div>
      {error ? (
        <p className="error"><strong>{error}</strong></p>
      ) : (

  
  