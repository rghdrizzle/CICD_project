import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getEventById } from '../modules/posts';
import EventDetail from '../component/EventDetail';
import { reducerUtils } from '../lib/asyncUtils';

const EventDetailContainer = ({ eId }) => {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[eId] || reducerUtils.initial(),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventById(eId));
  }, [dispatch, eId]);

  if (loading || !data) return '로딩중';
  if (error) return 'error';
  if (!data) return null;
  return <EventDetail lists={data} />;
};
export default EventDetailContainer;
