import React, { useState } from "react"


const App = () => {

const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);

const getLocation = () => {
  if (!navigator.getLocation) {
    setStatus("Not supportted"); 
  } else 
  setStatus("Locating");
  navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, 
      () => {
        setStatus("unable to retrieve youe location");
      }
      );
      }
    


  return (
    <div className="App">
      <button onClick={getLocation}>Get location</button>
      <h1>Coor</h1>
        <p>{status}</p>
        {lat && <p>latitude: {lat}</p>}
        {lng && <p>longitude: {lng}</p>}
    </div>
  );
}

export default App;
