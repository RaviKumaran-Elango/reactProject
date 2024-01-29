import React, { useState, useEffect } from "react";

const SecoundApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getid = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users');
      const json = await response.json();
      setData(json.data);
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
              {item.id} <br/> {item.email} <br/>{item.first_name}<br/>
              <img src={item.avatar}/>
            </li>
           
          ))}
        </ul>
      )}
    </div>
  );
};

export default SecoundApi;
