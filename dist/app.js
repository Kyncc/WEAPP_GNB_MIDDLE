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
      pages: ['pages/my/index', 'pages/init/entry', 'pages/init/add', 'pages/init/grade', 'pages/init/twice', 'pages/my/vip', 'pages/my/info', 'pages/my/pay', 'pages/my/email', 'pages/workbook/add', 'pages/workbook/index', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/share', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/paper/index', 'pages/paper/filter', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/select', 'pages/statistics/share', 'pages/statistics/correct'],
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
      paperFilter: {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicGFwZXJGaWx0ZXIiLCJ0YWciLCJ0eXBlIiwiZ3JhZGUiLCJ5ZWFyIiwic3RhdGlzdGljc1NlbGVjdCIsInVzZSIsImludGVyY2VwdCIsInBhcmFtcyIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwidG9TdHJpbmciLCJkYXRhQ29kZSIsImRhdGEiLCJjb2RlIiwicmVkaXJlY3RUbyIsInVybCIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsImZhaWwiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJjb21wbGV0ZSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInNlbGYiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJvbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJpc0Nvbm5lY3RlZCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFnRkUsc0JBQWU7QUFBQTs7QUFFYjtBQUZhOztBQUFBLFVBN0VmQSxNQTZFZSxHQTdFTjtBQUNQQyxhQUFPLENBQ0wsZ0JBREssRUFFTCxr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SyxVQWxDd0IsZ0JBa0NuQkMsS0FsQ21CLEVBa0NaO0FBQ1YsdUJBQUtMLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxNQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlBLGVBQU9HLFFBQVFDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsT0F4Q3VCO0FBeUN4QkcsY0F6Q3dCLHNCQXlDYjtBQUNULHVCQUFLQyx3QkFBTDtBQUNEO0FBM0N1QixLQUExQjtBQTZDQTtBQUNBLFFBQUlDLFlBQUo7QUFDQUMsT0FBR0MsYUFBSCxDQUFpQjtBQUNmdkIsYUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hvQixhQUFLbkMsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUJjLEdBQXpCO0FBQ0Q7QUFIYyxLQUFqQjtBQUtBO0FBQ0FxQixPQUFHRSxxQkFBSCxDQUF5QixVQUFDdkIsR0FBRCxFQUFTO0FBQ2hDLFVBQUksQ0FBQ0EsSUFBSXdCLFdBQVQsRUFBc0I7QUFDcEIsdUJBQUtkLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxTQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlEO0FBQ0YsS0FQRDtBQTFEYTtBQWtFZDs7O0VBaEowQixlQUFLWSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvaW5pdC9lbnRyeScsXHJcbiAgICAgICdwYWdlcy9pbml0L2FkZCcsXHJcbiAgICAgICdwYWdlcy9pbml0L2dyYWRlJyxcclxuICAgICAgJ3BhZ2VzL2luaXQvdHdpY2UnLFxyXG4gICAgICAncGFnZXMvbXkvdmlwJyxcclxuICAgICAgJ3BhZ2VzL215L2luZm8nLFxyXG4gICAgICAncGFnZXMvbXkvcGF5JyxcclxuICAgICAgJ3BhZ2VzL215L2VtYWlsJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2FkZCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9pbmRleCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay93YW50JyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2Vycm9yJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NvcnJlY3QnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svc2hhcmUnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svY2hhcHRlcicsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9leGVyY2lzZScsXHJcbiAgICAgICdwYWdlcy9wYXBlci9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9wYXBlci9maWx0ZXInLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2Vycm9yJyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2VsZWN0JyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2hhcmUnLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9jb3JyZWN0J1xyXG4gICAgXSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyNhYWEnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzNGQzZDNicsXHJcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgbGlzdDogW3tcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljcy5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3Nfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+iusOmUmemimCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2tfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+mUmemimOacrCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvcGFwZXIvaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9wYXBlci5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3BhcGVyX3NlbGVjdC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICfotYTmupAnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215L2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlci5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXJfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcclxuICAgICAgfV1cclxuICAgIH0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGQkZCRkInLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Yid5Lit5pWw5a2mJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XHJcbiAgICAgIHJlcXVlc3Q6IDgwMDAsXHJcbiAgICAgIGRvd25sb2FkRmlsZTogODAwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHN5c3RlbToge30sXHJcbiAgICBwYXBlckZpbHRlcjoge1xyXG4gICAgICB0YWc6ICdob3QnLFxyXG4gICAgICB0eXBlOiAnMCcsXHJcbiAgICAgIGdyYWRlOiAnOCcsXHJcbiAgICAgIHllYXI6ICcwJ1xyXG4gICAgfSxcclxuICAgIHN0YXRpc3RpY3NTZWxlY3Q6IFsnMSddXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICAvLyDkv67lpI3lubblj5FcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIC8vIHJlcXVlc3TlhajlsYDphY3nva5cclxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xyXG4gICAgICBjb25maWcocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICdvcGVuSWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcpIHx8ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcclxuICAgICAgICBwYXJhbXMuaGVhZGVyID0gaGVhZGVyXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1xyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBsZXQgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcclxuICAgICAgICBsZXQgZGF0YUNvZGUgPSByZXMuZGF0YS5jb2RlLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gJzIwMCcpIHtcclxuICAgICAgICAgIGlmIChkYXRhQ29kZSA9PT0gJzIwMCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YUNvZGUgPT09ICc0MDEnKSB7XHJcbiAgICAgICAgICAgIC8vIOacquazqOWGjOeUqOaIt1xyXG4gICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbml0L2dyYWRlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAnNDAzJykge1xyXG4gICAgICAgICAgLy8gb3Blbmlk5Li656m6XHJcbiAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvbXkvaW5kZXgnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbChlcnJvcikge1xyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyDorr7lpIfkv6Hmga/ojrflj5ZcclxuICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgc2VsZi5nbG9iYWxEYXRhLnN5c3RlbSA9IHJlc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8g5o6J572R55qE5o+Q56S6XHJcbiAgICB3eC5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UoKHJlcykgPT4ge1xyXG4gICAgICBpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn6K+35qOA5p+l572R57uc6L+e5o6lJyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==