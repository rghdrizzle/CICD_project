import Header from '../../component/AdminHeader';
import Sidebar from '../../component/Sidebar';
import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BtnCellRenderer from '../../component/BtnCellRenderer.js';
import ListPagination from '../../component/ListPagination';
// import axios from 'axios';

//https://www.ag-grid.com/react-grid/getting-started/ 그리드 참고

//https://getbootstrap.com/docs/4.0/components/modal/ 모달 참고

const data = [
  {
    id: 1,
    name: '치킨',
    icon: 'chickenicon',
    createdAt: '2020/1/25',
    updatedAt: '2020/1/25',
    location: 1,
  },
  {
    id: 2,
    name: '가전제품',
    icon: 'laptopicon',
    createdAt: '2020/1/25',
    updatedAt: '2020/1/25',
    location: 2,
  },
  {
    id: 3,
    name: '햄버거',
    icon: 'hamicon',
    createdAt: '2020/1/25',
    updatedAt: '2020/1/25',
    location: 3,
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

  /*const gridOptions = { //그리드 옵션
        columnDefs: data,
        DefaultColDef:{
            headerCheckboxSelection: isFirstColumn,
            checkboxSelection: isFirstColumn,
        }
      };
*/
  /* function isFirstColumn(params) {
        var displayedColumns = params.columnApi.getAllDisplayedColumns();
        var thisIsFirstColumn = displayedColumns[0] === params.column;
        return thisIsFirstColumn;
      }*/

  /* const onButtonClick = e => { //checkbox된 데이터 추출 양식
        const selectedNodes = gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => `${node.id} ${node.name}`).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }*/
  // const [img, setImage] = useState(null);
  const onChange = (e) => {
    console.log(e.target.files[0]);
  };

  // const onClick = async () => {
  //   const formData = new FormData();
  //   formData.append('img', img);
  //   // 서버의 upload API 호출
  //   const res = await axios.post('/post/img', formData);
  //   console.log(res);
  // };
  // };

  return (
    <>
      <Header />
      <div className="row" style={{ height: '1000px' }}>
        <Sidebar className="mt-2" />

        <div
          style={{ marginLeft: 30, float: 'left', marginTop: 30, width: '33%' }}
        >
          <div
            className="ag-theme-alpine mx-auto"
            style={{ height: 400, width: 1060 }}
          >
            <button
              className="btn btn-outline-dark btn-sm"
              style={{ marginRight: 10, marginLeft: 950, marginBottom: 10 }}
              type="button"
              data-toggle="modal"
              data-target="#AddModal"
            >
              추가
            </button>

            <button
              className="btn btn-outline-dark btn-sm"
              style={{ marginBottom: 10 }}
              type="button"
              data-toggle="modal"
              data-target="#DeleteModal"
            >
              삭제
            </button>

            <div
              className="modal fade"
              id="AddModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="AddModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="AddModalLabel">
                      카테고리 추가
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label
                          htmlFor="category-name"
                          className="col-form-label"
                        >
                          카테고리명
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="category-name"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="category-image"
                          className="col-form-label"
                        >
                          카테고리 이미지
                        </label>
                        <div>
                          <input
                            type="file"
                            onChange={onChange}
                            id="category-image"
                            accept="image/jpeg,.png"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          // onClick={onClick}
                          name="img"
                          className="btn btn-primary"
                        >
                          추가
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="DeleteModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="DeleteModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="DeleteModalLabel">
                      카테고리 삭제
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">삭제하시겠습니까?</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      네
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="UpdateModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="UpdateModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="UpdateModalLabel">
                      카테고리 수정
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label
                          htmlFor="category-name"
                          className="col-form-label"
                        >
                          카테고리명
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="category-name"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="category-image"
                          className="col-form-label"
                        >
                          카테고리 이미지
                        </label>
                        <div>
                          <input
                            type="file"
                            id="category-image"
                            accept="image/jpeg,.png"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      네
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <AgGridReact
              onGridReady={onGridReady}
              rowData={rowData}
              rowSelection="multiple"
              frameworkComponents={{
                btnCellRenderer: BtnCellRenderer,
              }}
            >
              <AgGridColumn
                field="id"
                resizable="true"
                width="100px"
                sortable={true}
                filter={true}
                checkboxSelection={true}
                headerCheckboxSelection={true}
              ></AgGridColumn>
              <AgGridColumn
                field="name"
                resizable="true"
                width="100px"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="icon"
                resizable="true"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="createdAt"
                resizable="true"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="updatedAt"
                resizable="true"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="location"
                resizable="true"
                width="150px"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="수정"
                resizable="true"
                width="100px"
                sortable={true}
                filter={true}
                cellRenderer="btnCellRenderer"
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
