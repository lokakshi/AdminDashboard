import React from 'react'
import "./home.css"
import Charts from '../../Charts/Charts'
import {userData} from "../../dummyData"
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'
import Featuredinfo from '../../featuredinfo/Featuredinfo'
const Home = () => {
    return (
        <div className="home">
        <Featuredinfo/>
        <Charts data={userData} title="Sales" dataKey="Active Users"/>
        <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>

        </div>
        </div>
    )
}

export default Home
