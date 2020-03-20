import axios from 'axios';

export const req = (httpMethod, url, requestData) => {
  const axiosConfig = {
    method: httpMethod,
    url,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    responseType: 'json',
    data: requestData,
  };
  return axios(axiosConfig).then(({ data }) => {
    if (!data) {
      return null;
    }
    return data;
  });
};
