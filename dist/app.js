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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJnbG9iYWxEYXRhIiwic3lzdGVtIiwicGFwZXJDaGVuZ3BpbkZpbHRlciIsInRhZyIsInR5cGUiLCJ5ZWFyIiwic3RhdGlzdGljc1NlbGVjdCIsInVzZSIsImludGVyY2VwdCIsInBhcmFtcyIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwidG9TdHJpbmciLCJkYXRhQ29kZSIsImRhdGEiLCJjb2RlIiwicmVkaXJlY3RUbyIsInVybCIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJFcnJvciIsImZhaWwiLCJlcnJvciIsImNvbXBsZXRlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic2VsZiIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWlGRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUE5RWZBLE1BOEVlLEdBOUVOO0FBQ1BDLGFBQU8sQ0FDTCxzQkFESyxFQUVMLGtCQUZLLEVBR0wsa0JBSEssRUFJTCxnQkFKSyxFQUtMLGNBTEssRUFNTCxrQkFOSyxFQU9MLGVBUEssRUFRTCxjQVJLLEVBU0wsZ0JBVEssRUFVTCxvQkFWSyxFQVdMLHFCQVhLLEVBWUwsc0JBWkssRUFhTCx3QkFiSyxFQWNMLHNCQWRLLEVBZUwsd0JBZkssRUFnQkwseUJBaEJLLEVBaUJMLG1CQWpCSyxFQWtCTCxzQkFsQkssRUFtQkwscUJBbkJLLEVBb0JMLHFCQXBCSyxFQXFCTCw0QkFyQkssRUFzQkwsd0JBdEJLLEVBdUJMLHdCQXZCSyxFQXdCTCx5QkF4QkssRUF5Qkwsd0JBekJLLEVBMEJMLDBCQTFCSyxDQURBO0FBNkJQQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE9BSFA7QUFJTkMseUJBQWlCLFNBSlg7QUFLTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLHNCQURMO0FBRUxDLG9CQUFVLGlDQUZMO0FBR0xDLDRCQUFrQix3Q0FIYjtBQUlMQyxnQkFBTTtBQUpELFNBQUQsRUFLSDtBQUNESCxvQkFBVSx3QkFEVDtBQUVEQyxvQkFBVSwrQkFGVDtBQUdEQyw0QkFBa0Isc0NBSGpCO0FBSURDLGdCQUFNO0FBSkwsU0FMRyxFQVVIO0FBQ0RILG9CQUFVLG1CQURUO0FBRURDLG9CQUFVLDRCQUZUO0FBR0RDLDRCQUFrQixtQ0FIakI7QUFJREMsZ0JBQU07QUFKTCxTQVZHLEVBZUg7QUFDREgsb0JBQVUsZ0JBRFQ7QUFFREMsb0JBQVUsMkJBRlQ7QUFHREMsNEJBQWtCLGtDQUhqQjtBQUlEQyxnQkFBTTtBQUpMLFNBZkc7QUFMQSxPQTdCRDtBQXdEUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFdBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQXhERDtBQThEUEMsc0JBQWdCO0FBQ2RDLGlCQUFTLElBREs7QUFFZEMsc0JBQWM7QUFGQTtBQTlEVCxLQThFTTtBQUFBLFVBVmZDLFVBVWUsR0FWRjtBQUNYQyxjQUFRLEVBREc7QUFFWEMsMkJBQXFCO0FBQ25CQyxhQUFLLEtBRGM7QUFFbkJDLGNBQU0sR0FGYTtBQUduQkMsY0FBTTtBQUhhLE9BRlY7QUFPWEMsd0JBQWtCLENBQUMsR0FBRDtBQVBQLEtBVUU7QUFHYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBO0FBQ0EsVUFBS0MsU0FBTCxDQUFlLFNBQWYsRUFBMEI7QUFDeEI1QixZQUR3QixrQkFDakI2QixNQURpQixFQUNUO0FBQ2IsWUFBSUMsU0FBUztBQUNYLG9CQUFVLGVBQUtDLGNBQUwsQ0FBb0IsbUJBQXBCLEtBQTRDLEVBRDNDO0FBRVgsc0JBQVk7QUFFZDtBQUphLFNBQWIsQ0FLQUYsT0FBT0MsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQSxlQUFPRCxNQUFQO0FBQ0QsT0FUdUI7QUFVeEJHLGFBVndCLG1CQVVoQkMsR0FWZ0IsRUFVWDtBQUNYQyxnQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EsWUFBSUcsYUFBYUgsSUFBSUcsVUFBSixDQUFlQyxRQUFmLEVBQWpCO0FBQ0EsWUFBSUMsV0FBV0wsSUFBSU0sSUFBSixDQUFTQyxJQUFULENBQWNILFFBQWQsRUFBZjtBQUNBLFlBQUlELGVBQWUsS0FBbkIsRUFBMEI7QUFDeEIsY0FBSUUsYUFBYSxLQUFqQixFQUF3QjtBQUN0QixtQkFBT0wsSUFBSU0sSUFBSixDQUFTQSxJQUFoQjtBQUNELFdBRkQsTUFFTyxJQUFJRCxhQUFhLEtBQWpCLEVBQXdCO0FBQzdCO0FBQ0EsMkJBQUtHLFVBQUwsQ0FBZ0I7QUFDZEMsbUJBQUs7QUFEUyxhQUFoQjtBQUdELFdBTE0sTUFLQTtBQUNMLDJCQUFLQyxTQUFMLENBQWU7QUFDYkMscUJBQU9YLElBQUlNLElBQUosQ0FBU00sR0FESDtBQUViQyxvQkFBTTtBQUZPLGFBQWY7QUFJQSxtQkFBT0MsUUFBUUMsTUFBUixDQUFlLElBQUlDLEtBQUosQ0FBVSxTQUFWLENBQWYsQ0FBUDtBQUNEO0FBQ0YsU0FmRCxNQWVPLElBQUliLGVBQWUsS0FBbkIsRUFBMEI7QUFDL0I7QUFDQSx5QkFBS0ssVUFBTCxDQUFnQjtBQUNkQyxpQkFBSztBQURTLFdBQWhCO0FBR0Q7QUFDRixPQW5DdUI7QUFvQ3hCUSxVQXBDd0IsZ0JBb0NuQkMsS0FwQ21CLEVBb0NaO0FBQ1YsdUJBQUtSLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxNQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlBLGVBQU9DLFFBQVFDLE1BQVIsQ0FBZUcsS0FBZixDQUFQO0FBQ0QsT0ExQ3VCO0FBMkN4QkMsY0EzQ3dCLHNCQTJDYjtBQUNULHVCQUFLQyx3QkFBTDtBQUNEO0FBN0N1QixLQUExQjtBQStDQTtBQUNBLFFBQUlDLFlBQUo7QUFDQUMsT0FBR0MsYUFBSCxDQUFpQjtBQUNmeEIsYUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hxQixhQUFLbEMsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUJZLEdBQXpCO0FBQ0Q7QUFIYyxLQUFqQjtBQUtBO0FBQ0FzQixPQUFHRSxxQkFBSCxDQUF5QixVQUFDeEIsR0FBRCxFQUFTO0FBQ2hDLFVBQUksQ0FBQ0EsSUFBSXlCLFdBQVQsRUFBc0I7QUFDcEIsdUJBQUtmLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxTQURNO0FBRWJFLGdCQUFNO0FBRk8sU0FBZjtBQUlEO0FBQ0YsS0FQRDtBQTVEYTtBQW9FZDs7O0VBbkowQixlQUFLYSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL3dvcmtib29rL2luZGV4JyxcbiAgICAgICdwYWdlcy9pbml0L2VudHJ5JyxcbiAgICAgICdwYWdlcy9pbml0L3R3aWNlJyxcbiAgICAgICdwYWdlcy9teS9pbmRleCcsXG4gICAgICAncGFnZXMvbXkvdmlwJyxcbiAgICAgICdwYWdlcy9teS9jbGFzc2VzJyxcbiAgICAgICdwYWdlcy9teS9pbmZvJyxcbiAgICAgICdwYWdlcy9teS9wYXknLFxuICAgICAgJ3BhZ2VzL215L2VtYWlsJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9hZGQnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL3dhbnQnLFxuICAgICAgJ3BhZ2VzL3dvcmtib29rL2Vycm9yJyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9jb3JyZWN0JyxcbiAgICAgICdwYWdlcy93b3JrYm9vay9zaGFyZScsXG4gICAgICAncGFnZXMvd29ya2Jvb2svY2hhcHRlcicsXG4gICAgICAncGFnZXMvd29ya2Jvb2svZXhlcmNpc2UnLFxuICAgICAgJ3BhZ2VzL3BhcGVyL2luZGV4JyxcbiAgICAgICdwYWdlcy9wYXBlci9jaGVuZ1BpbicsXG4gICAgICAncGFnZXMvcGFwZXIvZmVuQ2VuZycsXG4gICAgICAncGFnZXMvcGFwZXIvemh1YW5UaScsXG4gICAgICAncGFnZXMvcGFwZXIvY2hlbmdQaW5GaWx0ZXInLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3MvZXJyb3InLFxuICAgICAgJ3BhZ2VzL3N0YXRpc3RpY3Mvc2VsZWN0JyxcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL3NoYXJlJyxcbiAgICAgICdwYWdlcy9zdGF0aXN0aWNzL2NvcnJlY3QnXG4gICAgXSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnI2FhYScsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzNGQzZDNicsXG4gICAgICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy93b3JrYm9vay9pbmRleCcsXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9zdGF0aXN0aWNzLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3N0YXRpc3RpY3Nfc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICforrDplJnpopgnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc3RhdGlzdGljcy9pbmRleCcsXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy93b3JrYm9vay5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy93b3JrYm9va19zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+mUmemimOacrCdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9wYXBlci9pbmRleCcsXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9wYXBlci5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy9wYXBlcl9zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+i1hOa6kCdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9teS9pbmRleCcsXG4gICAgICAgIGljb25QYXRoOiAnY29tbW9uL3Jlc291cmNlcy91c2VyLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdjb21tb24vcmVzb3VyY2VzL3VzZXJfc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICfmiJHnmoQnXG4gICAgICB9XVxuICAgIH0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGQkZCRkInLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOW9kue6s+acrOWIneS4reaVsOWtpicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgcmVxdWVzdDogODAwMCxcbiAgICAgIGRvd25sb2FkRmlsZTogODAwMFxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgc3lzdGVtOiB7fSxcbiAgICBwYXBlckNoZW5ncGluRmlsdGVyOiB7XG4gICAgICB0YWc6ICdob3QnLFxuICAgICAgdHlwZTogJzAnLFxuICAgICAgeWVhcjogJzAnXG4gICAgfSxcbiAgICBzdGF0aXN0aWNzU2VsZWN0OiBbJzInXVxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICAvLyDkv67lpI3lubblj5FcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgLy8gcmVxdWVzdOWFqOWxgOmFjee9rlxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgICAgY29uZmlnKHBhcmFtcykge1xuICAgICAgICBsZXQgaGVhZGVyID0ge1xuICAgICAgICAgICdvcGVuSWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcpIHx8ICcnLFxuICAgICAgICAgICdwZXJpb2RJZCc6ICcyJ1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgICAgcGFyYW1zLmhlYWRlciA9IGhlYWRlclxuICAgICAgICByZXR1cm4gcGFyYW1zXG4gICAgICB9LFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBsZXQgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcbiAgICAgICAgbGV0IGRhdGFDb2RlID0gcmVzLmRhdGEuY29kZS50b1N0cmluZygpXG4gICAgICAgIGlmIChzdGF0dXNDb2RlID09PSAnMjAwJykge1xuICAgICAgICAgIGlmIChkYXRhQ29kZSA9PT0gJzIwMCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhQ29kZSA9PT0gJzQwMScpIHtcbiAgICAgICAgICAgIC8vIOayoeaciW9wZW5pZFxuICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnLFxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCfplJnor6/nmoRjb2RlJykpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09ICc0MDMnKSB7XG4gICAgICAgICAgLy8gb3Blbmlk5Li656m6XG4gICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9teS9pbmRleCdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbChlcnJvcikge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxuICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9LFxuICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIOiuvuWkh+S/oeaBr+iOt+WPllxuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5nbG9iYWxEYXRhLnN5c3RlbSA9IHJlc1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8g5o6J572R55qE5o+Q56S6XG4gICAgd3gub25OZXR3b3JrU3RhdHVzQ2hhbmdlKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+ajgOafpee9kee7nOi/nuaOpScsXG4gICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19