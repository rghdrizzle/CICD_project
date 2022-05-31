import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesImage} from '../modules/posts';
import Home from "../component/Home";
import {reducerUtils} from "../lib/asyncUtils";


const HomeContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.posts || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoriesImage());
    }, [dispatch])

    if(loading) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    return (
        <Home lists={data}></Home>
    )

}
export default HomeContainer