import { useEffect, useState } from "react";
import MapComponent from "./components/Map";

function App() {
  const [position, setPosition] = useState({
    latitude: 33.450701,
    longitude: 126.570667,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        setPosition(latitude, longitude);
      });
    }
  }, []);

  return (
    <div>
      <MapComponent userPosition={position} />
    </div>
  );
}

export default App;
