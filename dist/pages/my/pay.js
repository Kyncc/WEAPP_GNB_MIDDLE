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
        title: '各位家长，用这个记错题，速度快，用处大',
        path: '/pages/my/index'
      };
    }
  }]);

  return MyPay;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyPay , 'pages/my/pay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiX2J1eSIsImlkIiwiX29yZGVyVmlwIiwib3B0aW9ucyIsIl9wYXkiLCJfZ2V0VXNlckluZm8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImRhdGEiLCJnb29kVHlwZSIsImFwcCIsInNob3dUb2FzdCIsImljb24iLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwicmVxdWVzdFBheW1lbnQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJwYWNrQWdlIiwic2lnblR5cGUiLCJwYXlTaWduIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxPLEdBQVU7QUFDRkMsVUFERTtBQUFBLDZGQUNJQyxFQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR2MsS0FBS0MsU0FBTCxDQUFlRCxFQUFmLENBSGQ7O0FBQUE7QUFHRkUseUJBSEU7QUFBQTtBQUFBLHlCQUtBLEtBQUtDLElBQUwsQ0FBVUQsT0FBVixDQUxBOztBQUFBO0FBQUE7QUFBQSx5QkFPQSxLQUFLRSxZQUFMLEVBUEE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7O0FBV1Y7bUNBQ2dCO0FBQ2QsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxzQ0FETTtBQUVYQyxpQkFGVyxtQkFFRkMsR0FGRSxFQUVHO0FBQ1osMkJBQUtDLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDRCxHQUF2QztBQUNBTCxvQkFBUUssR0FBUjtBQUNELFdBTFU7QUFNWEUsY0FOVyxnQkFNTEMsR0FOSyxFQU1BO0FBQ1RQLG1CQUFPTyxHQUFQO0FBQ0Q7QUFSVSxTQUFiO0FBVUQsT0FYTSxDQUFQO0FBWUQ7O0FBRUQ7Ozs7OEJBQ1dkLEUsRUFBSTtBQUNiLHFCQUFLZSxXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSVgsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssOENBRE07QUFFWFEsZ0JBQU07QUFDSkMsc0JBQVVsQixFQUROO0FBRUptQixpQkFBSztBQUZELFdBRks7QUFNWFQsaUJBTlcsbUJBTUZDLEdBTkUsRUFNRztBQUNaTCxvQkFBUUssR0FBUjtBQUNELFdBUlU7QUFTWEUsY0FUVyxnQkFTTEMsR0FUSyxFQVNBO0FBQ1QsMkJBQUtNLFNBQUwsQ0FBZTtBQUNiSixxQkFBTyxZQURNO0FBRWJLLG9CQUFNO0FBRk8sYUFBZjtBQUlBZCxtQkFBT08sR0FBUDtBQUNELFdBZlU7QUFnQlhRLGtCQWhCVyxzQkFnQkM7QUFDViwyQkFBS0MsV0FBTDtBQUNEO0FBbEJVLFNBQWI7QUFvQkQsT0FyQk0sQ0FBUDtBQXNCRDs7QUFFRDs7Ozt5QkFDTXJCLE8sRUFBUztBQUNiLGFBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx1QkFBS2lCLGNBQUwsQ0FBb0I7QUFDbEJDLHFCQUFXdkIsUUFBUXVCLFNBREQ7QUFFbEJDLG9CQUFVeEIsUUFBUXdCLFFBRkE7QUFHbEJDLG1CQUFTekIsUUFBUTBCLE9BSEM7QUFJbEJDLG9CQUFVLEtBSlE7QUFLbEJDLG1CQUFTNUIsUUFBUTRCLE9BTEM7QUFNbEJwQixpQkFOa0IsbUJBTVRDLEdBTlMsRUFNSjtBQUNaLDJCQUFLUyxTQUFMLENBQWU7QUFDYkoscUJBQU8sVUFETTtBQUViSyxvQkFBTTtBQUZPLGFBQWY7QUFJQWYsb0JBQVFLLEdBQVI7QUFDRCxXQVppQjtBQWFsQkUsY0Fia0IsZ0JBYVpDLEdBYlksRUFhUDtBQUNULDJCQUFLTSxTQUFMLENBQWU7QUFDYkoscUJBQU8sTUFETTtBQUViSyxvQkFBTTtBQUZPLGFBQWY7QUFJQWQsbUJBQU9PLEdBQVA7QUFDRDtBQW5CaUIsU0FBcEI7QUFxQkQsT0F0Qk0sQ0FBUDtBQXVCRDs7O3NDQUVrQkgsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlvQixJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJDLGdCQUFRQyxHQUFSLENBQVl0QixJQUFJdUIsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTGxCLGVBQU8scUJBREY7QUFFTG1CLGNBQU07QUFGRCxPQUFQO0FBSUQ7Ozs7RUE5RmdDLGVBQUtDLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoicGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVBheSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5byA6YCaVklQJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBfYnV5IChpZCkge1xuICAgICAgLy8g6I635Y+W5pSv5LuYQ09ERVxuICAgICAgbGV0IG9wdGlvbnMgPSBhd2FpdCB0aGlzLl9vcmRlclZpcChpZClcbiAgICAgIC8vIOWPkei1t+aUr+S7mFxuICAgICAgYXdhaXQgdGhpcy5fcGF5KG9wdGlvbnMpXG4gICAgICAvLyDmlK/ku5jmiJDlip/lkI7lnKjph43mlrDmi4nlj5bkuKrkurrkv6Hmga9cbiAgICAgIGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIF9nZXRVc2VySW5mbyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOi0reS5sFZJUCAqL1xuICBfb3JkZXJWaXAgKGlkKSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9wYXknLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZ29vZFR5cGU6IGlkLFxuICAgICAgICAgIGFwcDogJ21pZGRsZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W5pSv5LuYQ09EReWksei0pScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOWPkei1t+aUr+S7mCAqL1xuICBfcGF5IChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdFBheW1lbnQoe1xuICAgICAgICB0aW1lU3RhbXA6IG9wdGlvbnMudGltZVN0YW1wLFxuICAgICAgICBub25jZVN0cjogb3B0aW9ucy5ub25jZVN0cixcbiAgICAgICAgcGFja2FnZTogb3B0aW9ucy5wYWNrQWdlLFxuICAgICAgICBzaWduVHlwZTogJ01ENScsXG4gICAgICAgIHBheVNpZ246IG9wdGlvbnMucGF5U2lnbixcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdWSVDlvIDpgJrmiJDlip9+JyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5pSv5LuY5aSx6LSlJyxcbiAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgIH1cbiAgfVxufVxuIl19