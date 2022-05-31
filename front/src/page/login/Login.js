import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import '../../App.css';
import Header from '../../component/Header';

const Login = () => {
  let history = useHistory();

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
            <Button variant="primary" type="submit" size="sm" block>
              로그인
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Button
              variant="link"
              onClick={() => history.push('/mypage/customer')}
            >
              마이페이지
            </Button>
          </div>
          <div className="text-center                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ter mt-3">
            <Button
              variant="link"
              onClick={() => history.push('/password/change')}
            >
              비밀번호 변경
            </Button>
          </div>
          <div className="text-center mt-3">
            <Button
              variant="link"
              onClick={() => history.push('/customer/join')}
            >
              고객 회원가입
            </Button>
          </div>
          <div className="text-center mt-3">
            <Button variant="link" onClick={() => history.push('/owner/join')}>
              사장님 회원가입
            </Button>
          </div>

          <div className="text-center mt-3">
            {/* <Link to="/mypage/customer"> */}
            <Button
              variant="link"
              onClick={() => history.push('/mypage/customer')}
            >
              마이페이지
            </Button>
            {/* </Link> */}
          </div>
          <div className="text-center mt-3">
            {/* <Link to="/mypage/customer"> */}
            <Button
              variant="link"
              onClick={() => history.push('/owner/mypage')}
            >
              사장님 마이페이지
            </Button>
            {/* </Link> */}
          </div>
          <div className="text-center mt-3">
            {/* <Link to="/mypage/customer"> */}
            <Button variant="link" onClick={() => history.push('/admin')}>
              관리자
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
