import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import logo from '../static/image/home.png';
import {useHistory} from 'react-router-dom'
const Header = () => {
    let history = useHistory();
    return (
        <Container className="mt-3">
            <Row>
                <Col>

                    <Image src={logo} onClick={() => history.push('/admin')}></Image>

                </Col>
                <Col>
                    <Row className="justify-content-center">
                        <Button className="col-xs-5" variant="link" value="로그아웃">로그아웃</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;