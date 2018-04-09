'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      userInfo: {
        name: '',
        headImg: '',
        vip: '',
        refund: false
      }
    }, _this.methods = {
      // 复制公众号码
      _copy: function _copy() {
        _wepy2.default.setClipboardData({
          data: 'guinaben3456',
          success: function success(res) {
            _wepy2.default.showToast({
              title: '复制成功!',
              icon: 'none'
            });
          }
        });
      },
      _into: function _into(url) {
        wx.navigateTo({
          url: url
        });
      },

      // 打开小程序
      _open: function _open() {
        wx.navigateToMiniProgram({
          appId: 'wx4e089964d6aefc57'
        });
      },

      // 发起退款
      _refund: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;

                  _wepy2.default.showLoading({ title: '请稍候' });
                  // 发起退款接口
                  _context.next = 4;
                  return this._setRefund();

                case 4:
                  _context.next = 6;
                  return this._getUserInfo();

                case 6:
                  this.userInfo.refund = _wepy2.default.getStorageSync('gnb_middle_User').refund;
                  this.userInfo.vip = _wepy2.default.getStorageSync('gnb_middle_User').vip;
                  this.$apply();
                  _wepy2.default.hideLoading();
                  _wepy2.default.showModal({
                    title: '申请成功',
                    content: '我们将在24小时内完成退款',
                    confirmText: '知道了',
                    showCancel: false
                  });
                  _context.next = 18;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);
                  _wepy2.default.hideLoading();
                  _wepy2.default.showToast({
                    title: '出错了请稍后重试',
                    icon: 'none'
                  });

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 13]]);
        }));

        function _refund() {
          return _ref2.apply(this, arguments);
        }

        return _refund;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_setRefund',


    /** 发起退款 */
    value: function _setRefund() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/mini-program/refund',
          method: 'POST',
          data: {
            app: 'middle'
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }

    /** 微信服务器获取CODE */

  }, {
    key: '_login',
    value: function _login() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.login({
          success: function success(res) {
            console.log(res.code);
            resolve(res.code);
          }
        });
      });
    }

    /** 通过code获取OPENID */

  }, {
    key: '_getOpenId',
    value: function _getOpenId(code) {
      _wepy2.default.clearStorageSync();
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/mini-program/openId',
          data: {
            code: code,
            app: 'middle'
          },
          success: function success(res) {
            _wepy2.default.setStorageSync('gnb_middle_openId', res.openid);
            _wepy2.default.setStorageSync('gnb_middle_session_key', res.session_key);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }

    /** 获取用户信息 */

  }, {
    key: '_getUserInfo',
    value: function _getUserInfo() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/member/info',
          success: function success(res) {
            _wepy2.default.setStorageSync('gnb_middle_User', res);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        var code;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                /**
                 * 1 获取是否存有openId 如果没有代表为登录过
                 * 2 获取openId
                 * 3 在通过openId获得用户信息
                 */
                _wepy2.default.showLoading({ title: '请稍候' });

                if (!(_wepy2.default.getStorageSync('gnb_middle_openId').length === 0)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return this._login();

              case 5:
                code = _context2.sent;
                _context2.next = 8;
                return this._getOpenId(code);

              case 8:
                _context2.next = 10;
                return this._getUserInfo();

              case 10:
                _wepy2.default.hideLoading();
                // 对新建用户的进入练习册处理
                if (options.from === 'init') {
                  _wepy2.default.navigateTo({
                    url: '/pages/workbook/chapter?name=' + options.name + '&id=' + options.id
                  });
                } else {
                  _wepy2.default.switchTab({ url: '/pages/workbook/index' });
                }
                this.$apply();
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2['catch'](0);

                _wepy2.default.hideLoading();

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 15]]);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._getUserInfo();

              case 2:
                this.userInfo.name = _wepy2.default.getStorageSync('gnb_middle_User').name;
                this.userInfo.headImg = _wepy2.default.getStorageSync('gnb_middle_User').headImg;
                this.userInfo.refund = _wepy2.default.getStorageSync('gnb_middle_User').refund;
                this.userInfo.vip = _wepy2.default.getStorageSync('gnb_middle_User').vip;
                this.$apply();

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        console.log(res.target);
      }
      return {
        title: '各位家长，用这个记错题，速度快，用处大',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/init/entry'
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwicmVmdW5kIiwibWV0aG9kcyIsIl9jb3B5Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJfaW50byIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsIl9vcGVuIiwibmF2aWdhdGVUb01pbmlQcm9ncmFtIiwiYXBwSWQiLCJfcmVmdW5kIiwic2hvd0xvYWRpbmciLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYXBwIiwiZmFpbCIsImVyciIsImxvZ2luIiwiY29kZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsIm9wZW5pZCIsInNlc3Npb25fa2V5Iiwib3B0aW9ucyIsImxlbmd0aCIsIl9sb2dpbiIsIl9nZXRPcGVuSWQiLCJmcm9tIiwiaWQiLCJzd2l0Y2hUYWIiLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxjQUFNLEVBREU7QUFFUkMsaUJBQVMsRUFGRDtBQUdSQyxhQUFLLEVBSEc7QUFJUkMsZ0JBQVE7QUFKQTtBQURMLEssUUFTUEMsTyxHQUFVO0FBQ1I7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QUNELHFCQUFLVyxNQUFMOzs7Ozs7OztBQUVBLCtCQUFLQyxXQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtJLEtBQUtILFlBQUwsRTs7O0FBQ04scUJBQUt2QixRQUFMLENBQWNDLElBQWQsR0FBcUIsZUFBS3VCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDdkIsSUFBNUQ7QUFDQSxxQkFBS0QsUUFBTCxDQUFjRSxPQUFkLEdBQXdCLGVBQUtzQixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q3RCLE9BQS9EO0FBQ0EscUJBQUtGLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixlQUFLb0IsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNwQixNQUE5RDtBQUNBLHFCQUFLSixRQUFMLENBQWNHLEdBQWQsR0FBb0IsZUFBS3FCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDckIsR0FBM0Q7QUFDQSxxQkFBS3NCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJoQixHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSTBDLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QnBCLGdCQUFRQyxHQUFSLENBQVl2QixJQUFJNkMsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTDNDLGVBQU8scUJBREY7QUFFTDRDLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF0TGdDLGVBQUtDLEk7O2tCQUFuQjdELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXNlckluZm86IHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBoZWFkSW1nOiAnJyxcclxuICAgICAgICB2aXA6ICcnLFxyXG4gICAgICAgIHJlZnVuZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOWkjeWItuWFrOS8l+WPt+eggVxyXG4gICAgICBfY29weSAoKSB7XHJcbiAgICAgICAgd2VweS5zZXRDbGlwYm9hcmREYXRhKHtcclxuICAgICAgICAgIGRhdGE6ICdndWluYWJlbjM0NTYnLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+WkjeWItuaIkOWKnyEnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIF9pbnRvICh1cmwpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy8g5omT5byA5bCP56iL5bqPXHJcbiAgICAgIF9vcGVuICgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgYXBwSWQ6ICd3eDRlMDg5OTY0ZDZhZWZjNTcnXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy8g5Y+R6LW36YCA5qy+XHJcbiAgICAgIGFzeW5jIF9yZWZ1bmQgKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxyXG4gICAgICAgICAgLy8g5Y+R6LW36YCA5qy+5o6l5Y+jXHJcbiAgICAgICAgICBhd2FpdCB0aGlzLl9zZXRSZWZ1bmQoKVxyXG4gICAgICAgICAgLy8g6YeN5paw6I635b6X55So5oi35L+h5oGvXHJcbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXHJcbiAgICAgICAgICB0aGlzLnVzZXJJbmZvLnJlZnVuZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnJlZnVuZFxyXG4gICAgICAgICAgdGhpcy51c2VySW5mby52aXAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS52aXBcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+eUs+ivt+aIkOWKnycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmiJHku6zlsIblnKgyNOWwj+aXtuWGheWujOaIkOmAgOasvicsXHJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICflh7rplJnkuobor7fnqI3lkI7ph43or5UnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWPkei1t+mAgOasviAqL1xyXG4gICAgX3NldFJlZnVuZCAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vcmVmdW5kJyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhcHA6ICdtaWRkbGUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOW+ruS/oeacjeWKoeWZqOiOt+WPlkNPREUgKi9cclxuICAgIF9sb2dpbiAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5sb2dpbih7XHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmNvZGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiog6YCa6L+HY29kZeiOt+WPlk9QRU5JRCAqL1xyXG4gICAgX2dldE9wZW5JZCAoY29kZSkge1xyXG4gICAgICB3ZXB5LmNsZWFyU3RvcmFnZVN5bmMoKVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL29wZW5JZCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGNvZGUsXHJcbiAgICAgICAgICAgIGFwcDogJ21pZGRsZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnLCByZXMub3BlbmlkKVxyXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3Nlc3Npb25fa2V5JywgcmVzLnNlc3Npb25fa2V5KVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cclxuICAgIF9nZXRVc2VySW5mbyAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogMSDojrflj5bmmK/lkKblrZjmnIlvcGVuSWQg5aaC5p6c5rKh5pyJ5Luj6KGo5Li655m75b2V6L+HXHJcbiAgICAgICAgICogMiDojrflj5ZvcGVuSWRcclxuICAgICAgICAgKiAzIOWcqOmAmui/h29wZW5JZOiOt+W+l+eUqOaIt+S/oeaBr1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBsZXQgY29kZSA9IGF3YWl0IHRoaXMuX2xvZ2luKClcclxuICAgICAgICAgIGF3YWl0IHRoaXMuX2dldE9wZW5JZChjb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXHJcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgLy8g5a+55paw5bu655So5oi355qE6L+b5YWl57uD5Lmg5YaM5aSE55CGXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZnJvbSA9PT0gJ2luaXQnKSB7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY2hhcHRlcj9uYW1lPSR7b3B0aW9ucy5uYW1lfSZpZD0ke29wdGlvbnMuaWR9YFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2VweS5zd2l0Y2hUYWIoeyB1cmw6IGAvcGFnZXMvd29ya2Jvb2svaW5kZXhgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvblNob3cgKCkge1xyXG4gICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXHJcbiAgICAgIHRoaXMudXNlckluZm8ubmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLm5hbWVcclxuICAgICAgdGhpcy51c2VySW5mby5oZWFkSW1nID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuaGVhZEltZ1xyXG4gICAgICB0aGlzLnVzZXJJbmZvLnJlZnVuZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnJlZnVuZFxyXG4gICAgICB0aGlzLnVzZXJJbmZvLnZpcCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnZpcFxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luaXQvZW50cnknXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==