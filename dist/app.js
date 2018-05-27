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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicGFwZXJDaGVuZ3BpbkZpbHRlciIsInRhZyIsInR5cGUiLCJ5ZWFyIiwic3RhdGlzdGljc1NlbGVjdCIsInVzZSIsImludGVyY2VwdCIsInBhcmFtcyIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwidG9TdHJpbmciLCJkYXRhQ29kZSIsImRhdGEiLCJjb2RlIiwicmVkaXJlY3RUbyIsInVybCIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsImZhaWwiLCJlcnJvciIsImNvbXBsZXRlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic2VsZiIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWlGRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUE5RWZBLE1BOEVlLEdBOUVOO0FBQ1BDLGFBQU8sQ0FDTCxzQkFESyxFQUVMLGtCQUZLLEVBR0wsa0JBSEssRUFJ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LGlCQUFLO0FBRFMsV0FBaEI7QUFHRDtBQUNGLE9BbEN1QjtBQW1DeEJRLFVBbkN3QixnQkFtQ25CQyxLQW5DbUIsRUFtQ1o7QUFDVix1QkFBS1IsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLE1BRE07QUFFYkUsZ0JBQU07QUFGTyxTQUFmO0FBSUEsZUFBT0MsUUFBUUMsTUFBUixDQUFlRyxLQUFmLENBQVA7QUFDRCxPQXpDdUI7QUEwQ3hCQyxjQTFDd0Isc0JBMENiO0FBQ1QsdUJBQUtDLHdCQUFMO0FBQ0Q7QUE1Q3VCLEtBQTFCO0FBOENBO0FBQ0EsUUFBSUMsWUFBSjtBQUNBQyxPQUFHQyxhQUFILENBQWlCO0FBQ2Z4QixhQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWHFCLGFBQUtsQyxVQUFMLENBQWdCQyxNQUFoQixHQUF5QlksR0FBekI7QUFDRDtBQUhjLEtBQWpCO0FBS0E7QUFDQXNCLE9BQUdFLHFCQUFILENBQXlCLFVBQUN4QixHQUFELEVBQVM7QUFDaEMsVUFBSSxDQUFDQSxJQUFJeUIsV0FBVCxFQUFzQjtBQUNwQix1QkFBS2YsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLFNBRE07QUFFYkUsZ0JBQU07QUFGTyxTQUFmO0FBSUQ7QUFDRixLQVBEO0FBM0RhO0FBbUVkOzs7RUFsSjBCLGVBQUthLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvd29ya2Jvb2svaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2luaXQvZW50cnknLFxuICAgICAgJ3BhZ2VzL2luaXQvdHdpY2UnLFxuICAgICAgJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICdwYWdlcy9teS92aXAnLFxuICAgICAgJ3BhZ2VzL215L2NsYXNzZXMnLFxuICAgICAgJ3BhZ2VzL215L2luZm8nLFxuICAgICAgJ3BhZ2VzL215L3BheScsXG4gICAgICAncGFnZXMvbXkvZW1haWwnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2FkZCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svd2FudCcsXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXJyb3InLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2NvcnJlY3QnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL3NoYXJlJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9jaGFwdGVyJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9leGVyY2lzZScsXG4gICAgICAncGFnZXMvcGFwZXIvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3BhcGVyL2NoZW5nUGluJyxcbiAgICAgICdwYWdlcy9wYXBlci9mZW5DZW5nJyxcbiAgICAgICdwYWdlcy9wYXBlci96aHVhblRpJyxcbiAgICAgICdwYWdlcy9wYXBlci9jaGVuZ1BpbkZpbHRlcicsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9lcnJvcicsXG4gICAgICAncGFnZXMvc3RhdGlzdGljcy9zZWxlY3QnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2hhcmUnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdCdcbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjYWFhJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0ZDNkM2JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3MucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvc3RhdGlzdGljc19zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+iusOmUmemimCdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0aXN0aWNzL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3dvcmtib29rX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6ZSZ6aKY5pysJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3BhcGVyL2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3BhcGVyLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3BhcGVyX3NlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6LWE5rqQJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL215L2luZGV4JyxcbiAgICAgICAgaWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXIucG5nJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2NvbW1vbi9yZXNvdXJjZXMvdXNlcl9zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZCRkJGQicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5b2S57qz5pys5Yid5Lit5pWw5a2mJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICByZXF1ZXN0OiA4MDAwLFxuICAgICAgZG93bmxvYWRGaWxlOiA4MDAwXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICBzeXN0ZW06IHt9LFxuICAgIHBhcGVyQ2hlbmdwaW5GaWx0ZXI6IHtcbiAgICAgIHRhZzogJ2hvdCcsXG4gICAgICB0eXBlOiAnMCcsXG4gICAgICB5ZWFyOiAnMCdcbiAgICB9LFxuICAgIHN0YXRpc3RpY3NTZWxlY3Q6IFsnMiddXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIOS/ruWkjeW5tuWPkVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAvLyByZXF1ZXN05YWo5bGA6YWN572uXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XG4gICAgICBjb25maWcocGFyYW1zKSB7XG4gICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgJ29wZW5JZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykgfHwgJydcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIHBhcmFtcy5oZWFkZXIgPSBoZWFkZXJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgbGV0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpXG4gICAgICAgIGxldCBkYXRhQ29kZSA9IHJlcy5kYXRhLmNvZGUudG9TdHJpbmcoKVxuICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gJzIwMCcpIHtcbiAgICAgICAgICBpZiAoZGF0YUNvZGUgPT09ICcyMDAnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YUNvZGUgPT09ICc0MDEnKSB7XG4gICAgICAgICAgICAvLyDmsqHmnIlvcGVuaWRcbiAgICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcign6ZSZ6K+v55qEY29kZScpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXNDb2RlID09PSAnNDAzJykge1xuICAgICAgICAgIC8vIG9wZW5pZOS4uuepulxuICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWwoZXJyb3IpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcbiAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyDorr7lpIfkv6Hmga/ojrflj5ZcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuZ2xvYmFsRGF0YS5zeXN0ZW0gPSByZXNcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIOaOiee9keeahOaPkOekulxuICAgIHd4Lm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fmo4Dmn6XnvZHnu5zov57mjqUnLFxuICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==