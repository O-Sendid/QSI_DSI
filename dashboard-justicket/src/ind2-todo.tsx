import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useState, useEffect } from "react";

interface TicketData {
  date: string;
  value: number;
}

const Graph: React.FC = () => {
  const [ticketData, setTicketData] = useState<TicketData[]>([]);

  useEffect(() => {
    // Logic to fetch ticket data and transform it to an array of { date, value } objects
    const fetchTicketData = async () => {
      const response = await fetch("url-to-fetch-ticket-data");
      const jsonData = await response.json();
      const dataArray = jsonData.map((data: any) => ({
        date: data.date,
        value: data.value,
      }));

      setTicketData(dataArray);
    };

    fetchTicketData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-transparent">
          <h2 className="card-title mb-0">Value of Tickets Sold by Time</h2>
        </div>
        <div className="card-body p-0">
          <LineChart width={800} height={400} data={ticketData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Graph;
