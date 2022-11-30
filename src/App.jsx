import { HashRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductId from "./pages/ProductId";
import Purchase from "./pages/Purchase";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productId/:id" element={<ProductId />} />
       
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
           <Route path="/purchase" element={<Purchase />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
