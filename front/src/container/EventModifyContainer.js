import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getEventById} from '../modules/posts';
import {reducerUtils} from "../lib/asyncUtils";
import EventModify from "../component/EventModify";


const EventModifyContainer = ({eId}) => {
    const {data, loading, error} = useSelector(state => state.posts.post[eId] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEventById(eId));
    }, [eId, dispatch])
    if (loading && !data) return '로딩중'
    if (error) return 'error'
    if (!data) return null
    return (
        <EventModify lists={data}/>
    )

}
export default EventModifyContainer