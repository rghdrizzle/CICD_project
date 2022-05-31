import React from "react";

const AdminLayout = () => {
  return (
    <>
        {/* <div className="row" style={{height: "1000px"}}> */}
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/admin/category">
                  <span data-feather="home"></span>
                  카테고리 관리 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/owner">
                  <span data-feather="file"></span>
                  사장님 관리
                </a>
              </li>
            </ul>

          </div>
        </nav>
        {/* </div> */}

    </>
  );
};

export default AdminLayout;