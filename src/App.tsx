import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ControleEPIs from "./pages/ControleEPIs";
import GestaoDocumentos from "./pages/GestaoDocumentos";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/controle-epis" element={<ControleEPIs />} />
          <Route path="/gestao-documentos" element={<GestaoDocumentos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
