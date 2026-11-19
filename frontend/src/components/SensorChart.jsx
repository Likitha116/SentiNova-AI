import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { sensorData } from "../data/mockData";

function SensorChart() {

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm">

      <h2 className="text-lg font-bold text-primary mb-5">
        Sensor Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={sensorData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#F59E0B"
            name="Temperature"
          />

          <Line
            type="monotone"
            dataKey="pressure"
            stroke="#3B82F6"
            name="Pressure"
          />

          <Line
            type="monotone"
            dataKey="vibration"
            stroke="#A855F7"
            name="Vibration"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default SensorChart;