import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  
  const url ='https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=46cb3a2031676ccd163fe488ad5fb108'
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then(response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

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
              <p className='bold'>50°F</p>
              <p>Feel Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>87%</p>
              <p>humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>10 MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
