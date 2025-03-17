import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PopupProvider } from "./contexts/hooks/usePopup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";


import Home from "./pages/home/Home";

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <Router>
          <Routes>

            <Route path={"/"} element={<Home />} />
            <Route element={<ProtectedRoute />}>

            </Route>

          </Routes>
        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
