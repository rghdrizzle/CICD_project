import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getScrapEventsById} from '../modules/posts';
import EventListItemScrap from "../component/EventListItemScrap";
import {reducerUtils} from "../lib/asyncUtils";


const EventListItemScrapContainer = ({uId}) => {


    const {data, loading, error} = useSelector(state => state.posts.post[uId] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getScrapEventsById(uId));
    }, [uId, dispatch])



    if (loading && !data) return '로딩중'
    if (error) return 'error'
    if (!data) return null


    return (
        <>
            <EventListItemScrap lists={data}/>
        </>

    )

}
export default EventListItemScrapContainer