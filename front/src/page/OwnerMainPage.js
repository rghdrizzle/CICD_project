/*

import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../component/Header';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import data from '../dummy/dummyDataforOwner';

//https://code.tutsplus.com/ko/tutorials/working-with-tables-in-react-part-one--cms-29682 참고

//db 연결 전 더미 데이터

const options = {
  onRowClick: (row) => {
    window.location.href = `/owner/detail/${row.id}`;
  },
};

const Table = (props) => {
  return (
    <Row>
      <BootstrapTable data={props.data} options={options} pagination>
        <TableHeaderColumn isKey dataField="number">
          번호
        </TableHeaderColumn>
        <TableHeaderColumn dataField="thumbnail">썸네일</TableHeaderColumn>
        <TableHeaderColumn dataField="eventName">
          이벤트명
          <Link to="/owner/detail/:1"></Link>
        </TableHeaderColumn>
        <TableHeaderColumn dataField="eventDetail">
          이벤트 상세
        </TableHeaderColumn>
        <TableHeaderColumn dataField="shopName">가게명</TableHeaderColumn>
        <TableHeaderColumn dataField="term">기간</TableHeaderColumn>
        <TableHeaderColumn dataField="enteredDate">등록인</TableHeaderColumn>
        <TableHeaderColumn dataField="state">상태</TableHeaderColumn>
      </BootstrapTable>
    </Row>
  );
};

const OwnerMainPage = () => {
  //const title = ["번호", "썸네일", "이벤트명", "이벤트 상세", "가게명", "기간", "등록일", "상태"]
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      setPosts(data);
      // setLoading(false);
    };

    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <Container className="mt-3">
      <Header></Header>
      <Row>
        <Col>이벤트</Col>
        <Col>
          <select>
            <option value="전체">전체</option>
            <option value="진행중">진행중</option>
            <option value="종료">종료</option>
          </select>
        </Col>
        <Col>
          <Button className="col-xs-5" variant="link" value="추가">
            추가
          </Button>
        </Col>
      </Row>
      <Row>
        <Table data={posts} />
      </Row>
    </Container>
  );
};

export default OwnerMainPage
*/
