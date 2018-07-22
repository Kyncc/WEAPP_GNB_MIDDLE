'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

var _gnbSubjectSelect = require('./../../components/gnb-subjectSelect.js');

var _gnbSubjectSelect2 = _interopRequireDefault(_gnbSubjectSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "v-bind:textbook.sync": "textbook", "v-bind:list.sync": "textBookList" }, "gnbSubjectSelect": { "xmlns:v-bind": "", "v-bind:subject.sync": "subject", "v-bind:list.sync": "subjectList", "xmlns:v-on": "" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" }, "gnbSubjectSelect": { "v-on:event": "subjectChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default,
      gnbSubjectSelect: _gnbSubjectSelect2.default
    }, _this.data = {
      textbook: '', // 当前选中教材
      textBookList: [], // 教材列表
      subject: '', // 当前选中科目
      subjectList: [], // 科目列表
      workbookList: [] // 练习册列表
    }, _this.methods = {
      /** 科目切换 */
      subjectChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(subject) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this._setUserInfoSubject(subject);

                case 2:
                  userinfo = _context.sent;

                  _wepy2.default.setStorageSync('gnb_middle_user', userinfo);
                  this.subject = subject;
                  this.subjectList = _wepy2.default.getStorageSync('gnb_middle_user').subject;
                  this.textbook = _wepy2.default.getStorageSync('gnb_middle_user').current.textbookId;
                  this.textBookList = _wepy2.default.getStorageSync('gnb_middle_user').textbook[this.subject];
                  _context.next = 10;
                  return this._getMyWorkbook();

                case 10:
                  this.workbookList = _context.sent;

                  this.$apply();

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function subjectChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return subjectChange;
      }(),

      /** 教材切换 */
      textbookChange: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._setUserInfoTextbook(id, this.subject);

                case 2:
                  userinfo = _context2.sent;

                  _wepy2.default.setStorageSync('gnb_middle_user', userinfo);
                  this.textbook = id;
                  _context2.next = 7;
                  return this._getMyWorkbook();

                case 7:
                  this.workbookList = _context2.sent;

                  this.$apply();

                case 9:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function textbookChange(_x2) {
          return _ref3.apply(this, arguments);
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
          url: '/pages/workbook/add?id=' + this.textbook + '&subject=' + this.subject
        });
      },

      /** 进入拍错题 */
      _initCamera: function _initCamera() {
        _wepy2.default.navigateTo({
          url: '/pages/camera/index?id=' + this.textbook
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
    value: function _getMyWorkbook() {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/workbook',
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

    /** 更改用户教材信息 */

  }, {
    key: '_setUserInfoTextbook',
    value: function _setUserInfoTextbook(id, subject) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/member/info',
          method: 'POST',
          data: {
            textbook: _defineProperty({}, subject, id)
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

    /** 更改用户科目信息 */

  }, {
    key: '_setUserInfoSubject',
    value: function _setUserInfoSubject(subject) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/member/info',
          method: 'POST',
          data: {
            subject: subject
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var code, userInfo;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!(_wepy2.default.getStorageSync('gnb_middle_openId').length === 0)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 4;
                return this._login();

              case 4:
                code = _context3.sent;
                _context3.next = 7;
                return this._getOpenId(code);

              case 7:
                _context3.next = 9;
                return this._getUserInfo();

              case 9:
                userInfo = _context3.sent;

                _wepy2.default.setStorageSync('gnb_middle_user', userInfo);
                // 当前学科
                this.subject = _wepy2.default.getStorageSync('gnb_middle_user').current.subjectId;
                this.subjectList = _wepy2.default.getStorageSync('gnb_middle_user').subject;
                this.textbook = _wepy2.default.getStorageSync('gnb_middle_user').current.textbookId;
                this.textBookList = _wepy2.default.getStorageSync('gnb_middle_user').textbook[this.subject];
                this.$apply();
                _context3.next = 18;
                return this._getMyWorkbook();

              case 18:
                this.workbookList = _context3.sent;

                this.$apply();
                _context3.next = 25;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3['catch'](0);

                _wepy2.default.hideLoading();

              case 25:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 22]]);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJnbmJTdWJqZWN0U2VsZWN0IiwiZGF0YSIsInRleHRib29rIiwidGV4dEJvb2tMaXN0Iiwic3ViamVjdCIsInN1YmplY3RMaXN0Iiwid29ya2Jvb2tMaXN0IiwibWV0aG9kcyIsInN1YmplY3RDaGFuZ2UiLCJfc2V0VXNlckluZm9TdWJqZWN0IiwidXNlcmluZm8iLCJzZXRTdG9yYWdlU3luYyIsImdldFN0b3JhZ2VTeW5jIiwiY3VycmVudCIsInRleHRib29rSWQiLCJfZ2V0TXlXb3JrYm9vayIsIiRhcHBseSIsInRleHRib29rQ2hhbmdlIiwiaWQiLCJfc2V0VXNlckluZm9UZXh0Ym9vayIsIl9pbnRvQ2hhcHRlciIsIml0ZW0iLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmFtZSIsIl9pbml0QWRkIiwiX2luaXRDYW1lcmEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiY2xlYXJTdG9yYWdlU3luYyIsInJlcXVlc3QiLCJhcHAiLCJvcGVuaWQiLCJzZXNzaW9uX2tleSIsImZhaWwiLCJlcnIiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWV0aG9kIiwiaGlkZUxvYWRpbmciLCJsZW5ndGgiLCJfbG9naW4iLCJfZ2V0T3BlbklkIiwiX2dldFVzZXJJbmZvIiwidXNlckluZm8iLCJzdWJqZWN0SWQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtB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IGZyb20gJ3dlcHknXG5pbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcbmltcG9ydCBnbmJTdWJqZWN0U2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItc3ViamVjdFNlbGVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6w6ZSZ6aKYJ1xuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRib29rXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn0sXCJnbmJTdWJqZWN0U2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdWJqZWN0LnN5bmNcIjpcInN1YmplY3RcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInN1YmplY3RMaXN0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifSxcImduYlN1YmplY3RTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJzdWJqZWN0Q2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0LFxuICAgIGduYlN1YmplY3RTZWxlY3Q6IGduYlN1YmplY3RTZWxlY3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdGV4dGJvb2s6ICcnLCAgICAgLy8g5b2T5YmN6YCJ5Lit5pWZ5p2QXG4gICAgdGV4dEJvb2tMaXN0OiBbXSwgLy8g5pWZ5p2Q5YiX6KGoXG4gICAgc3ViamVjdDogJycsICAgICAgLy8g5b2T5YmN6YCJ5Lit56eR55uuXG4gICAgc3ViamVjdExpc3Q6IFtdLCAgLy8g56eR55uu5YiX6KGoXG4gICAgd29ya2Jvb2tMaXN0OiBbXSAgLy8g57uD5Lmg5YaM5YiX6KGoXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDnp5Hnm67liIfmjaIgKi9cbiAgICBhc3luYyBzdWJqZWN0Q2hhbmdlIChzdWJqZWN0KSB7XG4gICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mb1N1YmplY3Qoc3ViamVjdClcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJpbmZvKVxuICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdFxuICAgICAgdGhpcy5zdWJqZWN0TGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnN1YmplY3RcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnRleHRib29rSWRcbiAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudGV4dGJvb2tbdGhpcy5zdWJqZWN0XVxuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRNeVdvcmtib29rKClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKiDmlZnmnZDliIfmjaIgKi9cbiAgICBhc3luYyB0ZXh0Ym9va0NoYW5nZSAoaWQpIHtcbiAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvVGV4dGJvb2soaWQsIHRoaXMuc3ViamVjdClcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJpbmZvKVxuICAgICAgdGhpcy50ZXh0Ym9vayA9IGlkXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldE15V29ya2Jvb2soKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgLyoqIOi/m+WFpeeroOiKgiAqL1xuICAgIF9pbnRvQ2hhcHRlciAoaXRlbSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2NoYXB0ZXI/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmlkfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvKiog5aKe5Yqg57uD5Lmg5YaMICovXG4gICAgX2luaXRBZGQgKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2FkZD9pZD0ke3RoaXMudGV4dGJvb2t9JnN1YmplY3Q9JHt0aGlzLnN1YmplY3R9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIC8qKiDov5vlhaXmi43plJnpopggKi9cbiAgICBfaW5pdENhbWVyYSAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvY2FtZXJhL2luZGV4P2lkPSR7dGhpcy50ZXh0Ym9va31gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKiDlvq7kv6HmnI3liqHlmajojrflj5ZDT0RFICovXG4gIF9sb2dpbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkubG9naW4oe1xuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAgICAgICByZXNvbHZlKHJlcy5jb2RlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog6YCa6L+HY29kZeiOt+WPlk9QRU5JRCAqL1xuICBfZ2V0T3BlbklkIChjb2RlKSB7XG4gICAgd2VweS5jbGVhclN0b3JhZ2VTeW5jKClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWNoYXQuZ3VpbmFiZW4uY29tL21pbmktcHJvZ3JhbS9vcGVuSWQnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICBhcHA6ICdtaWRkbGUnXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJywgcmVzLm9wZW5pZClcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3Nlc3Npb25fa2V5JywgcmVzLnNlc3Npb25fa2V5KVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgLyoqIOiOt+WPluaIkeeahOe7g+S5oOWGjCAqL1xuICBfZ2V0TXlXb3JrYm9vayAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS93b3JrYm9vaycsXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog6I635Y+W55So5oi35L+h5oGvICovXG4gIF9nZXRVc2VySW5mbyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHJlcylcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOabtOaUueeUqOaIt+aVmeadkOS/oeaBryAqL1xuICBfc2V0VXNlckluZm9UZXh0Ym9vayAoaWQsIHN1YmplY3QpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRleHRib29rOiB7XG4gICAgICAgICAgICBbc3ViamVjdF06IGlkXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOabtOaUueeUqOaIt+enkeebruS/oeaBryAqL1xuICBfc2V0VXNlckluZm9TdWJqZWN0IChzdWJqZWN0KSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICAqIDEg6I635Y+W5piv5ZCm5a2Y5pyJb3BlbklkIOWmguaenOayoeacieS7o+ihqOS4uueZu+W9lei/h1xuICAgICAgICAqIDIg6I635Y+Wb3BlbklkXG4gICAgICAgICogMyDlnKjpgJrov4dvcGVuSWTojrflvpfnlKjmiLfkv6Hmga9cbiAgICAgICAgKi9cbiAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgY29kZSA9IGF3YWl0IHRoaXMuX2xvZ2luKClcbiAgICAgICAgYXdhaXQgdGhpcy5fZ2V0T3BlbklkKGNvZGUpXG4gICAgICB9XG4gICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCB0aGlzLl9nZXRVc2VySW5mbygpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCB1c2VySW5mbylcbiAgICAgIC8vIOW9k+WJjeWtpuenkVxuICAgICAgdGhpcy5zdWJqZWN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC5zdWJqZWN0SWRcbiAgICAgIHRoaXMuc3ViamVjdExpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5zdWJqZWN0XG4gICAgICB0aGlzLnRleHRib29rID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC50ZXh0Ym9va0lkXG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnRleHRib29rW3RoaXMuc3ViamVjdF1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0TXlXb3JrYm9vaygpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICB9XG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77yM55So6L+Z5Liq6K6w6ZSZ6aKY77yM6YCf5bqm5b+r77yM55So5aSE5aSnJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2ltZy5ndWluYWJlbi5jb20vZ25iX21pbmlwcm9ncmFtX3NoYXJlLmpwZz9pbWFnZVZpZXcyLzAvcS83NXxpbWFnZXNsaW0nLFxuICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==