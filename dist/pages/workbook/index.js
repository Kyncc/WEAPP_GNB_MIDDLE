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
          url: '/pages/workbook/add?id=' + this.textbook
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
          url: 'https://mid.guinaben.com/v2/workbook',
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

    /** 更改用户信息 */

  }, {
    key: '_setUserInfo',
    value: function _setUserInfo(id) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/member/infoEdit',
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
        path: '/pages/my/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/workbook/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJ3b3JrYm9va0xpc3QiLCJtZXRob2RzIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsIl9zZXRVc2VySW5mbyIsInVzZXJpbmZvIiwic2V0U3RvcmFnZVN5bmMiLCJfZ2V0TXlXb3JrYm9vayIsIiRhcHBseSIsIl9pbnRvQ2hhcHRlciIsIml0ZW0iLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmFtZSIsIl9pbml0QWRkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJyZXF1ZXN0IiwiYXBwIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJmYWlsIiwiZXJyIiwidGV4dGJvb2tJZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtZXRob2QiLCJoaWRlTG9hZGluZyIsImdldFN0b3JhZ2VTeW5jIiwibGVuZ3RoIiwiX2xvZ2luIiwiX2dldE9wZW5JZCIsIl9nZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyxTQUFRLFFBQVQsRUFBa0IsZ0JBQWUsRUFBakMsRUFBb0MscUJBQW9CLFVBQXhELEVBQW1FLGNBQWEsRUFBaEYsRUFB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QW9CLEtBQUtSLFFBQXpCLEM7OztBQUExQixxQkFBS0MsWTs7QUFDTCxxQkFBS1EsTUFBTDs7Ozs7Ozs7QUFFQSwrQkFBSzJCLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJZWYsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlzQixJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJyQixnQkFBUUMsR0FBUixDQUFZRixJQUFJdUIsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTFYsZUFBTyxxQkFERjtBQUVMVyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBaEtxQyxlQUFLQyxJOztrQkFBeEJ6RCxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iusOmUmemimCdcclxuICB9XHJcblxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcImNsYXNzXCI6XCJoZWFkZXJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwidGV4dGJvb2tcIixcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRCb29rTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxyXG4gICAgdGV4dGJvb2s6ICcnLFxyXG4gICAgd29ya2Jvb2tMaXN0OiBbXVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8qKiDmlZnmnZDliIfmjaIgKi9cclxuICAgIGFzeW5jIHRleHRib29rQ2hhbmdlIChpZCkge1xyXG4gICAgICAvLyDmm7TmlLnnlKjmiLfnu4PkuaDlhoxcclxuICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgdGhpcy5fc2V0VXNlckluZm8oaWQpXHJcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHVzZXJpbmZvKVxyXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldE15V29ya2Jvb2soaWQpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICAvKiog6L+b5YWl56ug6IqCICovXHJcbiAgICBfaW50b0NoYXB0ZXIgKGl0ZW0pIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY2hhcHRlcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uaWR9YFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8qKiDlop7liqDnu4PkuaDlhowgKi9cclxuICAgIF9pbml0QWRkICgpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svYWRkP2lkPSR7dGhpcy50ZXh0Ym9va31gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog5b6u5L+h5pyN5Yqh5Zmo6I635Y+WQ09ERSAqL1xyXG4gIF9sb2dpbiAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LmxvZ2luKHtcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxyXG4gICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOmAmui/h2NvZGXojrflj5ZPUEVOSUQgKi9cclxuICBfZ2V0T3BlbklkIChjb2RlKSB7XHJcbiAgICB3ZXB5LmNsZWFyU3RvcmFnZVN5bmMoKVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL29wZW5JZCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICAgIGFwcDogJ21pZGRsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnLCByZXMub3BlbmlkKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9zZXNzaW9uX2tleScsIHJlcy5zZXNzaW9uX2tleSlcclxuICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8qKiDojrflj5bmiJHnmoTnu4PkuaDlhowgKi9cclxuICBfZ2V0TXlXb3JrYm9vayAoaWQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL3dvcmtib29rJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xyXG4gIF9nZXRVc2VySW5mbyAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mbycsXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXHJcbiAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIOabtOaUueeUqOaIt+S/oeaBryAqL1xyXG4gIF9zZXRVc2VySW5mbyAoaWQpIHtcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mb0VkaXQnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRleHRib29rSWQ6IGlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBvblNob3coKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvKipcclxuICAgICAgICAqIDEg6I635Y+W5piv5ZCm5a2Y5pyJb3BlbklkIOWmguaenOayoeacieS7o+ihqOS4uueZu+W9lei/h1xyXG4gICAgICAgICogMiDojrflj5ZvcGVuSWRcclxuICAgICAgICAqIDMg5Zyo6YCa6L+Hb3Blbklk6I635b6X55So5oi35L+h5oGvXHJcbiAgICAgICAgKi9cclxuICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBhd2FpdCB0aGlzLl9sb2dpbigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0T3BlbklkKGNvZGUpXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxyXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCB1c2VySW5mbylcclxuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS50ZXh0Ym9va1xyXG4gICAgICB0aGlzLnRleHRib29rID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tJZFxyXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldE15V29ya2Jvb2sodGhpcy50ZXh0Ym9vaylcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9teS9pbmRleCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19