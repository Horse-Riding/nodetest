import axios from 'axios';
import Qs from 'qs';

let vuehttp:any;
if (typeof axios.create === 'function') {
  vuehttp = axios.create({
    transformRequest: [function (data) {
      data = Qs.stringify(data);
      return data;
    }],
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
}
function aget(url:string, params:object) {
  let _url:string = url;
  return new Promise((resolve, reject) => {
    vuehttp.get(_url, params).then(function (response:any) {
      resolve(response.data);
    }).catch(function (err:object) {
        reject(err);
      });
  });
}

function apost(url:string, params:object) {
  let _url:string = url;
  return new Promise((resolve, reject) => {
    vuehttp.post(_url, params)
    .then(function (response:any) {
      resolve(response.data);
    }).catch(function (err:any) {
        console.log(err);
        if (err.response.status === 500) {
          console.log(err);
        }
        alert('内部服务器错误');
        reject(err);
      });
  });
};

export default {
  aget,
  apost
};
