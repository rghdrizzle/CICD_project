import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ProSidebar width = "220px" style ={{marginTop : 10}}>
      <Menu iconShape="square">
        <MenuItem style = {{textAlign : "center"}}>
          카테고리 관리
          <Link to="/admin/category" />
        </MenuItem>
        <MenuItem style = {{textAlign : "center"}}>
          사장님 관리
          <Link to="/admin/owner" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
