import React from 'react'
import "./charts.css"

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Charts = ({title,data,dataKey}) => {
    return (
        <div className="charts">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data} >
                <Tooltip/>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
                </LineChart>

            </ResponsiveContainer> 
        </div>
    )
}

export default Charts
