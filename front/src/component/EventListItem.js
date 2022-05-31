import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from '../static/image/chicken.jpg';

const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const EventListItem = () => {
  let history = useHistory();

  return (
    <>
      {/* <Link to="/event/detail"> */}
      <Container fluid onClick={() => history.push('/event/detail')}>
        <div className="border-bottom">
          <div className="row">
            <div className="col-4">
              <img src={logo} alt="" style={{ width: '100%', heigh: '100%' }} />
            </div>
            <div className="col-8">
              <div className="font-weight-bold">점심 할인 특가 이벤트</div>
              <div className="d-flex">
                <div className="d-flex flex-column mr-5">
                  <MinDiv>KFC</MinDiv>
                  <MinDiv>02/25 ~ 04/10</MinDiv>
                  <MinDiv>2021.02.25</MinDiv>
                </div>
                <div className="d-flex flex-column justify-content-end">
                  <div className="d-flex">
                    <AiFillHeart className="text-danger mr-1" />
                    <MinDiv>256</MinDiv>
                  </div>
                  <MinDiv>150m</MinDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* </Link> */}
    </>
  );
};

export default EventListItem;
