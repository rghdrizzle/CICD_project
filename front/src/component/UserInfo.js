import React from 'react';
import { Button, Form, Row} from 'react-bootstrap';
import {useHistory} from "react-router-dom";


const UserInfo = ({lists}) => {
    let history = useHistory();
    return (
        <>
                <Form>
                    <Form.Group>
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="input" defaultValue={lists.name} onChange={(event) => {
                            lists.name = event.target.value
                        }}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control type="input" defaultValue={lists.phone} onChange={(event) => {
                            lists.phone = event.target.value
                        }}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" value={lists.email} disabled/>
                    </Form.Group>
                    <Row>
                        <Button variant="link" onClick={() => history.push(`/owner/mypage/changepw`)}>비밀번호 변경</Button>
                    </Row>
                    <Row>
                        <Button variant="link" type="submit">적용하기</Button>
                    </Row>
                </Form>
        </>

    );
};

export default UserInfo;
