"use client";
import { useState } from "react";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";
import SessionByCountry from "@/app/componenets/dashboard/SessionByCountry";



const generateMonthlyData = (year) => {
    return [
        { name: "Jan", sales: Math.random() * 10000 },
        { name: "Feb", sales: Math.random() * 10000 },
        { name: "Mar", sales: Math.random() * 10000 },
        { name: "Apr", sales: Math.random() * 10000 },
        { name: "May", sales: Math.random() * 10000 },
        { name: "Jun", sales: Math.random() * 10000 },
        { name: "Jul", sales: Math.random() * 10000 },
        { name: "Aug", sales: Math.random() * 10000 },
        { name: "Sep", sales: Math.random() * 10000 },
        { name: "Oct", sales: Math.random() * 10000 },
        { name: "Nov", sales: Math.random() * 10000 },
        { name: "Dec", sales: Math.random() * 10000 },
    ];
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
        <div className="bg-white border border-gray-300 p-2 rounded shadow-lg">
            <p className="text-black">{`${payload[0].name} : $${payload[0].value.toFixed(2)}`}</p>
        </div>
        );
    }
    return null;
};

const formatYAxisTicks = (value) => {
    const thresholds = [1e3, 1e6, 1e9, 1e12];
    const suffixes = ["", "k", "m", "b", "t"];

    for (let i = thresholds.length - 1; i >= 0; i--) {
        if (value >= thresholds[i]) {
        return `$${(value / thresholds[i]).toFixed(0)}${suffixes[i]}k`;
        }
    }
    return value.toString();
};


const SalesDashboard = () => {
    const [selectedYear, setSelectedYear] = useState(2024);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
    };
    
    const data = generateMonthlyData(selectedYear);

    // Generate an array of years for the year picker
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2024 + 1 }, (_, i) => currentYear - i);
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-2 bg-white shadow-md h-96 p-4 rounded-lg">
          <div className="flex justify-between mb-3">
            <h2 className="text-xl font-bold">Sales</h2>
            <div className="flex items-center gap-2">
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(Number(e.target.value))} 
                className="border rounded-md p-2"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data} barSize={20}>
              <XAxis dataKey="name" stroke="black" />
              <YAxis 
                stroke="black" 
                tickFormatter={formatYAxisTicks}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} />
              <Legend />
              <Bar 
                dataKey="sales" 
                fill="#FA9090" 
                radius={[10, 10, 0, 0]}
                style={{ 
                  filter: "drop-shadow(6px 0px 0px rgba(0, 0, 0, 0.5))"
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-1 bg-white shadow-md h-96 p-4 rounded-lg">
          <SessionByCountry />
        </div>
    </section>
  )
}

export default SalesDashboard