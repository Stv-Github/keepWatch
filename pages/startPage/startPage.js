//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        src: '../../images/startImg.gif',
        winHeight: 0
    },
    onLoad: function() {
        setTimeout(function(){
            wx.switchTab({
                url: '../home/home'
            })
        },3000);
    }

})