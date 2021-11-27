import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "../src/pages/Main";
function App() {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 33.450701,
    longitude: 126.570667,
  });
  useEffect(() => {
    console.log(navigator.geolocation);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        console.log(`current position : ${latitude}, ${longitude}`);
        setCurrentPosition(latitude, longitude);
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <Main currentPosition={currentPosition} />
      <Footer />
    </div>
  );
}

export default App;
