import logo from "../static/image/chicken.jpg";
import {Link, useHistory} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import React from "react";
import styled from "styled-components";

const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const EventShowAll = ({lists}) => {
    let history = useHistory();

    return (

        lists.map(e => (
                <div onClick={() => history.push(`/event/detail/${e.event_id}`)}>
                    <div className="col-4">
                        <img
                            src={logo}
                            alt=""
                            style={{width: '100%', heigh: '100%'}}
                        />
                    </div>
                    <div className="col-8">
                        <div className="font-weight-bold">
                            <h5>{e.event.name}</h5>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex flex-column mr-5">
                                <MinDiv>{e.shop.name}</MinDiv>
                                <MinDiv>{e.start_datetime} ~ {e.end_datetime}</MinDiv>
                                <MinDiv>{e.created_datetime}</MinDiv>
                            </div>
                            <div className="d-flex flex-column justify-content-end">
                                <div className="d-flex">
                                    <AiFillHeart className="text-danger mr-1"/>
                                    <MinDiv>{e.likes_count}</MinDiv>
                                </div>
                                {/*거리계산*/}
                                <MinDiv>150m</MinDiv>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    )
}

export default EventShowAll;