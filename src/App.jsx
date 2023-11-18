import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Landing from "./pages/Landing";
import Services from "./pages/Services";

export default function App() {
  return (
    <div className="container-fluid g-0">
      <Navbar />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}
