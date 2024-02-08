import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Revenue = () => {
    const data = [
      {month:"jan",value:200},
      {month:"feb",value:300},
      {month:"march",value:100},
      {month:"april",value:400},
      {month:"may",value:400},
      ];
    return (
        <div>
                        <h2>Profit Margin</h2>

        <LineChart
          width={500}
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
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      
            
        </div>
    );
};

export default Revenue;