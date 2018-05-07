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
      pages: ['pages/workbook/index', 'pages/init/entry', 'pages/init/twice', 'pages/my/index', 'pages/my/vip', 'pages/my/info', 'pages/my/pay', 'pages/my/email', 'pages/workbook/add', 'pages/workbook/want', 'pages/workbook/error', 'pages/workbook/correct', 'pages/workbook/share', 'pages/workbook/chapter', 'pages/workbook/exercise', 'pages/paper/index', 'pages/paper/chengPin', 'pages/paper/fenCeng', 'pages/paper/zhuanTi', 'pages/paper/chengPinFilter', 'pages/statistics/index', 'pages/statistics/error', 'pages/statistics/select', 'pages/statistics/share', 'pages/statistics/correct'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicGFwZXJDaGVuZ3BpbkZpbHRlciIsInRhZyIsInR5cGUiLCJ5ZWFyIiwic3RhdGlzdGljc1NlbGVjdCIsInVzZSIsImludGVyY2VwdCIsInBhcmFtcyIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwidG9TdHJpbmciLCJkYXRhQ29kZSIsImRhdGEiLCJjb2RlIiwicmVkaXJlY3RUbyIsInVybCIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsImZhaWwiLCJlcnJvciIsImNvbXBsZXRlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic2VsZiIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWdGRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUE3RWZBLE1BNkVlLEdBN0VOO0FBQ1BDLGFBQU8sQ0FDTCxzQkFE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QUNBLHlCQUFLSyxVQUFMLENBQWdCO0FBQ2RDLGlCQUFLO0FBRFMsV0FBaEI7QUFHRDtBQUNGLE9BbEN1QjtBQW1DeEJRLFVBbkN3QixnQkFtQ25CQyxLQW5DbUIsRUFtQ1o7QUFDVix1QkFBS1IsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLE1BRE07QUFFYkUsZ0JBQU07QUFGTyxTQUFmO0FBSUEsZUFBT0MsUUFBUUMsTUFBUixDQUFlRyxLQUFmLENBQVA7QUFDRCxPQXpDdUI7QUEwQ3hCQyxjQTFDd0Isc0JBMENiO0FBQ1QsdUJBQUtDLHdCQUFMO0FBQ0Q7QUE1Q3VCLEtBQTFCO0FBOENBO0FBQ0EsUUFBSUMsWUFBSjtBQUNBQyxPQUFHQyxhQUFILENBQWlCO0FBQ2Z4QixhQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWHFCLGFBQUtuQyxVQUFMLENBQWdCQyxNQUFoQixHQUF5QmEsR0FBekI7QUFDRDtBQUhjLEtBQWpCO0FBS0E7QUFDQXNCLE9BQUdFLHFCQUFILENBQXlCLFVBQUN4QixHQUFELEVBQVM7QUFDaEMsVUFBSSxDQUFDQSxJQUFJeUIsV0FBVCxFQUFzQjtBQUNwQix1QkFBS2YsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFNBRE07QUFFYkUsZ0JBQU07QUFGTyxTQUFmO0FBSUQ7QUFDRixLQVBEO0FBM0RhO0FBbUVkOzs7RUFqSjBCLGVBQUthLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9pbml0L2VudHJ5JyxcclxuICAgICAgJ3BhZ2VzL2luaXQvdHdpY2UnLFxyXG4gICAgICAncGFnZXMvbXkvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvbXkvdmlwJyxcclxuICAgICAgJ3BhZ2VzL215L2luZm8nLFxyXG4gICAgICAncGFnZXMvbXkvcGF5JyxcclxuICAgICAgJ3BhZ2VzL215L2VtYWlsJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2FkZCcsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay93YW50JyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2Vycm9yJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NvcnJlY3QnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svc2hhcmUnLFxyXG4gICAgICAncGFnZXMvd29ya2Jvb2svY2hhcHRlcicsXHJcbiAgICAgICdwYWdlcy93b3JrYm9vay9leGVyY2lzZScsXHJcbiAgICAgICdwYWdlcy9wYXBlci9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9wYXBlci9jaGVuZ1BpbicsXHJcbiAgICAgICdwYWdlcy9wYXBlci9mZW5DZW5nJyxcclxuICAgICAgJ3BhZ2VzL3BhcGVyL3podWFuVGknLFxyXG4gICAgICAncGFnZXMvcGFwZXIvY2hlbmdQaW5GaWx0ZXInLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2Vycm9yJyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2VsZWN0JyxcclxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2hhcmUnLFxyXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9jb3JyZWN0J1xyXG4gICAgXSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJyNhYWEnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzNGQzZDNicsXHJcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgbGlzdDogW3tcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljcy5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3Nfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+iusOmUmemimCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXHJcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvd29ya2Jvb2tfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+mUmemimOacrCdcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvcGFwZXIvaW5kZXgnLFxyXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9wYXBlci5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3BhcGVyX3NlbGVjdC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICfotYTmupAnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215L2luZGV4JyxcclxuICAgICAgICBpY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlci5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXJfc2VsZWN0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcclxuICAgICAgfV1cclxuICAgIH0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGQkZCRkInLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Yid5Lit5pWw5a2mJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XHJcbiAgICAgIHJlcXVlc3Q6IDgwMDAsXHJcbiAgICAgIGRvd25sb2FkRmlsZTogODAwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHN5c3RlbToge30sXHJcbiAgICBwYXBlckNoZW5ncGluRmlsdGVyOiB7XHJcbiAgICAgIHRhZzogJ2hvdCcsXHJcbiAgICAgIHR5cGU6ICcwJyxcclxuICAgICAgeWVhcjogJzAnXHJcbiAgICB9LFxyXG4gICAgc3RhdGlzdGljc1NlbGVjdDogWycyJ11cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIC8vIOS/ruWkjeW5tuWPkVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgLy8gcmVxdWVzdOWFqOWxgOmFjee9rlxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgIGNvbmZpZyhwYXJhbXMpIHtcclxuICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykgfHwgJydcclxuICAgICAgICB9XHJcbiAgICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxyXG4gICAgICAgIHBhcmFtcy5oZWFkZXIgPSBoZWFkZXJcclxuICAgICAgICByZXR1cm4gcGFyYW1zXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGxldCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGxldCBkYXRhQ29kZSA9IHJlcy5kYXRhLmNvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChzdGF0dXNDb2RlID09PSAnMjAwJykge1xyXG4gICAgICAgICAgaWYgKGRhdGFDb2RlID09PSAnMjAwJykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhQ29kZSA9PT0gJzQwMScpIHtcclxuICAgICAgICAgICAgLy8g5rKh5pyJb3BlbmlkXHJcbiAgICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ+mUmeivr+eahGNvZGUnKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09ICc0MDMnKSB7XHJcbiAgICAgICAgICAvLyBvcGVuaWTkuLrnqbpcclxuICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9teS9pbmRleCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKGVycm9yKSB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIOiuvuWkh+S/oeaBr+iOt+WPllxyXG4gICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBzZWxmLmdsb2JhbERhdGEuc3lzdGVtID0gcmVzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyDmjonnvZHnmoTmj5DnpLpcclxuICAgIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XHJcbiAgICAgIGlmICghcmVzLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfor7fmo4Dmn6XnvZHnu5zov57mjqUnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19