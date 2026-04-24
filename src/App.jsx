import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import CreateUnits from "./pages/CreateUnits";
import BuildRoster from "./pages/BuildRoster";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUnits />} />
        <Route path="/roster" element={<BuildRoster />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
