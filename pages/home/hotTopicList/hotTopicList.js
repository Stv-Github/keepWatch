// pages/home/hotTopicList/hotTopicList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    // 用户主页
    GoUserHome: function () {
        wx.navigateTo({
            url: '../../common/userHomePage/userHomePage'
        })
    },

    // 话题详情
    GoTopicDetails:function(){
        wx.navigateTo({
            url: '../topicDetails/topicDetails'
        })
    },
    // 操作菜单
    showActionSheet: function () {
        wx.showActionSheet({
            itemList: [
                '关注',
                '分享',
                '收藏',
                '举报'
            ],
            success: res => {
                console.log(res);
            },
            fail: err => {
                console.log(err);
            }
        })
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