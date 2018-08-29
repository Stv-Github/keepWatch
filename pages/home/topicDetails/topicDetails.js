// pages/home/topicDetails/topicDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item: {
            followState: true,//关注状态
            collectionState: true//收藏状态
        },
        isShow: true,//评论是否显示
        currentTab: 0,
        txtPadding:10
    },

    // 用户主页
    GoUserHome: function () {
        wx.navigateTo({
            url: '../../common/userHomePage/userHomePage'
        })
    },

    // 关注收藏状态
    allState: function(){
        this.setData({
            'item.followState': false
        })
    },
    // 评论、转发、点赞 切换
    swichNav: function(e){
        this.setData({
            currentTab: e.target.dataset.current
        })
        if (e.target.dataset.current == '0'){
            this.setData({
                sliderOffset: 30
            })
        } else if (e.target.dataset.current == '1'){
            this.setData({
                sliderOffset: 170
            })
        }else{
            this.setData({
                sliderOffset: 640
            })
        }
    },
    // 获取textarea焦点
    bindfocus:function(e){
        console.log(e)
        this.setData({
            // txtPadding: 20
        })
    },
    // 失去textarea焦点
    bindblur:function(e){
        this.setData({
            // txtPadding: 10
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