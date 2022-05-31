import React from 'react';
import {Container, Col, Button, Form} from 'react-bootstrap';
import Header from '../../component/Header';

const CustomerJoin = () => {
    return (
        <>
            <Header />
            <Container className="mt-5">
                <Form>
                    <div>
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
                            <Form.Control type="password" placeholder="비밀번호를 다시 입력해주세요"/>
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
                        <Button variant="primary" type="submit" block>가입하기</Button>
                    </div>
                </Form>
            </Container>
        </>
    );
}

export default CustomerJoin;