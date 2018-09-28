// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: 0,
    imgUrls: [
      '../../asset/images/24213.jpg',
      '../../asset/images/24280.jpg',
      '../../asset/images/slide.jpg'
    ],
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getData();
    console.log(this.data.currentNavtab)
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
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed',
      header: {  'Content-Type':  'application/json'  },
      data: {},
      success:  function (res) {
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
  },
  switchTab(e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.index
    });
    // this.setData({
    //   currentNavtab: index
    // });
  }
})