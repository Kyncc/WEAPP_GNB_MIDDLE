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
      pages: ['pages/workbook/index', 'pages/init/entry', 'pages/init/twice', 'pages/my/index', 'pages/my/vip', 'pages/my/classes', 'pages/my/info', 'pages/my/pay', 'pages/my/email', 'pages/workbook/add', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/share', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/paper/index', 'pages/paper/chengPin', 'pages/paper/fenCeng', 'pages/paper/zhuanTi', 'pages/paper/chengPinFilter', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/select', 'pages/statistics/share', 'pages/statistics/correct'],
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
        year: '0'
      },
      statisticsSelect: ['2']
    };
    _this.use('requestfix');
    // request全局配置
    _this.intercept('request', {
      config: function config(params) {
        var header = {
          'openId': _wepy2.default.getStorageSync('gnb_middle_openId') || ''
          // wepy.showNavigationBarLoading()
        };params.header = header;
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
            // 没有openid
            _wepy2.default.redirectTo({
              url: '/pages/workbook/index'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicGFwZXJDaGVuZ3BpbkZpbHRlciIsInRhZyIsInR5cGUiLCJ5ZWFyIiwic3RhdGlzdGljc1NlbGVjdCIsInVzZSIsImludGVyY2VwdCIsInBhcmFtcyIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwidG9TdHJpbmciLCJkYXRhQ29kZSIsImRhdGEiLCJjb2RlIiwicmVkaXJlY3RUbyIsInVybCIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsImZhaWwiLCJlcnJvciIsImNvbXBsZXRlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic2VsZiIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWlGRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUE5RWZBLE1BOEVlLEdBOUVOO0FBQ1BDLGFBQU8sQ0FDTCxzQkFESyxFQUVMLGtCQUZLLEVBR0wsa0JBSEssRUFJ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LGlCQUFLO0FBRFMsV0FBaEI7QUFHRDtBQUNGLE9BbEN1QjtBQW1DeEJRLFVBbkN3QixnQkFtQ25CQyxLQW5DbUIsRUFtQ1o7QUFDVix1QkFBS1IsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLE1BRE07QUFFYkUsZ0JBQU07QUFGTyxTQUFmO0FBSUEsZUFBT0MsUUFBUUMsTUFBUixDQUFlRyxLQUFmLENBQVA7QUFDRCxPQXpDdUI7QUEwQ3hCQyxjQTFDd0Isc0JBMENiO0FBQ1QsdUJBQUtDLHdCQUFMO0FBQ0Q7QUE1Q3VCLEtBQTFCO0FBOENBO0FBQ0EsUUFBSUMsWUFBSjtBQUNBQyxPQUFHQyxhQUFILENBQWlCO0FBQ2Z4QixhQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWHFCLGFBQUtsQyxVQUFMLENBQWdCQyxNQUFoQixHQUF5QlksR0FBekI7QUFDRDtBQUhjLEtBQWpCO0FBS0E7QUFDQXNCLE9BQUdFLHFCQUFILENBQXlCLFVBQUN4QixHQUFELEVBQVM7QUFDaEMsVUFBSSxDQUFDQSxJQUFJeUIsV0FBVCxFQUFzQjtBQUNwQix1QkFBS2YsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFNBRE07QUFFYkUsZ0JBQU07QUFGTyxTQUFmO0FBSUQ7QUFDRixLQVBEO0FBM0RhO0FBbUVkOzs7RUFsSjBCLGVBQUthLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9pbml0L2VudHJ5JyxcclxuICAgICAgJ3BhZ2VzL2luaXQvdHdpY2UnLFxyXG4gICAgICAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvbXkvdmlwJyxcclxuICAgICAgJ3BhZ2VzL215L2NsYXNzZXMnLFxyXG4gICAgICAncGFnZXMvbXkvaW5mbycsXHJcbiAgICAgICdwYWdlcy9teS9wYXknLFxyXG4gICAgICAncGFnZXMvbXkvZW1haWwnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svYWRkJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL3dhbnQnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXJyb3InLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svY29ycmVjdCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9zaGFyZScsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9jaGFwdGVyJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2V4ZXJjaXNlJyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL2NoZW5nUGluJyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL2ZlbkNlbmcnLFxyXG4gICAgICAncGFnZXMvcGFwZXIvemh1YW5UaScsXHJcbiAgICAgICdwYWdlcy9wYXBlci9jaGVuZ1BpbkZpbHRlcicsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvZXJyb3InLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9zZWxlY3QnLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9zaGFyZScsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3QnXHJcbiAgICBdLFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGNvbG9yOiAnI2FhYScsXHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0ZDNkM2JyxcclxuICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvd29ya2Jvb2svaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9zdGF0aXN0aWNzLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6K6w6ZSZ6aKYJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2sucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy93b3JrYm9va19zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6ZSZ6aKY5pysJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9wYXBlci9pbmRleCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3BhcGVyLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvcGFwZXJfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+i1hOa6kCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy91c2VyLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlcl9zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn5oiR55qEJ1xyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZCRkJGQicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjlvZLnurPmnKzliJ3kuK3mlbDlraYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcclxuICAgICAgcmVxdWVzdDogODAwMCxcclxuICAgICAgZG93bmxvYWRGaWxlOiA4MDAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgc3lzdGVtOiB7fSxcclxuICAgIHBhcGVyQ2hlbmdwaW5GaWx0ZXI6IHtcclxuICAgICAgdGFnOiAnaG90JyxcclxuICAgICAgdHlwZTogJzAnLFxyXG4gICAgICB5ZWFyOiAnMCdcclxuICAgIH0sXHJcbiAgICBzdGF0aXN0aWNzU2VsZWN0OiBbJzInXVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgLy8g5L+u5aSN5bm25Y+RXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICAvLyByZXF1ZXN05YWo5bGA6YWN572uXHJcbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcclxuICAgICAgY29uZmlnKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAnb3BlbklkJzogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnKSB8fCAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXHJcbiAgICAgICAgcGFyYW1zLmhlYWRlciA9IGhlYWRlclxyXG4gICAgICAgIHJldHVybiBwYXJhbXNcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgbGV0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpXHJcbiAgICAgICAgbGV0IGRhdGFDb2RlID0gcmVzLmRhdGEuY29kZS50b1N0cmluZygpXHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09ICcyMDAnKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YUNvZGUgPT09ICcyMDAnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFDb2RlID09PSAnNDAxJykge1xyXG4gICAgICAgICAgICAvLyDmsqHmnIlvcGVuaWRcclxuICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcign6ZSZ6K+v55qEY29kZScpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gJzQwMycpIHtcclxuICAgICAgICAgIC8vIG9wZW5pZOS4uuepulxyXG4gICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL215L2luZGV4J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZXJyb3IpIHtcclxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgd2VweS5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8g6K6+5aSH5L+h5oGv6I635Y+WXHJcbiAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHNlbGYuZ2xvYmFsRGF0YS5zeXN0ZW0gPSByZXNcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOaOiee9keeahOaPkOekulxyXG4gICAgd3gub25OZXR3b3JrU3RhdHVzQ2hhbmdlKChyZXMpID0+IHtcclxuICAgICAgaWYgKCFyZXMuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+ivt+ajgOafpee9kee7nOi/nuaOpScsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=