import React, { useState, useEffect } from "react";

const WeatherUser = () => {
  const [temperature, setTemp] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=Chennai&apikey=tBpezqW8cmShZ634b1dt6yrfJw1JMWkD`);
      const data = await response.json();

      setTemp(data.timelines.minutely.values.temperature);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData(temperature);
  }, [temperature]); 


  return (
    <div>
    <h1>welcome</h1>
    <p>{temperature}</p>
    </div>
  );
};

export default WeatherUser;
