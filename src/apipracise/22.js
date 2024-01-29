import React, { useEffect, useState } from 'react';

const Sampletext = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getemail = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }  
    finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    getemail();
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li>
              {item.email},<br/> {item.id}<br/> {item.name}
              
              
            </li>

          ))}
        </ul>
      )}
    </div>
  );
};

export default Sampletext;