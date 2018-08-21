// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        autoplay: true, //是否自动播放
        circular: true, //是否循环播放
        indicatorColor: '#FFF', //指示点颜色
        indicatorActiveColor: '#D4237A', //当前选中的指示点颜色
        indicatorDots: true, //是否显示面板指示点
        interval: '3000', //滑动动画时长(毫秒)
        imgArr: [{
                src: '../../images/banner/1.jpg'
            },
            {
                src: '../../images/banner/2.jpg'
            },
            {
                src: '../../images/banner/3.jpg'
            },
            {
                src: '../../images/banner/4.jpg'
            },
            {
                src: '../../images/banner/5.jpg'
            },
            {
                src: '../../images/banner/6.jpg'
            }
        ],
        classifyArr: [
            { titleText: '春', iconBgColor: '#DB72AB', iconSrc:'../../images/icon/icon.png'},
            { titleText: '夏', iconBgColor: '#F55B64', iconSrc:'../../images/icon/icon.png'},
            { titleText: '秋', iconBgColor: '#AA7DE3', iconSrc:'../../images/icon/icon.png'},
            { titleText: '冬', iconBgColor: '#94DB88', iconSrc:'../../images/icon/icon.png'},
            { titleText: '朝', iconBgColor: '#E6C573', iconSrc:'../../images/icon/icon.png'},
            { titleText: '思', iconBgColor: '#62A160', iconSrc:'../../images/icon/icon.png'},
            { titleText: '暮', iconBgColor: '#57B6D4', iconSrc:'../../images/icon/icon.png'},
            { titleText: '想', iconBgColor: '#627EC4', iconSrc:'../../images/icon/icon.png'},
        ]
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