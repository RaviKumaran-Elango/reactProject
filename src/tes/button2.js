import React, { useState, useEffect } from 'react';

const Buttonuser = () => {
  const [email, setEmail] = useState('');
  const [avatar,setAvatar] = useState('');
  const [num, setNum] = useState('');

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    const randomNum = randomNumberInRange(1, 12);
    setNum(randomNum);
    fetchData(randomNum);
  };

  const fetchData = async (randomNum) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${randomNum}`);
      const data = await response.json();

      // Assuming the structure of the response is { data: { email: 'user@email.com' } }
      setEmail(data.data.email);
      setAvatar(data.data.avatar);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch initial data on mount
    fetchData(num);
  }, [num]); // Re-run the effect whenever the 'num' changes

  return (
    <div>
      <h2>User Email:</h2>
      <p>{email}</p>
      <img src={avatar} alt='Profile Image'/>
      <h2>Number is: {num}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Buttonuser;
