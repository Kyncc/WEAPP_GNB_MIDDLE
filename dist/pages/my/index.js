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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIm5hbWUiLCJoZWFkSW1nIiwidmlwIiwicmVmdW5kIiwibWV0aG9kcyIsIl9pbnRvIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwiX3JlZnVuZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJfc2V0UmVmdW5kIiwiX2dldFVzZXJJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInNob3dDYW5jZWwiLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwiaWNvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsImFwcCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwibG9naW4iLCJjb2RlIiwic2V0U3RvcmFnZVN5bmMiLCJvcGVuaWQiLCJzZXNzaW9uX2tleSIsInVuaW9uaWQiLCJsZW5ndGgiLCJfbG9naW4iLCJfZ2V0T3BlbklkIiwic3dpdGNoVGFiIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsY0FBTSxFQURFO0FBRVJDLGlCQUFTLEVBRkQ7QUFHUkMsYUFBSyxFQUhHO0FBSVJDLGdCQUFRO0FBSkE7QUFETCxLLFFBU1BDLE8sR0FBVTtBQUNSQyxXQURRLGlCQUNEQyxHQURDLEVBQ0k7QUFDVkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pGLGVBQUtBO0FBRE8sU0FBZDtBQUdELE9BTE87O0FBTVI7QUFDTUcsYUFQRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7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R0FOSyxFQU1BO0FBQ1RQLG1CQUFPTyxHQUFQO0FBQ0Q7QUFSVSxTQUFiO0FBVUQsT0FYTSxDQUFQO0FBWUQ7Ozs7Ozs7Ozs7OztBQUlHOzs7OztBQUtBLCtCQUFLeEIsV0FBTCxDQUFpQixFQUFDQyxPQUFPLEtBQVIsRUFBakI7O3NCQUNJLGVBQUtHLGNBQUwsQ0FBb0IsUUFBcEIsRUFBOEIyQixNQUE5QixLQUF5QyxDOzs7Ozs7dUJBQzFCLEtBQUtDLE1BQUwsRTs7O0FBQWJOLG9COzt1QkFDRSxLQUFLTyxVQUFMLENBQWdCUCxJQUFoQixDOzs7O3VCQUVGLEtBQUt2QixZQUFMLEU7OztBQUNOLCtCQUFLRyxXQUFMO0FBQ0EsK0JBQUs0QixTQUFMLENBQWUsRUFBRXRDLDRCQUFGLEVBQWY7QUFDQSxxQkFBS1MsTUFBTDs7Ozs7Ozs7QUFFQSwrQkFBS0MsV0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLSSxLQUFLSCxZQUFMLEU7OztBQUNOLHFCQUFLZCxRQUFMLENBQWNDLElBQWQsR0FBcUIsZUFBS2MsY0FBTCxDQUFvQixNQUFwQixFQUE0QmQsSUFBakQ7QUFDQSxxQkFBS0QsUUFBTCxDQUFjRSxPQUFkLEdBQXdCLGVBQUthLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJiLE9BQXBEO0FBQ0EscUJBQUtGLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixlQUFLVyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCWCxNQUFuRDtBQUNBLHFCQUFLSixRQUFMLENBQWNHLEdBQWQsR0FBb0IsZUFBS1ksY0FBTCxDQUFvQixNQUFwQixFQUE0QlosR0FBaEQ7QUFDQSxxQkFBS2EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpKK0IsZUFBSzhCLEk7O2tCQUFuQmxELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGhlYWRJbWc6ICcnLFxuICAgICAgICB2aXA6ICcnLFxuICAgICAgICByZWZ1bmQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIF9pbnRvICh1cmwpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDlj5HotbfpgIDmrL5cbiAgICAgIGFzeW5jIF9yZWZ1bmQgKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICAgICAgLy8g5Y+R6LW36YCA5qy+5o6l5Y+jXG4gICAgICAgICAgYXdhaXQgdGhpcy5fc2V0UmVmdW5kKClcbiAgICAgICAgICAvLyDph43mlrDojrflvpfnlKjmiLfkv6Hmga9cbiAgICAgICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICAgICAgdGhpcy51c2VySW5mby5yZWZ1bmQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykucmVmdW5kXG4gICAgICAgICAgdGhpcy51c2VySW5mby52aXAgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykudmlwXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn55Sz6K+35oiQ5YqfJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmiJHku6zlsIblnKgyNOWwj+aXtuWGheWujOaIkOmAgOasvicsXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+efpemBk+S6hicsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WHuumUmeS6huivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOWPkei1t+mAgOasviAqL1xuICAgIF9zZXRSZWZ1bmQgKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL3JlZnVuZCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYXBwOiAnbWlkZGxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDlvq7kv6HmnI3liqHlmajojrflj5ZDT0RFICovXG4gICAgX2xvZ2luICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkubG9naW4oe1xuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5jb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqIOmAmui/h2NvZGXojrflj5ZPUEVOSUQgKi9cbiAgICBfZ2V0T3BlbklkIChjb2RlKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vb3BlbklkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgYXBwOiAnbWlkZGxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdvcGVuSWQnLCByZXMub3BlbmlkKVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc2Vzc2lvbl9rZXknLCByZXMuc2Vzc2lvbl9rZXkpXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd1bmlvbmlkJywgcmVzLnVuaW9uaWQpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgICBfZ2V0VXNlckluZm8gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnVXNlcicsIHJlcylcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDEg6I635Y+W5piv5ZCm5a2Y5pyJb3BlbklkIOWmguaenOayoeacieS7o+ihqOS4uueZu+W9lei/h1xuICAgICAgICAgKiAyIOiOt+WPlm9wZW5JZFxuICAgICAgICAgKiAzIOWcqOmAmui/h29wZW5JZOiOt+W+l+eUqOaIt+S/oeaBr1xuICAgICAgICAgKi9cbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxldCBjb2RlID0gYXdhaXQgdGhpcy5fbG9naW4oKVxuICAgICAgICAgIGF3YWl0IHRoaXMuX2dldE9wZW5JZChjb2RlKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIHdlcHkuc3dpdGNoVGFiKHsgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2luZGV4YCB9KVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgb25TaG93ICgpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICAgIHRoaXMudXNlckluZm8ubmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5uYW1lXG4gICAgICB0aGlzLnVzZXJJbmZvLmhlYWRJbWcgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuaGVhZEltZ1xuICAgICAgdGhpcy51c2VySW5mby5yZWZ1bmQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykucmVmdW5kXG4gICAgICB0aGlzLnVzZXJJbmZvLnZpcCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS52aXBcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==