import React, { useState, Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'

import World from './object/world'




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
    


  return (<>
     <VRButton />
    <Canvas style={{backgroundColor: "black" , display: "block" , height: "100vh", width: "100vw"}}>
    <XR>
   
    <Suspense fallback={null}>
    <ambientLight intensity={0.8} />
      <World  />
    </Suspense>
    </XR>


  {/* <Suspense fallback={<Loader />} >
          <Avatar scroll={scroll} /> 
    </Suspense> */}
</Canvas>
 
    <div className="App">
      <button onClick={getLocation}>Get location</button>
      <h1>Coor</h1>
        <p>{status}</p>
        {lat && <p>latitude: {lat}</p>}
        {lng && <p>longitude: {lng}</p>}
    </div>
    </>
  );
}

export default App;
