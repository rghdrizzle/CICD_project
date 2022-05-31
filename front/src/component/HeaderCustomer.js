import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import logo from '../static/image/home.png';
import { useHistory } from 'react-router-dom';

const Header = () => {
    let history = useHistory();
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <Image src={logo} onClick={() => history.push('/')}></Image>
                </Col>
                <Col className="text-center">
                        <Button
                            onClick = {() => history.push("/mypage/customer")}
                            className="col-xs-5"
                            variant="link"
                            style={{ color: 'black' }}
                        >
                            마이페이지
                        </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
