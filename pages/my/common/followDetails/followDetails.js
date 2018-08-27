// pages/my/common/followDetails/followDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        intervalLeft: 0,
        followState: true
    },

    tabCurrent: function(e) {
        this.setData({
            current: e.target.dataset.current
        });
        if(e.target.dataset.current == '0'){
            this.setData({
                intervalLeft: 0
            });
        }else{
            this.setData({
                intervalLeft: 100
            });
        }
    },
    durationChange: function(e) {
        this.setData({
            current: e.detail.current
        });
        if (e.detail.current == '0') {
            this.setData({
                intervalLeft: 0
            });
        } else {
            this.setData({
                intervalLeft: 100
            });
        }
    },

    GoUserHomePage: function(){
        wx.navigateTo({
            url: '../../../common/userHomePage/userHomePage'
        })
    },
    allState: function(e){
        console.log(e);
        console.log(this);
        this.setData({
            followState: false
        });
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