import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories} from '../modules/posts';
import {reducerUtils} from "../lib/asyncUtils";
import SelectCategory from "../component/SelectCategory";


const SelectCategoriesContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.posts || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    return (
        <SelectCategory lists={data}/>
    )

}
export default SelectCategoriesContainer