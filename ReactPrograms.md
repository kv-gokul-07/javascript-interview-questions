
1. Create react app to fetch api response using fetch or axios

    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function AxiosDataComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the async function inside useEffect
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data');
                setData(response.data); // Axios automatically puts the parsed data in the `.data` property
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures this runs only once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
        <h1>Data fetched using Axios:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
    }

    export default AxiosDataComponent;

2. Create a component to post data for backend

import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
}

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // Clear previous messages
    setMessage('');
    setError('');

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com', formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Success:', response.data);
      setMessage(`Post created successfully! New ID: ${response.data.id}`);
      setFormData({ title: '', body: '' }); // Reset form

    } catch (err) {
      // 6. Handle errors
      console.error('Error:', err);
      setError('Failed to create post. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;

