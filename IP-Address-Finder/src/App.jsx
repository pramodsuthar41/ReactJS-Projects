import { useEffect, useState } from "react";
import axios from "axios";
import Map from "./Map";
import "./App.css";

function App() {
  const [ipDetails, setIPDetails] = useState({});
  const [lat, setLat] = useState(22.5673);
  const [lon, setLon] = useState(78.3452);

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((res) => {
        setIPDetails(res.data);
        setLat(res.data.latitude);
        setLon(res.data.longitude);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1>IP Address Finder</h1>

      <div className="App">
        <div className="left">
          <h4>What is my IPv4 Address?</h4>
          <h1 id="ip">{ipDetails.ip}</h1>

          <h4>Approximate Location :</h4>
          <p>
            {ipDetails.city}, {ipDetails.region},{" "}
            {ipDetails.country_name}
          </p>

          <h4>Internet Service Provider (ISP) :</h4>
          <p>{ipDetails.org}</p>
        </div>

        <Map lat={lat} lon={lon} />
      </div>
    </>
  );
}

export default App;