import React from 'react';
import { Container } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../component/Header';
import ListPagination from '../component/ListPagination';
import { useHistory } from 'react-router-dom';
import CategoryEventListContainer from '../container/CategoryEventListContainer';

const EventList = ({match, location}) => {
  let history = useHistory();
  const listName = location.state.name
  console.log(location)
  const goBack = () => {
    history.goBack();
  };
  const { id } = match.params;
  return (
    <>
      <Header />
      <Container className="mt-3">
        <div className="row">
          <div className="col-xs-2 pl-3 text-center">
            <button
              onClick={goBack}
              type="button"
              className="btn btn-link border-dark"
            >
              <BsChevronLeft className="text-dark" />
            </button>
          </div>
          <div className="col-xs-4 pl-3 pt-1">
            <h5 className="font-weight-bold">{listName}</h5>
          </div>
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
                좋아요
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
                신규
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
                거리
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <CategoryEventListContainer cId={parseInt(id, 10)} />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <ListPagination />
        </div>
      </Container>
    </>
  );
};

export default EventList;
