var app = getApp();
var common = require('../../common.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        files: []
    },

    // 生命周期函数--监听页面加载
    onLoad: function(options) {
        
    },

    // 选择图片/视频
    chooseImage: function(e) {
        var that = this;
        wx.chooseImage({
            count: 9,   //最多可以选择的图片张数，默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                console.log(res)
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
            },
            fail: err => {
                console.log(err);
            }
        });
        // wx.chooseVideo({
        //     sourceType: ['album', 'camera'],    //album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
        //     compressed: true,    //是否压缩所选的视频源文件，默认值为true，需要压缩
        //     maxDuration: 60,    //拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
        //     success: res => {
        //         console.log(res);
        //     },
        //     fail: err => {
        //         console.log(err);
        //     }
        // })
    },

    // 图片预览
    previewImage: function(e){
        common.perviewPictures(e);
    },

    // 
    onShow: function() {

    }
})