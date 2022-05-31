import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents} from '../modules/posts';
import EventShowAll from "../component/EventShowAll";


const EventShowAllContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    return (
        <EventShowAll lists={data}/>
    )

}
export default EventShowAllContainer