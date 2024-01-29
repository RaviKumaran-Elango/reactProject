import React, { useState, useEffect } from 'react';

const Buttonuser = () => {
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

const handleClick = () => {
    setNum(randomNumberInRange(1, 12));
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users/${setNum}');
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
      <p>{email}</p><h2>Number is: {num}</h2>
      <button onClick={handleClick}>Click Me</button>
     
    </div>
  );
};

export default Buttonuser;
