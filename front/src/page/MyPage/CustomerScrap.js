import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import EventListItem from '../../component/EventListItemScrap';
import ListPagination from '../../component/ListPagination';
import Header from '../../component/HeaderCustomer';
import EventListItemScrapContainer from '../../container/EventListItemScrapContainer';
import { useHistory } from 'react-router-dom';

const SecondHeader = () => {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Row>
      <button
        onClick={goBack}
        type="button"
        className="btn btn-link border-dark"
      >
        <BsChevronLeft className="text-dark" />
      </button>
      {/* <Button>등록</Button> */}
      <h4>스크랩</h4>
      <div className="col-xs-6 pl-4 pt-1">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            등록순
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            마감기한
          </label>
        </div>
      </div>
    </Row>
  );
};

const CustomerScrap = () => {
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row className="col-xs-2 pl-3 text-center">
          <SecondHeader />
        </Row>
        <div className="row"></div>
        <div className="row mt-3">
          <EventListItemScrapContainer />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <ListPagination />
        </div>
      </Container>
    </>
  );
};

export default CustomerScrap;
