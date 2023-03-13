import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useState, useEffect } from "react";

interface UnitData {
  date: string;
  count: number;
}

const Graph: React.FC = () => {
  const [unitData, setUnitData] = useState<UnitData[]>([]);

  useEffect(() => {
    // Logic to fetch unit data and transform it to an array of { date, count } objects
    const fetchUnitData = async () => {
      const response = await fetch("url-to-fetch-unit-data");
      const jsonData = await response.json();
      const dataArray = jsonData.map((data: any) => ({
        date: data.date,
        count: data.count,
      }));

      setUnitData(dataArray);
    };

    fetchUnitData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent">
          <h2 className="card-title mb-0">Number of Units by Time</h2>
        </div>
        <div className="card-body p-0">
          <BarChart width={800} height={400} data={unitData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Graph;
