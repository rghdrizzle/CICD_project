import React  from 'react';
import { Container } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../component/HeaderOwner';
import '../static/css/OwnerEventDetailPageMobile.css';
import KakaoMap from './KakaoMap';
import { useHistory } from 'react-router-dom';
import EventDetailOwnerContainer from '../container/EventDetailOwnerContainer';


const OwnerEventDetailPageMobile = ({ match, location }) => {
  let history = useHistory();
  const eName = location.state.eName;
  const markerPositions = [[37.50802, 127.062835]]
  const mapSize = [100, 400];
  const { id } = match.params; // URL 파라미터 조회하기

  return (
    <>
      <Header />
      <Container className="mt-3">
        <div className="row">
          <div className="col-xs-2 pl-3 text-center">
            <button
              onClick={() => history.goBack()}
              type="button"
              className="btn btn-link border-dark"
            >
              <BsChevronLeft className="text-dark" />
            </button>
            {eName}
            <button
              onClick={() =>
                history.push(`/mobile/owner/event/${parseInt(id, 10)}/modify`)
              }
              type="button"
              className="btn btn-link border-dark"
            >
              수정
            </button>
          </div>
        </div>
        {/* 이미지 시작 */}
        <EventDetailOwnerContainer eId={parseInt(id, 10)} />
        {/* 지도 */}
        <div className="mt-2 border-bottom pb-3 mb-5">
          <div
            className="border-bottom border-dark pl-3 font-weight-bold"
            style={{ fontSize: '1.2rem' }}
          >
            MAP
          </div>
          <KakaoMap markerPositions={markerPositions} size={mapSize} />
        </div>
      </Container>
    </>
  );
};

export default OwnerEventDetailPageMobile;
