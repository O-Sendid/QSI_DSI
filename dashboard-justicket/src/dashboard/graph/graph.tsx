import { BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis, Bar, Cell, LineChart, Line } from 'recharts';

interface GraphProps {
  data: { x: string | number; y: number }[];
  type: string,
}
function getRandomColors(length: number) {
  const colors = [];
  for (let i = 0; i < length; i++) {
    colors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
  }
  return colors;
}

const Graph: React.FC<GraphProps> = ({ data, type }) => {
  let chartComponent;
  const COLORS = getRandomColors(data.length);
  switch (type) {
    case 'barre':
      chartComponent = (
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{ top: 20, right: 30, left: 20,  bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#333" }} />
          <Legend />
          <Bar dataKey="y" fill="#8884d8" />
        </BarChart>
      );
      break;
    case 'ligne':
      chartComponent = (
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
      );
      break;
    case 'camembert':
      chartComponent = (
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            dataKey="y"
            nameKey="x"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "#333" }} />
          <Legend />
        </PieChart>
      );
      break;
    default:
      chartComponent = null;
  }

  return (
    <div className="container mt-4">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent">
          <h2 className="card-title mb-0">Graph</h2>
        </div>
        <div className="card-body p-0 d-flex justify-content-center">
          {chartComponent}
        </div>
      </div>
    </div>
  );
};

export default Graph;
