import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../static/image/home.png';

const Header = () => {
    let history = useHistory();
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <Image src={logo} onClick={() => history.push('/')}></Image>
                </Col>
                <Col>
                    <Row className="justify-content-center">
                        <Button onClick ={()=>history.push("/owner/mypage")} className="col-xs-5" variant="link" value="마이페이지">
                            마이페이지
                        </Button>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;