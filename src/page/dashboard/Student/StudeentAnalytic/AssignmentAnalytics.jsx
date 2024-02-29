import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  
  } from "recharts";
  import './Rechart.css'
  const AssignmentAnalytic = () => {
    const data = [
      { Assignment: "01", marks: 20 },
      { Assignment: "02", marks: 30 },
      { Assignment: "03", marks: 100 },
      { Assignment: "04", marks: 40 },
      { Assignment: "05", marks: 70 },
      { Assignment: "06", marks: 80 },
      { Assignment: "07", marks: 40 },
    ];
    return (
      <div className="p__opensans w-fit">
        <h2 className="p__opensans">Student Assigmet Analytics</h2>
  
        <LineChart
          width={430}

          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Assignment" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="marks"
            stroke="#ffffff"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    );
  };
  
  export default AssignmentAnalytic;
  