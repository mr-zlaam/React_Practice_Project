import {} from "react";
import "./StyleComponents/style.css";
import Header from "./Components/Header/Header";
import "./App.css";
import Companies from "./Components/Companies/Companies";
import Residence from "./Components/Residences/Residence";
import Values from "./Components/Values/Values";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Home from "./Components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Companies />} />
        <Route path="/" element={<Residence />} />
        <Route path="/" element={<Values />} />
        <Route path="/" element={<Contact />} /> */}

        <Route path="/Home" element={<Home />} />

        <Route path="/Companies" element={<Companies />} />

        <Route path="/Residence" element={<Residence />} />

        <Route path="/Values" element={<Values />} />

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
