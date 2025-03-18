import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PopupProvider } from "./contexts/hooks/usePopup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";


import Home from "./pages/home/Home";
import Guide from "./pages/guide/Guide";
import Faq from "./pages/faq/Faq";
import Affiliates from "./pages/affiliates/Affiliates";
import Addfunds from "./pages/addfunds/Addfunds";
import Setting from "./pages/auth/Setting";
import Mypage from "./pages/auth/Mypage";
import Contact from "./pages/faq/Contact";

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <Router basename="/SnsMark">
          <Routes>

            <Route path={"/"} element={<Home />} />
            <Route path={"/guide"} element={<Guide />} />
            <Route path={"/faq"} element={<Faq />} />
            <Route path={"/affiliates"} element={<Affiliates />} />
            <Route path={"/addfunds"} element={<Addfunds />} />
            <Route path={"/contact"} element={<Contact />} />

            <Route element={<ProtectedRoute />}>
              <Route path={"/setting"} element={<Setting />} />
              <Route path={"/mypage"} element={<Mypage />} />
            </Route>

          </Routes>
        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
