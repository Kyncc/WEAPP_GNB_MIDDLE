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
                  this.userInfo.refund = _wepy2.default.getStorageSync('User').refund;
                  this.userInfo.vip = _wepy2.default.getStorageSync('User').vip;
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
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/mini-program/openId',
          data: {
            code: code,
            app: 'middle'
          },
          success: function success(res) {
            _wepy2.default.setStorageSync('openId', res.openid);
            _wepy2.default.setStorageSync('session_key', res.session_key);
            _wepy2.default.setStorageSync('unionid', res.unionid);
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
            _wepy2.default.setStorageSync('User', res);
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

                if (!(_wepy2.default.getStorageSync('openId').length === 0)) {
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
                this.userInfo.name = _wepy2.default.getStorageSync('User').name;
                this.userInfo.headImg = _wepy2.default.getStorageSync('User').headImg;
                this.userInfo.refund = _wepy2.default.getStorageSync('User').refund;
                this.userInfo.vip = _wepy2.default.getStorageSync('User').vip;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwicmVmdW5kIiwibWV0aG9kcyIsIl9pbnRvIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiX3JlZnVuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiaWNvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsImFwcCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwibG9naW4iLCJjb2RlIiwic2V0U3RvcmFnZVN5bmMiLCJvcGVuaWQiLCJzZXNzaW9uX2tleSIsInVuaW9uaWQiLCJsZW5ndGgiLCJfbG9naW4iLCJfZ2V0T3BlbklkIiwic3dpdGNoVGFiIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxjQUFNLEVBREU7QUFFUkMsaUJBQVMsRUFGRDtBQUdSQyxhQUFLLEVBSEc7QUFJUkMsZ0JBQVE7QUFKQTtBQURMLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFdBRFEsaUJBQ0RDLEdBREMsRUFDSTtBQUNWQyxXQUFHQyxVQUFILENBQWM7QUFDWkYsZUFBS0E7QUFETyxTQUFkO0FBR0QsT0FMTzs7QUFNUjtBQUNNRyxhQVBFO0FBQUE7QUFB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T0FBUDtBQUlEOzs7O0VBNUpnQyxlQUFLQyxJOztrQkFBbkJyRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBoZWFkSW1nOiAnJyxcbiAgICAgICAgdmlwOiAnJyxcbiAgICAgICAgcmVmdW5kOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50byAodXJsKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5Y+R6LW36YCA5qy+XG4gICAgICBhc3luYyBfcmVmdW5kICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgICAgIC8vIOWPkei1t+mAgOasvuaOpeWPo1xuICAgICAgICAgIGF3YWl0IHRoaXMuX3NldFJlZnVuZCgpXG4gICAgICAgICAgLy8g6YeN5paw6I635b6X55So5oi35L+h5oGvXG4gICAgICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgICAgICAgIHRoaXMudXNlckluZm8ucmVmdW5kID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnJlZnVuZFxuICAgICAgICAgIHRoaXMudXNlckluZm8udmlwID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnZpcFxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+eUs+ivt+aIkOWKnycsXG4gICAgICAgICAgICBjb250ZW50OiAn5oiR5Lus5bCG5ZyoMjTlsI/ml7blhoXlrozmiJDpgIDmrL4nLFxuICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICflh7rplJnkuobor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlj5HotbfpgIDmrL4gKi9cbiAgICBfc2V0UmVmdW5kICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9yZWZ1bmQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFwcDogJ21pZGRsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog5b6u5L+h5pyN5Yqh5Zmo6I635Y+WQ09ERSAqL1xuICAgIF9sb2dpbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDpgJrov4djb2Rl6I635Y+WT1BFTklEICovXG4gICAgX2dldE9wZW5JZCAoY29kZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL29wZW5JZCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICAgIGFwcDogJ21pZGRsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnb3BlbklkJywgcmVzLm9wZW5pZClcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25fa2V5JywgcmVzLnNlc3Npb25fa2V5KVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndW5pb25pZCcsIHJlcy51bmlvbmlkKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gICAgX2dldFVzZXJJbmZvICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAxIOiOt+WPluaYr+WQpuWtmOaciW9wZW5JZCDlpoLmnpzmsqHmnInku6PooajkuLrnmbvlvZXov4dcbiAgICAgICAgICogMiDojrflj5ZvcGVuSWRcbiAgICAgICAgICogMyDlnKjpgJrov4dvcGVuSWTojrflvpfnlKjmiLfkv6Hmga9cbiAgICAgICAgICovXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsZXQgY29kZSA9IGF3YWl0IHRoaXMuX2xvZ2luKClcbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRPcGVuSWQoY29kZSlcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7IHVybDogYC9wYWdlcy93b3JrYm9vay9pbmRleGAgfSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdyAoKSB7XG4gICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICB0aGlzLnVzZXJJbmZvLm5hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykubmFtZVxuICAgICAgdGhpcy51c2VySW5mby5oZWFkSW1nID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmhlYWRJbWdcbiAgICAgIHRoaXMudXNlckluZm8ucmVmdW5kID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnJlZnVuZFxuICAgICAgdGhpcy51c2VySW5mby52aXAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykudmlwXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19