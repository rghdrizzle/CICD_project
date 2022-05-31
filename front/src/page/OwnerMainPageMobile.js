import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Pagination from '../component/Pagination';
import { useHistory } from 'react-router-dom';
import data from '../dummy/dummyDataforOwner';
import Header from '../component/HeaderOwner';
import logo from '../static/image/chicken.jpg';

// const options = {
//     onRowClick: (row) => {
//         window.location.href = `/owner/detail/${row.id}`

/*
const options = {
    onRowClick: (row) => {
        window.location.href = `/owner/detail/${row.id}`

    }

}*/

const Table = (props) => {
  let history = useHistory();
  const dataList = props.data.map((list) => (
    // <Link to="/mobile/owner/detail/${list.id}">
    <Row onClick={() => history.push('/mobile/owner/detail/${list.id}')}>
      <Col>
        <img src={logo} alt="" style={{ width: '100%', heigh: '100%' }} />
      </Col>
      <Col>
        <Row>{list.eventName}</Row>
        <Row>
          <Col>
            <Row>{list.shopName}</Row>
            <Row>{list.term}</Row>
            <Row>{list.enteredDate}</Row>
          </Col>
          <Col>
            <Row>{list.likes}</Row>
            <Row>{list.state}</Row>
          </Col>
        </Row>
      </Col>
    </Row>
    // </Link>
  ));
  return <ul>{dataList}</ul>;
};

const OwnerMainPageMobile = () => {
  //const title = ["번호", "썸네일", "이벤트명", "이벤트 상세", "가게명", "기간", "등록일", "상태"]
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1); // 페이지에 보여지는 목록 수 설정

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(posts);
      setLoading(false);
    };
  });

  if (loading) return 'loading';
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-3">
      <Header></Header>
      <Row>
        <Col>이벤트</Col>
        <Col>
          <Button
            className="col-xs-5"
            variant="link"
            value="추가"
            onClick={() =>
              (window.location.href = '/mobile/owner/event/regist')
            }
          >
            추가
          </Button>
        </Col>
      </Row>
      <Row>
        <Table data={currentPosts}></Table>
      </Row>
      <Row>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Row>
    </Container>
  );
};

export default OwnerMainPageMobile;
