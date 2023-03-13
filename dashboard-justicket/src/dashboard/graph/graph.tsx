import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
  } from "recharts";

interface GraphProps {
    data: { x: string | number; y: number }[];
  }

const Graph: React.FC<GraphProps> = ({ data }) => {
    return (
      <div className="container mt-4">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent">
            <h2 className="card-title mb-0">Graph</h2>
          </div>
          <div className="card-body p-0">
            <BarChart
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
              <Bar dataKey="y" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    );
  };
export default Graph;