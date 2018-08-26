// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [{
        grids_id: '1',
        grids_title: '签到',
      grids_icon: '../../images/icon/o-signIn.png'
      },
      {
        grids_id: '2',
        grids_title: '收藏',
        grids_icon: '../../images/icon/o-collection.png'
      },
      {
        grids_id: '3',
        grids_title: '积分',
        grids_icon: '../../images/icon/o-integral.png'
      },
      {
        grids_id: '4',
        grids_title: '帖子',
        grids_icon: '../../images/icon/o-myPost.png'
      },
      {
        grids_id: '5',
        grids_title: '公益',
        grids_icon: '../../images/icon/o-commonweal.png'
      },
    ],
    tabList: [
      {
        tabTitle: '邀请有礼',
        tabIcon: '../../images/icon/p-invite.png'
      },
      {
        tabTitle: '常见问题',
        tabIcon: '../../images/icon/p-problem.png'
      },
      {
        tabTitle: '用户反馈',
        tabIcon: '../../images/icon/p-feedback.png'
      },
      {
        tabTitle: '联系客服',
        tabIcon: '../../images/icon/p-customService.png'
      },
      {
        tabTitle: '关于我们',
        tabIcon: '../../images/icon/p-aboutUs.png'
      },
      {
        tabTitle: '设置',
        tabIcon: '../../images/icon/p-setUp.png'
      }
    ]
  },

  GoCommenDetail: function(e){
    if (e.currentTarget.dataset.tabtitle == '邀请有礼') {
      wx.navigateTo({
        url: './invite/invite?tabtitle=' + e.currentTarget.dataset.tabtitle
      })
    } else if (e.currentTarget.dataset.tabtitle == '常见问题') {
      wx.navigateTo({
        url: './problem/problem?tabtitle=' + e.currentTarget.dataset.tabtitle
      })
    } else if (e.currentTarget.dataset.tabtitle == '用户反馈'){
      wx.navigateTo({
        url: './feedback/feedback?tabtitle=' + e.currentTarget.dataset.tabtitle
      })
    } else if (e.currentTarget.dataset.tabtitle == '联系客服'){
      wx.makePhoneCall({
        phoneNumber: '15055122184',
      })
    } else if (e.currentTarget.dataset.tabtitle == '关于我们'){
      wx.navigateTo({
        url: './aboutUs/aboutUs?tabtitle=' + e.currentTarget.dataset.tabtitle
      })
    } else if (e.currentTarget.dataset.tabtitle == '设置'){
      wx.navigateTo({
        url: './setUp/setUp?tabtitle=' + e.currentTarget.dataset.tabtitle
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})