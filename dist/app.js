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
      pages: ['pages/my/index', 'pages/init/add', 'pages/init/grade', 'pages/my/info', 'pages/my/pay', 'pages/my/vip', 'pages/my/email', 'pages/workbook/add', 'pages/workbook/index', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/correct'],
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
          'openId': _wepy2.default.getStorageSync('openId') || '',
          'unionid': _wepy2.default.getStorageSync('unionid') || ''
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwidXNlIiwiaW50ZXJjZXB0IiwicGFyYW1zIiwiaGVhZGVyIiwiZ2V0U3RvcmFnZVN5bmMiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJ0b1N0cmluZyIsImRhdGFDb2RlIiwiZGF0YSIsImNvZGUiLCJyZWRpcmVjdFRvIiwidXJsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwiZmFpbCIsImVycm9yIiwiY29tcGxldGUiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzZWxmIiwid3giLCJnZXRTeXN0ZW1JbmZvIiwib25OZXR3b3JrU3RhdHVzQ2hhbmdlIiwiaXNDb25uZWN0ZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBNkRFLHNCQUFlO0FBQUE7O0FBRWI7QUFGYTs7QUFBQSxVQTFEZkEsTUEwRGUsR0ExRE47QUFDUEMsYUFBTyxDQUNMLGdCQURLLEVBRUwsZ0JBRkssRUFHTCxrQkFISyxFQUlMLGVBSkssRUFLTCxjQUxLLEVBTUwsY0FOSyxFQU9MLGdC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YyxLQUFqQjtBQUtBO0FBQ0FzQixPQUFHRSxxQkFBSCxDQUF5QixVQUFDeEIsR0FBRCxFQUFTO0FBQ2hDLFVBQUksQ0FBQ0EsSUFBSXlCLFdBQVQsRUFBc0I7QUFDcEIsdUJBQUtmLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxTQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlEO0FBQ0YsS0FQRDtBQXREYTtBQThEZDs7O0VBekgwQixlQUFLYSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICdwYWdlcy9pbml0L2FkZCcsXG4gICAgICAncGFnZXMvaW5pdC9ncmFkZScsXG4gICAgICAncGFnZXMvbXkvaW5mbycsXG4gICAgICAncGFnZXMvbXkvcGF5JyxcbiAgICAgICdwYWdlcy9teS92aXAnLFxuICAgICAgJ3BhZ2VzL215L2VtYWlsJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9hZGQnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICdwYWdlcy93b3JrYm9vay93YW50JyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9lcnJvcicsXG4gICAgICAncGFnZXMvd29ya2Jvb2svY29ycmVjdCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svY2hhcHRlcicsXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXhlcmNpc2UnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvZXJyb3InLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdCdcbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjYWFhJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0ZDNkM2JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3MucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+iusOmUmemimCdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6ZSZ6aKY5pysJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXIucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlcl9zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZCRkJGQicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Yid5Lit5pWw5a2mJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICByZXF1ZXN0OiA4MDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiA4MDAwXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICBzeXN0ZW06IHt9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIOS/ruWkjeW5tuWPkVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAvLyByZXF1ZXN05YWo5bGA6YWN572uXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XG4gICAgICBjb25maWcocGFyYW1zKSB7XG4gICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpIHx8ICcnLFxuICAgICAgICAgICd1bmlvbmlkJzogd2VweS5nZXRTdG9yYWdlU3luYygndW5pb25pZCcpIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgICBwYXJhbXMuaGVhZGVyID0gaGVhZGVyXG4gICAgICAgIHJldHVybiBwYXJhbXNcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIGxldCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxuICAgICAgICBsZXQgZGF0YUNvZGUgPSByZXMuZGF0YS5jb2RlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09ICcyMDAnKSB7XG4gICAgICAgICAgaWYgKGRhdGFDb2RlID09PSAnMjAwJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFDb2RlID09PSAnNDAxJykge1xuICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luaXQvZ3JhZGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ+mUmeivr+eahGNvZGUnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsKGVycm9yKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXG4gICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgd2VweS5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgfVxuICAgIH0pXG4gICAgLy8g6K6+5aSH5L+h5oGv6I635Y+WXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmdsb2JhbERhdGEuc3lzdGVtID0gcmVzXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyDmjonnvZHnmoTmj5DnpLpcbiAgICB3eC5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UoKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+35qOA5p+l572R57uc6L+e5o6lJyxcbiAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=