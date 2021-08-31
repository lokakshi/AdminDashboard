import React from 'react'
import {Link} from 'react-router-dom'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid,Publish} from '@material-ui/icons';
import "./user.css"
const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newuser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://api.time.com/wp-content/uploads/2017/09/jon-snow-ginger-spice-game-of-thrones.jpg?w=800&quality=85" alt="profile" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Salon</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">AnnaSalon99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">19.02.1987</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+91 2264532332</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">AnnaSalon99@gamil.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">New york</span>
                    </div>
                   
                    </div>
                </div>
                <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder="AnnaSalon99"  className="userUpdateInput"/>
                                <label >Full Name</label>
                                <input type="text" placeholder="Anna Salon"  className="userUpdateInput"/>
                                <label >Email</label>
                                <input type="text" placeholder="Annasalon99@gmail.com"  className="userUpdateInput"/>
                                <label >Phone</label>
                                <input type="text" placeholder="+91 2264532332"  className="userUpdateInput"/>
                                <label >Address</label>
                                <input type="text" placeholder="New York"  className="userUpdateInput"/>
                                
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://api.time.com/wp-content/uploads/2017/09/jon-snow-ginger-spice-game-of-thrones.jpg?w=800&quality=85" alt="Profile" className="userUpdateImg" />
                                
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>  
                                <input type="file" id="file"style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
