import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import Men from "./pages/Men";
import Women from "./pages/Women";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="kids" element={<Kids />} />
          <Route path="sale" element={<Sale />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
