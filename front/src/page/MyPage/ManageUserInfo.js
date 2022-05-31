import React from 'react'
import { Container, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs';
import {useHistory} from 'react-router-dom';
import Header from "../../component/HeaderCustomer";
import UserInfoContainer from "../../container/UserInfoContainer";

const SecondHeader = ({props}) => {
      
    return (
        <Row>
            <button onClick={() => window.history.back()} type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
            {/* <Button onClick={() => window.history.back()}>◁</Button> */}
            {/* <Button>등록</Button> */}
            <h4>내 정보 수정</h4>
        </Row>
    )
}

const ManageUserInfo = () => {
    let history = useHistory();
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader/>
                </Row>
                <UserInfoContainer uId={1}/>
            </Container>
            <text onClick={() => history.push("owner/change-password")}></text>
        </>
    )
}

export default ManageUserInfo