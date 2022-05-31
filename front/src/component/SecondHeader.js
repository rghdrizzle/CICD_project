import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

const SecondHeader = ({ title, buttonName, link }) => {
  let history = useHistory();

  return (
    <>
      <div className="row">
        <div className="col-xs-2 pl-3 text-center">
          <button
            onClick={() => history.goBack()}
            type="button"
            className="btn btn-link border-dark"
          >
            <BsChevronLeft className="text-dark" />
          </button>
        </div>
        <div className="col-xs-4 pl-3 pt-1">
          <h5 className="font-weight-bold">{title}</h5>
        </div>
        <div className="col-xs-4 text-center ml-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push(link)}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondHeader;
