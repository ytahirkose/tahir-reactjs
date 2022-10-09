import { axiosInstance } from './index';

const createSession = async (data:any) => {
  const response = await axiosInstance.post(`/createSession`, data);
  return response;
};
const getLocations = async (data:any) => {
  const response = await axiosInstance.get(`/getLocations/${data}`);
  return response;
};

export default {
  createSession,
  getLocations
};
