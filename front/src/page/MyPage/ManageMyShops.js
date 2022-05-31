import React from 'react'
import { Container, Form, Row} from 'react-bootstrap'
import Header from '../../component/HeaderOwner'
import SecondHeader from "../../component/SecondHeader";
import SelectShopsContainer from "../../container/SelectShopsContainer";






const ManageMyShops = () => {

    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader title="가게 관리" link="/owner/mypage/registshop" buttonName="추가"/>
                </Row>

                <Form.Label>가게 선택</Form.Label>
                <SelectShopsContainer uId={1}/>

            </Container>
        </>
    )
}

export default ManageMyShops