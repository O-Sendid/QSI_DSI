import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import IndicatorSelector from "./IndicatorSelector";
function DashboardRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/item1" element={<Dashboard />} />
        <Route path="/item2" element={<Dashboard />} />
        <Route path="/item3" element={<Dashboard />} />
        <Route path="/indicator" element={<IndicatorSelector/>} />
      </Routes>
    </Router>
  );
}

export default DashboardRoutes;
