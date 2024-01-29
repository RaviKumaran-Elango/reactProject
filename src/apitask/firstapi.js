import React, { useState, useEffect } from "react";

const FirstApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getid = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getid();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title}<hr/>
            </li>
           
          ))}
        </ul>
      )}
    </div>
  );
};

export default FirstApi;
