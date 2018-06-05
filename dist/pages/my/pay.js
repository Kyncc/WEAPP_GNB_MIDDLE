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
          url: 'https://small.guinaben.com/v2/member/info',
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

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiX2J1eSIsImlkIiwiX29yZGVyVmlwIiwib3B0aW9ucyIsIl9wYXkiLCJfZ2V0VXNlckluZm8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJmYWlsIiwiZXJyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImRhdGEiLCJnb29kVHlwZSIsImFwcCIsInNob3dUb2FzdCIsImljb24iLCJjb21wbGV0ZSIsImhpZGVMb2FkaW5nIiwicmVxdWVzdFBheW1lbnQiLCJ0aW1lU3RhbXAiLCJub25jZVN0ciIsInBhY2thZ2UiLCJwYWNrQWdlIiwic2lnblR5cGUiLCJwYXlTaWduIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLE8sR0FBVTtBQUNGQyxVQURFO0FBQUEsNkZBQ0lDLEVBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFHYyxLQUFLQyxTQUFMLENBQWVELEVBQWYsQ0FIZDs7QUFBQTtBQUdGRSx5QkFIRTtBQUFBO0FBQUEseUJBS0EsS0FBS0MsSUFBTCxDQUFVRCxPQUFWLENBTEE7O0FBQUE7QUFBQTtBQUFBLHlCQU9BLEtBQUtFLFlBQUwsRUFQQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7QUFXVjttQ0FDZ0I7QUFDZCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLHlDQURNO0FBRVhDLGlCQUZXLG1CQUVGQyxHQUZFLEVBRUc7QUFDWiwyQkFBS0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNELEdBQXZDO0FBQ0FMLG9CQUFRSyxHQUFSO0FBQ0QsV0FMVTtBQU1YRSxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFDVFAsbUJBQU9PLEdBQVA7QUFDRDtBQVJVLFNBQWI7QUFVRCxPQVhNLENBQVA7QUFZRDs7QUFFRDs7Ozs4QkFDV2QsRSxFQUFJO0FBQ2IscUJBQUtlLFdBQUwsQ0FBaUIsRUFBQ0MsT0FBTyxLQUFSLEVBQWpCO0FBQ0EsYUFBTyxJQUFJWCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyw4Q0FETTtBQUVYUSxnQkFBTTtBQUNKQyxzQkFBVWxCLEVBRE47QUFFSm1CLGlCQUFLO0FBRkQsV0FGSztBQU1YVCxpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pMLG9CQUFRSyxHQUFSO0FBQ0QsV0FSVTtBQVNYRSxjQVRXLGdCQVNMQyxHQVRLLEVBU0E7QUFDVCwyQkFBS00sU0FBTCxDQUFlO0FBQ2JKLHFCQUFPLFlBRE07QUFFYkssb0JBQU07QUFGTyxhQUFmO0FBSUFkLG1CQUFPTyxHQUFQO0FBQ0QsV0FmVTtBQWdCWFEsa0JBaEJXLHNCQWdCQztBQUNWLDJCQUFLQyxXQUFMO0FBQ0Q7QUFsQlUsU0FBYjtBQW9CRCxPQXJCTSxDQUFQO0FBc0JEOztBQUVEOzs7O3lCQUNNckIsTyxFQUFTO0FBQ2IsYUFBTyxJQUFJRyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHVCQUFLaUIsY0FBTCxDQUFvQjtBQUNsQkMscUJBQVd2QixRQUFRdUIsU0FERDtBQUVsQkMsb0JBQVV4QixRQUFRd0IsUUFGQTtBQUdsQkMsbUJBQVN6QixRQUFRMEIsT0FIQztBQUlsQkMsb0JBQVUsS0FKUTtBQUtsQkMsbUJBQVM1QixRQUFRNEIsT0FMQztBQU1sQnBCLGlCQU5rQixtQkFNVEMsR0FOUyxFQU1KO0FBQ1osMkJBQUtTLFNBQUwsQ0FBZTtBQUNiSixxQkFBTyxVQURNO0FBRWJLLG9CQUFNO0FBRk8sYUFBZjtBQUlBZixvQkFBUUssR0FBUjtBQUNELFdBWmlCO0FBYWxCRSxjQWJrQixnQkFhWkMsR0FiWSxFQWFQO0FBQ1QsMkJBQUtNLFNBQUwsQ0FBZTtBQUNiSixxQkFBTyxNQURNO0FBRWJLLG9CQUFNO0FBRk8sYUFBZjtBQUlBZCxtQkFBT08sR0FBUDtBQUNEO0FBbkJpQixTQUFwQjtBQXFCRCxPQXRCTSxDQUFQO0FBdUJEOzs7c0NBRWtCSCxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSW9CLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWXRCLElBQUl1QixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMbEIsZUFBTyxvQkFERjtBQUVMbUIsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQS9GZ0MsZUFBS0MsSTs7a0JBQW5CMUMsSyIsImZpbGUiOiJwYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGF5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflvIDpgJpWSVAnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIF9idXkgKGlkKSB7XG4gICAgICAvLyDojrflj5bmlK/ku5hDT0RFXG4gICAgICBsZXQgb3B0aW9ucyA9IGF3YWl0IHRoaXMuX29yZGVyVmlwKGlkKVxuICAgICAgLy8g5Y+R6LW35pSv5LuYXG4gICAgICBhd2FpdCB0aGlzLl9wYXkob3B0aW9ucylcbiAgICAgIC8vIOaUr+S7mOaIkOWKn+WQjuWcqOmHjeaWsOaLieWPluS4quS6uuS/oeaBr1xuICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgX2dldFVzZXJJbmZvICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL21lbWJlci9pbmZvJyxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgcmVzKVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog6LSt5LmwVklQICovXG4gIF9vcmRlclZpcCAoaWQpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL3BheScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBnb29kVHlwZTogaWQsXG4gICAgICAgICAgYXBwOiAnbWlkZGxlJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfojrflj5bmlK/ku5hDT0RF5aSx6LSlJyxcbiAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog5Y+R6LW35pSv5LuYICovXG4gIF9wYXkgKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0UGF5bWVudCh7XG4gICAgICAgIHRpbWVTdGFtcDogb3B0aW9ucy50aW1lU3RhbXAsXG4gICAgICAgIG5vbmNlU3RyOiBvcHRpb25zLm5vbmNlU3RyLFxuICAgICAgICBwYWNrYWdlOiBvcHRpb25zLnBhY2tBZ2UsXG4gICAgICAgIHNpZ25UeXBlOiAnTUQ1JyxcbiAgICAgICAgcGF5U2lnbjogb3B0aW9ucy5wYXlTaWduLFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ1ZJUOW8gOmAmuaIkOWKn34nLFxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmlK/ku5jlpLHotKUnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS5qcyJdLCJuYW1lcyI6WyJNeVBheSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiX2J1eSIsImlkIiwiX29yZGVyVmlwIiwib3B0aW9ucyIsIl9wYXkiLCJfZ2V0VXNlckluZm8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwic3VjY2VzcyIsInJlcyIsInNldFN0b3JhZ2VTeW5jIiwiZmFpbCIsImVyciIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJkYXRhIiwiZ29vZFR5cGUiLCJhcHAiLCJzaG93VG9hc3QiLCJpY29uIiwiY29tcGxldGUiLCJoaWRlTG9hZGluZyIsInJlcXVlc3RQYXltZW50IiwidGltZVN0YW1wIiwibm9uY2VTdHIiLCJwYWNrYWdlIiwicGFja0FnZSIsInNpZ25UeXBlIiwicGF5U2lnbiIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxPLEdBQVU7QUFDRkMsVUFERTtBQUFBLDZGQUNJQyxFQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR2MsS0FBS0MsU0FBTCxDQUFlRCxFQUFmLENBSGQ7O0FBQUE7QUFHRkUseUJBSEU7QUFBQTtBQUFBLHlCQUtBLEtBQUtDLElBQUwsQ0FBVUQsT0FBVixDQUxBOztBQUFBO0FBQUE7QUFBQSx5QkFPQSxLQUFLRSxZQUFMLEVBUEE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7O0FBV1Y7bUNBQ2dCO0FBQ2QsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssMkNBRE07QUFFWEMsaUJBRlcsbUJBRUZDLEdBRkUsRUFFRztBQUNaSiwyQkFBS0ssY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNELEdBQXZDO0FBQ0FOLG9CQUFRTSxHQUFSO0FBQ0QsV0FMVTtBQU1YRSxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFDVFIsbUJBQU9RLEdBQVA7QUFDRDtBQVJVLFNBQWI7QUFVRCxPQVhNLENBQVA7QUFZRDs7QUFFRDs7Ozs4QkFDV2YsRSxFQUFJO0FBQ2JRLHFCQUFLUSxXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSVosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLDhDQURNO0FBRVhRLGdCQUFNO0FBQ0pDLHNCQUFVbkIsRUFETjtBQUVKb0IsaUJBQUs7QUFGRCxXQUZLO0FBTVhULGlCQU5XLG1CQU1GQyxHQU5FLEVBTUc7QUFDWk4sb0JBQVFNLEdBQVI7QUFDRCxXQVJVO0FBU1hFLGNBVFcsZ0JBU0xDLEdBVEssRUFTQTtBQUNUUCwyQkFBS2EsU0FBTCxDQUFlO0FBQ2JKLHFCQUFPLFlBRE07QUFFYkssb0JBQU07QUFGTyxhQUFmO0FBSUFmLG1CQUFPUSxHQUFQO0FBQ0QsV0FmVTtBQWdCWFEsa0JBaEJXLHNCQWdCQztBQUNWZiwyQkFBS2dCLFdBQUw7QUFDRDtBQWxCVSxTQUFiO0FBb0JELE9BckJNLENBQVA7QUFzQkQ7O0FBRUQ7Ozs7eUJBQ010QixPLEVBQVM7QUFDYixhQUFPLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLHVCQUFLaUIsY0FBTCxDQUFvQjtBQUNsQkMscUJBQVd4QixRQUFRd0IsU0FERDtBQUVsQkMsb0JBQVV6QixRQUFReUIsUUFGQTtBQUdsQkMsbUJBQVMxQixRQUFRMkIsT0FIQztBQUlsQkMsb0JBQVUsS0FKUTtBQUtsQkMsbUJBQVM3QixRQUFRNkIsT0FMQztBQU1sQnBCLGlCQU5rQixtQkFNVEMsR0FOUyxFQU1KO0FBQ1pKLDJCQUFLYSxTQUFMLENBQWU7QUFDYkoscUJBQU8sVUFETTtBQUViSyxvQkFBTTtBQUZPLGFBQWY7QUFJQWhCLG9CQUFRTSxHQUFSO0FBQ0QsV0FaaUI7QUFhbEJFLGNBYmtCLGdCQWFaQyxHQWJZLEVBYVA7QUFDVFAsMkJBQUthLFNBQUwsQ0FBZTtBQUNiSixxQkFBTyxNQURNO0FBRWJLLG9CQUFNO0FBRk8sYUFBZjtBQUlBZixtQkFBT1EsR0FBUDtBQUNEO0FBbkJpQixTQUFwQjtBQXFCRCxPQXRCTSxDQUFQO0FBdUJEOzs7c0NBRWtCSCxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSW9CLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QkMsZ0JBQVFDLEdBQVIsQ0FBWXRCLElBQUl1QixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMbEIsZUFBTyxvQkFERjtBQUVMbUIsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQS9GZ0M3QixlQUFLOEIsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJwYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGF5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5byA6YCaVklQJ1xyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGFzeW5jIF9idXkgKGlkKSB7XHJcbiAgICAgIC8vIOiOt+WPluaUr+S7mENPREVcclxuICAgICAgbGV0IG9wdGlvbnMgPSBhd2FpdCB0aGlzLl9vcmRlclZpcChpZClcclxuICAgICAgLy8g5Y+R6LW35pSv5LuYXHJcbiAgICAgIGF3YWl0IHRoaXMuX3BheShvcHRpb25zKVxyXG4gICAgICAvLyDmlK/ku5jmiJDlip/lkI7lnKjph43mlrDmi4nlj5bkuKrkurrkv6Hmga9cclxuICAgICAgYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xyXG4gIF9nZXRVc2VySW5mbyAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL21lbWJlci9pbmZvJyxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKiog6LSt5LmwVklQICovXHJcbiAgX29yZGVyVmlwIChpZCkge1xyXG4gICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9wYXknLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGdvb2RUeXBlOiBpZCxcclxuICAgICAgICAgIGFwcDogJ21pZGRsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfojrflj5bmlK/ku5hDT0RF5aSx6LSlJyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBsZXRlICgpIHtcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKiog5Y+R6LW35pSv5LuYICovXHJcbiAgX3BheSAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2VweS5yZXF1ZXN0UGF5bWVudCh7XHJcbiAgICAgICAgdGltZVN0YW1wOiBvcHRpb25zLnRpbWVTdGFtcCxcclxuICAgICAgICBub25jZVN0cjogb3B0aW9ucy5ub25jZVN0cixcclxuICAgICAgICBwYWNrYWdlOiBvcHRpb25zLnBhY2tBZ2UsXHJcbiAgICAgICAgc2lnblR5cGU6ICdNRDUnLFxyXG4gICAgICAgIHBheVNpZ246IG9wdGlvbnMucGF5U2lnbixcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdWSVDlvIDpgJrmiJDlip9+JyxcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmlK/ku5jlpLHotKUnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XHJcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
>>>>>>> dev
