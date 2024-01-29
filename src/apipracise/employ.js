import React, { useState, useEffect } from 'react';

const UserComponent = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users/1');
        const data = await response.json();

        // Assuming the structure of the response is { data: { email: 'user@email.com' } }
        setEmail(data.data.email);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>User Email:</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserComponent;
