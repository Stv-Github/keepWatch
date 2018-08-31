var app = getApp();
var common = require('../../../common.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShow: true, //评论是否显示
        currentTab: 0,
        txtPadding: 10,
        hotTopDetails: {
            avatarId: 1, //用户id
            avatarUrl: '../../../images/icon/portrait1.png', //用户头像
            nickName: '请叫我Steven', //用户昵称
            publishTime: '昨天09:41', //发表时间
            ArticleTitle: '我是标题', //文章标题
            //文章内容
            ArticleContent: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consequat. ',
            ArticleImgList: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F74%2F05%2F99C58PICYck.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185413&di=0d0acdebf0f532edd0fcdb76265623c5&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2Fimg013%2Fv3%2F2%2Fd%2F61.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185413&di=55835ae37fdc95a317b03f28162c0de1&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201307%2F12%2F20130712224237_nSjht.jpeg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185410&di=e28cc03d2ae84130eabc26bf0fc7495f&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150814%2F0005018308986502_b.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F74%2F05%2F99C58PICYck.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185413&di=0d0acdebf0f532edd0fcdb76265623c5&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2Fimg013%2Fv3%2F2%2Fd%2F61.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185413&di=55835ae37fdc95a317b03f28162c0de1&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201307%2F12%2F20130712224237_nSjht.jpeg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185410&di=e28cc03d2ae84130eabc26bf0fc7495f&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150814%2F0005018308986502_b.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185410&di=e28cc03d2ae84130eabc26bf0fc7495f&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150814%2F0005018308986502_b.jpg'
            ], //文章图片
            readingNum: '23.3k', //阅读数量
            commentsNum: '5.3w', // 评论数量
            collectionNum: '3563', //收藏数量
            homeCity: '北京', //家乡城市或所在的城市
            followState: true, //关注状态
        }
    },

    // 关注
    loginInfo: function() {
        if (!app.globalData.userInfo) {
            wx.getUserInfo({
                success: res => {
                    console.log('获取用户信息成功！');
                    app.globalData.userInfo = res.userInfo;
                    this.setData({
                        'hotTopDetails.followState': false
                    })
                },
                fail: err => {
                    console.log('获取用户信息失败！');
                }
            })
        } else { //已授权
            console.log('获取用户信息成功！');
            this.setData({
                'hotTopDetails.followState': false
            })
        }
    },
    // 用户主页
    GoUserHome: function() {
        wx.navigateTo({
            url: '../../common/userHomePage/userHomePage'
        })
    },
    // 评论、转发、点赞 切换
    swichNav: function(e) {
        this.setData({
            currentTab: e.target.dataset.current
        })
        if (e.target.dataset.current == '0') {
            this.setData({
                sliderOffset: 30
            })
        } else if (e.target.dataset.current == '1') {
            this.setData({
                sliderOffset: 170
            })
        } else {
            this.setData({
                sliderOffset: 640
            })
        }
    },
    // 获取textarea焦点
    bindfocus: function(e) {
        console.log(e)
        this.setData({
            // txtPadding: 20
        })
    },
    // 失去textarea焦点
    bindblur: function(e) {
        this.setData({
            // txtPadding: 10
        })
    },
    // 图片预览
    previewImage: function (e) {
        common.perviewPictures(e);
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