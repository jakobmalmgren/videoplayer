import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/watch/:id" element={<Watch></Watch>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
