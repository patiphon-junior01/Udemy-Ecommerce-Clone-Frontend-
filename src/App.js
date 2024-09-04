import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { Home, SingleCourse, Cart, Courses } from "./pages";
import UserPage from "./pages/UserPage";
import UserPageDetail from "./pages/UserPageDetail";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:id" element={<UserPageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
