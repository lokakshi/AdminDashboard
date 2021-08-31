import React from 'react'
import "./sidebar.css"
import {Link }from "react-router-dom"
import {LineStyle,Timeline,TrendingUp,PermIdentity,Storefront,AttachMoney,Assessment,MailOutline,Report,DynamicFeed,Message,LocalMall

} from '@material-ui/icons';
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem active">
                            <LineStyle className="sidebarIcon"/>Menu
                        </li>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon"/>Analytics
                        </li>
                        <li className="sidebarItem">
                            <TrendingUp className="sidebarIcon"/>Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                   
                        <li className="sidebarItem ">
                        <Link to="/users"  className="link">
                            <PermIdentity className="sidebarIcon"/>Users
                        </Link>
                        </li>
                  
                        <li className="sidebarItem">
                        <Link to="/products" className="link">
                            <Storefront className="sidebarIcon"/>Products
                        </Link>
                        </li>
                        <li className="sidebarItem">
                            <AttachMoney className="sidebarIcon"/>Transactions
                        </li>
                        <li className="sidebarItem">
                            <Assessment className="sidebarIcon"/>Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem ">
                            <MailOutline className="sidebarIcon"/>Mail
                        </li>
                        <li className="sidebarItem">
                            <DynamicFeed className="sidebarIcon"/>Feedback
                        </li>
                        <li className="sidebarItem">
                            <Message className="sidebarIcon"/>Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem ">
                            <LocalMall className="sidebarIcon"/>Manage
                        </li>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon"/>Analytics
                        </li>
                        <li className="sidebarItem">
                            <Report className="sidebarIcon"/>Report
                        </li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}

export default SideBar
