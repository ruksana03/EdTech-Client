/* eslint-disable no-unused-vars */
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Bar } from "recharts";
import Revenue from "./Revenue/Revenue";
import Analytic from "./Revenue/Analytic/Analytic";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Dashboard = () => {
  const[data1, setData]=useState([])
  const[data2, setData2]=useState([])
  const[data3, setData3]=useState([])
		const axiosPublic=useAxiosPublic()
		useEffect(() => {
      
            axiosPublic.get('/users')
            .then(response => {
               // Handle successful response
               const jsonData = response.data;
               setData(jsonData)
             })
             .catch(error => {
               // Handle error
              //  console.error('Error fetching data:', error);
             });
           


    }, []);
    useEffect(()=>{
      axiosPublic.get('/bookings-all')
      .then(response => {
         // Handle successful response
         const jsonData = response.data;
         setData2(jsonData)
       })
       .catch(error => {
         // Handle error
         console.error('Error fetching data:', error);
       });
   
    },[])

    const orginalData1=data1.filter(data=> data.role==='student')
    const orginalData2=data1.filter(data=> data.role==='teacher')
    const orginalData3=data2.filter(d=> d.transactionId!=false)
   let sum=0
    const totalSale= orginalData3.map(d => sum+d.price)
    for(let i=0;i<totalSale.length;i++){
      sum=sum+totalSale[i]
      
    }
  const data = [
    { name: "Students", value: orginalData1.length },
    { name: "Teachers", value: orginalData2.length },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="">
      <div className="">
        <div className="flex-1">
          <section className="  ">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="  headtext__cormorant">
                  TOtal Overview Businesses
                </h2>

                <p className="mt-4 p__opensans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione dolores laborum labore provident impedit esse
                  recusandae facere libero harum sequi.
                </p>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium p__opensans">
                      Total Sales
                    </dt>

                    <dd className="text-4xl font-extrabold text-first md:text-5xl">
                      ${parseFloat(sum).toFixed(2)}
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                    <dt className="order-last p__opensans">Total Teacher</dt>

                    <dd className="text-4xl font-extrabold text-first md:text-5xl">
                      {orginalData2.length}
                    </dd>
                  </div>

                  <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center  ">
                    <dt className="order-last  p__opensans">Total Students</dt>

                    <dd className="text-4xl font-extrabold text-first md:text-5xl">
                      {orginalData1.length}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
        {/* chats  */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="flex-1">
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center p__opensans gap-4">
              <p>teacher</p>{" "}
              <button className="px-1 py-2 bg-[#0088FE]"></button>
              <p>Student</p>{" "}
              <button className="px-1 py-2 bg-[#00C49F]"></button>
            </div>
          </div>
          <div className="flex-1">
            <Revenue></Revenue>
          </div>
        </div>
      </div>

      {/* Analytics  */}

      <div>
        <Analytic></Analytic>
      </div>
    </div>
  );
};

export default Dashboard;
