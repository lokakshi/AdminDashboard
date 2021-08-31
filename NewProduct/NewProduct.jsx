import React from 'react'
import "./newProduct.css"
import {Height, Publish }from '@material-ui/icons'
import Chart from "../../Charts/Charts"
import { prodData } from '../../dummyData'
import{Link} from 'react-router-dom'
const NewProduct = () => {
    return (
        <div className="newProduct"> 
            <div className="productTitleContainer">
                <h1 className="productTitle">Products</h1>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={prodData} title="Sales Performance"  dataKey="sales"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="data:image/jpeg;base64,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" alt="photo" className="productInfoImage" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id :</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales :</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Instock :</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
            
                <form  className="productFrom">
                    
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                        <label >In Stock</label>
                        <select name="instock" id="idstock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
            
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="data:image/jpeg;base64,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" alt="product" className="productUploadImg" />
                            <label For="file"><Publish className="uploadIcon"/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>


               
            </div>

        </div>
    )
}

export default NewProduct
