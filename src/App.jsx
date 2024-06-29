import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Error from "./pages/404";
import SideBar from "./components/sideBar/SideBar";
import Title from "./components/title/Title";
import LeftFeed from "./components/leftFeed/LeftFeed";
import "../src/components/Components.css";
import { Context } from "./components/context/Context";
import { useState } from "react";
import Account from "./components/loginAndLogout/account/Account";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [login, setLogin] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Context.Provider value={{ darkMode, setDarkMode, login, setLogin }}>
          <div className="all">
            <SideBar />
            <div className="main">
              <Title />
              <div className="routesContainer">
                <div className="pages">
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<Error />} />
                  </Routes>
                </div>
                <LeftFeed />
              </div>
            </div>
          </div>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
