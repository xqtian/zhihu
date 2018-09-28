// components/feed/feed.js
Component({
  /**
  * 组件属性列表
  */
  properties: {
    feed_source_img: {
      type: String,
      value: ''
    },
    feed_source_name: {
      type: String,
      value: ''
    },
    feed_source_txt: {
      type: String,
      value: ''
    },
    question: {
      type: String,
      value: ''
    },
    answer_ctnt: {
      type: String,
      value: ''
    },
    good_num: {
      type: String,
      value: ''
    },
    comment_num: {
      type: String,
      value: ''
    },
  },

  /**
  * 组件的初始数据
  */
  data: {},

  /**
  * 组件方法列表
  */
  methods: {
    toQuestion: function() {
      wx.navigateTo({
        url: '../../pages/question/question',
      })
    },
    toAnswer: function() {
      wx.navigateTo({
        url: '../../pages/answer/answer',
      })
    }
  }
})