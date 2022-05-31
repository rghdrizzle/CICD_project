import React from 'react';
import { Container } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import ListPagination from '../../component/ListPagination';
import Header from "../../component/HeaderCustomer";
import {useHistory} from "react-router-dom";
import EventListItemScrapContainer from "../../container/EventListItemScrapContainer";

const ScrapList = () => {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  
  return (
    <>
      <Header />
      <Container className="mt-3">
        <div className="row">
          <div className="col-xs-2 pl-3 text-center">
            <button onClick={goBack} type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
          </div>
          <div className="col-xs-4 pl-3 pt-1">
            <h5 className="font-weight-bold">스크랩</h5>
          </div>
          <div className="col-xs-6 pl-4 pt-1">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
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
        </div>
        <div className="row mt-3">
          <EventListItemScrapContainer uId={1}/>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <ListPagination />
        </div>
      </Container>
    </>
  );
};

export default ScrapList;
