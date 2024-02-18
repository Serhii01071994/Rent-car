import axios from 'axios';

export const fetchAdvert = axios.create({
  baseURL: 'https://65d10382ab7beba3d5e40154.mockapi.io/adverts',
});

export const getAllCars = async () => {
  const {data} = await fetchAdvert.get('/adverts');
  return data;
};

export const getAllAdvert = async page => {
  const { data } = await fetchAdvert.get(`/adverts?limit=12&p=${page}`);

  return data;
};

export const getCarById = async carId => {
  const { data } = await fetchAdvert.get(`/adverts?id=${carId}`);
  return data.pop();
};
