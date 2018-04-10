'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

require('./common/libs/ald/ald-stat-conf.js');

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
      pages: ['pages/my/index', 'pages/init/entry', 'pages/init/add', 'pages/init/grade', 'pages/init/twice', 'pages/my/vip', 'pages/my/info', 'pages/my/pay', 'pages/my/email', 'pages/workbook/add', 'pages/workbook/index', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/share', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/paper/index', 'pages/paper/chengPin', 'pages/paper/fenCeng', 'pages/paper/zhuanTi', 'pages/paper/chengPinFilter', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/select', 'pages/statistics/share', 'pages/statistics/correct'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicGFwZXJDaGVuZ3BpbkZpbHRlciIsInRhZyIsInR5cGUiLCJncmFkZSIsInllYXIiLCJzdGF0aXN0aWNzU2VsZWN0IiwidXNlIiwiaW50ZXJjZXB0IiwicGFyYW1zIiwiaGVhZGVyIiwiZ2V0U3RvcmFnZVN5bmMiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJ0b1N0cmluZyIsImRhdGFDb2RlIiwiZGF0YSIsImNvZGUiLCJyZWRpcmVjdFRvIiwidXJsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiZmFpbCIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbXBsZXRlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic2VsZiIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1GRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUFoRmZBLE1BZ0ZlLEdBaEZOO0FBQ1BDLGFBQU8sQ0FD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LFVBQUwsQ0FBZ0I7QUFDZEMsaUJBQUs7QUFEUyxXQUFoQjtBQUdEO0FBQ0YsT0FqQ3VCO0FBa0N4QkssVUFsQ3dCLGdCQWtDbkJDLEtBbENtQixFQWtDWjtBQUNWLHVCQUFLTCxTQUFMLENBQWU7QUFDYkMsaUJBQU8sTUFETTtBQUViRSxnQkFBTTtBQUZPLFNBQWY7QUFJQSxlQUFPRyxRQUFRQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELE9BeEN1QjtBQXlDeEJHLGNBekN3QixzQkF5Q2I7QUFDVCx1QkFBS0Msd0JBQUw7QUFDRDtBQTNDdUIsS0FBMUI7QUE2Q0E7QUFDQSxRQUFJQyxZQUFKO0FBQ0FDLE9BQUdDLGFBQUgsQ0FBaUI7QUFDZnZCLGFBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYb0IsYUFBS25DLFVBQUwsQ0FBZ0JDLE1BQWhCLEdBQXlCYyxHQUF6QjtBQUNEO0FBSGMsS0FBakI7QUFLQTtBQUNBcUIsT0FBR0UscUJBQUgsQ0FBeUIsVUFBQ3ZCLEdBQUQsRUFBUztBQUNoQyxVQUFJLENBQUNBLElBQUl3QixXQUFULEVBQXNCO0FBQ3BCLHVCQUFLZCxTQUFMLENBQWU7QUFDYkMsaUJBQU8sU0FETTtBQUViRSxnQkFBTTtBQUZPLFNBQWY7QUFJRDtBQUNGLEtBUEQ7QUExRGE7QUFrRWQ7OztFQW5KMEIsZUFBS1ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgJy4vY29tbW9uL2xpYnMvYWxkL2FsZC1zdGF0LWNvbmYnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvaW5pdC9lbnRyeScsXHJcbiAgICAgICdwYWdlcy9pbml0L2FkZCcsXHJcbiAgICAgICdwYWdlcy9pbml0L2dyYWRlJyxcclxuICAgICAgJ3BhZ2VzL2luaXQvdHdpY2UnLFxyXG4gICAgICAncGFnZXMvbXkvdmlwJyxcclxuICAgICAgJ3BhZ2VzL215L2luZm8nLFxyXG4gICAgICAncGFnZXMvbXkvcGF5JyxcclxuICAgICAgJ3BhZ2VzL215L2VtYWlsJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2FkZCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9pbmRleCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay93YW50JyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2Vycm9yJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NvcnJlY3QnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svc2hhcmUnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svY2hhcHRlcicsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9leGVyY2lzZScsXHJcbiAgICAgICdwYWdlcy9wYXBlci9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9wYXBlci9jaGVuZ1BpbicsXHJcbiAgICAgICdwYWdlcy9wYXBlci9mZW5DZW5nJyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL3podWFuVGknLFxyXG4gICAgICAncGFnZXMvcGFwZXIvY2hlbmdQaW5GaWx0ZXInLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2Vycm9yJyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2VsZWN0JyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2hhcmUnLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9jb3JyZWN0J1xyXG4gICAgXSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyNhYWEnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzNGQzZDNicsXHJcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgbGlzdDogW3tcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljcy5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3Nfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+iusOmUmemimCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2tfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+mUmemimOacrCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvcGFwZXIvaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9wYXBlci5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3BhcGVyX3NlbGVjdC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICfotYTmupAnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215L2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlci5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXJfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcclxuICAgICAgfV1cclxuICAgIH0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGQkZCRkInLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Yid5Lit5pWw5a2mJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XHJcbiAgICAgIHJlcXVlc3Q6IDgwMDAsXHJcbiAgICAgIGRvd25sb2FkRmlsZTogODAwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHN5c3RlbToge30sXHJcbiAgICBwYXBlckNoZW5ncGluRmlsdGVyOiB7XHJcbiAgICAgIHRhZzogJ2hvdCcsXHJcbiAgICAgIHR5cGU6ICcwJyxcclxuICAgICAgZ3JhZGU6ICc4JyxcclxuICAgICAgeWVhcjogJzAnXHJcbiAgICB9LFxyXG4gICAgc3RhdGlzdGljc1NlbGVjdDogWycxJ11cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIC8vIOS/ruWkjeW5tuWPkVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgLy8gcmVxdWVzdOWFqOWxgOmFjee9rlxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgIGNvbmZpZyhwYXJhbXMpIHtcclxuICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykgfHwgJydcclxuICAgICAgICB9XHJcbiAgICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxyXG4gICAgICAgIHBhcmFtcy5oZWFkZXIgPSBoZWFkZXJcclxuICAgICAgICByZXR1cm4gcGFyYW1zXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGxldCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBkYXRhQ29kZSA9IHJlcy5kYXRhLmNvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChzdGF0dXNDb2RlID09PSAnMjAwJykge1xyXG4gICAgICAgICAgaWYgKGRhdGFDb2RlID09PSAnMjAwJykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhQ29kZSA9PT0gJzQwMScpIHtcclxuICAgICAgICAgICAgLy8g5pyq5rOo5YaM55So5oi3XHJcbiAgICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luaXQvZ3JhZGUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09ICc0MDMnKSB7XHJcbiAgICAgICAgICAvLyBvcGVuaWTkuLrnqbpcclxuICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9teS9pbmRleCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycm9yKSB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOiuvuWkh+S/oeaBr+iOt+WPllxyXG4gICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBzZWxmLmdsb2JhbERhdGEuc3lzdGVtID0gcmVzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyDmjonnvZHnmoTmj5DnpLpcclxuICAgIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XHJcbiAgICAgIGlmICghcmVzLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfor7fmo4Dmn6XnvZHnu5zov57mjqUnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19