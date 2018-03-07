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
      pages: ['pages/my/index', 'pages/init/add', 'pages/init/grade', 'pages/my/info', 'pages/my/pay', 'pages/my/vip', 'pages/my/email', 'pages/workbook/add', 'pages/workbook/index', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/share', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/paper/index', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/share', 'pages/statistics/correct'],
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
          iconPath: 'common/resources/workbook.png',
          selectedIconPath: 'common/resources/workbook_select.png',
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
      system: {}
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
            return Promise.reject(new Error('错误的code'));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwidXNlIiwiaW50ZXJjZXB0IiwicGFyYW1zIiwiaGVhZGVyIiwiZ2V0U3RvcmFnZVN5bmMiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJ0b1N0cmluZyIsImRhdGFDb2RlIiwiZGF0YSIsImNvZGUiLCJyZWRpcmVjdFRvIiwidXJsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiZmFpbCIsImVycm9yIiwiY29tcGxldGUiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzZWxmIiwid3giLCJnZXRTeXN0ZW1JbmZvIiwib25OZXR3b3JrU3RhdHVzQ2hhbmdlIiwiaXNDb25uZWN0ZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBcUVFLHNCQUFlO0FBQUE7O0FBRWI7QUFGYTs7QUFBQSxVQWxFZkEsTUFrRWUsR0FsRU47QUFDUEMsYUFBTyxDQUNMLGdCQURLLEVBRUwsZ0JBRkssRUFHTCxrQkFISyxFQUlMLGVBSkssRUFLTCxjQUxLLEVBTUwsY0FOSyxFQU9MLGdC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QixzQkEwQ2I7QUFDVCx1QkFBS0Msd0JBQUw7QUFDRDtBQTVDdUIsS0FBMUI7QUE4Q0E7QUFDQSxRQUFJQyxZQUFKO0FBQ0FDLE9BQUdDLGFBQUgsQ0FBaUI7QUFDZnhCLGFBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYcUIsYUFBSzlCLFVBQUwsQ0FBZ0JDLE1BQWhCLEdBQXlCUSxHQUF6QjtBQUNEO0FBSGMsS0FBakI7QUFLQTtBQUNBc0IsT0FBR0UscUJBQUgsQ0FBeUIsVUFBQ3hCLEdBQUQsRUFBUztBQUNoQyxVQUFJLENBQUNBLElBQUl5QixXQUFULEVBQXNCO0FBQ3BCLHVCQUFLZixTQUFMLENBQWU7QUFDYkMsaUJBQU8sU0FETTtBQUViRSxnQkFBTTtBQUZPLFNBQWY7QUFJRDtBQUNGLEtBUEQ7QUEzRGE7QUFtRWQ7OztFQXRJMEIsZUFBS2EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL215L2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2luaXQvYWRkJyxcclxuICAgICAgJ3BhZ2VzL2luaXQvZ3JhZGUnLFxyXG4gICAgICAncGFnZXMvbXkvaW5mbycsXHJcbiAgICAgICdwYWdlcy9teS9wYXknLFxyXG4gICAgICAncGFnZXMvbXkvdmlwJyxcclxuICAgICAgJ3BhZ2VzL215L2VtYWlsJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2FkZCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9pbmRleCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay93YW50JyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2Vycm9yJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NvcnJlY3QnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svc2hhcmUnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svY2hhcHRlcicsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9leGVyY2lzZScsXHJcbiAgICAgICdwYWdlcy9wYXBlci9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvZXJyb3InLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9zaGFyZScsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3QnXHJcbiAgICBdLFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGNvbG9yOiAnI2FhYScsXHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0ZDNkM2JyxcclxuICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvd29ya2Jvb2svaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9zdGF0aXN0aWNzLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6K6w6ZSZ6aKYJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2sucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy93b3JrYm9va19zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6ZSZ6aKY5pysJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9wYXBlci9pbmRleCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2tfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+i1hOa6kCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy91c2VyLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlcl9zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn5oiR55qEJ1xyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZCRkJGQicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjlvZLnurPmnKzliJ3kuK3mlbDlraYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcclxuICAgICAgcmVxdWVzdDogODAwMCxcclxuICAgICAgZG93bmxvYWRGaWxlOiA4MDAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgc3lzdGVtOiB7fVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8g5L+u5aSN5bm25Y+RXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICAvLyByZXF1ZXN05YWo5bGA6YWN572uXHJcbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcclxuICAgICAgY29uZmlnKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAnb3BlbklkJzogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnKSB8fCAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXHJcbiAgICAgICAgcGFyYW1zLmhlYWRlciA9IGhlYWRlclxyXG4gICAgICAgIHJldHVybiBwYXJhbXNcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgbGV0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpXHJcbiAgICAgICAgbGV0IGRhdGFDb2RlID0gcmVzLmRhdGEuY29kZS50b1N0cmluZygpXHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09ICcyMDAnKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YUNvZGUgPT09ICcyMDAnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFDb2RlID09PSAnNDAxJykge1xyXG4gICAgICAgICAgICAvLyDmnKrms6jlhoznlKjmiLdcclxuICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5pdC9ncmFkZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCfplJnor6/nmoRjb2RlJykpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAnNDAzJykge1xyXG4gICAgICAgICAgLy8gb3Blbmlk5Li656m6XHJcbiAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvbXkvaW5kZXgnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbChlcnJvcikge1xyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyDorr7lpIfkv6Hmga/ojrflj5ZcclxuICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgc2VsZi5nbG9iYWxEYXRhLnN5c3RlbSA9IHJlc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8g5o6J572R55qE5o+Q56S6XHJcbiAgICB3eC5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UoKHJlcykgPT4ge1xyXG4gICAgICBpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn6K+35qOA5p+l572R57uc6L+e5o6lJyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==