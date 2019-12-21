export const fetchData = async function ({url, method, data, params}) {
   let response = {};
   try {
     response = await axios({
       url: url,
       methods: method,
       data: data,
       params: params
     })
   } finally {
     const { data={} } = response;
     const { data: resData } = data;

     return resData;
   }
}