import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../component/HeaderOwner';
import { useEffect } from 'react';
import MapContainer from './KakaoMap';

const OwnerEventDetailPage = ({ props }) => {
  const url = window.location.href; // 현재페이지 url 가져오기
  const current_id = url.split('/')[5]; // 현재 페이지 url에서 id 값만 가져오기

  useEffect(() => {
    // const script = document.createElement("script");
    // script.async = true;
    // script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=cae618549e6e2a83d5a1f0ff0b8c6c17&autoload=false'
    // document.head.appendChild(script);
  });

  return (
    <Container className="mt-3">
      <Header></Header>
      <Row>
        <Col>이벤트 상세</Col>
        <Col>
          <Button className="col-xs-5" variant="link" value="수정">
            수정
          </Button>
          <Button className="col-xs-5" variant="link" value="삭제">
            삭제
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          props.thumbnail
          {url}
          {current_id}
        </Col>
        <Col>
          <Row>
            <Col>
              <Row>eventName</Row>
              <Row>term</Row>
              <Row>eventDetail</Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>shopName</Row>
              <Row>time</Row>
              <Row>휴무일</Row>
              <Row>tel</Row>
              <Row>주소</Row>
              <Row>상세설명</Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        MAP
        <MapContainer></MapContainer>
      </Row>
    </Container>
  );
};

const OwnerEventDetailPage = ({ props }) => {
  const url = window.location.href; // 현재페이지 url 가져오기
  const current_id = url.split('/')[5]; // 현재 페이지 url에서 id 값만 가져오기

  useEffect(() => {
    // const script = document.createElement("script");
    // script.async = true;
    // script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=cae618549e6e2a83d5a1f0ff0b8c6c17&autoload=false'
    // document.head.appendChild(script);
  });

  return (
    <Container className="mt-3">
      <Header />
      <Row>
        <Col>이벤트 상세</Col>
        <Col>
          <Button className="col-xs-5" variant="link" value="수정">
            수정
          </Button>
          <Button className="col-xs-5" variant="link" value="삭제">
            삭제
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          props.thumbnail
          {url}
          {current_id}
        </Col>
        <Col>
          <Row>
            <Col>
              <Row>eventName</Row>
              <Row>term</Row>
              <Row>eventDetail</Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>shopName</Row>
              <Row>time</Row>
              <Row>휴무일</Row>
              <Row>tel</Row>
              <Row>주소</Row>
              <Row>상세설명</Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        MAP
        <MapContainer></MapContainer>
      </Row>
    </Container>
  );
};

export default OwnerEventDetailPage;
