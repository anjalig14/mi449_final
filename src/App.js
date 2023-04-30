import { TextField } from "@mui/material";
import './App.css';
import React from 'react'

function App() {
  
  //const url ='https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=46cb3a2031676ccd163fe488ad5fb108'
  
  return (
    <div className="App">
      <div className="container">
          <div className="top_container">
            <div className="location">
              <p>Detroit</p>
            </div>
            <div className="temp">
              <h1>53°F</h1>
            </div>
            <div className="description">
              <p>Cloudy</p>
            </div>
          </div>
          <div className="botton_container">
            <div className="feels-like">
              <p>50°F</p>
            </div>
            <div className="humidity">
              <p>87%</p>
            </div>
            <div className="wind">
              <p>10 MPH</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
