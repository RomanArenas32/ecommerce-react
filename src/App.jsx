import { HashRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductId from "./pages/ProductId";
import Purchase from "./pages/Purchase";
import { useSelector } from "react-redux";

function App() {

  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productId/:id" element={<ProductId />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
