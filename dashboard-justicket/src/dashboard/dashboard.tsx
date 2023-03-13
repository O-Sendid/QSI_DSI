import React, { useState } from "react";
import Graph from "./graph/graph";
import './dashboard.css';
import indicatorsData from "../indicatorsData";
import Indicator from "./indicator/indicator";

interface GraphData {
  x: number | string;
  y: number;
}

interface IndicatorData {
  label: string;
  value: number;
  data: GraphData[];
}

const Dashboard: React.FC = () => {
  const [indicators, setIndicators] = useState(indicatorsData);
  const [selectedIndicator, setSelectedIndicator] = useState<IndicatorData | null>(null);

  const handleIndicatorClick = (indicator: IndicatorData) => {
    setSelectedIndicator(indicator);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", backgroundColor: "#1E1E1E", color: "#fff" }}>
      <div style={{ display: "flex", width: "100%", marginBottom: "20px" }}>
        <div style={{ width: "30%", marginRight: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Justicket</h3>
          {indicators.map((indicator) => (
            <Indicator
              key={indicator.label}
              label={indicator.label}
              value={indicator.value}
              onClick={() => handleIndicatorClick(indicator)}
            />
          ))}
        </div>
        <div style={{ width: "70%" }}>
          <h1 style={{ marginBottom: "30px" }}>Admin Dashboard</h1>
          {selectedIndicator && <Graph data={selectedIndicator.data} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;