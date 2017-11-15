import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
const baseServer = 'https://371cc956-d122-46c2-9295-c110e6229b07.mock.pstmn.io';


const get = (url, config) => {
    return axios.get(`${baseServer}${url}`, config)
    .then(data)
    .catch(catchErr)
};

const post = (url, body, config) => {
    return axios.post(`${baseServer}${url}`, body, config)
    .then(data)
    .catch(catchErr);
};

const put = (url, body, config) => {
    return axios.put(`${baseServer}${url}`, body, config)
    .then(data)
    .catch(catchErr);
};

const del = (url, config) => {
    return axios.delete(`${baseServer}${url}`, config)
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