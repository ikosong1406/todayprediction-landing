import "./App.css";

import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/Cookies";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route
          path="*"
          element={
            <div className="flex min-h-[60vh] items-center justify-center">
              <h1 className="text-3xl font-bold">
                404 - Not Found
              </h1>
            </div>
          }
        />
      </Routes>

      <Footer />

      <CookieConsent />
    </Router>
  );
}

export default App;