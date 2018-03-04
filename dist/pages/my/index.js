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
      _into: function _into(url) {
        wx.navigateTo({
          url: url
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
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
                _wepy2.default.switchTab({ url: '/pages/workbook/index' });
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

      function onLoad() {
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
        path: '/pages/my/index'
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwicmVmdW5kIiwibWV0aG9kcyIsIl9pbnRvIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiX3JlZnVuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiaWNvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsImFwcCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwibG9naW4iLCJjb2RlIiwiY2xlYXJTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJsZW5ndGgiLCJfbG9naW4iLCJfZ2V0T3BlbklkIiwic3dpdGNoVGFiIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxjQUFNLEVBREU7QUFFUkMsaUJBQVMsRUFGRDtBQUdSQyxhQUFLLEVBSEc7QUFJUkMsZ0JBQVE7QUFKQTtBQURMLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0RDLEdBREMsRUFDSTtBQUNWQyxXQUFHQyxVQUFILENBQWM7QUFDWkYsZUFBS0E7QUFETyxTQUFkO0FBR0QsT0FMTzs7QUFNUjtBQUNNRyxhQVBF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O0VBNUpnQyxlQUFLQyxJOztrQkFBbkJyRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBoZWFkSW1nOiAnJyxcbiAgICAgICAgdmlwOiAnJyxcbiAgICAgICAgcmVmdW5kOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50byAodXJsKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5Y+R6LW36YCA5qy+XG4gICAgICBhc3luYyBfcmVmdW5kICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgICAgIC8vIOWPkei1t+mAgOasvuaOpeWPo1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFJlZnVuZCgpXG4gICAgICAgICAgLy8g6YeN5paw6I635b6X55So5oi35L+h5oGvXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgICAgICAgIHRoaXMudXNlckluZm8ucmVmdW5kID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykucmVmdW5kXG4gICAgICAgICAgdGhpcy51c2VySW5mby52aXAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS52aXBcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfnlLPor7fmiJDlip8nLFxuICAgICAgICAgICAgY29udGVudDogJ+aIkeS7rOWwhuWcqDI05bCP5pe25YaF5a6M5oiQ6YCA5qy+JyxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn55+l6YGT5LqGJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Ye66ZSZ5LqG6K+356iN5ZCO6YeN6K+VJyxcbiAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5Y+R6LW36YCA5qy+ICovXG4gICAgX3NldFJlZnVuZCAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vcmVmdW5kJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhcHA6ICdtaWRkbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOW+ruS/oeacjeWKoeWZqOiOt+WPlkNPREUgKi9cbiAgICBfbG9naW4gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmNvZGUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog6YCa6L+HY29kZeiOt+WPlk9QRU5JRCAqL1xuICAgIF9nZXRPcGVuSWQgKGNvZGUpIHtcbiAgICAgIHdlcHkuY2xlYXJTdG9yYWdlU3luYygpXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vb3BlbklkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgYXBwOiAnbWlkZGxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcsIHJlcy5vcGVuaWQpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3Nlc3Npb25fa2V5JywgcmVzLnNlc3Npb25fa2V5KVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gICAgX2dldFVzZXJJbmZvICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDEg6I635Y+W5piv5ZCm5a2Y5pyJb3BlbklkIOWmguaenOayoeacieS7o+ihqOS4uueZu+W9lei/h1xuICAgICAgICAgKiAyIOiOt+WPlm9wZW5JZFxuICAgICAgICAgKiAzIOWcqOmAmui/h29wZW5JZOiOt+W+l+eUqOaIt+S/oeaBr1xuICAgICAgICAgKi9cbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbGV0IGNvZGUgPSBhd2FpdCB0aGlzLl9sb2dpbigpXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZ2V0T3BlbklkKGNvZGUpXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgd2VweS5zd2l0Y2hUYWIoeyB1cmw6IGAvcGFnZXMvd29ya2Jvb2svaW5kZXhgIH0pXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvblNob3cgKCkge1xuICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgICAgdGhpcy51c2VySW5mby5uYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykubmFtZVxuICAgICAgdGhpcy51c2VySW5mby5oZWFkSW1nID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykuaGVhZEltZ1xuICAgICAgdGhpcy51c2VySW5mby5yZWZ1bmQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5yZWZ1bmRcbiAgICAgIHRoaXMudXNlckluZm8udmlwID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudmlwXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19