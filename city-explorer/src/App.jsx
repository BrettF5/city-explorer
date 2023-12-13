import axios from "axios";
import { useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
const [location, setLocation] = useState({display_name: "info about ???"});
const [searchQuery, setSearchQuery] = useState('');

async function getLocation() {
  const API = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`
  const response = await axios.get(API);
  const locationObj = response.data[0];
  setLocation(locationObj);
}

function updateQuery(event) {
  setSearchQuery(event.target.value);
}


  return (
    <>
    <input onChange={(updateQuery)} />
    <button onClick={getLocation}>Expore</button>
    <h2>The city is: {location.display_name}</h2>
    </>
  )
}

export default App;