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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJnbmJTdWJqZWN0U2VsZWN0IiwiZGF0YSIsInRleHRib29rIiwidGV4dEJvb2tMaXN0Iiwic3ViamVjdCIsInN1YmplY3RMaXN0Iiwid29ya2Jvb2tMaXN0IiwibWV0aG9kcyIsInN1YmplY3RDaGFuZ2UiLCJfc2V0VXNlckluZm9TdWJqZWN0IiwidXNlcmluZm8iLCJ3ZXB5Iiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTdG9yYWdlU3luYyIsImN1cnJlbnQiLCJ0ZXh0Ym9va0lkIiwiX2dldE15V29ya2Jvb2siLCIkYXBwbHkiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX3NldFVzZXJJbmZvVGV4dGJvb2siLCJfaW50b0NoYXB0ZXIiLCJpdGVtIiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJfaW5pdEFkZCIsIl9pbml0Q2FtZXJhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJyZXF1ZXN0IiwiYXBwIiwib3BlbmlkIiwic2Vzc2lvbl9rZXkiLCJmYWlsIiwiZXJyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1ldGhvZCIsImhpZGVMb2FkaW5nIiwibGVuZ3RoIiwiX2xvZ2luIiwiX2dldE9wZW5JZCIsIl9nZXRVc2VySW5mbyIsInVzZXJJbmZvIiwic3ViamVjdElkIiwiaW1hZ2VVcmwiLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyx3QkFBdUIsVUFBeEIsRUFBbUMsb0JBQW1CLGNBQXRELEVBQXJCLEVBQTJGLG9CQUFtQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUFtRCxvQkFBbUIsYUFBdEUsRUFBb0YsY0FBYSxFQUFqRyxFQUE5RyxFLFFBQ1RDLE8sR0FBVSxFQUFDLHFCQUFvQixFQUFDLGNBQWEsZ0JBQWQsRUFBckIsRUFBcUQsb0JBQW1CLEVBQUMsY0FBYSxlQUFkLEVBQXhFLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLHlCQUFtQkEsMkJBRFQ7QUFFVkMsd0JBQWtCQTtBQUZSLEssUUFLWkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREwsRUFDUztBQUNkQyxvQkFBYyxFQUZULEVBRWE7QUFDbEJDLGVBQVMsRUFISixFQUdRO0FBQ2JDLG1CQUFhLEVBSlIsRUFJWTtBQUNqQkMsb0JBQWMsRUFMVCxDQUtZO0FBTFosSyxRQVFQQyxPLEdBQVU7QUFDUjtBQUNNQyxtQkFGRTtBQUFBLDZGQUVhSixPQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR2UsS0FBS0ssbUJBQUwsQ0FBeUJMLE9BQXpCLENBSGY7O0FBQUE7QUFHRk0sMEJBSEU7O0FBSU5DLGlDQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0YsUUFBdkM7QUFDQSx1QkFBS04sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsdUJBQUtDLFdBQUwsR0FBbUJNLGVBQUtFLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDVCxPQUExRDtBQUNBLHVCQUFLRixRQUFMLEdBQWdCUyxlQUFLRSxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0MsT0FBdkMsQ0FBK0NDLFVBQS9EO0FBQ0EsdUJBQUtaLFlBQUwsR0FBb0JRLGVBQUtFLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDWCxRQUF2QyxDQUFnRCxLQUFLRSxPQUFyRCxDQUFwQjtBQVJNO0FBQUEseUJBU29CLEtBQUtZLGNBQUwsRUFUcEI7O0FBQUE7QUFTTix1QkFBS1YsWUFUQzs7QUFVTix1QkFBS1csTUFBTDs7QUFWTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFZUjtBQUNNQyxvQkFiRTtBQUFBLDhGQWFjQyxFQWJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBY2UsS0FBS0Msb0JBQUwsQ0FBMEJELEVBQTFCLEVBQThCLEtBQUtmLE9BQW5DLENBZGY7O0FBQUE7QUFjRk0sMEJBZEU7O0FBZU5DLGlDQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0YsUUFBdkM7QUFDQSx1QkFBS1IsUUFBTCxHQUFnQmlCLEVBQWhCO0FBaEJNO0FBQUEseUJBaUJvQixLQUFLSCxjQUFMLEVBakJwQjs7QUFBQTtBQWlCTix1QkFBS1YsWUFqQkM7O0FBa0JOLHVCQUFLVyxNQUFMOztBQWxCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFvQlI7QUFDQUksa0JBckJRLHdCQXFCTUMsSUFyQk4sRUFxQlk7QUFDbEJYLHVCQUFLWSxVQUFMLENBQWdCO0FBQ2RDLGlEQUFxQ0YsS0FBS0csSUFBMUMsWUFBcURILEtBQUtIO0FBRDVDLFNBQWhCO0FBR0QsT0F6Qk87O0FBMEJSO0FBQ0FPLGNBM0JRLHNCQTJCSTtBQUNWZix1QkFBS1ksVUFBTCxDQUFnQjtBQUNkQywyQ0FBK0IsS0FBS3RCLFFBQXBDLGlCQUF3RCxLQUFLRTtBQUQvQyxTQUFoQjtBQUdELE9BL0JPOztBQWdDUjtBQUNBdUIsaUJBakNRLHlCQWlDTztBQUNiaEIsdUJBQUtZLFVBQUwsQ0FBZ0I7QUFDZEMsMkNBQStCLEtBQUt0QjtBQUR0QixTQUFoQjtBQUdEO0FBckNPLEs7Ozs7Ozs7QUF3Q1Y7NkJBQ1U7QUFDUixhQUFPLElBQUkwQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDbkIsdUJBQUtvQixLQUFMLENBQVc7QUFDVEMsaUJBRFMsbUJBQ0FDLEdBREEsRUFDSztBQUNaQyxvQkFBUUMsR0FBUixDQUFZRixJQUFJRyxJQUFoQjtBQUNBUCxvQkFBUUksSUFBSUcsSUFBWjtBQUNEO0FBSlEsU0FBWDtBQU1ELE9BUE0sQ0FBUDtBQVFEOztBQUVEOzs7OytCQUNZQSxJLEVBQU07QUFDaEJ6QixxQkFBSzBCLGdCQUFMO0FBQ0EsYUFBTyxJQUFJVCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDbkIsdUJBQUsyQixPQUFMLENBQWE7QUFDWGQsZUFBSyxpREFETTtBQUVYdkIsZ0JBQU07QUFDSm1DLGtCQUFNQSxJQURGO0FBRUpHLGlCQUFLO0FBRkQsV0FGSztBQU1YUCxpQkFOVyxtQkFNRkMsR0FORSxFQU1HO0FBQ1p0QiwyQkFBS0MsY0FBTCxDQUFvQixtQkFBcEIsRUFBeUNxQixJQUFJTyxNQUE3QztBQUNBN0IsMkJBQUtDLGNBQUwsQ0FBb0Isd0JBQXBCLEVBQThDcUIsSUFBSVEsV0FBbEQ7QUFDQVosb0JBQVFJLEdBQVI7QUFDRCxXQVZVO0FBV1hTLGNBWFcsZ0JBV0xDLEdBWEssRUFXQTtBQUNUYixtQkFBT2EsR0FBUDtBQUNEO0FBYlUsU0FBYjtBQWVELE9BaEJNLENBQVA7QUFpQkQ7QUFDRDs7OztxQ0FDa0I7QUFDaEIsYUFBTyxJQUFJZixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDbkIsdUJBQUsyQixPQUFMLENBQWE7QUFDWGQsZUFBSyxtQ0FETTtBQUVYUSxpQkFGVyxtQkFFRkMsR0FGRSxFQUVHO0FBQ1pKLG9CQUFRSSxHQUFSO0FBQ0QsV0FKVTtBQUtYUyxjQUxXLGdCQUtMQyxHQUxLLEVBS0E7QUFDVGIsbUJBQU9hLEdBQVA7QUFDRDtBQVBVLFNBQWI7QUFTRCxPQVZNLENBQVA7QUFXRDs7QUFFRDs7OzttQ0FDZ0I7QUFDZCxhQUFPLElBQUlmLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENuQix1QkFBSzJCLE9BQUwsQ0FBYTtBQUNYZCxlQUFLLHNDQURNO0FBRVhRLGlCQUZXLG1CQUVGQyxHQUZFLEVBRUc7QUFDWnRCLDJCQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q3FCLEdBQXZDO0FBQ0FKLG9CQUFRSSxHQUFSO0FBQ0QsV0FMVTtBQU1YUyxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFDVGIsbUJBQU9hLEdBQVA7QUFDRDtBQVJVLFNBQWI7QUFVRCxPQVhNLENBQVA7QUFZRDs7QUFFRDs7Ozt5Q0FDc0J4QixFLEVBQUlmLE8sRUFBUztBQUNqQ08scUJBQUtpQyxXQUFMLENBQWlCLEVBQUVDLE9BQU8sS0FBVCxFQUFqQjtBQUNBLGFBQU8sSUFBSWpCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENuQix1QkFBSzJCLE9BQUwsQ0FBYTtBQUNYZCxlQUFLLHNDQURNO0FBRVhzQixrQkFBUSxNQUZHO0FBR1g3QyxnQkFBTTtBQUNKQywwQ0FDR0UsT0FESCxFQUNhZSxFQURiO0FBREksV0FISztBQVFYYSxpQkFSVyxtQkFRRkMsR0FSRSxFQVFHO0FBQ1p0QiwyQkFBS29DLFdBQUw7QUFDQWxCLG9CQUFRSSxHQUFSO0FBQ0QsV0FYVTtBQVlYUyxjQVpXLGdCQVlMQyxHQVpLLEVBWUE7QUFDVGhDLDJCQUFLb0MsV0FBTDtBQUNBakIsbUJBQU9hLEdBQVA7QUFDRDtBQWZVLFNBQWI7QUFpQkQsT0FsQk0sQ0FBUDtBQW1CRDs7QUFFRDs7Ozt3Q0FDcUJ2QyxPLEVBQVM7QUFDNUJPLHFCQUFLaUMsV0FBTCxDQUFpQixFQUFFQyxPQUFPLEtBQVQsRUFBakI7QUFDQSxhQUFPLElBQUlqQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDbkIsdUJBQUsyQixPQUFMLENBQWE7QUFDWGQsZUFBSyxzQ0FETTtBQUVYc0Isa0JBQVEsTUFGRztBQUdYN0MsZ0JBQU07QUFDSkcscUJBQVNBO0FBREwsV0FISztBQU1YNEIsaUJBTlcsbUJBTUZDLEdBTkUsRUFNRztBQUNadEIsMkJBQUtvQyxXQUFMO0FBQ0FsQixvQkFBUUksR0FBUjtBQUNELFdBVFU7QUFVWFMsY0FWVyxnQkFVTEMsR0FWSyxFQVVBO0FBQ1RoQywyQkFBS29DLFdBQUw7QUFDQWpCLG1CQUFPYSxHQUFQO0FBQ0Q7QUFiVSxTQUFiO0FBZUQsT0FoQk0sQ0FBUDtBQWlCRDs7Ozs7Ozs7Ozs7O3NCQVNPaEMsZUFBS0UsY0FBTCxDQUFvQixtQkFBcEIsRUFBeUNtQyxNQUF6QyxLQUFvRCxDOzs7Ozs7dUJBQ3JDLEtBQUtDLE1BQUwsRTs7O0FBQWJiLG9COzt1QkFDRSxLQUFLYyxVQUFMLENBQWdCZCxJQUFoQixDOzs7O3VCQUVhLEtBQUtlLFlBQUwsRTs7O0FBQWpCQyx3Qjs7QUFDSnpDLCtCQUFLQyxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q3dDLFFBQXZDO0FBQ0E7QUFDQSxxQkFBS2hELE9BQUwsR0FBZU8sZUFBS0UsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNDLE9BQXZDLENBQStDdUMsU0FBOUQ7QUFDQSxxQkFBS2hELFdBQUwsR0FBbUJNLGVBQUtFLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDVCxPQUExRDtBQUNBLHFCQUFLRixRQUFMLEdBQWdCUyxlQUFLRSxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0MsT0FBdkMsQ0FBK0NDLFVBQS9EO0FBQ0EscUJBQUtaLFlBQUwsR0FBb0JRLGVBQUtFLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDWCxRQUF2QyxDQUFnRCxLQUFLRSxPQUFyRCxDQUFwQjtBQUNBLHFCQUFLYSxNQUFMOzt1QkFDMEIsS0FBS0QsY0FBTCxFOzs7QUFBMUIscUJBQUtWLFk7O0FBQ0wscUJBQUtXLE1BQUw7Ozs7Ozs7O0FBRUFOLCtCQUFLb0MsV0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUllZCxHLEVBQUs7QUFDdEIsYUFBTztBQUNMWSxlQUFPLHFCQURGO0FBRUxTLGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUEzTXFDNUMsZUFBSzZDLEk7O2tCQUF4QmhFLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcbmltcG9ydCBnbmJTdWJqZWN0U2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItc3ViamVjdFNlbGVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6w6ZSZ6aKYJ1xuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRib29rXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn0sXCJnbmJTdWJqZWN0U2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdWJqZWN0LnN5bmNcIjpcInN1YmplY3RcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInN1YmplY3RMaXN0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifSxcImduYlN1YmplY3RTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJzdWJqZWN0Q2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0LFxuICAgIGduYlN1YmplY3RTZWxlY3Q6IGduYlN1YmplY3RTZWxlY3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdGV4dGJvb2s6ICcnLCAvLyDlvZPliY3pgInkuK3mlZnmnZBcbiAgICB0ZXh0Qm9va0xpc3Q6IFtdLCAvLyDmlZnmnZDliJfooahcbiAgICBzdWJqZWN0OiAnJywgLy8g5b2T5YmN6YCJ5Lit56eR55uuXG4gICAgc3ViamVjdExpc3Q6IFtdLCAvLyDnp5Hnm67liJfooahcbiAgICB3b3JrYm9va0xpc3Q6IFtdIC8vIOe7g+S5oOWGjOWIl+ihqFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog56eR55uu5YiH5o2iICovXG4gICAgYXN5bmMgc3ViamVjdENoYW5nZSAoc3ViamVjdCkge1xuICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgdGhpcy5fc2V0VXNlckluZm9TdWJqZWN0KHN1YmplY3QpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCB1c2VyaW5mbylcbiAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3RcbiAgICAgIHRoaXMuc3ViamVjdExpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5zdWJqZWN0XG4gICAgICB0aGlzLnRleHRib29rID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC50ZXh0Ym9va0lkXG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnRleHRib29rW3RoaXMuc3ViamVjdF1cbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0TXlXb3JrYm9vaygpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKiog5pWZ5p2Q5YiH5o2iICovXG4gICAgYXN5bmMgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mb1RleHRib29rKGlkLCB0aGlzLnN1YmplY3QpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCB1c2VyaW5mbylcbiAgICAgIHRoaXMudGV4dGJvb2sgPSBpZFxuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRNeVdvcmtib29rKClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKiDov5vlhaXnq6DoioIgKi9cbiAgICBfaW50b0NoYXB0ZXIgKGl0ZW0pIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy93b3JrYm9vay9jaGFwdGVyP25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5pZH1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOWinuWKoOe7g+S5oOWGjCAqL1xuICAgIF9pbml0QWRkICgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy93b3JrYm9vay9hZGQ/aWQ9JHt0aGlzLnRleHRib29rfSZzdWJqZWN0PSR7dGhpcy5zdWJqZWN0fWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvKiog6L+b5YWl5ouN6ZSZ6aKYICovXG4gICAgX2luaXRDYW1lcmEgKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2NhbWVyYS9pbmRleD9pZD0ke3RoaXMudGV4dGJvb2t9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKiog5b6u5L+h5pyN5Yqh5Zmo6I635Y+WQ09ERSAqL1xuICBfbG9naW4gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXG4gICAgICAgICAgcmVzb2x2ZShyZXMuY29kZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOmAmui/h2NvZGXojrflj5ZPUEVOSUQgKi9cbiAgX2dldE9wZW5JZCAoY29kZSkge1xuICAgIHdlcHkuY2xlYXJTdG9yYWdlU3luYygpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2VjaGF0Lmd1aW5hYmVuLmNvbS9taW5pLXByb2dyYW0vb3BlbklkJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgYXBwOiAnbWlkZGxlJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX29wZW5JZCcsIHJlcy5vcGVuaWQpXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9zZXNzaW9uX2tleScsIHJlcy5zZXNzaW9uX2tleSlcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIC8qKiDojrflj5bmiJHnmoTnu4PkuaDlhowgKi9cbiAgX2dldE15V29ya2Jvb2sgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vd29ya2Jvb2snLFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOiOt+WPlueUqOaIt+S/oeaBryAqL1xuICBfZ2V0VXNlckluZm8gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCByZXMpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDmm7TmlLnnlKjmiLfmlZnmnZDkv6Hmga8gKi9cbiAgX3NldFVzZXJJbmZvVGV4dGJvb2sgKGlkLCBzdWJqZWN0KSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+356iN5YCZJyB9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRleHRib29rOiB7XG4gICAgICAgICAgICBbc3ViamVjdF06IGlkXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOabtOaUueeUqOaIt+enkeebruS/oeaBryAqL1xuICBfc2V0VXNlckluZm9TdWJqZWN0IChzdWJqZWN0KSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+356iN5YCZJyB9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3RcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICB0cnkge1xuICAgICAgLyoqXG4gICAgICAgICogMSDojrflj5bmmK/lkKblrZjmnIlvcGVuSWQg5aaC5p6c5rKh5pyJ5Luj6KGo5Li655m75b2V6L+HXG4gICAgICAgICogMiDojrflj5ZvcGVuSWRcbiAgICAgICAgKiAzIOWcqOmAmui/h29wZW5JZOiOt+W+l+eUqOaIt+S/oeaBr1xuICAgICAgICAqL1xuICAgICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfb3BlbklkJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCBjb2RlID0gYXdhaXQgdGhpcy5fbG9naW4oKVxuICAgICAgICBhd2FpdCB0aGlzLl9nZXRPcGVuSWQoY29kZSlcbiAgICAgIH1cbiAgICAgIGxldCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuX2dldFVzZXJJbmZvKClcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJJbmZvKVxuICAgICAgLy8g5b2T5YmN5a2m56eRXG4gICAgICB0aGlzLnN1YmplY3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnN1YmplY3RJZFxuICAgICAgdGhpcy5zdWJqZWN0TGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnN1YmplY3RcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnRleHRib29rSWRcbiAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudGV4dGJvb2tbdGhpcy5zdWJqZWN0XVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRNeVdvcmtib29rKClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgIH1cbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvIznlKjov5nkuKrorrDplJnpopjvvIzpgJ/luqblv6vvvIznlKjlpITlpKcnLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXG4gICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgIH1cbiAgfVxufVxuIl19