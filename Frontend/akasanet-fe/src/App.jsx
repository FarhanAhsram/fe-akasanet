import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Content/Dashboard";
import Profile from "./pages/Content/Profile";
import ManageProduct from "./pages/Content/ManageProduct";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/manageproduct" element={<ManageProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
