// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginScreen from "./pages/LoginScreen";
import NewAd from "./pages/NewAd";
import Search from "./pages/Search";
import SignupScreen from "./pages/SignUpScreen";
import SingleProduct from "./pages/SingleProduct";
import "./styles/style.css"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/auction/:code" element={<SingleProduct />} />
          <Route path="/selling/new" element={<NewAd />} />
          <Route path="/search/:code" element={<Search />} />
          <Route path="/login" element={<LoginScreen history={undefined} />}/>
          <Route path="/signup" element={<SignupScreen history={undefined} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
