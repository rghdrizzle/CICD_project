import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getMyShopsById} from '../modules/posts';
import {reducerUtils} from "../lib/asyncUtils";
import SelectMyShops from "../component/SelectMyShops";


const SelectMyShopsContainer = ({uId}) =>{
    const {data, loading, error} = useSelector(state => state.posts.post[uId] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyShopsById(uId));
    }, [uId, dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    return (
        <SelectMyShops lists={data}/>
    )

}
export default SelectMyShopsContainer