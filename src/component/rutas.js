import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

import GrupoElectrogeno from "./pages/equipos/GrupoElectrogeno";
import Bodega from "./pages/Bodega";
import Abastecimiento from "./pages/Abastecimiento";
import Mantencion from "./pages/Mantencion";
import Hyster from "./pages/equipos/Hyster";
import Hyundai from "./pages/equipos/Hyundai";
import Komatsu from "./pages/equipos/Komatsu";
import OtrosVehiculos from "./pages/equipos/OtrosVehiculos";
import MercedesByrs78 from "./pages/equipos/otrosEquipos/MercedesByrs78";
import Navbar from "./components/Navbar";
import CargaPorEquipo from "./components/CargaPorEquipo";
import MercedesPsjk46 from "./pages/equipos/otrosEquipos/MercedesPsjk46";
import Volvo from "./pages/equipos/otrosEquipos/Volvo";
import CamionetaKia from "./pages/equipos/otrosEquipos/CamionetaKia";
import CamionHyundai from "./pages/equipos/otrosEquipos/CamionHyundai";
import BidonesPorteria from "./pages/equipos/otrosEquipos/BidonesPorteria";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />} />
        <Route path="bodega" element={<Bodega />} />
        <Route path="bodega/grupoelectrogeno" element={<GrupoElectrogeno />} />
        <Route path="bodega/hyster" element={<Hyster />} />
        <Route path="bodega/hyundai" element={<Hyundai />} />
        <Route path="bodega/komatsu" element={<Komatsu />} />
        <Route path="bodega/otrosvehiculos" element={<OtrosVehiculos />} />
        <Route
          path="bodega/otrosvehiculos/mercedes_psjk_46"
          element={<MercedesPsjk46 />}
        />
        <Route path="bodega/otrosvehiculos/volvo" element={<Volvo />} />
        <Route
          path="bodega/otrosvehiculos/mercedes_byrs_78"
          element={<MercedesByrs78 />}
        />
        <Route
          path="bodega/otrosvehiculos/camionetakia"
          element={<CamionetaKia />}
        />
        <Route
          path="bodega/otrosvehiculos/camionHyundai"
          element={<CamionHyundai />}
        />
        <Route
          path="bodega/otrosvehiculos/bidonesporteria"
          element={<BidonesPorteria />}
        />
        <Route path="abastecimiento" element={<Abastecimiento />} />
        <Route path="mantencion" element={<Mantencion />} />
        <Route path="bodega/cargaporequipos" element={<CargaPorEquipo />} />
      </Routes>
    </>
  );
}

export default App;
