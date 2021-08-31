import React from 'react'
import "./featuredinfo.css"
import {ArrowDownward,ArrowUpward} from '@material-ui/icons';
const Featuredinfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuresTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 2,404</span>
                    <span className="featuredMoneyRate">-11.4<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuresTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 12,404</span>
                    <span className="featuredMoneyRate">-10.4<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuresTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 2,804</span>
                    <span className="featuredMoneyRate">11.4<ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
        </div>
    )
}

export default Featuredinfo
