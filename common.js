//  公共模块 JS



// 预览图片
function perviewPictures(event){
    console.log(event);
    wx.previewImage({
        current: event.currentTarget.dataset.src,
        urls: event.currentTarget.dataset.list
    })
}

module.exports.perviewPictures = perviewPictures;