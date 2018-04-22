'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // 修复并发
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/init/entry', 'pages/my/index', 'pages/init/add', 'pages/init/grade', 'pages/init/twice', 'pages/my/vip', 'pages/my/info', 'pages/my/pay', 'pages/my/email', 'pages/workbook/add', 'pages/workbook/index', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/share', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/paper/index', 'pages/paper/chengPin', 'pages/paper/fenCeng', 'pages/paper/zhuanTi', 'pages/paper/chengPinFilter', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/select', 'pages/statistics/share', 'pages/statistics/correct'],
      tabBar: {
        color: '#aaa',
        selectedColor: '#3FC6C6',
        borderStyle: 'black',
        backgroundColor: '#ffffff',
        list: [{
          pagePath: 'pages/workbook/index',
          iconPath: 'common/resources/statistics.png',
          selectedIconPath: 'common/resources/statistics_select.png',
          text: '记错题'
        }, {
          pagePath: 'pages/statistics/index',
          iconPath: 'common/resources/workbook.png',
          selectedIconPath: 'common/resources/workbook_select.png',
          text: '错题本'
        }, {
          pagePath: 'pages/paper/index',
          iconPath: 'common/resources/paper.png',
          selectedIconPath: 'common/resources/paper_select.png',
          text: '资源'
        }, {
          pagePath: 'pages/my/index',
          iconPath: 'common/resources/user.png',
          selectedIconPath: 'common/resources/user_select.png',
          text: '我的'
        }]
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FBFBFB',
        navigationBarTitleText: '错题归纳本初中数学',
        navigationBarTextStyle: 'black'
      },
      networkTimeout: {
        request: 8000,
        downloadFile: 8000
      }
    };
    _this.globalData = {
      system: {},
      paperChengpinFilter: {
        tag: 'hot',
        type: '0',
        grade: '8',
        year: '0'
      },
      statisticsSelect: ['1']
    };
    _this.use('requestfix');
    // request全局配置
    _this.intercept('request', {
      config: function config(params) {
        var header = {
          'openId': _wepy2.default.getStorageSync('gnb_middle_openId') || ''
        };
        _wepy2.default.showNavigationBarLoading();
        params.header = header;
        return params;
      },
      success: function success(res) {
        console.log(res);
        var statusCode = res.statusCode.toString();
        var dataCode = res.data.code.toString();
        if (statusCode === '200') {
          if (dataCode === '200') {
            return res.data.data;
          } else if (dataCode === '401') {
            // 未注册用户
            _wepy2.default.redirectTo({
              url: '/pages/init/grade'
            });
          } else {
            _wepy2.default.showToast({
              title: res.data.msg,
              icon: 'none'
            });
          }
        } else if (statusCode === '403') {
          // openid为空
          _wepy2.default.redirectTo({
            url: '/pages/my/index'
          });
        }
      },
      fail: function fail(error) {
        _wepy2.default.showToast({
          title: '网络错误',
          icon: 'none'
        });
        return Promise.reject(error);
      },
      complete: function complete() {
        _wepy2.default.hideNavigationBarLoading();
      }
    });
    // 设备信息获取
    var self = _this;
    wx.getSystemInfo({
      success: function success(res) {
        self.globalData.system = res;
      }
    });
    // 掉网的提示
    wx.onNetworkStatusChange(function (res) {
      if (!res.isConnected) {
        _wepy2.default.showToast({
          title: '请检查网络连接',
          icon: 'none'
        });
      }
    });
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicGFwZXJDaGVuZ3BpbkZpbHRlciIsInRhZyIsInR5cGUiLCJncmFkZSIsInllYXIiLCJzdGF0aXN0aWNzU2VsZWN0IiwidXNlIiwiaW50ZXJjZXB0IiwicGFyYW1zIiwiaGVhZGVyIiwiZ2V0U3RvcmFnZVN5bmMiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJ0b1N0cmluZyIsImRhdGFDb2RlIiwiZGF0YSIsImNvZGUiLCJyZWRpcmVjdFRvIiwidXJsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiZmFpbCIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbXBsZXRlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic2VsZiIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1GRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUFoRmZBLE1BZ0ZlLEdBaEZOO0FBQ1BDLGFBQU8sQ0FDTCxrQkFE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Q0FBZ0I7QUFDZEMsaUJBQUs7QUFEUyxXQUFoQjtBQUdEO0FBQ0YsT0FqQ3VCO0FBa0N4QkssVUFsQ3dCLGdCQWtDbkJDLEtBbENtQixFQWtDWjtBQUNWLHVCQUFLTCxTQUFMLENBQWU7QUFDYkMsaUJBQU8sTUFETTtBQUViRSxnQkFBTTtBQUZPLFNBQWY7QUFJQSxlQUFPRyxRQUFRQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELE9BeEN1QjtBQXlDeEJHLGNBekN3QixzQkF5Q2I7QUFDVCx1QkFBS0Msd0JBQUw7QUFDRDtBQTNDdUIsS0FBMUI7QUE2Q0E7QUFDQSxRQUFJQyxZQUFKO0FBQ0FDLE9BQUdDLGFBQUgsQ0FBaUI7QUFDZnZCLGFBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYb0IsYUFBS25DLFVBQUwsQ0FBZ0JDLE1BQWhCLEdBQXlCYyxHQUF6QjtBQUNEO0FBSGMsS0FBakI7QUFLQTtBQUNBcUIsT0FBR0UscUJBQUgsQ0FBeUIsVUFBQ3ZCLEdBQUQsRUFBUztBQUNoQyxVQUFJLENBQUNBLElBQUl3QixXQUFULEVBQXNCO0FBQ3BCLHVCQUFLZCxTQUFMLENBQWU7QUFDYkMsaUJBQU8sU0FETTtBQUViRSxnQkFBTTtBQUZPLFNBQWY7QUFJRDtBQUNGLEtBUEQ7QUExRGE7QUFrRWQ7OztFQW5KMEIsZUFBS1ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luaXQvZW50cnknLFxyXG4gICAgICAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvaW5pdC9hZGQnLFxyXG4gICAgICAncGFnZXMvaW5pdC9ncmFkZScsXHJcbiAgICAgICdwYWdlcy9pbml0L3R3aWNlJyxcclxuICAgICAgJ3BhZ2VzL215L3ZpcCcsXHJcbiAgICAgICdwYWdlcy9teS9pbmZvJyxcclxuICAgICAgJ3BhZ2VzL215L3BheScsXHJcbiAgICAgICdwYWdlcy9teS9lbWFpbCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9hZGQnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svaW5kZXgnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svd2FudCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9lcnJvcicsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9jb3JyZWN0JyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL3NoYXJlJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NoYXB0ZXInLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXhlcmNpc2UnLFxyXG4gICAgICAncGFnZXMvcGFwZXIvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvcGFwZXIvY2hlbmdQaW4nLFxyXG4gICAgICAncGFnZXMvcGFwZXIvZmVuQ2VuZycsXHJcbiAgICAgICdwYWdlcy9wYXBlci96aHVhblRpJyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL2NoZW5nUGluRmlsdGVyJyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9lcnJvcicsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL3NlbGVjdCcsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL3NoYXJlJyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdCdcclxuICAgIF0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgY29sb3I6ICcjYWFhJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMzRkM2QzYnLFxyXG4gICAgICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy93b3JrYm9vay9pbmRleCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3MucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9zdGF0aXN0aWNzX3NlbGVjdC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICforrDplJnpopgnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy93b3JrYm9vay5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rX3NlbGVjdC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICfplJnpopjmnKwnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3BhcGVyL2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvcGFwZXIucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9wYXBlcl9zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6LWE5rqQJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9teS9pbmRleCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXIucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy91c2VyX3NlbGVjdC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICfmiJHnmoQnXHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkJGQkZCJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWIneS4reaVsOWtpicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBuZXR3b3JrVGltZW91dDoge1xyXG4gICAgICByZXF1ZXN0OiA4MDAwLFxyXG4gICAgICBkb3dubG9hZEZpbGU6IDgwMDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICBzeXN0ZW06IHt9LFxyXG4gICAgcGFwZXJDaGVuZ3BpbkZpbHRlcjoge1xyXG4gICAgICB0YWc6ICdob3QnLFxyXG4gICAgICB0eXBlOiAnMCcsXHJcbiAgICAgIGdyYWRlOiAnOCcsXHJcbiAgICAgIHllYXI6ICcwJ1xyXG4gICAgfSxcclxuICAgIHN0YXRpc3RpY3NTZWxlY3Q6IFsnMSddXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICAvLyDkv67lpI3lubblj5FcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIC8vIHJlcXVlc3TlhajlsYDphY3nva5cclxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xyXG4gICAgICBjb25maWcocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICdvcGVuSWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcpIHx8ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcclxuICAgICAgICBwYXJhbXMuaGVhZGVyID0gaGVhZGVyXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1xyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBsZXQgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcclxuICAgICAgICBsZXQgZGF0YUNvZGUgPSByZXMuZGF0YS5jb2RlLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gJzIwMCcpIHtcclxuICAgICAgICAgIGlmIChkYXRhQ29kZSA9PT0gJzIwMCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YUNvZGUgPT09ICc0MDEnKSB7XHJcbiAgICAgICAgICAgIC8vIOacquazqOWGjOeUqOaIt1xyXG4gICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbml0L2dyYWRlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAnNDAzJykge1xyXG4gICAgICAgICAgLy8gb3Blbmlk5Li656m6XHJcbiAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvbXkvaW5kZXgnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbChlcnJvcikge1xyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyDorr7lpIfkv6Hmga/ojrflj5ZcclxuICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgc2VsZi5nbG9iYWxEYXRhLnN5c3RlbSA9IHJlc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8g5o6J572R55qE5o+Q56S6XHJcbiAgICB3eC5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UoKHJlcykgPT4ge1xyXG4gICAgICBpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn6K+35qOA5p+l572R57uc6L+e5o6lJyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==