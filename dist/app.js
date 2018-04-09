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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicGFwZXJGaWx0ZXIiLCJ0YWciLCJ0eXBlIiwiZ3JhZGUiLCJ5ZWFyIiwic3RhdGlzdGljc1NlbGVjdCIsInVzZSIsImludGVyY2VwdCIsInBhcmFtcyIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwidG9TdHJpbmciLCJkYXRhQ29kZSIsImRhdGEiLCJjb2RlIiwicmVkaXJlY3RUbyIsInVybCIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsImZhaWwiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJjb21wbGV0ZSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInNlbGYiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJvbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJpc0Nvbm5lY3RlZCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtRkUsc0JBQWU7QUFBQTs7QUFFYjtBQUZhOztBQUFBLFVBaEZmQSxNQWdGZSxHQWhGTjtBQUNQQyxhQUFPLENBQ0wsZ0JBREss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QUNkQyxpQkFBSztBQURTLFdBQWhCO0FBR0Q7QUFDRixPQWpDdUI7QUFrQ3hCSyxVQWxDd0IsZ0JBa0NuQkMsS0FsQ21CLEVBa0NaO0FBQ1YsdUJBQUtMLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxNQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlBLGVBQU9HLFFBQVFDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsT0F4Q3VCO0FBeUN4QkcsY0F6Q3dCLHNCQXlDYjtBQUNULHVCQUFLQyx3QkFBTDtBQUNEO0FBM0N1QixLQUExQjtBQTZDQTtBQUNBLFFBQUlDLFlBQUo7QUFDQUMsT0FBR0MsYUFBSCxDQUFpQjtBQUNmdkIsYUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hvQixhQUFLbkMsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUJjLEdBQXpCO0FBQ0Q7QUFIYyxLQUFqQjtBQUtBO0FBQ0FxQixPQUFHRSxxQkFBSCxDQUF5QixVQUFDdkIsR0FBRCxFQUFTO0FBQ2hDLFVBQUksQ0FBQ0EsSUFBSXdCLFdBQVQsRUFBc0I7QUFDcEIsdUJBQUtkLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxTQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlEO0FBQ0YsS0FQRDtBQTFEYTtBQWtFZDs7O0VBbkowQixlQUFLWSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCAnLi9jb21tb24vbGlicy9hbGQvYWxkLXN0YXQtY29uZidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9teS9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9pbml0L2VudHJ5JyxcclxuICAgICAgJ3BhZ2VzL2luaXQvYWRkJyxcclxuICAgICAgJ3BhZ2VzL2luaXQvZ3JhZGUnLFxyXG4gICAgICAncGFnZXMvaW5pdC90d2ljZScsXHJcbiAgICAgICdwYWdlcy9teS92aXAnLFxyXG4gICAgICAncGFnZXMvbXkvaW5mbycsXHJcbiAgICAgICdwYWdlcy9teS9wYXknLFxyXG4gICAgICAncGFnZXMvbXkvZW1haWwnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svYWRkJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL3dhbnQnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXJyb3InLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svY29ycmVjdCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9zaGFyZScsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9jaGFwdGVyJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2V4ZXJjaXNlJyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL2NoZW5nUGluJyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL2ZlbkNlbmcnLFxyXG4gICAgICAncGFnZXMvcGFwZXIvemh1YW5UaScsXHJcbiAgICAgICdwYWdlcy9wYXBlci9jaGVuZ1BpbkZpbHRlcicsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvZXJyb3InLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9zZWxlY3QnLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9zaGFyZScsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3QnXHJcbiAgICBdLFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIGNvbG9yOiAnI2FhYScsXHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0ZDNkM2JyxcclxuICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvd29ya2Jvb2svaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9zdGF0aXN0aWNzLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6K6w6ZSZ6aKYJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2sucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy93b3JrYm9va19zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn6ZSZ6aKY5pysJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9wYXBlci9pbmRleCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3BhcGVyLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvcGFwZXJfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+i1hOa6kCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy91c2VyLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlcl9zZWxlY3QucG5nJyxcclxuICAgICAgICB0ZXh0OiAn5oiR55qEJ1xyXG4gICAgICB9XVxyXG4gICAgfSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZCRkJGQicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjlvZLnurPmnKzliJ3kuK3mlbDlraYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcclxuICAgICAgcmVxdWVzdDogODAwMCxcclxuICAgICAgZG93bmxvYWRGaWxlOiA4MDAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgc3lzdGVtOiB7fSxcclxuICAgIHBhcGVyRmlsdGVyOiB7XHJcbiAgICAgIHRhZzogJ2hvdCcsXHJcbiAgICAgIHR5cGU6ICcwJyxcclxuICAgICAgZ3JhZGU6ICc4JyxcclxuICAgICAgeWVhcjogJzAnXHJcbiAgICB9LFxyXG4gICAgc3RhdGlzdGljc1NlbGVjdDogWycxJ11cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIC8vIOS/ruWkjeW5tuWPkVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgLy8gcmVxdWVzdOWFqOWxgOmFjee9rlxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgIGNvbmZpZyhwYXJhbXMpIHtcclxuICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykgfHwgJydcclxuICAgICAgICB9XHJcbiAgICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxyXG4gICAgICAgIHBhcmFtcy5oZWFkZXIgPSBoZWFkZXJcclxuICAgICAgICByZXR1cm4gcGFyYW1zXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGxldCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBkYXRhQ29kZSA9IHJlcy5kYXRhLmNvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChzdGF0dXNDb2RlID09PSAnMjAwJykge1xyXG4gICAgICAgICAgaWYgKGRhdGFDb2RlID09PSAnMjAwJykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhQ29kZSA9PT0gJzQwMScpIHtcclxuICAgICAgICAgICAgLy8g5pyq5rOo5YaM55So5oi3XHJcbiAgICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luaXQvZ3JhZGUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09ICc0MDMnKSB7XHJcbiAgICAgICAgICAvLyBvcGVuaWTkuLrnqbpcclxuICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9teS9pbmRleCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycm9yKSB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOiuvuWkh+S/oeaBr+iOt+WPllxyXG4gICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBzZWxmLmdsb2JhbERhdGEuc3lzdGVtID0gcmVzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyDmjonnvZHnmoTmj5DnpLpcclxuICAgIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XHJcbiAgICAgIGlmICghcmVzLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfor7fmo4Dmn6XnvZHnu5zov57mjqUnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19