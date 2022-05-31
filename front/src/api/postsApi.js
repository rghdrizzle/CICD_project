import axios from 'axios';

export const getEvents = async () => {
  // event + image
  const response = await axios.get(`http://localhost:5000/event/read-all`);
  return response.data;
};

export const getCategoriesImage = async () => {
  // shopid , shopname
  const response = await axios.get(`http://localhost:5000`);
  console.log('api', response.data);
  return response.data;
};

export const getCategories = async () => {
  // category + image
  const response = await axios.get(`http://localhost:5000/category/read-all`);
  return response.data;
};
export const getScrapEventsById = async (id) => {
  // user_id
  // event + image + scrap
  const response = await axios.get(`http://localhost:5000/scrap/${id}/list`);
  return response.data;
};

export const getEventById = async (id) => {
  // evnet_id
  // event + shop + scrap
  const response = await axios.get(`http://localhost:5000/event/${id}/detail`);
  console.log('event', response.data);
  return response.data;
};

export const getShopById = async (id) => {
  //shop_id
  const response = await axios.get(`http://localhost:5000/shop/read/${id}`);
  return response.data;
};

export const getMyShopsById = async (id) => {
  //user_id
  const response = await axios.get(
    `http://localhost:5000/owner/shop/${id}/list`,
  );
  return response.data;
};

export const getUserById = async (id) => {
  // user_id
  console.log(id);
  const response = await axios.get(`http://localhost:5000/user/read/${id}`);
  console.log('api', response.data);
  return response.data;
};

export const getCategoryListsById = async (cId) => {
  // category_id
  const response = await axios.get(
    `http://localhost:5000/category/${cId}/list`,
  );
  console.log('getCategoryListsById api', response.data.result);
  return response.data.result;
};

export const getOwnerEventListById = async (id) => {
  // user_id
  const response = await axios.get(
    `http://localhost:5000/owner/event/${id}/list`,
  );
  return response.data;
};
