//index.js
//获取应用实例
const app = getApp()
var WXP = require('../../lib/wxp.min.js').default
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js')
Page({
  data: {
    lunarInfo: null,
    current: 'tab1',
    current_scroll: 'tab1',
    rules: null,
    showRules: null
  },
  onLoad: function () {
    this.initCache()
    // if(this.lunarInfoIf(date)){
    //   console.log("start set data")
    //   console.log(this.lunarInfoIf(date))
    // }else{
    //   console.log("start requst data")
    //   this.getLunarInfo(date)
    // }
  },
  onShow() {
    let that = this
    that.getUserLocation()
    that.getRules()
  },
  handleChange({detail}) {
    console.log(detail)
    let rules = this.data.rules
    if (detail.key == "tab1") {
      this.setData({
        showRules: rules.local
      })
    } else if (detail.key == "tab2") {
      this.setData({
        showRules: rules.outland
      })
    }
    this.setData({
      current: detail.key
    });
  },

  handleChangeScroll({
    detail
  }) {
    this.setData({
      current_scroll: detail.key
    });
  },
  //获取位置
  getUserLocation: function () {
    let that = this
    WXP.getLocation({
      type: 'gcj02'
    }).then(result => {
      console.log('success信息:', result)
      let location = {
        latitude: result.latitude,
        longitude: result.longitude
      }
      that.getUserCityName(location)
    }).catch(error => {

    })
  },
  getUserCityName(location) {
    let that = this
    let qqmapsdk = new QQMapWX({
      key: 'QG2BZ-4OS3U-QNUVG-4RYJG-C54ZZ-3ZFCW'
    })
    qqmapsdk.reverseGeocoder({
      location: location,
      success: function (res) {
        let location = res.result.address_component
        console.log(location)
      }
    })
  },
  getRules() {
    let that = this
    WXP.request({
      url: "http://localhost/wechatsever/xx/returndata.php",
      header: "Content-Type:application/json"
    }).then(result => {
      let res = result.data
      console.log(res)
      if(res.code = "200"){
        console.log(res)
        that.setData({
          rules: res.data,
          showRules: res.data.local
        })
        let userLimitInfo = app.getCache("userLimitInfo")
        userLimitInfo["msg"] = true
        let citycode = res.data.cityCode
        userLimitInfo["data"][citycode] = res.data
        app.setCache("userLimitInfo",userLimitInfo)
      }
    }).catch(error => {

    })
  },
  handleToContent(e){
    console.log(e.currentTarget.dataset.citycode)
    let type = e.currentTarget.dataset.type
    let citycode = e.currentTarget.dataset.citycode
    let id = e.currentTarget.id
    wx.navigateTo({
      url: '../limitDetails/limitDetails?citycode='+ citycode + '&id=' + id + '&type=' + type,
    })
  },
  initCache() {
    let userLimitInfo = null
    userLimitInfo = app.getCache("userLimitInfo")
    if (userLimitInfo === false) {
      app.setCache("userLimitInfo", {
        "msg": false,
        "data": {
          "defaut": "默认"
        }
      })
    }
  },
  lunarInfoIf(date) {
    let userLimitInfo = app.getCache("userLimitInfo")
    console.log(userLimitInfo)
    if (userLimitInfo["msg"] == true) {
      //存在缓存数据
      var data = userLimitInfo["data"]
      if (data[date]) {
        return data[date]
      } else {
        return false
      }
    } else {
      console.log("没有数据")
      //请求数据
      return false
    }
  }
})