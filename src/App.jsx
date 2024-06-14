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
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?lang=en');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
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
        <div>
          <h1>Posts</h1>
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
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
