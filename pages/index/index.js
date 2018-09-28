//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loading: false,
    dataList: []
  },
  //事件处理函数
 
  onLoad: function () {
    this.getData();
  },
  // 上拉更新
  updateList: function() {
    const _this = this;
    wx.showNavigationBarLoading(); 
    ;
    setTimeout(function () { wx.hideNavigationBarLoading(); _this.getData() }, 1000);
  },
  //下滑加载
  appendNextPageList: function() {
    const _this = this;
    console.log(111)
    // 导航条上显示加载效果
    wx.showNavigationBarLoading(); 

    wx.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed',
      header: {  'Content-Type':  'application/json'  },
      data: {},
      success:  function (res) {
        wx.hideNavigationBarLoading();
        _this.data.dataList = _this.data.dataList.concat(res.data.data);
        _this.setData({
          dataList: _this.data.dataList
        })
      }
    })
  },
  // 获取数据
  getData() {
    // 使用本地fake数据实现加载效果
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
    const _this = this;
    wx.request({  
      url:  'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed', 
      header: { 'Content-Type': 'application/json' }, 
      data: {},  
      success: function(res) {
        setTimeout(function () {
          wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 500
          })
        }, 500)
        _this.setData({
          dataList: res.data.data
        })
      }
    })
  }
})
