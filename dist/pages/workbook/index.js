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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJ3b3JrYm9va0xpc3QiLCJtZXRob2RzIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsIl9zZXRVc2VySW5mbyIsInVzZXJpbmZvIiwic2V0U3RvcmFnZVN5bmMiLCJfZ2V0TXlXb3JrYm9vayIsIiRhcHBseSIsIl9pbnRvQ2hhcHRlciIsIml0ZW0iLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmFtZSIsIl9pbml0QWRkIiwiZ2V0U3RvcmFnZVN5bmMiLCJ0ZXh0Ym9va0lkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJyZXF1ZXN0IiwiYXBwIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJmYWlsIiwiZXJyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1ldGhvZCIsImhpZGVMb2FkaW5nIiwibGVuZ3RoIiwiX2xvZ2luIiwiX2dldE9wZW5JZCIsIl9nZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiZnJvbSIsInRhcmdldCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyxTQUFRLFFBQVQsRUFBa0IsZ0JBQWUsRUFBakMsRUFBb0MscUJBQW9CLFVBQXhELEVBQW1FLGNBQWEsRUFBaEYsRUFB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QXZEOzt1QkFDMEIsS0FBS1QsY0FBTCxDQUFvQixLQUFLUixRQUF6QixDOzs7QUFBMUIscUJBQUtDLFk7O0FBQ0wscUJBQUtRLE1BQUw7Ozs7Ozs7O0FBRUEsK0JBQUs0QixXQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSWVkLEcsRUFBSztBQUN0QixVQUFJQSxJQUFJb0IsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCbkIsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBSXFCLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xULGVBQU8scUJBREY7QUFFTFUsa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQWhLcUMsZUFBS0MsSTs7a0JBQXhCekQsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforrDplJnpopgnXG4gIH1cblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJjbGFzc1wiOlwiaGVhZGVyXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInRleHRib29rXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInYtYmluZDp0ZXh0Ym9vay5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxuICAgIHRleHRib29rOiAnJyxcbiAgICB3b3JrYm9va0xpc3Q6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDmlZnmnZDliIfmjaIgKi9cbiAgICBhc3luYyB0ZXh0Ym9va0NoYW5nZSAoaWQpIHtcbiAgICAgIC8vIOabtOaUueeUqOaIt+e7g+S5oOWGjFxuICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgdGhpcy5fc2V0VXNlckluZm8oaWQpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCB1c2VyaW5mbylcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0TXlXb3JrYm9vayhpZClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKiDov5vlhaXnq6DoioIgKi9cbiAgICBfaW50b0NoYXB0ZXIgKGl0ZW0pIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy93b3JrYm9vay9jaGFwdGVyP25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5pZH1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOWinuWKoOe7g+S5oOWGjCAqL1xuICAgIF9pbml0QWRkICgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy93b3JrYm9vay9hZGQ/aWQ9JHt3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS50ZXh0Ym9va0lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqIOW+ruS/oeacjeWKoeWZqOiOt+WPlkNPREUgKi9cbiAgX2xvZ2luICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuICAgICAgICAgIHJlc29sdmUocmVzLmNvZGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDpgJrov4djb2Rl6I635Y+WT1BFTklEICovXG4gIF9nZXRPcGVuSWQgKGNvZGUpIHtcbiAgICB3ZXB5LmNsZWFyU3RvcmFnZVN5bmMoKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3dlY2hhdC5ndWluYWJlbi5jb20vbWluaS1wcm9ncmFtL29wZW5JZCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgIGFwcDogJ21pZGRsZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnLCByZXMub3BlbmlkKVxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfc2Vzc2lvbl9rZXknLCByZXMuc2Vzc2lvbl9rZXkpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICAvKiog6I635Y+W5oiR55qE57uD5Lmg5YaMICovXG4gIF9nZXRNeVdvcmtib29rIChpZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vaycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICBfZ2V0VXNlckluZm8gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL3NtYWxsLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mbycsXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHJlcylcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOabtOaUueeUqOaIt+S/oeaBryAqL1xuICBfc2V0VXNlckluZm8gKGlkKSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbWFsbC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm9FZGl0JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICB0cnkge1xuICAgICAgLyoqXG4gICAgICAgICogMSDojrflj5bmmK/lkKblrZjmnIlvcGVuSWQg5aaC5p6c5rKh5pyJ5Luj6KGo5Li655m75b2V6L+HXG4gICAgICAgICogMiDojrflj5ZvcGVuSWRcbiAgICAgICAgKiAzIOWcqOmAmui/h29wZW5JZOiOt+W+l+eUqOaIt+S/oeaBr1xuICAgICAgICAqL1xuICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCBjb2RlID0gYXdhaXQgdGhpcy5fbG9naW4oKVxuICAgICAgICBhd2FpdCB0aGlzLl9nZXRPcGVuSWQoY29kZSlcbiAgICAgIH1cbiAgICAgIGxldCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHVzZXJJbmZvKVxuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS50ZXh0Ym9va1xuICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnRleHRib29rSWRcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0TXlXb3JrYm9vayh0aGlzLnRleHRib29rKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgfVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXG4gICAgfVxuICB9XG59XG4iXX0=