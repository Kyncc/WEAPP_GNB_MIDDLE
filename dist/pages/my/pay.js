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

var MyPay = function (_wepy$page) {
  _inherits(MyPay, _wepy$page);

  function MyPay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyPay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyPay.__proto__ || Object.getPrototypeOf(MyPay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的会员'
    }, _this.data = {
      vip: '',
      surplus: ''
    }, _this.methods = {
      _buy: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var options;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._orderVip(id);

                case 2:
                  options = _context.sent;
                  _context.next = 5;
                  return this._pay(options);

                case 5:
                  _context.next = 7;
                  return this._getUserInfo();

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _buy(_x) {
          return _ref2.apply(this, arguments);
        }

        return _buy;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyPay, [{
    key: '_getUserInfo',


    /** 获取用户信息 */
    value: function _getUserInfo() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/member/info',
          success: function success(res) {
            _wepy2.default.setStorageSync('gnb_middle_user', res);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }

    /** 购买VIP */

  }, {
    key: '_orderVip',
    value: function _orderVip(id) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://wechat.guinaben.com/mini-program/pay',
          data: {
            goodType: id,
            app: 'middle'
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            _wepy2.default.showToast({
              title: '获取支付CODE失败',
              icon: 'none'
            });
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }

    /** 发起支付 */

  }, {
    key: '_pay',
    value: function _pay(options) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.requestPayment({
          timeStamp: options.timeStamp,
          nonceStr: options.nonceStr,
          package: options.packAge,
          signType: 'MD5',
          paySign: options.paySign,
          success: function success(res) {
            _wepy2.default.showToast({
              title: 'VIP开通成功~',
              icon: 'success'
            });
            resolve(res);
          },
          fail: function fail(err) {
            _wepy2.default.showToast({
              title: '支付失败',
              icon: 'none'
            });
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.vip = _wepy2.default.getStorageSync('gnb_middle_user').vip;
                this.surplus = _wepy2.default.getStorageSync('gnb_middle_user').surplus;
                this.$apply();

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return MyPay;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyPay , 'pages/my/pay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidmlwIiwic3VycGx1cyIsIm1ldGhvZHMiLCJfYnV5IiwiaWQiLCJfb3JkZXJWaXAiLCJvcHRpb25zIiwiX3BheSIsIl9nZXRVc2VySW5mbyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2VweSIsInJlcXVlc3QiLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImdvb2RUeXBlIiwiYXBwIiwic2hvd1RvYXN0IiwiaWNvbiIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0UGF5bWVudCIsInRpbWVTdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInBhY2tBZ2UiLCJzaWduVHlwZSIsInBheVNpZ24iLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGVBQVM7QUFGSixLLFFBS1BDLE8sR0FBVTtBQUNGQyxVQURFO0FBQUEsNkZBQ0lDLEVBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFHYyxLQUFLQyxTQUFMLENBQWVELEVBQWYsQ0FIZDs7QUFBQTtBQUdGRSx5QkFIRTtBQUFBO0FBQUEseUJBS0EsS0FBS0MsSUFBTCxDQUFVRCxPQUFWLENBTEE7O0FBQUE7QUFBQTtBQUFBLHlCQU9BLEtBQUtFLFlBQUwsRUFQQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7QUFXVjttQ0FDZ0I7QUFDZCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxzQ0FETTtBQUVYQyxpQkFGVyxtQkFFRkMsR0FGRSxFQUVHO0FBQ1pKLDJCQUFLSyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0QsR0FBdkM7QUFDQU4sb0JBQVFNLEdBQVI7QUFDRCxXQUxVO0FBTVhFLGNBTlcsZ0JBTUxDLEdBTkssRUFNQTtBQUNUUixtQkFBT1EsR0FBUDtBQUNEO0FBUlUsU0FBYjtBQVVELE9BWE0sQ0FBUDtBQVlEOztBQUVEOzs7OzhCQUNXZixFLEVBQUk7QUFDYlEscUJBQUtRLFdBQUwsQ0FBaUIsRUFBRUMsT0FBTyxLQUFULEVBQWpCO0FBQ0EsYUFBTyxJQUFJWixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssOENBRE07QUFFWGYsZ0JBQU07QUFDSnVCLHNCQUFVbEIsRUFETjtBQUVKbUIsaUJBQUs7QUFGRCxXQUZLO0FBTVhSLGlCQU5XLG1CQU1GQyxHQU5FLEVBTUc7QUFDWk4sb0JBQVFNLEdBQVI7QUFDRCxXQVJVO0FBU1hFLGNBVFcsZ0JBU0xDLEdBVEssRUFTQTtBQUNUUCwyQkFBS1ksU0FBTCxDQUFlO0FBQ2JILHFCQUFPLFlBRE07QUFFYkksb0JBQU07QUFGTyxhQUFmO0FBSUFkLG1CQUFPUSxHQUFQO0FBQ0QsV0FmVTtBQWdCWE8sa0JBaEJXLHNCQWdCQztBQUNWZCwyQkFBS2UsV0FBTDtBQUNEO0FBbEJVLFNBQWI7QUFvQkQsT0FyQk0sQ0FBUDtBQXNCRDs7QUFFRDs7Ozt5QkFDTXJCLE8sRUFBUztBQUNiLGFBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsdUJBQUtnQixjQUFMLENBQW9CO0FBQ2xCQyxxQkFBV3ZCLFFBQVF1QixTQUREO0FBRWxCQyxvQkFBVXhCLFFBQVF3QixRQUZBO0FBR2xCQyxtQkFBU3pCLFFBQVEwQixPQUhDO0FBSWxCQyxvQkFBVSxLQUpRO0FBS2xCQyxtQkFBUzVCLFFBQVE0QixPQUxDO0FBTWxCbkIsaUJBTmtCLG1CQU1UQyxHQU5TLEVBTUo7QUFDWkosMkJBQUtZLFNBQUwsQ0FBZTtBQUNiSCxxQkFBTyxVQURNO0FBRWJJLG9CQUFNO0FBRk8sYUFBZjtBQUlBZixvQkFBUU0sR0FBUjtBQUNELFdBWmlCO0FBYWxCRSxjQWJrQixnQkFhWkMsR0FiWSxFQWFQO0FBQ1RQLDJCQUFLWSxTQUFMLENBQWU7QUFDYkgscUJBQU8sTUFETTtBQUViSSxvQkFBTTtBQUZPLGFBQWY7QUFJQWQsbUJBQU9RLEdBQVA7QUFDRDtBQW5CaUIsU0FBcEI7QUFxQkQsT0F0Qk0sQ0FBUDtBQXVCRDs7Ozs7Ozs7O0FBR0MscUJBQUtuQixHQUFMLEdBQVdZLGVBQUt1QixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q25DLEdBQWxEO0FBQ0EscUJBQUtDLE9BQUwsR0FBZVcsZUFBS3VCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDbEMsT0FBdEQ7QUFDQSxxQkFBS21DLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJwQixHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSXFCLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWXZCLElBQUl3QixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMbkIsZUFBTyxvQkFERjtBQUVMb0Isa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQTFHZ0M5QixlQUFLK0IsSTs7a0JBQW5CL0MsSyIsImZpbGUiOiJwYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGF5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTkvJrlkZgnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHZpcDogJycsXG4gICAgc3VycGx1czogJydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgX2J1eSAoaWQpIHtcbiAgICAgIC8vIOiOt+WPluaUr+S7mENPREVcbiAgICAgIGxldCBvcHRpb25zID0gYXdhaXQgdGhpcy5fb3JkZXJWaXAoaWQpXG4gICAgICAvLyDlj5HotbfmlK/ku5hcbiAgICAgIGF3YWl0IHRoaXMuX3BheShvcHRpb25zKVxuICAgICAgLy8g5pSv5LuY5oiQ5Yqf5ZCO5Zyo6YeN5paw5ouJ5Y+W5Liq5Lq65L+h5oGvXG4gICAgICBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICBfZ2V0VXNlckluZm8gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCByZXMpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDotK3kubBWSVAgKi9cbiAgX29yZGVyVmlwIChpZCkge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ivt+eojeWAmScgfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9wYXknLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZ29vZFR5cGU6IGlkLFxuICAgICAgICAgIGFwcDogJ21pZGRsZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W5pSv5LuYQ09EReWksei0pScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOWPkei1t+aUr+S7mCAqL1xuICBfcGF5IChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdFBheW1lbnQoe1xuICAgICAgICB0aW1lU3RhbXA6IG9wdGlvbnMudGltZVN0YW1wLFxuICAgICAgICBub25jZVN0cjogb3B0aW9ucy5ub25jZVN0cixcbiAgICAgICAgcGFja2FnZTogb3B0aW9ucy5wYWNrQWdlLFxuICAgICAgICBzaWduVHlwZTogJ01ENScsXG4gICAgICAgIHBheVNpZ246IG9wdGlvbnMucGF5U2lnbixcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdWSVDlvIDpgJrmiJDlip9+JyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pSv5LuY5aSx6LSlJyxcbiAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25TaG93ICgpIHtcbiAgICB0aGlzLnZpcCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnZpcFxuICAgIHRoaXMuc3VycGx1cyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnN1cnBsdXNcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==