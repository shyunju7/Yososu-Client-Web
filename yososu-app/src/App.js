import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "../src/pages/Main";
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
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
