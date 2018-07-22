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
      pages: ['pages/workbook/index', 'pages/init/entry', 'pages/camera/index', 'pages/my/index', 'pages/my/vip', 'pages/my/classes', 'pages/my/info', 'pages/my/pay', 'pages/my/email', 'pages/workbook/add', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/share', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/resource/index', 'pages/resource/chengPin', 'pages/resource/fenCeng', 'pages/resource/zhuanTi', 'pages/resource/chengPinFilter', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/select', 'pages/statistics/share', 'pages/statistics/correct'],
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
          'openId': _wepy2.default.getStorageSync('gnb_middle_openId') || '',
          'periodId': '2'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicmVzb3VyY2VDaGVuZ3BpbkZpbHRlciIsInRhZyIsInR5cGUiLCJ5ZWFyIiwic3RhdGlzdGljc1NlbGVjdCIsInVzZSIsImludGVyY2VwdCIsInBhcmFtcyIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwidG9TdHJpbmciLCJkYXRhQ29kZSIsImRhdGEiLCJjb2RlIiwicmVkaXJlY3RUbyIsInVybCIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsImZhaWwiLCJlcnJvciIsImNvbXBsZXRlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic2VsZiIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWlGRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUE5RWZBLE1BOEVlLEdBOUVOO0FBQ1BDLGFBQU8sQ0FDTCxzQkFESyxFQUVMLGtCQUZLLEVBR0wsb0JBSEss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QkFBS0ssVUFBTCxDQUFnQjtBQUNkQyxpQkFBSztBQURTLFdBQWhCO0FBR0Q7QUFDRixPQW5DdUI7QUFvQ3hCUSxVQXBDd0IsZ0JBb0NuQkMsS0FwQ21CLEVBb0NaO0FBQ1YsdUJBQUtSLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxNQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlBLGVBQU9DLFFBQVFDLE1BQVIsQ0FBZUcsS0FBZixDQUFQO0FBQ0QsT0ExQ3VCO0FBMkN4QkMsY0EzQ3dCLHNCQTJDYjtBQUNULHVCQUFLQyx3QkFBTDtBQUNEO0FBN0N1QixLQUExQjtBQStDQTtBQUNBLFFBQUlDLFlBQUo7QUFDQUMsT0FBR0MsYUFBSCxDQUFpQjtBQUNmeEIsYUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hxQixhQUFLbEMsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUJZLEdBQXpCO0FBQ0Q7QUFIYyxLQUFqQjtBQUtBO0FBQ0FzQixPQUFHRSxxQkFBSCxDQUF5QixVQUFDeEIsR0FBRCxFQUFTO0FBQ2hDLFVBQUksQ0FBQ0EsSUFBSXlCLFdBQVQsRUFBc0I7QUFDcEIsdUJBQUtmLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxTQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlEO0FBQ0YsS0FQRDtBQTVEYTtBQW9FZDs7O0VBbkowQixlQUFLYSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICdwYWdlcy9pbml0L2VudHJ5JyxcbiAgICAgICdwYWdlcy9jYW1lcmEvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICdwYWdlcy9teS92aXAnLFxuICAgICAgJ3BhZ2VzL215L2NsYXNzZXMnLFxuICAgICAgJ3BhZ2VzL215L2luZm8nLFxuICAgICAgJ3BhZ2VzL215L3BheScsXG4gICAgICAncGFnZXMvbXkvZW1haWwnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2FkZCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svd2FudCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXJyb3InLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NvcnJlY3QnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL3NoYXJlJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9jaGFwdGVyJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9leGVyY2lzZScsXG4gICAgICAncGFnZXMvcmVzb3VyY2UvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3Jlc291cmNlL2NoZW5nUGluJyxcbiAgICAgICdwYWdlcy9yZXNvdXJjZS9mZW5DZW5nJyxcbiAgICAgICdwYWdlcy9yZXNvdXJjZS96aHVhblRpJyxcbiAgICAgICdwYWdlcy9yZXNvdXJjZS9jaGVuZ1BpbkZpbHRlcicsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9lcnJvcicsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9zZWxlY3QnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2hhcmUnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdCdcbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjYWFhJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0ZDNkM2JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3MucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+iusOmUmemimCdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6ZSZ6aKY5pysJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3Jlc291cmNlL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3Jlc291cmNlLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3Jlc291cmNlX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6LWE5rqQJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXIucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlcl9zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZCRkJGQicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Yid5LitJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICByZXF1ZXN0OiA2MDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiA2MDAwXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICBzeXN0ZW06IHt9LFxuICAgIHJlc291cmNlQ2hlbmdwaW5GaWx0ZXI6IHtcbiAgICAgIHRhZzogJ2hvdCcsXG4gICAgICB0eXBlOiAnMCcsXG4gICAgICB5ZWFyOiAnMCdcbiAgICB9LFxuICAgIHN0YXRpc3RpY3NTZWxlY3Q6IFsnMiddXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIOS/ruWkjeW5tuWPkVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAvLyByZXF1ZXN05YWo5bGA6YWN572uXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XG4gICAgICBjb25maWcocGFyYW1zKSB7XG4gICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykgfHwgJycsXG4gICAgICAgICAgJ3BlcmlvZElkJzogJzInXG4gICAgICAgIH1cbiAgICAgICAgLy8gd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgICBwYXJhbXMuaGVhZGVyID0gaGVhZGVyXG4gICAgICAgIHJldHVybiBwYXJhbXNcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIGxldCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxuICAgICAgICBsZXQgZGF0YUNvZGUgPSByZXMuZGF0YS5jb2RlLnRvU3RyaW5nKClcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09ICcyMDAnKSB7XG4gICAgICAgICAgaWYgKGRhdGFDb2RlID09PSAnMjAwJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFDb2RlID09PSAnNDAxJykge1xuICAgICAgICAgICAgLy8g5rKh5pyJb3BlbmlkXG4gICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ+mUmeivr+eahGNvZGUnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gJzQwMycpIHtcbiAgICAgICAgICAvLyBvcGVuaWTkuLrnqbpcbiAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL215L2luZGV4J1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsKGVycm9yKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXG4gICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgd2VweS5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgfVxuICAgIH0pXG4gICAgLy8g6K6+5aSH5L+h5oGv6I635Y+WXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmdsb2JhbERhdGEuc3lzdGVtID0gcmVzXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyDmjonnvZHnmoTmj5DnpLpcbiAgICB3eC5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UoKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+35qOA5p+l572R57uc6L+e5o6lJyxcbiAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=