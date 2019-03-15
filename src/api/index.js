import { get, post } from "../utils/request";

//获取首页的数据
export  function getlist(data) {
  return get({
    url: "",
    data: data
  });
}
export  function gett(data) {
  return post({
    url: "",
    data: data
  });
}
