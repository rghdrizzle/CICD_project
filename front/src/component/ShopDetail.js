import {Col, Row} from "react-bootstrap";
import React from "react";



const ShopDetail = ({list}) => {

    return(
        <>
            {list.map(e => (
                <Row className="section">
                    <Col>
                        <Row className="divi">
                            <h5>가게</h5>
                        </Row>
                        <Row>KFC</Row>
                        <Row className="divi2">
                            <Col xs={4}>운영시간</Col>
                            <Col>10:30~19:00</Col>
                        </Row>
                        <Row className="divi2">
                            <Col xs={4}>휴무일</Col>
                            <Col>연중무휴</Col>
                        </Row>
                        <Row className="divi2">
                            <Col xs={4}>TEL</Col>
                            <Col>03-233-4323</Col>
                        </Row>
                        <Row>
                            <Col  className="divi2">
                                주소
                                <Row>
                                    <Col >
                                        서울특별시 관악구 봉천동 942-1 1층 406호
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                상세설명
                                <Row>
                                    <Col >
                                        찾아오시는 길은 봉천역 8번출구 앞입니다
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ))}

        </>
    )
}

export default ShopDetail
