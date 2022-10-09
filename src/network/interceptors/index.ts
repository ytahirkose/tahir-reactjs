import Cookie from "js-cookie";
import { toast } from "react-toastify";

// @ts-ignore
export const isHandlerEnabled = (config = {}) => (!(config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled));

export const requestHandler = (request:any) => {
  if (isHandlerEnabled(request)) {
    request.headers = {}
    // Modify request here
    // store.dispatch(setLoader(true));
  }
  return request;
};

export const successHandler = (response:any) => {
  if (isHandlerEnabled(response)) {
    // Handle responses
    // store.dispatch(setLoader(false));
  }
  return response;
};

export const errorHandler = (error:any) => {
  toast.dismiss();
  if (error.response && error.response.data && error.response.data.description) {
    toast.error(error.response.data.description);
  }
  if (error.response && error.response.data && error.response.data.message) {
    toast.error(error.response.data.message);
  }
  return Promise.reject({...error});
};
