import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShopById} from '../modules/posts';
import {reducerUtils} from "../lib/asyncUtils";
import ShopManage from "../component/ShopManage";


const ShopManageContainer = ({sId}) =>{
    const {data, loading, error} = useSelector(state => state.posts.post[sId] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShopById(sId));
    }, [sId, dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    return (
        <ShopManage lists={data}/>
    )

}
export default ShopManageContainer