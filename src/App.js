import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  
  const url ='https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=46cb3a2031676ccd163fe488ad5fb108'

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='ENTER LOCATION'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
        <div>
            <p2>TODAY'S WEATHER</p2>
        </div>
          <div className="location">
             <p>{data.name}</p>
             <p>DETROIT</p>
          </div>
          <div className="temp">
            {data.main ? <h1 text-2xl font-bold underline >{data.main.temp}°K</h1> : null}
            <h1 text-2xl font-bold underline>46°F</h1>
          </div>
          <div className="description">
            {data.weather ? <p1>{data.weather[0].main}</p1> : null}
            <p1>CLOUDY</p1>
          </div>
          <div className="image">
            <img src='images/cloudy.png' alt='cloudy' height="300px" width="450px"/>
          </div>
        </div>

    
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like}°F</p> : null}
              <p className='bold'>40°F</p>
              <p1>FEELS LIKE</p1>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p className='bold'>88%</p>
              <p1>HUMIDITY</p1>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
              <p className='bold'>4 MPH</p>
              <p1>WIND SPEED</p1>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
