import {Button, Col, Form} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";

let lat;
let lon;

let categoryId

const Categories = ({lists}) => {
    // TODO : 2021.04.20 usestate 글로벌하게 만들기 - sunbo
    const [selected, setSelected] = useState('');

    return (
        <select
            value={selected}
            onChange={(event) => {
                setSelected(event.target.value)
                getCId(event.target.value)
            }}
        >
            {lists.map((list) => (
                <option key={list.name} value={list.category_id} >
                    {list.name}
                </option>
            ))}
        </select>
    );
};

const getCId = (cId) => {
    categoryId = cId
}

const handleOnSubmit = async (e) =>{
    e.preventDefault()

    const data = {
        name: e.target[0].value,
        tel: e.target[1].value,
        register_number: e.target[2].value,
        start_time: e.target[3].value,
        end_time: e.target[4].value,
        holiday: e.target[5].value,
        shop_content: e.target[11].value,
        zonecode: 13245,
        basic_address: "기본주소",
        road_address: "road 주소",
        detail_address: e.target[9].value,
        latitude: lat,
        longitude: lon,
        category_id: categoryId,
        user_id: 1
    }
    axios.post("http://localhost:5000/shop/create", data)
}

const ShopRegister = ({lists, latitude, longitude}) =>{
    lat = latitude
    lon = longitude
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group>
                <Form.Label>가게이름</Form.Label>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>사업자등록번호</Form.Label>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Row className="align-items-center">
                {/*TODO: 2021.04.28 여기도 date의 format에 따라서 값 불러오기. 실패시 react-datePicker 사용 -sunbo*/}
                <Form.Label>영업시간</Form.Label>
                <Form.Group as={Col} controlId="formEventStart">
                    <Form.Label>시작시간</Form.Label>
                    <Form.Control type="time"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formEventEnd">
                    <Form.Label>종료시간</Form.Label>
                    <Form.Control type="time"/>
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Label>휴무일</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Label>주소</Form.Label>
            <Form.Group as={Col}>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Group as={Col}>
                <button>우편번호</button>
            </Form.Group>
            <Form.Group>
                <Form.Control type="input" defaultValue="찾아서 자동입력"/>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>카테고리</Form.Label>
                <Categories lists={lists}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>상세정보</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <Button type="submit">저장하기</Button>
        </Form>
    )
}

export default ShopRegister