import React from 'react'
import "./TopBar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Adiadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">5</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language/>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default TopBar
