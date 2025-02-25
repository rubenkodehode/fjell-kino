import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { About, Booking, Contact, Movies, UpcomingMovies } from "./pages";
import { ThemeProvider } from "./context/ThemeContext";
import { AccessibilityProvider } from "./context/AccessibilityContext";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <AccessibilityProvider>
        <ThemeProvider>
          <Router>
            <div id="root">
              <Header />
              <div className="mainContent">
                <Routes>
                  <Route path="/" element={<Movies />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/upcomingMovies" element={<UpcomingMovies />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </AccessibilityProvider>
    </div>
  );
}

export default App;
