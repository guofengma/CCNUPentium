// component/reserve.js
var app = getApp();
const { $Toast } = require('../../../dist/base/index');
const { $Message } = require('../../../dist/base/index');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    commit: function(e){
      var detail = e.detail.value.detail;
      console.log(e);
      app.wxRequest('POST', '/user/reserve/', { detail}, function (res) {
        if (res.result_code == 1) {
          $Toast({
            content: '警告的提示',
            type: 'success',
            duration: 1
          });
          wx.redirectTo({
            url: '/pages/user/user?page=reservation',
          })
        }
        else if (res.result_code==2){
          $Message({
            content: '您还有未完成订单',
            type: 'error',
            duration: 5
          });
        }
      })
    }
  }
})
