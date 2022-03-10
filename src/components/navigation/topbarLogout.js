import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";
import { logout } from "../../helpers/auth";

const topbarLogout = (
  <div>
    <Link to="/dashboard">
      <FlatButton label="Vichar" 
      onClick={() => {
        console.log('Vichar');
      }}
      style={{color: '#fff'}} />
    </Link>

    <Link to="/dashboard_Manthan">
      <FlatButton label="Manthan"
      onClick={() => {
        console.log('Manthan');
      }} 
      style={{color: '#fff'}} />
    </Link>

    <Link to="/dashboard_Aravali">
      <FlatButton label="Aravali" style={{color: '#fff'}} />
    </Link>

    <Link to="/dashboard_Vindhyanchal">
      <FlatButton label="Vindhyanchal" style={{color: '#fff'}} />
    </Link>

    <Link to="/dashboard_Saptagiri">
      <FlatButton label="Saptagiri" style={{color: '#fff'}} />
    </Link>
    <span>
    <FlatButton
      label="Logout"
      onClick={() => {
        logout();
      }}
      style={{color: '#fff'}}
    />
    </span>
  </div>
);

export default topbarLogout
