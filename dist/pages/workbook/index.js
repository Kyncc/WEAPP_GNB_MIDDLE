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
        path: '/pages/workbook/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/workbook/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJ3b3JrYm9va0xpc3QiLCJtZXRob2RzIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsIl9zZXRVc2VySW5mbyIsInVzZXJpbmZvIiwid2VweSIsInNldFN0b3JhZ2VTeW5jIiwiX2dldE15V29ya2Jvb2siLCIkYXBwbHkiLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJfaW5pdEFkZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJjbGVhclN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsImFwcCIsIm9wZW5pZCIsInNlc3Npb25fa2V5IiwiZmFpbCIsImVyciIsInRleHRib29rSWQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWV0aG9kIiwiaGlkZUxvYWRpbmciLCJnZXRTdG9yYWdlU3luYyIsImxlbmd0aCIsIl9sb2dpbiIsIl9nZXRPcGVuSWQiLCJfZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImZyb20iLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsU0FBUSxRQUFULEVBQWtCLGdCQUFlLEVBQWpDLEVBQW9DLHFCQUFvQixVQUF4RCxFQUFtRSxjQUFhLEVB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QUFvQixpQkFBcEIsRUFBdUNMLFVBQXZEOzt1QkFDMEIsS0FBS3hCLGNBQUwsQ0FBb0IsS0FBS1QsUUFBekIsQzs7O0FBQTFCLHFCQUFLQyxZOztBQUNMLHFCQUFLUyxNQUFMOzs7Ozs7OztBQUVBSCwrQkFBSzhCLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJZWYsRyxFQUFLO0FBQ3RCLFVBQUlBLElBQUlzQixJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekJyQixnQkFBUUMsR0FBUixDQUFZRixJQUFJdUIsTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTFYsZUFBTyxxQkFERjtBQUVMVyxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBaEtxQ3hDLGVBQUt5QyxJOztrQkFBeEIxRCxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGduYlRleHRib29rU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItdGV4dGJvb2tTZWxlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iusOmUmemimCdcbiAgfVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcImNsYXNzXCI6XCJoZWFkZXJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwidGV4dGJvb2tcIixcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRCb29rTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRleHRCb29rTGlzdDogW10sXG4gICAgdGV4dGJvb2s6ICcnLFxuICAgIHdvcmtib29rTGlzdDogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLyoqIOaVmeadkOWIh+aNoiAqL1xuICAgIGFzeW5jIHRleHRib29rQ2hhbmdlIChpZCkge1xuICAgICAgLy8g5pu05pS555So5oi357uD5Lmg5YaMXG4gICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mbyhpZClcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHVzZXJpbmZvKVxuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRNeVdvcmtib29rKGlkKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgLyoqIOi/m+WFpeeroOiKgiAqL1xuICAgIF9pbnRvQ2hhcHRlciAoaXRlbSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2NoYXB0ZXI/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmlkfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvKiog5aKe5Yqg57uD5Lmg5YaMICovXG4gICAgX2luaXRBZGQgKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2FkZD9pZD0ke3RoaXMudGV4dGJvb2t9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKiog5b6u5L+h5pyN5Yqh5Zmo6I635Y+WQ09ERSAqL1xuICBfbG9naW4gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOmAmui/h2NvZGXojrflj5ZPUEVOSUQgKi9cbiAgX2dldE9wZW5JZCAoY29kZSkge1xuICAgIHdlcHkuY2xlYXJTdG9yYWdlU3luYygpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vb3BlbklkJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgYXBwOiAnbWlkZGxlJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcsIHJlcy5vcGVuaWQpXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9zZXNzaW9uX2tleScsIHJlcy5zZXNzaW9uX2tleSlcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIC8qKiDojrflj5bmiJHnmoTnu4PkuaDlhowgKi9cbiAgX2dldE15V29ya2Jvb2sgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi93b3JrYm9vaycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICBfZ2V0VXNlckluZm8gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vdjIvbWVtYmVyL2luZm8nLFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCByZXMpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDmm7TmlLnnlKjmiLfkv6Hmga8gKi9cbiAgX3NldFVzZXJJbmZvIChpZCkge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mb0VkaXQnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRleHRib29rSWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIHRyeSB7XG4gICAgICAvKipcbiAgICAgICAgKiAxIOiOt+WPluaYr+WQpuWtmOaciW9wZW5JZCDlpoLmnpzmsqHmnInku6PooajkuLrnmbvlvZXov4dcbiAgICAgICAgKiAyIOiOt+WPlm9wZW5JZFxuICAgICAgICAqIDMg5Zyo6YCa6L+Hb3Blbklk6I635b6X55So5oi35L+h5oGvXG4gICAgICAgICovXG4gICAgICBpZiAod2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9vcGVuSWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IGNvZGUgPSBhd2FpdCB0aGlzLl9sb2dpbigpXG4gICAgICAgIGF3YWl0IHRoaXMuX2dldE9wZW5JZChjb2RlKVxuICAgICAgfVxuICAgICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy5fZ2V0VXNlckluZm8oKVxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJywgdXNlckluZm8pXG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnRleHRib29rXG4gICAgICB0aGlzLnRleHRib29rID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tJZFxuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRNeVdvcmtib29rKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICB9XG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==