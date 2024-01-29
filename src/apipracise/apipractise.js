import React, { useEffect, useState } from 'react';

const Sampletext = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }  
    finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.email},<br/> {item.id}<br/> {item.first_name}
              <img src={item.avatar}/>
              
            </li>

          ))}
        </ul>
      )}
    </div>
  );
};

export default Sampletext;