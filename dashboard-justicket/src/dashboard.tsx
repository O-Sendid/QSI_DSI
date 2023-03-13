import React, { useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";
import './dashboard.css';

interface IndicatorProps {
  value: number;
}

interface GraphData {
  x: number;
  y: number;
}

interface GraphProps {
  data: { x: string | number; y: number }[];
}

interface IndicatorData {
  label: string;
  value: number;
  data: GraphData[];
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  return (
    <div className="container mt-4">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent">
          <h2 className="card-title mb-0">Graph</h2>
        </div>
        <div className="card-body p-0">
          <LineChart
            width={1000}
            height={500}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#333" }} />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

const Indicator: React.FC<
  IndicatorProps & {
    label: string;
    onClick: () => void;
  }
> = ({ value, label, onClick }) => {
  const style = {
    backgroundColor: "#222",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
    boxShadow: "0 0 5px #333"
  };

  return (
    <div style={style} onClick={onClick}>
      <div className="indicator-label">{label}</div>
      <div className="indicator-value">{value}</div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [indicators, setIndicators] = useState<IndicatorData[]>([
    {
      label: "Indicator 1",
      value: 60,
      data: [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
        { x: 2, y: 30 },
        { x: 3, y: 40 },
        { x: 4, y: 50 }
      ]
    },
    {
      label: "Indicator 2",
      value: 80,
      data: [
        { x: 0, y: 50 },
        { x: 1, y: 40 },
        { x: 2, y: 30 },
        { x: 3, y: 20 },
        { x: 4, y: 10 }
      ]
    }
  ]);
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