import React, {useEffect} from 'react'

import ShopRegister from "../component/ShopRegister";
import {useDispatch, useSelector} from "react-redux";
import {reducerUtils} from "../lib/asyncUtils";
import {getCategories} from "../modules/posts";


const ShopRegistContainer = () => {
    const latitude = localStorage.getItem('lat')
    const longitude = localStorage.getItem('lon')

    const {data, loading, error} = useSelector(state => state.posts.posts || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null

    return (
        <ShopRegister lists={data} latitude={latitude} longitude={longitude}/>
    )

}

export default ShopRegistContainer