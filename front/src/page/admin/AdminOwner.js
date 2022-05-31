import Header from '../../component/AdminHeader';
import Sidebar from '../../component/Sidebar';

import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import StoreBtnCellRenderer from '../../component/StoreBtnCellRenderer.js';
import ListPagination from '../../component/ListPagination';
//https://www.ag-grid.com/react-grid/getting-started/ 참고

const data = [
  {
    createdAt: '2020/1/25',
    email: 'kim@naver.com',
    name: '김사장',
    phone: '010-0000-1111',
  },
  {
    createdAt: '2020/1/26',
    email: 'sung@gmail.com',
    name: '성사장',
    phone: '010-1111-2222',
  },
  {
    createdAt: '2020/1/27',
    email: 'park@gmail.com',
    name: '박사장',
    phone: '010-2222-3333',
  },
];

const storeInfo = [
  {
    storeName: '맥도날드',
    registerNumber: '12-123-12345',
    category: '햄버거',
    tel: '02-1234-5678',
    closed: '매주 화요일',
    createdAt: '2021.02.05',
  },
  {
    storeName: '버거킹',
    registerNumber: '12-123-12355',
    category: '햄버거',
    tel: '02-1234-4678',
    closed: '연중무휴',
    createdAt: '2020.02.01',
  },
];

const AdminCategory = () => {
  // const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const rowData = data;

  const onGridReady = (params) => {
    // setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    console.log(gridColumnApi);
  };

  /*const onButtonClick = e => {
        const selectedNodes = gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => `${node.name} ${node.email}`).join(', ')
        alert(`${selectedDataStringPresentation}를 삭제하시겠습니까?`)
    }*/

  return (
    <>
      <Header />
      <div className="row" style={{ height: '1000px' }}>
        <Sidebar className="mt-2" />

        <div
          style={{ marginLeft: 30, float: 'left', marginTop: 30, width: '33%' }}
        >
          <div className="ag-theme-alpine" style={{ height: 400, width: 1010 }}>
            <button
              className="btn btn-outline-dark btn-sm"
              style={{ marginRight: 10, marginLeft: 950, marginBottom: 10 }}
              type="button"
              data-toggle="modal"
              data-target="#DeleteModal2"
            >
              삭제
            </button>

            <div
              class="modal fade"
              id="DeleteModal2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="DeleteModalLabel2"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="DeleteModalLabel2">
                      카테고리 삭제
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">삭제하시겠습니까?</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      네
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade StoreModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="StoreModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="DeleteModalLabel2">
                      가게 정보
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body" id="store">
                    {storeInfo.map((data) => (
                      <ul>
                        <li key={data.registerNumber}>
                          가게 이름: {data.storeName}
                        </li>
                        <li key={data.registerNumber}>
                          사업자 등록번호: {data.registerNumber}
                        </li>
                        <li key={data.registerNumber}>
                          카테고리: {data.category}
                        </li>
                        <li key={data.registerNumber}>
                          가게 전화번호: {data.tel}
                        </li>
                        <li key={data.registerNumber}>휴무일: {data.closed}</li>
                        <li key={data.registerNumber}>
                          등록일: {data.createdAt}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <AgGridReact
              onGridReady={onGridReady}
              rowData={rowData}
              rowSelection="multiple"
              frameworkComponents={{
                storeBtnCellRenderer: StoreBtnCellRenderer,
              }}
            >
              <AgGridColumn
                field="createdAt"
                resizable="true"
                sortable={true}
                filter={true}
                checkboxSelection={true}
                headerCheckboxSelection={true}
              ></AgGridColumn>
              <AgGridColumn
                field="email"
                resizable="true"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="name"
                resizable="true"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="phone"
                resizable="true"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="store"
                resizable="true"
                sortable={true}
                filter={true}
                cellRenderer="storeBtnCellRenderer"
                cellRendererParams={{
                  clicked: function (field) {
                    alert(`${field} was clicked`);
                  },
                }}
              ></AgGridColumn>
            </AgGridReact>
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: '50%' }}>
        <ListPagination />
      </div>
    </>
  );
};

export default AdminCategory;
