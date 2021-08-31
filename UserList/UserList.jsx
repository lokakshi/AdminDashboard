import React from 'react'
import "./userList.css"
import {Link }from "react-router-dom"
import {DeleteOutline} from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { rows } from '../../dummyData';
const UserList = () => {
  const [data, setdata] = React.useState(rows);
  const handleDelete=(id)=>{
    setdata(data.filter(cVal=>cVal.id !==id))
  }
   const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'User',
      width: 150,
      editable: true,
      renderCell:(params)=>{
        return(
          <div className="userListUser">
            <img src={params.row.avatar} alt="Profile"className="userListImg"/>
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
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
      headerName: 'Avatar',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/user/"+params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
          )
      }
    }
  ];
  
    return (
        <div className="userList">
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

export default UserList;
