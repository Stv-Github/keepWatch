var app = getApp();
var common = require('../../../common.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotTopList: [
            {
                avatarId: 1,//用户id
                avatarUrl: '../../../images/icon/portrait1.png',//用户头像
                nickName: '请叫我Steven',//用户昵称
                publishTime: '昨天09:41',//发表时间
                ArticleTitle: '我是标题',//文章标题
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
                ],//文章图片
                readingNum: '23.3k', //阅读数量
                commentsNum: '5.3w', // 评论数量
                collectionNum: '3563', //收藏数量
                homeCity: '北京'   //家乡城市或所在的城市
            }
        ]
        
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
                if(app.globalData.userInfo){
                    wx.getUserInfo({
                        success: res => {
                            console.log(res);
                        },
                        fail: err => {
                            console.log(err);
                        }
                    })
                }else{
                    console.log('用户未授权')
                }
            },
            fail: err => {
                console.log(err);
            }
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