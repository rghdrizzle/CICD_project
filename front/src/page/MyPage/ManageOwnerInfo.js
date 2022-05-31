import React from 'react'
import {Button, Container, Form, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs';
import {useHistory} from 'react-router-dom';
import Header from '../../component/HeaderOwner';
import userData from "../../dummy/dummyDataUser";
import UserInfoContainer from "../../container/UserInfoContainer";

const SecondHeader = () => {
    let history = useHistory();

    return (
        <Row>
            <button onClick={() => history.goBack()} type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
            {/* <Button onClick={() => window.history.back()}>◁</Button> */}
            {/* <Button>등록</Button> */}
            <h4>내 정보 수정</h4>
        </Row>
    )
}

const ManageUserInfo = (match) => {
    const user_id = localStorage.getItem('user_id')
    let history = useHistory();
    const userInfo = userData[0]
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader/>
                </Row>
                <UserInfoContainer params={user_id}/>
            </Container>
            <Button onClick={() => history.push("owner/change-password")}></Button>
        </>
    )
}

export default ManageUserInfo