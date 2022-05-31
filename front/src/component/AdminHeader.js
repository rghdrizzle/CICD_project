import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../static/image/home.png';

const Header = () => {
  let history = useHistory();
  return (
    <Container className="mt-3" fluid>
      <Row>
        <Col>
          {/* <Link to="/"> */}
          <Image src={logo} onClick={() => history.push('/') }></Image>
          {/* </Link> */}
        </Col>
        <Col className="text-center">
          {/* <Link to="/login"> */}
          <Button
            className="col-xs-5"
            variant="link"
            style={{ color: 'black' }}
            onClick={() => history.push('/login')}
          >
            로그인
          </Button>
          {/* </Link> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
