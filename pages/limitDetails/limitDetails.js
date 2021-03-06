// pages/limitDetails/limitDetails.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    limitInfo:null,
    scale:10
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let citycode = options.citycode
    let type = options.type
    let id = options.id

    let cache = app.getCache("userLimitInfo")
    console.log(cache)
    let limitInfo = cache["data"][citycode][type]["rules"][id]
    console.log(limitInfo)
    this.setData({
        scale:limitInfo["scale"],
        limitInfo:limitInfo,
        longitude:limitInfo["centerPoint"]["longitude"],
        latitude:limitInfo["centerPoint"]["latitude"],
        polygon:[{
            points:limitInfo["mapArea"],
            strokeWidth:2,
            strokeColor:"#000000",
            fillColor:"#000fff50",
            zIndex:1
          }]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})