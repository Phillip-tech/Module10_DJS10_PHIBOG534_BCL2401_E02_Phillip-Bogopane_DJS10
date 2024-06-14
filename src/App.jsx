import { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  // Declare state variables
  const [posts, setPosts] = useState([]); // Store posts data
  const [error, setError] = useState(null); // Store error message
  const [loading, setLoading] = useState(false); // Flag to indicate loading state

  // Use useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Function to fetch posts data
    const fetchPosts = async () => {
      try {
        setLoading(true); // Set loading state to true
        // Fetch data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?lang=en');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json(); // Parse response data
        setPosts(data); // Update state with fetched data
      } catch (error) {
        setError('Data fetching failed'); // Handle errors
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchPosts(); // Call fetchPosts function when component mounts
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
      {error ? (
        // Display error message if there is an error
        <p className="error"><strong>{error}</strong></p>
      ) : (
        <div>
          <h1>Posts</h1>
          {loading ? (
            // Display loading message while data is being fetched
            <p className="loading">Loading...</p>
          ) : (
            // Display posts once data is loaded
            <ul>
              {posts.map((post, index) => (
                <li key={post.id}>
                  <h3>{index + 1} {post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default App;