import React from 'react'
import './productList.css'
import {Link }from "react-router-dom"
import {DeleteOutline} from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { productrows } from '../../dummyData';

const ProductList = () => {
    const [data, setdata] = React.useState(productrows)
    const handleDelete=(id)=>{
        setdata(data.filter(cVal=>cVal.id !==id))
      }
      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
          renderCell:(params)=>{
            return(
              <div className="prodListUser">
                <img src={params.row.avatar} alt="Profile"className="prodListImg"/>
                {params.row.name}
              </div>
            )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 150,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'avatar',
          headerName: 'Image',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 150,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
            return(
              <>
              <Link to={"/product/"+params.row.id}>
              <button className="prodListEdit">Edit</button>
              </Link>
              <DeleteOutline className="prodListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </>
              )
          }
        }
      ];
    return (
        <div className="productList">
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={6}
        checkboxSelection
        disableSelectionOnClick
        
        />
        </div>
    )
}

export default ProductList
