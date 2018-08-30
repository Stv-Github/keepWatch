//app.js
App({
    onLaunch: function() {
        let that = this;
        wx.login({
            success: res => {
                console.log('Code => ', res.code);
            },
            fail: err => {
                console.log(err);
            }
        })

        //  微信授权
        wx.getSetting({
            success: res => {
                console.log('res1=>', res);
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: res => {
                            console.log(res);
                            that.globalData.userInfo = res.userInfo;
                        },
                        fail: err => {
                            console.log('获取用户信息失败！')
                        }
                    })
                }
            },
            fail: err => {
                console.log('err1 =>', err);
            }
        })
    },

    globalData: {
        //   userData: userDataGetStorage,
        userInfo: null,
        code: null
    },

    
})