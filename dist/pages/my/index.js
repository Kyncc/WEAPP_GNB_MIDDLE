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
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/my/index'
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwicmVmdW5kIiwibWV0aG9kcyIsIl9pbnRvIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiX3JlZnVuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiaWNvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsImFwcCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwibG9naW4iLCJjb2RlIiwiY2xlYXJTdG9yYWdlU3luYyIsInNldFN0b3JhZ2VTeW5jIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJsZW5ndGgiLCJfbG9naW4iLCJfZ2V0T3BlbklkIiwic3dpdGNoVGFiIiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGNBQU0sRUFERTtBQUVSQyxpQkFBUyxFQUZEO0FBR1JDLGFBQUssRUFIRztBQUlSQyxnQkFBUTtBQUpBO0FBREwsSyxRQVNQQyxPLEdBQVU7QUFDUkMsV0FEUSxpQkFDREMsR0FEQyxFQUNJO0FBQ1ZDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixlQUFLQTtBQURPLFNBQWQ7QUFHRCxPQUxPOztBQU1S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O0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUE3SmdDLGVBQUtDLEk7O2tCQUFuQnRELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGhlYWRJbWc6ICcnLFxuICAgICAgICB2aXA6ICcnLFxuICAgICAgICByZWZ1bmQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIF9pbnRvICh1cmwpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDlj5HotbfpgIDmrL5cbiAgICAgIGFzeW5jIF9yZWZ1bmQgKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICAgICAgLy8g5Y+R6LW36YCA5qy+5o6l5Y+jXG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0UmVmdW5kKClcbiAgICAgICAgICAvLyDph43mlrDojrflvpfnlKjmiLfkv6Hmga9cbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICAgICAgdGhpcy51c2VySW5mby5yZWZ1bmQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5yZWZ1bmRcbiAgICAgICAgICB0aGlzLnVzZXJJbmZvLnZpcCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnZpcFxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+eUs+ivt+aIkOWKnycsXG4gICAgICAgICAgICBjb250ZW50OiAn5oiR5Lus5bCG5ZyoMjTlsI/ml7blhoXlrozmiJDpgIDmrL4nLFxuICAgICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICflh7rplJnkuobor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlj5HotbfpgIDmrL4gKi9cbiAgICBfc2V0UmVmdW5kICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9yZWZ1bmQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFwcDogJ21pZGRsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog5b6u5L+h5pyN5Yqh5Zmo6I635Y+WQ09ERSAqL1xuICAgIF9sb2dpbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDpgJrov4djb2Rl6I635Y+WT1BFTklEICovXG4gICAgX2dldE9wZW5JZCAoY29kZSkge1xuICAgICAgd2VweS5jbGVhclN0b3JhZ2VTeW5jKClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9vcGVuSWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgICBhcHA6ICdtaWRkbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJywgcmVzLm9wZW5pZClcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfc2Vzc2lvbl9rZXknLCByZXMuc2Vzc2lvbl9rZXkpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgICBfZ2V0VXNlckluZm8gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvKipcbiAgICAgICAgICogMSDojrflj5bmmK/lkKblrZjmnIlvcGVuSWQg5aaC5p6c5rKh5pyJ5Luj6KGo5Li655m75b2V6L+HXG4gICAgICAgICAqIDIg6I635Y+Wb3BlbklkXG4gICAgICAgICAqIDMg5Zyo6YCa6L+Hb3Blbklk6I635b6X55So5oi35L+h5oGvXG4gICAgICAgICAqL1xuICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgICBpZiAod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsZXQgY29kZSA9IGF3YWl0IHRoaXMuX2xvZ2luKClcbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRPcGVuSWQoY29kZSlcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7IHVybDogYC9wYWdlcy93b3JrYm9vay9pbmRleGAgfSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdyAoKSB7XG4gICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICB0aGlzLnVzZXJJbmZvLm5hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5uYW1lXG4gICAgICB0aGlzLnVzZXJJbmZvLmhlYWRJbWcgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS5oZWFkSW1nXG4gICAgICB0aGlzLnVzZXJJbmZvLnJlZnVuZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnJlZnVuZFxuICAgICAgdGhpcy51c2VySW5mby52aXAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS52aXBcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19