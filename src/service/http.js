import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

const get = (url, config) => {
    return axios.get(url, config)
    .then(data)
    .catch(catchErr)
};

const post = (url, body, config) => {
    return axios.post(url, body, config)
    .then(data)
    .catch(catchErr);
};

const put = (url, body, config) => {
    return axios.put(url, body, config)
    .then(data)
    .catch(catchErr);
};

const del = (url, config) => {
    return axios.delete(url, config)
    .then(data)
    .catch(catchErr)
};

const data = (response) => {
    //  if (response.status === 401) {
    //     store.dispatch(/* Logout action */)
    // }
    return response.data;
};

const catchErr = (error) => {
    console.warn(`Error in Http, ${error.message || error}`);
};


export {
	get,
	post,
	put,
	del
};