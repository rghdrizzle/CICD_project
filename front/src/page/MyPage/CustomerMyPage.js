import React from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../../component/HeaderCustomer';

import myInfoIcon from '../../static/image/myInfo.png';
import scrapIcon from '../../static/image/scrap.png';
import { useHistory } from 'react-router-dom';

const CustomerMyPage = () => {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  let customerName = '심선보';
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
          <h5 className="ml-4 pt-1 font-weight-bold">{`${customerName}님 환영합니다.`}</h5>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="d-flex flex-column">
              <button type="button" className="btn btn-link">
                <a href="/owner/mypage/userinfo">
                  <img
                    src={myInfoIcon}
                    className="rounded"
                    alt=""
                    style={{ width: '100%', height: '150px' }}
                  />
                </a>
              </button>
              <div className="text-center">내 정보 수정</div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column">
              <button type="button" className="btn btn-link">
                <a href="/mypage/customer/scrap">
                  <img
                    src={scrapIcon}
                    className="rounded"
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                </a>
              </button>
              <div className="text-center">스크랩</div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom text-center mb-5">
          <button type="button" className="btn btn-secondary btn-lg">
            로그아웃
          </button>
        </div>
      </Container>
    </>
  );
};

export default CustomerMyPage;
