import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../component/HeaderOwner';
import ListPagination from '../../component/ListPagination';
import SecondHeader from '../../component/SecondHeader';
import EventListOwnerContainer from "../../container/EventListOwnerContainer";



const ManageEventList = () => {

  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row className="col-xs-2 pl-3 text-center">
          <SecondHeader
            title="이벤트 관리"
            buttonName="추가"
            link="/mobile/owner/event/regist"
          />
        </Row>
        <div className="row">
          <div className="row mt-3">
            <EventListOwnerContainer uId={1} />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <ListPagination />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ManageEventList;
