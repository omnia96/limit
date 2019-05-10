// pages/limitDetails/limitDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:108.93984,
    latitude:34.34127,
    limitInfo:null,
    polygon:[{
      points: [
        {
            "longitude": 108.78525582520594, 
            "latitude": 34.2998849667663
        }, 
        {
            "longitude": 108.84003991446573, 
            "latitude": 34.34359376436034
        }, 
        {
            "longitude": 108.92153339407848, 
            "latitude": 34.36170229130376
        }, 
        {
            "longitude": 108.9561760740064, 
            "latitude": 34.365533906089205
        }, 
        {
            "longitude": 109.06999096435074, 
            "latitude": 34.35031230219455
        }, 
        {
            "longitude": 109.09644085928466, 
            "latitude": 34.313188747063755
        }, 
        {
            "longitude": 109.08957306318707, 
            "latitude": 34.27637772094279
        }, 
        {
            "longitude": 109.00603191538336, 
            "latitude": 34.19669132882823
        }, 
        {
            "longitude": 108.82566519833654, 
            "latitude": 34.19095588734232
        }, 
        {
            "longitude": 108.82566519833654, 
            "latitude": 34.19095588734232
        }
    ],
      // color: '#FF0000DD',
      // width: 2,
      // dottedLine: true
      strokeWidth:2,
      strokeColor:"#000000",
      fillColor:"#000fff50",
      zIndex:1
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    
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