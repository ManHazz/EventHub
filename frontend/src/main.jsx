import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Profile from "./pages/profile.jsx";
import Admin from "./pages/admin.jsx";
import SignIn from "./pages/signin.jsx";
import SignUp from "./pages/signup.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
