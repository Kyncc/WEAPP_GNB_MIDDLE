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
        path: '/pages/my/index'
      };
    }
  }]);

  return MyPay;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyPay , 'pages/my/pay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiX2J1eSIsImlkIiwiX29yZGVyVmlwIiwib3B0aW9ucyIsIl9wYXkiLCJfZ2V0VXNlckluZm8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImRhdGEiLCJnb29kVHlwZSIsImFwcCIsInNob3dUb2FzdCIsImljb24iLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwicmVxdWVzdFBheW1lbnQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJwYWNrQWdlIiwic2lnblR5cGUiLCJwYXlTaWduIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLE8sR0FBVTtBQUNGQyxVQURFO0FBQUEsNkZBQ0lDLEVBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFHYyxLQUFLQyxTQUFMLENBQWVELEVBQWYsQ0FIZDs7QUFBQTtBQUdGRSx5QkFIRTtBQUFBO0FBQUEseUJBS0EsS0FBS0MsSUFBTCxDQUFVRCxPQUFWLENBTEE7O0FBQUE7QUFBQTtBQUFBLHlCQU9BLEtBQUtFLFlBQUwsRUFQQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7QUFXVjttQ0FDZ0I7QUFDZCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLHlDQURNO0FBRVhDLGlCQUZXLG1CQUVGQyxHQUZFLEVBRUc7QUFDWiwyQkFBS0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNELEdBQXZDO0FBQ0FMLG9CQUFRSyxHQUFSO0FBQ0QsV0FMVTtBQU1YRSxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFDVFAsbUJBQU9PLEdBQVA7QUFDRDtBQVJVLFNBQWI7QUFVRCxPQVhNLENBQVA7QUFZRDs7QUFFRDs7Ozs4QkFDV2QsRSxFQUFJO0FBQ2IscUJBQUtlLFdBQUwsQ0FBaUIsRUFBQ0MsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJWCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyw4Q0FETTtBQUVYUSxnQkFBTTtBQUNKQyxzQkFBVWxCLEVBRE47QUFFSm1CLGlCQUFLO0FBRkQsV0FGSztBQU1YVCxpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FSVTtBQVNYRSxjQVRXLGdCQVNMQyxHQVRLLEVBU0E7QUFDVCwyQkFBS00sU0FBTCxDQUFlO0FBQ2JKLHFCQUFPLFlBRE07QUFFYkssb0JBQU07QUFGTyxhQUFmO0FBSUFkLG1CQUFPTyxHQUFQO0FBQ0QsV0FmVTtBQWdCWFEsa0JBaEJXLHNCQWdCQztBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFsQlUsU0FBYjtBQW9CRCxPQXJCTSxDQUFQO0FBc0JEOztBQUVEOzs7O3lCQUNNckIsTyxFQUFTO0FBQ2IsYUFBTyxJQUFJRyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLaUIsY0FBTCxDQUFvQjtBQUNsQkMscUJBQVd2QixRQUFRdUIsU0FERDtBQUVsQkMsb0JBQVV4QixRQUFRd0IsUUFGQTtBQUdsQkMsbUJBQVN6QixRQUFRMEIsT0FIQztBQUlsQkMsb0JBQVUsS0FKUTtBQUtsQkMsbUJBQVM1QixRQUFRNEIsT0FMQztBQU1sQnBCLGlCQU5rQixtQkFNVEMsR0FOUyxFQU1KO0FBQ1osMkJBQUtTLFNBQUwsQ0FBZTtBQUNiSixxQkFBTyxVQURNO0FBRWJLLG9CQUFNO0FBRk8sYUFBZjtBQUlBZixvQkFBUUssR0FBUjtBQUNELFdBWmlCO0FBYWxCRSxjQWJrQixnQkFhWkMsR0FiWSxFQWFQO0FBQ1QsMkJBQUtNLFNBQUwsQ0FBZTtBQUNiSixxQkFBTyxNQURNO0FBRWJLLG9CQUFNO0FBRk8sYUFBZjtBQUlBZCxtQkFBT08sR0FBUDtBQUNEO0FBbkJpQixTQUFwQjtBQXFCRCxPQXRCTSxDQUFQO0FBdUJEOzs7c0NBRWtCSCxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSW9CLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWXRCLElBQUl1QixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMbEIsZUFBTyxvQkFERjtBQUVMbUIsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQS9GZ0MsZUFBS0MsSTs7a0JBQW5CMUMsSyIsImZpbGUiOiJwYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGF5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5byA6YCaVklQJ1xyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGFzeW5jIF9idXkgKGlkKSB7XHJcbiAgICAgIC8vIOiOt+WPluaUr+S7mENPREVcclxuICAgICAgbGV0IG9wdGlvbnMgPSBhd2FpdCB0aGlzLl9vcmRlclZpcChpZClcclxuICAgICAgLy8g5Y+R6LW35pSv5LuYXHJcbiAgICAgIGF3YWl0IHRoaXMuX3BheShvcHRpb25zKVxyXG4gICAgICAvLyDmlK/ku5jmiJDlip/lkI7lnKjph43mlrDmi4nlj5bkuKrkurrkv6Hmga9cclxuICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xyXG4gIF9nZXRVc2VySW5mbyAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mbycsXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOi0reS5sFZJUCAqL1xyXG4gIF9vcmRlclZpcCAoaWQpIHtcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vcGF5JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBnb29kVHlwZTogaWQsXHJcbiAgICAgICAgICBhcHA6ICdtaWRkbGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W5pSv5LuYQ09EReWksei0pScsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZSAoKSB7XHJcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOWPkei1t+aUr+S7mCAqL1xyXG4gIF9wYXkgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdFBheW1lbnQoe1xyXG4gICAgICAgIHRpbWVTdGFtcDogb3B0aW9ucy50aW1lU3RhbXAsXHJcbiAgICAgICAgbm9uY2VTdHI6IG9wdGlvbnMubm9uY2VTdHIsXHJcbiAgICAgICAgcGFja2FnZTogb3B0aW9ucy5wYWNrQWdlLFxyXG4gICAgICAgIHNpZ25UeXBlOiAnTUQ1JyxcclxuICAgICAgICBwYXlTaWduOiBvcHRpb25zLnBheVNpZ24sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVklQ5byA6YCa5oiQ5YqfficsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5pSv5LuY5aSx6LSlJyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19