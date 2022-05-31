import React from 'react'
import {Button, Container, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs'
import Header from '../component/HeaderOwner'
import EventRegistContainer from "../container/EventRegistContainer";


const SecondHeader = () => {
    return (
        <Row>
            <button onClick={() => window.history.back()} type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
            <h4>이벤트 등록</h4>
            {/*TODO: 2021.04.18 form submit 버튼을 form 밖으로 꺼냈기 때문에 잘 동작하는지 확인 - sunbo*/}
            <Button onClick={() => document.getElementById('registEvent').submit()} >등록</Button>
            {/*<Button onClick={() => window.history.back()}>등록</Button>*/}
            {/* <Button onClick={() => this.handleSubmit()}></Button> */}
        </Row>
    )
}




const EvnetRegist = () => {
    //user_id 와 Shop_id
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader/>
                </Row>
                <EventRegistContainer uId={1}/>
            </Container>
        </>
    )
}

export default EvnetRegist