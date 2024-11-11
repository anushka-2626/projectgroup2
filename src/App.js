// src/App.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Store from "./components/Store/Store"; // Import the Store component
import { useContext } from "react";
import { themeContext } from "./Context";
import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Router>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            <Testimonial />
            <Contact />
          </Route>
          <Route path="/store" component={Store} /> {/* Route for the Store page */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;