// pages/appointment/appointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    namelist: {}//房间列表
  },

  //点击房间 进入对应房间的时间表页面
  navigateroom: function(options) {
    var d = options.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/appointment/table?id=' + d.paraid + '&name=' + encodeURI(d.paraname)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    //获取房间
    wx.request({
      url: 'http://39.107.70.176:9000/appointment/get-room',
      method: 'GET',
      data: null,
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function(res) {
        that.setData({
          namelist: res.data
        })
        console.log(that.data)
      }
    })
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