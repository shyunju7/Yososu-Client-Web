import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "../src/pages/Main";
import GlobalStyle from "./GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
