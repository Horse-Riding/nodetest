import serverAdd from './address';
let api = serverAdd.address + 'list/';
// 新闻发布系统接口
export default {
  add: api + 'add.html',
  list: api + 'list.html',
  modify: api + 'modify.html',
  del: api + 'del.html'
};
