// pages/index/index.js - 首页逻辑
Page({
  // 页面数据
  data: {
    message: 'Hello World! 👋',
    userInfo: null,
    showTimestamp: true,
    clickCount: 0,
    items: [
      { id: 1, name: '苹果', icon: '🍎' },
      { id: 2, name: '香蕉', icon: '🍌' },
      { id: 3, name: '橙子', icon: '🍊' }
    ],
    currentTime: ''
  },

  // 页面加载时执行
  onLoad() {
    console.log('页面加载');
    this.updateTime();
    
    // 每秒更新时间
    setInterval(() => {
      this.updateTime();
    }, 1000);
    
    // 获取用户信息
    this.getUserInfo();
  },

  // 页面显示时执行
  onShow() {
    console.log('页面显示');
  },

  // 获取用户信息
  getUserInfo() {
    const app = getApp();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      });
    }
  },

  // 更新时间
  updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    this.setData({
      currentTime: timeString
    });
  },

  // 点击事件 - 显示提示
  onTapButton() {
    const newCount = this.data.clickCount + 1;
    this.setData({
      clickCount: newCount
    });
    
    wx.showToast({
      title: `点击了 ${newCount} 次`,
      icon: 'success',
      duration: 1500
    });
  },

  // 点击列表项
  onItemTap(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.showModal({
      title: '你选择了',
      content: `${name}`,
      showCancel: false
    });
  },

  // 切换时间显示
  toggleTimestamp() {
    this.setData({
      showTimestamp: !this.data.showTimestamp
    });
  },

  // 复制消息到剪贴板
  copyMessage() {
    wx.setClipboardData({
      data: this.data.message,
      success: () => {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        });
      }
    });
  },

  // 分享给朋友
  onShareAppMessage() {
    return {
      title: 'Hello World 小程序',
      path: '/pages/index/index'
    };
  }
});