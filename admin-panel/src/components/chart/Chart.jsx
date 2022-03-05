import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import './chart.css'

export default function Chart() {



    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          "Active User": 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mars',
          "Active User": 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          "Active User": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          "Active User": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          "Active User": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          "Active User": 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Agu',
          "Active User": 5390,
          pv: 2400,
          amt: 2800,
        },
        {
          name: 'Sep',
          "Active User": 1000,
          pv: 1200,
          amt: 4000,
        },
        {
          name: 'Oct',
          "Active User": 4000,
          pv: 2500,
          amt: 1500,
        },
        {
          name: 'Nov',
          "Active User": 7000,
          pv: 5000,
          amt: 3000,
        },
        {
          name: 'Dec',
          "Active User": 10000,
          pv: 6000,
          amt: 12000,
        },
      ];



  return (
    <div className='chart fourth-color-background'>
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey="Active User" stroke='blue'/>
            <Line type="monotone" dataKey="pv" stroke='red'/>
            <Line type="monotone" dataKey="amt" stroke='green'/>
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
