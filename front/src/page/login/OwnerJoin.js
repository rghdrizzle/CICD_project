import React from 'react';
import {Container, Col, Button, Form} from 'react-bootstrap';
import Header from '../../component/Header';

const OwnerJoin = () => {
    let categoryArr = ["생활용품", "가전제품", "도시락", "디저트", 
                    "마트", "분식", "스포츠", "아시안",
                    "양식", "의류", "일식", "주류", 
                    "치킨", "피자", "휴대폰", "햄버거"]
    return (
        <>
        <Header />
        <Container className="mt-5">
            <Form>
                <div className="border-bottom pb-2">
                    <Form.Group>
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="이메일을 입력해주세요" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>비밀번호 재확인</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 다시 입력해주세요" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="email" placeholder="이름을 입력해주세요" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control />
                            </Col>
                            <Col className="col-1 text-center"><div>-</div></Col>
                            <Col>
                                <Form.Control />
                            </Col>
                            <Col className="col-1 text-center"><div>-</div></Col>
                            <Col>
                                <Form.Control />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="이메일을 입력해주세요" />
                    </Form.Group>
                </div>
                <div className="mt-3">
                    <Form.Group>
                        <Form.Label>가게 이름</Form.Label>
                        <Form.Control type="email" placeholder="가게 이름을 입력해주세요"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>사업자 등록번호</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control />
                            </Col>
                            <Col className="col-1 text-center"><div>-</div></Col>
                            <Col>
                                <Form.Control />
                            </Col>
                            <Col className="col-1 text-center"><div>-</div></Col>
                            <Col>
                                <Form.Control />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>영업 시간</Form.Label>
                        <Form.Row>
                            <Col className="col-3">
                                <Form.Control />
                            </Col>
                            <Col className="col-1 text-center"><div>~</div></Col>
                            <Col className="col-3">
                                <Form.Control />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>휴무일</Form.Label>
                        <Form.Control type="email" placeholder="휴무일을 입력해주세요"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>가게 전화번호</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control />
                            </Col>
                            <Col className="col-1 text-center"><div>-</div></Col>
                            <Col>
                                <Form.Control />
                            </Col>
                            <Col className="col-1 text-center"><div>-</div></Col>
                            <Col>
                                <Form.Control />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>카테고리</Form.Label>
                        <Form.Control as="select" className="col-6">
                            {categoryArr.map((category, k) => (
                                <option key={k}>{category}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>주소</Form.Label>
                        <Form.Row>
                            <Form.Control className="col-3 mr-3" placeholder="우편번호"/>
                            <Button variant="secondary">우편번호 찾기</Button>
                        </Form.Row>
                        <Form.Row className="mt-2">
                            <Form.Control className="col-5 mr-3" placeholder="도로명 주소"/>
                            <Form.Control className="col-5" placeholder="지번 주소"/>
                        </Form.Row>
                        <Form.Row className="mt-2">
                            <Form.Control className="col-5 mr-3" placeholder="상세 주소"/>
                            <Form.Control className="col-5" placeholder="참고 항목"/>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>상세 정보</Form.Label>
                        <Form.Control as="textarea" placeholder="500자 이내로 작성하세요" rows={5}/>
                    </Form.Group>
                </div>
                <Button className="mt-2" variant="primary" type="submit" block>가입하기</Button>
            </Form>
        </Container>
    </>
    );
}

export default OwnerJoin;