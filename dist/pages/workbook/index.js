'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statistics = function (_wepy$page) {
  _inherits(Statistics, _wepy$page);

  function Statistics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Statistics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Statistics.__proto__ || Object.getPrototypeOf(Statistics)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '记错题'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "class": "header", "xmlns:v-bind": "", "v-bind:value.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.sync": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: [],
      textbook: '',
      workbookList: []
    }, _this.methods = {
      /** 教材切换 */
      textbookChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._setUserInfo(id);

                case 2:
                  userinfo = _context.sent;

                  _wepy2.default.setStorageSync('gnb_middle_User', userinfo);
                  _context.next = 6;
                  return this._getMyWorkbook(id);

                case 6:
                  this.workbookList = _context.sent;

                  this.$apply();

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function textbookChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return textbookChange;
      }(),

      /** 进入章节 */
      _intoChapter: function _intoChapter(item) {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/chapter?name=' + item.name + '&id=' + item.id
        });
      },

      /** 增加练习册 */
      _initAdd: function _initAdd() {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/add?id=' + _wepy2.default.getStorageSync('gnb_middle_User').textbookId
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_login',


    /** 微信服务器获取CODE */
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
    /** 获取我的练习册 */

  }, {
    key: '_getMyWorkbook',
    value: function _getMyWorkbook(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/workbook',
          data: {
            textbookId: id
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

    /** 获取用户信息 */

  }, {
    key: '_getUserInfo',
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

    /** 更改用户信息 */

  }, {
    key: '_setUserInfo',
    value: function _setUserInfo(id) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://small.guinaben.com/v2/member/infoEdit',
          method: 'POST',
          data: {
            textbookId: id
          },
          success: function success(res) {
            _wepy2.default.hideLoading();
            resolve(res);
          },
          fail: function fail(err) {
            _wepy2.default.hideLoading();
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var code, userInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(_wepy2.default.getStorageSync('gnb_middle_openId').length === 0)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return this._login();

              case 4:
                code = _context2.sent;
                _context2.next = 7;
                return this._getOpenId(code);

              case 7:
                _context2.next = 9;
                return this._getUserInfo();

              case 9:
                userInfo = _context2.sent;

                _wepy2.default.setStorageSync('gnb_middle_User', userInfo);
                this.textBookList = _wepy2.default.getStorageSync('gnb_middle_User').textbook;
                this.textbook = _wepy2.default.getStorageSync('gnb_middle_User').textbookId;
                _context2.next = 15;
                return this._getMyWorkbook(this.textbook);

              case 15:
                this.workbookList = _context2.sent;

                this.$apply();
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](0);

                _wepy2.default.hideLoading();

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 19]]);
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
        title: '各位家长，用这个记错题，速度快，用处大',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/workbook/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJ3b3JrYm9va0xpc3QiLCJtZXRob2RzIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsIl9zZXRVc2VySW5mbyIsInVzZXJpbmZvIiwid2VweSIsInNldFN0b3JhZ2VTeW5jIiwiX2dldE15V29ya2Jvb2siLCIkYXBwbHkiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJfaW5pdEFkZCIsImdldFN0b3JhZ2VTeW5jIiwidGV4dGJvb2tJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJjbGVhclN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsImFwcCIsIm9wZW5pZCIsInNlc3Npb25fa2V5IiwiZmFpbCIsImVyciIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtZXRob2QiLCJoaWRlTG9hZGluZyIsImxlbmd0aCIsIl9sb2dpbiIsIl9nZXRPcGVuSWQiLCJfZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImZyb20iLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsU0FBUSxRQUFULEVBQWtCLGdCQUFlLEVBQWpDLEVBQW9DLHFCQUFvQixVQUF4RCxFQUFtRSxjQUFhLEVBQWhGLEVBQW1GLHdCQUF1QixjQUExRyxFQUFyQixFLFFBQ1RDLE8sR0FBVSxFQUFDLHFCQUFvQixFQUFDLGNBQWEsZ0JBQWQsRUFBckIsRSxRQUNUQyxVLEdBQWE7QUFDVkMseUJBQW1CQTtBQURULEssUUFJWkMsSSxHQUFPO0FBQ0xDLG9CQUFjLEVBRFQ7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxvQkFBYztBQUhULEssUUFNUEMsTyxHQUFVO0FBQ1I7QUFDTUMsb0JBRkU7QUFBQSw2RkFFY0MsRUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUllLEtBQUtDLFlBQUwsQ0FBa0JELEVBQWxCLENBSmY7O0FBQUE7QUFJRkUsMEJBSkU7O0FBS05DLGlDQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0YsUUFBdkM7QUFMTTtBQUFBLHlCQU1vQixLQUFLRyxjQUFMLENBQW9CTCxFQUFwQixDQU5wQjs7QUFBQTtBQU1OLHVCQUFLSCxZQU5DOztBQU9OLHVCQUFLUyxNQUFMOztBQVBNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQVNSO0FBQ0FDLGtCQVZRLHdCQVVNQyxJQVZOLEVBVVk7QUFDbEJMLHVCQUFLTSxVQUFMLENBQWdCO0FBQ2RDLGlEQUFxQ0YsS0FBS0csSUFBMUMsWUFBcURILEtBQUtSO0FBRDVDLFNBQWhCO0FBR0QsT0FkTzs7QUFlUjtBQUNBWSxjQWhCUSxzQkFnQkk7QUFDVlQsdUJBQUtNLFVBQUwsQ0FBZ0I7QUFDZEMsMkNBQStCUCxlQUFLVSxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0M7QUFEeEQsU0FBaEI7QUFHRDtBQXBCTyxLOzs7Ozs7O0FBdUJWOzZCQUNVO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDZCx1QkFBS2UsS0FBTCxDQUFXO0FBQ1RDLGlCQURTLG1CQUNBQyxHQURBLEVBQ0s7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWUYsSUFBSUcsSUFBaEI7QUFDQVAsb0JBQVFJLElBQUlHLElBQVo7QUFDRDtBQUpRLFNBQVg7QUFNRCxPQVBNLENBQVA7QUFRRDs7QUFFRDs7OzsrQkFDWUEsSSxFQUFNO0FBQ2hCcEIscUJBQUtxQixnQkFBTDtBQUNBLGFBQU8sSUFBSVQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2QsdUJBQUtzQixPQUFMLENBQWE7QUFDWGYsZUFBSyxpREFETTtBQUVYaEIsZ0JBQU07QUFDSjZCLGtCQUFNQSxJQURGO0FBRUpHLGlCQUFLO0FBRkQsV0FGSztBQU1YUCxpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pqQiwyQkFBS0MsY0FBTCxDQUFvQixtQkFBcEIsRUFBeUNnQixJQUFJTyxNQUE3QztBQUNBeEIsMkJBQUtDLGNBQUwsQ0FBb0Isd0JBQXBCLEVBQThDZ0IsSUFBSVEsV0FBbEQ7QUFDQVosb0JBQVFJLEdBQVI7QUFDRCxXQVZVO0FBV1hTLGNBWFcsZ0JBV0xDLEdBWEssRUFXQTtBQUNUYixtQkFBT2EsR0FBUDtBQUNEO0FBYlUsU0FBYjtBQWVELE9BaEJNLENBQVA7QUFpQkQ7QUFDRDs7OzttQ0FDZ0I5QixFLEVBQUk7QUFDbEIsYUFBTyxJQUFJZSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDZCx1QkFBS3NCLE9BQUwsQ0FBYTtBQUNYZixlQUFLLHdDQURNO0FBRVhoQixnQkFBTTtBQUNKb0Isd0JBQVlkO0FBRFIsV0FGSztBQUtYbUIsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaSixvQkFBUUksR0FBUjtBQUNELFdBUFU7QUFRWFMsY0FSVyxnQkFRTEMsR0FSSyxFQVFBO0FBQ1RiLG1CQUFPYSxHQUFQO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiTSxDQUFQO0FBY0Q7O0FBRUQ7Ozs7bUNBQ2dCO0FBQ2QsYUFBTyxJQUFJZixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDZCx1QkFBS3NCLE9BQUwsQ0FBYTtBQUNYZixlQUFLLDJDQURNO0FBRVhTLGlCQUZXLG1CQUVGQyxHQUZFLEVBRUc7QUFDWmpCLDJCQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q2dCLEdBQXZDO0FBQ0FKLG9CQUFRSSxHQUFSO0FBQ0QsV0FMVTtBQU1YUyxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFDVGIsbUJBQU9hLEdBQVA7QUFDRDtBQVJVLFNBQWI7QUFVRCxPQVhNLENBQVA7QUFZRDs7QUFFRDs7OztpQ0FDYzlCLEUsRUFBSTtBQUNoQkcscUJBQUs0QixXQUFMLENBQWlCLEVBQUNDLE9BQU8sS0FBUixFQUFqQjtBQUNBLGFBQU8sSUFBSWpCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENkLHVCQUFLc0IsT0FBTCxDQUFhO0FBQ1hmLGVBQUssK0NBRE07QUFFWHVCLGtCQUFRLE1BRkc7QUFHWHZDLGdCQUFNO0FBQ0pvQix3QkFBWWQ7QUFEUixXQUhLO0FBTVhtQixpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1pqQiwyQkFBSytCLFdBQUw7QUFDQWxCLG9CQUFRSSxHQUFSO0FBQ0QsV0FUVTtBQVVYUyxjQVZXLGdCQVVMQyxHQVZLLEVBVUE7QUFDVDNCLDJCQUFLK0IsV0FBTDtBQUNBakIsbUJBQU9hLEdBQVA7QUFDRDtBQWJVLFNBQWI7QUFlRCxPQWhCTSxDQUFQO0FBaUJEOzs7Ozs7Ozs7Ozs7c0JBUU8zQixlQUFLVSxjQUFMLENBQW9CLG1CQUFwQixFQUF5Q3NCLE1BQXpDLEtBQW9ELEM7Ozs7Ozt1QkFDckMsS0FBS0MsTUFBTCxFOzs7QUFBYmIsb0I7O3VCQUNFLEtBQUtjLFVBQUwsQ0FBZ0JkLElBQWhCLEM7Ozs7dUJBRWEsS0FBS2UsWUFBTCxFOzs7QUFBakJDLHdCOztBQUNKcEMsK0JBQUtDLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDbUMsUUFBdkM7QUFDQSxxQkFBSzVDLFlBQUwsR0FBb0JRLGVBQUtVLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDakIsUUFBM0Q7QUFDQSxxQkFBS0EsUUFBTCxHQUFnQk8sZUFBS1UsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNDLFVBQXZEOzt1QkFDMEIsS0FBS1QsY0FBTCxDQUFvQixLQUFLVCxRQUF6QixDOzs7QUFBMUIscUJBQUtDLFk7O0FBQ0wscUJBQUtTLE1BQUw7Ozs7Ozs7O0FBRUFILCtCQUFLK0IsV0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUllZCxHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSW9CLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6Qm5CLGdCQUFRQyxHQUFSLENBQVlGLElBQUlxQixNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMVCxlQUFPLHFCQURGO0FBRUxVLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUFoS3FDeEMsZUFBS3lDLEk7O2tCQUF4QjFELFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6w6ZSZ6aKYJ1xuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1wiY2xhc3NcIjpcImhlYWRlclwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ0ZXh0Ym9va1wiLFwieG1sbnM6di1vblwiOlwiXCIsXCJ2LWJpbmQ6dGV4dGJvb2suc3luY1wiOlwidGV4dEJvb2tMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidGV4dGJvb2tDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdGV4dEJvb2tMaXN0OiBbXSxcbiAgICB0ZXh0Ym9vazogJycsXG4gICAgd29ya2Jvb2tMaXN0OiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5pWZ5p2Q5YiH5o2iICovXG4gICAgYXN5bmMgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICAvLyDmm7TmlLnnlKjmiLfnu4PkuaDlhoxcbiAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvKGlkKVxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgdXNlcmluZm8pXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldE15V29ya2Jvb2soaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKiog6L+b5YWl56ug6IqCICovXG4gICAgX2ludG9DaGFwdGVyIChpdGVtKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY2hhcHRlcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uaWR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIC8qKiDlop7liqDnu4PkuaDlhowgKi9cbiAgICBfaW5pdEFkZCAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svYWRkP2lkPSR7d2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tJZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKiDlvq7kv6HmnI3liqHlmajojrflj5ZDT0RFICovXG4gIF9sb2dpbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkubG9naW4oe1xuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgICByZXNvbHZlKHJlcy5jb2RlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog6YCa6L+HY29kZeiOt+WPlk9QRU5JRCAqL1xuICBfZ2V0T3BlbklkIChjb2RlKSB7XG4gICAgd2VweS5jbGVhclN0b3JhZ2VTeW5jKClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9vcGVuSWQnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICBhcHA6ICdtaWRkbGUnXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJywgcmVzLm9wZW5pZClcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3Nlc3Npb25fa2V5JywgcmVzLnNlc3Npb25fa2V5KVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgLyoqIOiOt+WPluaIkeeahOe7g+S5oOWGjCAqL1xuICBfZ2V0TXlXb3JrYm9vayAoaWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvd29ya2Jvb2snLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDojrflj5bnlKjmiLfkv6Hmga8gKi9cbiAgX2dldFVzZXJJbmZvICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm8nLFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDmm7TmlLnnlKjmiLfkv6Hmga8gKi9cbiAgX3NldFVzZXJJbmZvIChpZCkge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vc21hbGwuZ3VpbmFiZW4uY29tL3YyL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBhc3luYyBvblNob3coKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICAqIDEg6I635Y+W5piv5ZCm5a2Y5pyJb3BlbklkIOWmguaenOayoeacieS7o+ihqOS4uueZu+W9lei/h1xuICAgICAgICAqIDIg6I635Y+Wb3BlbklkXG4gICAgICAgICogMyDlnKjpgJrov4dvcGVuSWTojrflvpfnlKjmiLfkv6Hmga9cbiAgICAgICAgKi9cbiAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgY29kZSA9IGF3YWl0IHRoaXMuX2xvZ2luKClcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0T3BlbklkKGNvZGUpXG4gICAgICB9XG4gICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCB1c2VySW5mbylcbiAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS50ZXh0Ym9va0lkXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldE15V29ya2Jvb2sodGhpcy50ZXh0Ym9vaylcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXG4gICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgIH1cbiAgfVxufVxuIl19