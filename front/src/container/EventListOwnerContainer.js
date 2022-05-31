import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getEvents} from '../modules/posts';
import {reducerUtils} from "../lib/asyncUtils";
import OwnerEventListItem from "../component/OwnerEventListItem";


const EventListOwnerContainer = ({uId}) => {
    const {data, loading, error} = useSelector(state => state.posts.posts || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(getOwnerEventListById(uId));
        dispatch(getEvents());
    }, [uId, dispatch])
    if (loading && !data) return '로딩중'
    if (error) return 'error'
    if (!data) return null
    return (
        <OwnerEventListItem lists={data}/>
    )

}
export default EventListOwnerContainer