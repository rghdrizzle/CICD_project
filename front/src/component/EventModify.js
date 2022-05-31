import React from "react";
import {Col, Form} from "react-bootstrap";


const EventModify = ({lists}) => {

    return (

            <Form  id="registEvent">
                <Form.Group controlId="formShopName">
                    <Form.Label>가게명</Form.Label>
                    <Form.Control type="input" defaultValue={lists.shop.name} disabled></Form.Control>
                </Form.Group>

                <Form.Group controlId="formEventName">
                    <Form.Label>이벤트명</Form.Label>
                    <Form.Control type="input" defaultValue={lists.name}/>
                </Form.Group>

                <Form.Label>이벤트 기간</Form.Label>
                <Form.Row className="align-items-center">
                    {/*TODO: 2021.04.18 date의 format에 따라서 값 불러오기. 실패시 react-datePicker 사용 -sunbo*/}
                    <Form.Group as={Col} controlId="formEventStart" defaultValue={lists.start_datetime.toString().split(/T/)[0]}>
                        <Form.Label>시작일</Form.Label>
                        <Form.Control type="date" defaultValue="2021-04-03"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formEventEnd" defaultValue={lists.end_datetime.toString().split(/T/)[0]}>
                        <Form.Label>종료일</Form.Label>
                        <Form.Control type="date" defaultValue="2021-04-09"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formEventDetail">
                    <Form.Label>이벤트 내용</Form.Label>
                    <Form.Control as="textarea" rows={4} defaultValue={lists.event_content}/>
                </Form.Group>

                <Form.Group controlId="formEventDetail">
                    <Form.File id="formFile" label="사진첨부"/>
                </Form.Group>
                {/*<Button type="submit">등록</Button>*/}
            </Form>
            
        
    )
}

export default EventModify;