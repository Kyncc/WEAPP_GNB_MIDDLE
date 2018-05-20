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
      navigationBarTitleText: '开通VIP'
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
          url: 'https://mid.guinaben.com/v2/member/info',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiX2J1eSIsImlkIiwiX29yZGVyVmlwIiwib3B0aW9ucyIsIl9wYXkiLCJfZ2V0VXNlckluZm8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwic3VjY2VzcyIsInJlcyIsInNldFN0b3JhZ2VTeW5jIiwiZmFpbCIsImVyciIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJkYXRhIiwiZ29vZFR5cGUiLCJhcHAiLCJzaG93VG9hc3QiLCJpY29uIiwiY29tcGxldGUiLCJoaWRlTG9hZGluZyIsInJlcXVlc3RQYXltZW50IiwidGltZVN0YW1wIiwibm9uY2VTdHIiLCJwYWNrYWdlIiwicGFja0FnZSIsInNpZ25UeXBlIiwicGF5U2lnbiIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxPLEdBQVU7QUFDRkMsVUFERTtBQUFBLDZGQUNJQyxFQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR2MsS0FBS0MsU0FBTCxDQUFlRCxFQUFmLENBSGQ7O0FBQUE7QUFHRkUseUJBSEU7QUFBQTtBQUFBLHlCQUtBLEtBQUtDLElBQUwsQ0FBVUQsT0FBVixDQUxBOztBQUFBO0FBQUE7QUFBQSx5QkFPQSxLQUFLRSxZQUFMLEVBUEE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7O0FBV1Y7bUNBQ2dCO0FBQ2QsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUsseUNBRE07QUFFWEMsaUJBRlcsbUJBRUZDLEdBRkUsRUFFRztBQUNaSiwyQkFBS0ssY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNELEdBQXZDO0FBQ0FOLG9CQUFRTSxHQUFSO0FBQ0QsV0FMVTtBQU1YRSxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFDVFIsbUJBQU9RLEdBQVA7QUFDRDtBQVJVLFNBQWI7QUFVRCxPQVhNLENBQVA7QUFZRDs7QUFFRDs7Ozs4QkFDV2YsRSxFQUFJO0FBQ2JRLHFCQUFLUSxXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSVosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLDhDQURNO0FBRVhRLGdCQUFNO0FBQ0pDLHNCQUFVbkIsRUFETjtBQUVKb0IsaUJBQUs7QUFGRCxXQUZLO0FBTVhULGlCQU5XLG1CQU1GQyxHQU5FLEVBTUc7QUFDWk4sb0JBQVFNLEdBQVI7QUFDRCxXQVJVO0FBU1hFLGNBVFcsZ0JBU0xDLEdBVEssRUFTQTtBQUNUUCwyQkFBS2EsU0FBTCxDQUFlO0FBQ2JKLHFCQUFPLFlBRE07QUFFYkssb0JBQU07QUFGTyxhQUFmO0FBSUFmLG1CQUFPUSxHQUFQO0FBQ0QsV0FmVTtBQWdCWFEsa0JBaEJXLHNCQWdCQztBQUNWZiwyQkFBS2dCLFdBQUw7QUFDRDtBQWxCVSxTQUFiO0FBb0JELE9BckJNLENBQVA7QUFzQkQ7O0FBRUQ7Ozs7eUJBQ010QixPLEVBQVM7QUFDYixhQUFPLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLHVCQUFLaUIsY0FBTCxDQUFvQjtBQUNsQkMscUJBQVd4QixRQUFRd0IsU0FERDtBQUVsQkMsb0JBQVV6QixRQUFReUIsUUFGQTtBQUdsQkMsbUJBQVMxQixRQUFRMkIsT0FIQztBQUlsQkMsb0JBQVUsS0FKUTtBQUtsQkMsbUJBQVM3QixRQUFRNkIsT0FMQztBQU1sQnBCLGlCQU5rQixtQkFNVEMsR0FOUyxFQU1KO0FBQ1pKLDJCQUFLYSxTQUFMLENBQWU7QUFDYkoscUJBQU8sVUFETTtBQUViSyxvQkFBTTtBQUZPLGFBQWY7QUFJQWhCLG9CQUFRTSxHQUFSO0FBQ0QsV0FaaUI7QUFhbEJFLGNBYmtCLGdCQWFaQyxHQWJZLEVBYVA7QUFDVFAsMkJBQUthLFNBQUwsQ0FBZTtBQUNiSixxQkFBTyxNQURNO0FBRWJLLG9CQUFNO0FBRk8sYUFBZjtBQUlBZixtQkFBT1EsR0FBUDtBQUNEO0FBbkJpQixTQUFwQjtBQXFCRCxPQXRCTSxDQUFQO0FBdUJEOzs7c0NBRWtCSCxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSW9CLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWXRCLElBQUl1QixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMbEIsZUFBTyxvQkFERjtBQUVMbUIsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQS9GZ0M3QixlQUFLOEIsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJwYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGF5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5byA6YCaVklQJ1xyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGFzeW5jIF9idXkgKGlkKSB7XHJcbiAgICAgIC8vIOiOt+WPluaUr+S7mENPREVcclxuICAgICAgbGV0IG9wdGlvbnMgPSBhd2FpdCB0aGlzLl9vcmRlclZpcChpZClcclxuICAgICAgLy8g5Y+R6LW35pSv5LuYXHJcbiAgICAgIGF3YWl0IHRoaXMuX3BheShvcHRpb25zKVxyXG4gICAgICAvLyDmlK/ku5jmiJDlip/lkI7lnKjph43mlrDmi4nlj5bkuKrkurrkv6Hmga9cclxuICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xyXG4gIF9nZXRVc2VySW5mbyAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mbycsXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOi0reS5sFZJUCAqL1xyXG4gIF9vcmRlclZpcCAoaWQpIHtcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vcGF5JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBnb29kVHlwZTogaWQsXHJcbiAgICAgICAgICBhcHA6ICdtaWRkbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W5pSv5LuYQ09EReWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOWPkei1t+aUr+S7mCAqL1xyXG4gIF9wYXkgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdFBheW1lbnQoe1xyXG4gICAgICAgIHRpbWVTdGFtcDogb3B0aW9ucy50aW1lU3RhbXAsXHJcbiAgICAgICAgbm9uY2VTdHI6IG9wdGlvbnMubm9uY2VTdHIsXHJcbiAgICAgICAgcGFja2FnZTogb3B0aW9ucy5wYWNrQWdlLFxyXG4gICAgICAgIHNpZ25UeXBlOiAnTUQ1JyxcclxuICAgICAgICBwYXlTaWduOiBvcHRpb25zLnBheVNpZ24sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVklQ5byA6YCa5oiQ5YqfficsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5pSv5LuY5aSx6LSlJyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19