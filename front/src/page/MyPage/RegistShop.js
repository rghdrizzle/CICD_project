import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs'
import { useHistory} from 'react-router-dom'
import Header from '../../component/HeaderOwner'
import ShopRegistContainer from "../../container/ShopRegistContainer";

const SecondHeader = () => {
    let history = useHistory();

    return (
        <Row>
            <button
                onClick={() => history.goBack()}
                type="button"
                className="btn btn-link border-dark"
            >
                <BsChevronLeft className="text-dark"/>
            </button>
            <h4>가게 등록</h4>
        </Row>
    );
};

const RegistShop = () => {
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader/>
                </Row>
                <ShopRegistContainer/>
            </Container>
        </>
    );
};



export default RegistShop;
