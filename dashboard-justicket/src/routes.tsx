import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import IndicatorSelector from "./IndicatorSelector";
function DashboardRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default DashboardRoutes;
