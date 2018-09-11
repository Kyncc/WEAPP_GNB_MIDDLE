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
      pages: ['pages/workbook/index', 'pages/init/entry', 'pages/camera/index', 'pages/my/index', 'pages/my/vip', 'pages/my/classes', 'pages/my/contact', 'pages/my/info', 'pages/my/pay', 'pages/my/email', 'pages/my/join', 'pages/workbook/add', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/share', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/resource/index', 'pages/resource/chengPin', 'pages/resource/fenCeng', 'pages/resource/zhuanTi', 'pages/resource/chengPinFilter', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/select', 'pages/statistics/share', 'pages/statistics/correct'],
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
          pagePath: 'pages/resource/index',
          iconPath: 'common/resources/resource.png',
          selectedIconPath: 'common/resources/resource_select.png',
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
        navigationBarTitleText: '错题归纳本初中',
        navigationBarTextStyle: 'black'
      },
      networkTimeout: {
        request: 6000,
        downloadFile: 6000
      }
    };
    _this.globalData = {
      system: {},
      resourceChengpinFilter: {
        tag: 'hot',
        type: 0,
        year: 0
      },
      statisticsSelect: ['2']
    };
    _this.use('requestfix');
    // request全局配置
    _this.intercept('request', {
      config: function config(params) {
        var header = {
          'openId': _wepy2.default.getStorageSync('gnb_middle_openId') || '',
          'periodId': '2'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicmVzb3VyY2VDaGVuZ3BpbkZpbHRlciIsInRhZyIsInR5cGUiLCJ5ZWFyIiwic3RhdGlzdGljc1NlbGVjdCIsInVzZSIsImludGVyY2VwdCIsInBhcmFtcyIsImhlYWRlciIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzQ29kZSIsInRvU3RyaW5nIiwiZGF0YUNvZGUiLCJkYXRhIiwiY29kZSIsInJlZGlyZWN0VG8iLCJ1cmwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm1zZyIsImljb24iLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJmYWlsIiwiZXJyb3IiLCJjb21wbGV0ZSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInNlbGYiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJvbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJpc0Nvbm5lY3RlZCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtRkUsc0JBQWU7QUFBQTs7QUFFYjtBQUZhOztBQUFBLFVBaEZmQSxNQWdGZSxHQWhGTjtBQUNQQyxhQUFP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LENBQVUsU0FBVixDQUFmLENBQVA7QUFDRDtBQUNGLFNBZkQsTUFlTyxJQUFJYixlQUFlLEtBQW5CLEVBQTBCO0FBQy9CO0FBQ0FQLHlCQUFLWSxVQUFMLENBQWdCO0FBQ2RDLGlCQUFLO0FBRFMsV0FBaEI7QUFHRDtBQUNGLE9BbkN1QjtBQW9DeEJRLFVBcEN3QixnQkFvQ25CQyxLQXBDbUIsRUFvQ1o7QUFDVnRCLHVCQUFLYyxTQUFMLENBQWU7QUFDYkMsaUJBQU8sTUFETTtBQUViRSxnQkFBTTtBQUZPLFNBQWY7QUFJQSxlQUFPQyxRQUFRQyxNQUFSLENBQWVHLEtBQWYsQ0FBUDtBQUNELE9BMUN1QjtBQTJDeEJDLGNBM0N3QixzQkEyQ2I7QUFDVHZCLHVCQUFLd0Isd0JBQUw7QUFDRDtBQTdDdUIsS0FBMUI7QUErQ0E7QUFDQSxRQUFJQyxZQUFKO0FBQ0FDLE9BQUdDLGFBQUgsQ0FBaUI7QUFDZnhCLGFBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYcUIsYUFBS3BDLFVBQUwsQ0FBZ0JDLE1BQWhCLEdBQXlCYyxHQUF6QjtBQUNEO0FBSGMsS0FBakI7QUFLQTtBQUNBc0IsT0FBR0UscUJBQUgsQ0FBeUIsVUFBQ3hCLEdBQUQsRUFBUztBQUNoQyxVQUFJLENBQUNBLElBQUl5QixXQUFULEVBQXNCO0FBQ3BCN0IsdUJBQUtjLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxTQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlEO0FBQ0YsS0FQRDtBQTVEYTtBQW9FZDs7O0VBckowQmpCLGVBQUs4QixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICdwYWdlcy9pbml0L2VudHJ5JyxcbiAgICAgICdwYWdlcy9jYW1lcmEvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICdwYWdlcy9teS92aXAnLFxuICAgICAgJ3BhZ2VzL215L2NsYXNzZXMnLFxuICAgICAgJ3BhZ2VzL215L2NvbnRhY3QnLFxuICAgICAgJ3BhZ2VzL215L2luZm8nLFxuICAgICAgJ3BhZ2VzL215L3BheScsXG4gICAgICAncGFnZXMvbXkvZW1haWwnLFxuICAgICAgJ3BhZ2VzL215L2pvaW4nLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2FkZCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svd2FudCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXJyb3InLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NvcnJlY3QnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL3NoYXJlJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9jaGFwdGVyJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9leGVyY2lzZScsXG4gICAgICAncGFnZXMvcmVzb3VyY2UvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3Jlc291cmNlL2NoZW5nUGluJyxcbiAgICAgICdwYWdlcy9yZXNvdXJjZS9mZW5DZW5nJyxcbiAgICAgICdwYWdlcy9yZXNvdXJjZS96aHVhblRpJyxcbiAgICAgICdwYWdlcy9yZXNvdXJjZS9jaGVuZ1BpbkZpbHRlcicsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9lcnJvcicsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9zZWxlY3QnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2hhcmUnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdCdcbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjYWFhJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0ZDNkM2JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3MucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+iusOmUmemimCdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6ZSZ6aKY5pysJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3Jlc291cmNlL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3Jlc291cmNlLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3Jlc291cmNlX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6LWE5rqQJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXIucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlcl9zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZCRkJGQicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Yid5LitJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICByZXF1ZXN0OiA2MDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiA2MDAwXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICBzeXN0ZW06IHt9LFxuICAgIHJlc291cmNlQ2hlbmdwaW5GaWx0ZXI6IHtcbiAgICAgIHRhZzogJ2hvdCcsXG4gICAgICB0eXBlOiAwLFxuICAgICAgeWVhcjogMFxuICAgIH0sXG4gICAgc3RhdGlzdGljc1NlbGVjdDogWycyJ11cbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgLy8g5L+u5aSN5bm25Y+RXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIC8vIHJlcXVlc3TlhajlsYDphY3nva5cbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcbiAgICAgIGNvbmZpZyhwYXJhbXMpIHtcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcbiAgICAgICAgICAnb3BlbklkJzogd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnKSB8fCAnJyxcbiAgICAgICAgICAncGVyaW9kSWQnOiAnMidcbiAgICAgICAgfVxuICAgICAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIHBhcmFtcy5oZWFkZXIgPSBoZWFkZXJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgbGV0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpXG4gICAgICAgIGxldCBkYXRhQ29kZSA9IHJlcy5kYXRhLmNvZGUudG9TdHJpbmcoKVxuICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gJzIwMCcpIHtcbiAgICAgICAgICBpZiAoZGF0YUNvZGUgPT09ICcyMDAnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YUNvZGUgPT09ICc0MDEnKSB7XG4gICAgICAgICAgICAvLyDmsqHmnIlvcGVuaWRcbiAgICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcign6ZSZ6K+v55qEY29kZScpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAnNDAzJykge1xuICAgICAgICAgIC8vIG9wZW5pZOS4uuepulxuICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWwoZXJyb3IpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcbiAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyDorr7lpIfkv6Hmga/ojrflj5ZcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuZ2xvYmFsRGF0YS5zeXN0ZW0gPSByZXNcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIOaOiee9keeahOaPkOekulxuICAgIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fmo4Dmn6XnvZHnu5zov57mjqUnLFxuICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==