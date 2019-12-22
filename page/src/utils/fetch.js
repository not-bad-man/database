import axios from 'axios';

export const fetchData = async function ({url, method, postData, params}) {
   let response = {};
   try {
     response = await axios({
       url: url,
       method: method,
       data: postData,
       params: params
     })
   } catch (e) {
    console.log(e)
   } finally {
     const { data=[] } = response;

     return data;
   }
}