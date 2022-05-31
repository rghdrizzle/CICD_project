import React from 'react';
import styled from 'styled-components';
import {AiFillHeart} from 'react-icons/ai';
import {useHistory} from 'react-router-dom';
import logo from '../static/image/chicken.jpg';

const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const EventListItemScrap = ({lists}) => {
    let history = useHistory();
    console.log("lists", lists)
    return (
        <>

            {lists.result.map(e => (
                    <div onClick={() => history.push({pathname:`/event/detail/${e.event_id}`, state: {eName: e.name}})}>
                        <div className="col-4">
                            <img
                                src={logo}
                                alt=""
                                style={{width: '100%', heigh: '100%'}}
                            />
                        </div>
                        <div className="col-8">
                            <div className="font-weight-bold">
                                <h5>{e.name}<button onClick={() => history.push(`/scrap/delete/${e.event_id}`)}>x</button></h5>

                            </div>
                            <div className="d-flex">
                                <div className="d-flex flex-column mr-5">
                                    {/*<MinDiv>{e.shop.name}</MinDiv>*/}
                                    <MinDiv>{e.start_datetime.toString().split(/T/)[0]} ~ {e.end_datetime.toString().split(/T/)[0]}</MinDiv>
                                    <MinDiv>{e.created_datetime.toString().split(/T/)[0]}</MinDiv>
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
            )}

        </>
    );
};

export default EventListItemScrap;
