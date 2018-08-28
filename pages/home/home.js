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
            { titleText: '最初', iconBgColor: '#DB72AB', iconSrc:'../../images/icon/icon.png'},
            { titleText: '成长', iconBgColor: '#F55B64', iconSrc:'../../images/icon/icon.png'},
            { titleText: '燃火', iconBgColor: '#AA7DE3', iconSrc:'../../images/icon/icon.png'},
            { titleText: '离歌', iconBgColor: '#94DB88', iconSrc:'../../images/icon/icon.png'},
            { titleText: '相守', iconBgColor: '#E6C573', iconSrc:'../../images/icon/icon.png'},
            { titleText: '前行', iconBgColor: '#62A160', iconSrc:'../../images/icon/icon.png'},
            { titleText: '渴盼', iconBgColor: '#57B6D4', iconSrc:'../../images/icon/icon.png'},
            { titleText: '陪伴', iconBgColor: '#627EC4', iconSrc:'../../images/icon/icon.png'},
        ],
        msgList: [
            { url: "url", title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
            { url: "url", title: "悦如公寓三周年生日趴邀你免费吃喝欢唱" },
            { url: "url", title: "你想和一群有志青年一起过生日嘛？" }
        ]
    },

    // 查看全部热门话题
    GoHotTopicList: function(){
        wx.navigateTo({
            url: './hotTopicList/hotTopicList',
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