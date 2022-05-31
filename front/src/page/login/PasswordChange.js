import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../../App.css';
import Header from '../../component/Header';

const PasswordChange = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="mt-5">
          <Form className="mt-3">
            <Form.Group contorlid="formEmail">
              <Form.Control type="email" placeholder="이메일을 입력해주세요" />
            </Form.Group>
            <Form.Group contorlid="formPassword">
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </Form.Group>
            <Form.Group contorlid="formPassword">
              <Form.Control
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
              />
            </Form.Group>
            <Button variant="primary" type="submit" size="sm" block>
              비밀번호 변경
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default PasswordChange;
