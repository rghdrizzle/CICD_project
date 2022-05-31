import { AiFillHeart } from 'react-icons/ai';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';



const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const CategoryEventList = ({ lists }) => {
  let history = useHistory();
  return (
    <>
      {lists.map((e) => (
        <div
          key={e.event_id}
          className="d-flex"
          onClick={() =>
            history.push({
              pathname: `/event/detail/${e.event_id}`,
              state: { eName: e.name },
            })
          }
        >
          <div className="col-4">
            <img src={`upload/${e.image.name}`} alt="" style={{ width: '100%', heigh: '100%' }} />
          </div>
          <div className="col-8">
            <div className="font-weight-bold">
              <h5>{e.name}</h5>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column mr-5">
                {/*<MinDiv>{e.shop.name}</MinDiv>*/}
                <MinDiv>
                  {e.start_datetime.toString().split(/T/)[0]} ~{' '}
                  {e.end_datetime.toString().split(/T/)[0]}
                </MinDiv>
                <MinDiv>{e.created_datetime.toString().split(/T/)[0]}</MinDiv>
              </div>
              <div className="d-flex flex-column justify-content-end">
                <div className="d-flex">
                  <AiFillHeart className="text-danger mr-1" />
                  <MinDiv>{e.likes_count}</MinDiv>
                </div>
                {/*거리계산*/}
                <MinDiv>150m</MinDiv>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryEventList;
