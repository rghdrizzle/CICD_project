import React from 'react';
import AdminHeader from '../../component/AdminHeader';
// import AdminLayout from '../../component/AdminLayout';
import Sidebar from '../../component/Sidebar';

const AdminPage = () => {
  return (
    <>
      <AdminHeader />
      <div className="row" style={{ height: '1000px' }}>
        <Sidebar className="mt-2" />
      </div>
    </>
  );
};

export default AdminPage;
