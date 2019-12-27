import axios from 'axios';

export const handleAxios = async function ({ url, method, data, params }) {
  let response = {};

  try {
    if (method === "get") {
      response = await axios({
        url: url,
        method: method,
        params: params
      })
    } else if (method === 'post') {
      response = await axios({
        url: url,
        method: method,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        data: JSON.stringify(data)
      })
    }
  } catch (e) {
    console.log(e)
  } finally {
    const { data = [] } = response;

    return data;
  }
}