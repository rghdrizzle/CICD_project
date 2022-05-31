import React from "react";
import {Button, Col, Form} from "react-bootstrap";
import axios from "axios";

const handleOnSubmit = async (e) =>{
    console.log("handle", e.target[1].value)
    e.preventDefault()
    console.log("handle", e.target[2].value)
    const data = {
        shop_id: 1,
        name: e.target[1].value,
        start_datetime: e.target[2].value,
        end_datetime: e.target[3].value,
        event_content: e.target[4].value,
        image_id: 40

    }
    axios.post("http://localhost:5000/owner/event/create", data)
}


const EventRegist = ({uId, sId, sName}) => {
    return (

                <Form onSubmit={handleOnSubmit} name="registEvent" id="registEvent">
                    <Form.Group controlId="formShopName">
                        <Form.Label>가게명</Form.Label>
                        <Form.Control name="sName" type="input" placeholder="가게명 입력" defaultValue={sName}/>
                    </Form.Group>

                    <Form.Group controlId="formEventName">
                        <Form.Label>이벤트명</Form.Label>
                        <Form.Control name="eName" type="input" placeholder="이벤트명 입력"/>
                    </Form.Group>

                    <Form.Label>이벤트 기간</Form.Label>
                    <Form.Row className="align-items-center">
                        <Form.Group as={Col} controlId="formEventStart">
                            <Form.Label>시작일</Form.Label>
                            <Form.Control name="startDate" type="date"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEventEnd">
                            <Form.Label>종료일</Form.Label>
                            <Form.Control name="endDate" type="date"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formEventDetail">
                        <Form.Label>이벤트 내용</Form.Label>
                        <Form.Control name="eContent" as="textarea" rows={4}/>
                    </Form.Group>

                    <Form.Group controlId="formEventDetail">
                        <Form.File name="eFile" id="formFile" label="사진첨부"/>
                    </Form.Group>
                    <Button type="submit">저장</Button>

               </Form>



    )
}

export default EventRegist;