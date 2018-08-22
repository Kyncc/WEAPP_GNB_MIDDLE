'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

var _gnbTextbookSelect = require('./../../components/gnb-textbookSelect.js');

var _gnbTextbookSelect2 = _interopRequireDefault(_gnbTextbookSelect);

var _gnbSubjectSelect = require('./../../components/gnb-subjectSelect.js');

var _gnbSubjectSelect2 = _interopRequireDefault(_gnbSubjectSelect);

var _gnbVersionSelect = require('./../../components/gnb-versionSelect.js');

var _gnbVersionSelect2 = _interopRequireDefault(_gnbVersionSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookAdd = function (_wepy$page) {
  _inherits(WorkbookAdd, _wepy$page);

  function WorkbookAdd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookAdd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookAdd.__proto__ || Object.getPrototypeOf(WorkbookAdd)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '练习册管理'
    }, _this.$repeat = {}, _this.$props = { "searchField": { "v-bind:options.sync": "base_search", "componentId": "searchField" }, "gnbTextbookSelect": { "v-bind:textbook.sync": "textbook", "v-bind:list.sync": "textBookList" }, "gnbVersionSelect": { "v-bind:version.sync": "version", "v-bind:list.sync": "versionList" }, "gnbSubjectSelect": { "xmlns:v-bind": "", "v-bind:subject.sync": "subject", "v-bind:list.sync": "subjectList", "xmlns:v-on": "" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" }, "gnbVersionSelect": { "v-on:event": "versionChange" }, "gnbSubjectSelect": { "v-on:event": "subjectChange" } }, _this.components = {
      searchField: _zanField2.default,
      gnbTextbookSelect: _gnbTextbookSelect2.default,
      gnbVersionSelect: _gnbVersionSelect2.default,
      gnbSubjectSelect: _gnbSubjectSelect2.default
    }, _this.data = {
      base_search: {
        value: '',
        placeholder: '请输入练习册名称'
      },
      loading: true,
      textbook: '', // 当前选中教材
      textBookList: [], // 教材列表
      subject: '', // 当前选中科目
      subjectList: [], // 科目列表
      version: '', // 当前版本
      versionList: [], // 版本列表
      workbookList: []
    }, _this.events = {
      zanFieldChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.base_search.value = e.detail.value;
                  _context.prev = 1;

                  this.loading = true;
                  _context.next = 5;
                  return this._getAllWorkbook(this.textbook, this.base_search.value);

                case 5:
                  this.workbookList = _context.sent;

                  this.loading = false;
                  _context.next = 13;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](1);

                  this.loading = false;
                  console.log(_context.t0);

                case 13:
                  this.$apply();

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 9]]);
        }));

        function zanFieldChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return zanFieldChange;
      }()
    }, _this.methods = {
      /** 定制咨询 */
      _telDialog: function _telDialog(free) {
        if (free) {
          return null;
        } else {
          wx.showModal({
            title: '定制专属练习册',
            content: '电话：17316279044',
            confirmText: '拨打',
            success: function success(res) {
              if (res.confirm) {
                _wepy2.default.makePhoneCall({
                  phoneNumber: '17316279044'
                });
              }
            }
          });
        }
      },

      /** 拨打电话 */
      _tel: function _tel() {
        _wepy2.default.makePhoneCall({
          phoneNumber: '17316279044'
        });
      },

      /** 查看练习册大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-workbookBig', urls: [url + '-workbookBig'] });
      },

      /** 练习册增加取消 */
      _edit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index, id, free) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!free) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 3;
                  return this._setWorkbook(id);

                case 3:
                  this.workbookList[index].status = _context2.sent;

                  this.$apply();

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _edit(_x2, _x3, _x4) {
          return _ref3.apply(this, arguments);
        }

        return _edit;
      }(),

      /** 进入章节 */
      _intoChapter: function _intoChapter(item) {
        _wepy2.default.navigateTo({
          url: '/pages/workbook/chapter?name=' + item.name + '&id=' + item.id
        });
      },

      /** 科目切换 */
      subjectChange: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(subject) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this._setUserInfoSubject(subject);

                case 2:
                  userinfo = _context3.sent;

                  _wepy2.default.setStorageSync('gnb_middle_user', userinfo);
                  this.subject = subject;
                  this.textbook = _wepy2.default.getStorageSync('gnb_middle_user').current.textbookId;
                  this.textBookList = _wepy2.default.getStorageSync('gnb_middle_user').textbook[this.subject];
                  this.version = _wepy2.default.getStorageSync('gnb_middle_user').current.versionId;
                  this.versionList = _wepy2.default.getStorageSync('gnb_middle_user').version;
                  _context3.prev = 9;

                  this.loading = true;
                  _context3.next = 13;
                  return this._getAllWorkbook(this.textbook, this.base_search.value);

                case 13:
                  this.workbookList = _context3.sent;

                  this.loading = false;
                  _context3.next = 21;
                  break;

                case 17:
                  _context3.prev = 17;
                  _context3.t0 = _context3['catch'](9);

                  this.loading = false;
                  console.log(_context3.t0);

                case 21:
                  this.$apply();

                case 22:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[9, 17]]);
        }));

        function subjectChange(_x5) {
          return _ref4.apply(this, arguments);
        }

        return subjectChange;
      }(),

      /** 版本切换 */
      versionChange: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(version) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this._setUserInfoVersion(version, this.subject);

                case 2:
                  userinfo = _context4.sent;

                  _wepy2.default.setStorageSync('gnb_middle_user', userinfo);
                  this.version = version;
                  this.versionList = _wepy2.default.getStorageSync('gnb_middle_user').version;
                  this.textbook = _wepy2.default.getStorageSync('gnb_middle_user').current.textbookId;
                  this.textBookList = _wepy2.default.getStorageSync('gnb_middle_user').textbook[this.subject];
                  _context4.prev = 8;

                  this.loading = true;
                  _context4.next = 12;
                  return this._getAllWorkbook(this.textbook, this.base_search.value);

                case 12:
                  this.workbookList = _context4.sent;

                  this.loading = false;
                  _context4.next = 20;
                  break;

                case 16:
                  _context4.prev = 16;
                  _context4.t0 = _context4['catch'](8);

                  this.loading = false;
                  console.log(_context4.t0);

                case 20:
                  this.$apply();

                case 21:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[8, 16]]);
        }));

        function versionChange(_x6) {
          return _ref5.apply(this, arguments);
        }

        return versionChange;
      }(),

      /** 教材切换 */
      textbookChange: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(textbook) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this._setUserInfoTextbook(textbook, this.subject);

                case 2:
                  userinfo = _context5.sent;

                  _wepy2.default.setStorageSync('gnb_middle_user', userinfo);
                  this.textbook = textbook;
                  _context5.prev = 5;

                  this.loading = true;
                  _context5.next = 9;
                  return this._getAllWorkbook(this.textbook, this.base_search.value);

                case 9:
                  this.workbookList = _context5.sent;

                  this.loading = false;
                  _context5.next = 17;
                  break;

                case 13:
                  _context5.prev = 13;
                  _context5.t0 = _context5['catch'](5);

                  this.loading = false;
                  console.log(_context5.t0);

                case 17:
                  this.$apply();

                case 18:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[5, 13]]);
        }));

        function textbookChange(_x7) {
          return _ref6.apply(this, arguments);
        }

        return textbookChange;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookAdd, [{
    key: '_setUserInfoTextbook',


    /** 更改用户教材信息 */
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

    /** 更改用户版本信息 */

  }, {
    key: '_setUserInfoVersion',
    value: function _setUserInfoVersion(id, version) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/member/info',
          method: 'POST',
          data: {
            version: _defineProperty({}, version, id)
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

    /** 编辑练习册 */

  }, {
    key: '_setWorkbook',
    value: function _setWorkbook(id) {
      _wepy2.default.showNavigationBarLoading();
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/workbook',
          method: 'POST',
          data: {
            workbookId: id
          },
          success: function success(res) {
            resolve(res.status);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideNavigationBarLoading();
          }
        });
      });
    }

    /**  添加我的练习册 */

  }, {
    key: '_getAllWorkbook',
    value: function _getAllWorkbook(id, name) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/workbook/all',
          data: {
            name: name,
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
  }, {
    key: 'onShow',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.base_search.value = '';
                this.subject = _wepy2.default.getStorageSync('gnb_middle_user').current.subjectId;
                this.subjectList = _wepy2.default.getStorageSync('gnb_middle_user').subject;
                this.textbook = _wepy2.default.getStorageSync('gnb_middle_user').current.textbookId;
                this.textBookList = _wepy2.default.getStorageSync('gnb_middle_user').textbook[this.subject];
                this.version = _wepy2.default.getStorageSync('gnb_middle_user').current.versionId;
                this.versionList = _wepy2.default.getStorageSync('gnb_middle_user').version;
                _context6.prev = 7;

                this.loading = true;
                _context6.next = 11;
                return this._getAllWorkbook(this.textbook, this.base_search.value);

              case 11:
                this.workbookList = _context6.sent;

                this.loading = false;
                _context6.next = 19;
                break;

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6['catch'](7);

                this.loading = false;
                console.log(_context6.t0);

              case 19:
                this.$apply();

              case 20:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[7, 15]]);
      }));

      function onShow() {
        return _ref7.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return {
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return WorkbookAdd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookAdd , 'pages/workbook/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2hGaWVsZCIsImduYlRleHRib29rU2VsZWN0IiwiZ25iVmVyc2lvblNlbGVjdCIsImduYlN1YmplY3RTZWxlY3QiLCJkYXRhIiwiYmFzZV9zZWFyY2giLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwibG9hZGluZyIsInRleHRib29rIiwidGV4dEJvb2tMaXN0Iiwic3ViamVjdCIsInN1YmplY3RMaXN0IiwidmVyc2lvbiIsInZlcnNpb25MaXN0Iiwid29ya2Jvb2tMaXN0IiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiX2dldEFsbFdvcmtib29rIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIm1ldGhvZHMiLCJfdGVsRGlhbG9nIiwiZnJlZSIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsIl90ZWwiLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiX2VkaXQiLCJpbmRleCIsImlkIiwiX3NldFdvcmtib29rIiwic3RhdHVzIiwiX2ludG9DaGFwdGVyIiwiaXRlbSIsIm5hdmlnYXRlVG8iLCJuYW1lIiwic3ViamVjdENoYW5nZSIsIl9zZXRVc2VySW5mb1N1YmplY3QiLCJ1c2VyaW5mbyIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U3RvcmFnZVN5bmMiLCJ0ZXh0Ym9va0lkIiwidmVyc2lvbklkIiwidmVyc2lvbkNoYW5nZSIsIl9zZXRVc2VySW5mb1ZlcnNpb24iLCJ0ZXh0Ym9va0NoYW5nZSIsIl9zZXRVc2VySW5mb1RleHRib29rIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJoaWRlTG9hZGluZyIsImZhaWwiLCJlcnIiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJ3b3JrYm9va0lkIiwiY29tcGxldGUiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdWJqZWN0SWQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsdUJBQXNCLGFBQXZCLEVBQXFDLGVBQWMsYUFBbkQsRUFBZixFQUFpRixxQkFBb0IsRUFBQyx3QkFBdUIsVUFBeEIsRUFBbUMsb0JBQW1CLGNBQXRELEVBQXJHLEVBQTJLLG9CQUFtQixFQUFDLHVCQUFzQixTQUF2QixFQUFpQyxvQkFBbUIsYUFBcEQsRUFBOUwsRUFBaVEsb0JBQW1CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELG9CQUFtQixhQUF0RSxFQUFvRixjQUFhLEVBQWpHLEVBQXBSLEUsUUFDVEMsTyxHQUFVLEVBQUMscUJBQW9CLEVBQUMsY0FBYSxnQkFBZCxFQUFyQixFQUFxRCxvQkFBbUIsRUFBQyxjQUFhLGVBQWQsRUFBeEUsRUFBdUcsb0JBQW1CLEVBQUMsY0FBYSxlQUFkLEVBQTFILEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLHFDQURVO0FBRVZDLG9EQUZVO0FBR1ZDLGtEQUhVO0FBSVZDO0FBSlUsSyxRQU9aQyxJLEdBQU87QUFDTEMsbUJBQWE7QUFDWEMsZUFBTyxFQURJO0FBRVhDLHFCQUFhO0FBRkYsT0FEUjtBQUtMQyxlQUFTLElBTEo7QUFNTEMsZ0JBQVUsRUFOTCxFQU1hO0FBQ2xCQyxv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LENBQWlCQyxLQUFyRCxDOzs7QUFBMUIscUJBQUtTLFk7O0FBQ0wscUJBQUtQLE9BQUwsR0FBZSxLQUFmOzs7Ozs7OztBQUVBLHFCQUFLQSxPQUFMLEdBQWUsS0FBZjtBQUNBYSx3QkFBUUMsR0FBUjs7O0FBRUYscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJVLEcsRUFBSztBQUN0QixhQUFPO0FBQ0xKLGVBQU8sb0JBREY7QUFFTGdELGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF2UnNDLGVBQUtDLEk7O2tCQUF6QnRGLFciLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG5pbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcbmltcG9ydCBnbmJTdWJqZWN0U2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItc3ViamVjdFNlbGVjdCdcbmltcG9ydCBnbmJWZXJzaW9uU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItdmVyc2lvblNlbGVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tBZGQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e7g+S5oOWGjOeuoeeQhidcbiAgfVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzZWFyY2hGaWVsZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2Vfc2VhcmNoXCIsXCJjb21wb25lbnRJZFwiOlwic2VhcmNoRmllbGRcIn0sXCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtYmluZDp0ZXh0Ym9vay5zeW5jXCI6XCJ0ZXh0Ym9va1wiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwidGV4dEJvb2tMaXN0XCJ9LFwiZ25iVmVyc2lvblNlbGVjdFwiOntcInYtYmluZDp2ZXJzaW9uLnN5bmNcIjpcInZlcnNpb25cIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInZlcnNpb25MaXN0XCJ9LFwiZ25iU3ViamVjdFNlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3ViamVjdC5zeW5jXCI6XCJzdWJqZWN0XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJzdWJqZWN0TGlzdFwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidGV4dGJvb2tDaGFuZ2VcIn0sXCJnbmJWZXJzaW9uU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidmVyc2lvbkNoYW5nZVwifSxcImduYlN1YmplY3RTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJzdWJqZWN0Q2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgc2VhcmNoRmllbGQ6IHphbkZpZWxkLFxuICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdCxcbiAgICBnbmJWZXJzaW9uU2VsZWN0OiBnbmJWZXJzaW9uU2VsZWN0LFxuICAgIGduYlN1YmplY3RTZWxlY3Q6IGduYlN1YmplY3RTZWxlY3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgYmFzZV9zZWFyY2g6IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl57uD5Lmg5YaM5ZCN56ewJ1xuICAgIH0sXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICB0ZXh0Ym9vazogJycsICAgICAvLyDlvZPliY3pgInkuK3mlZnmnZBcbiAgICB0ZXh0Qm9va0xpc3Q6IFtdLCAvLyDmlZnmnZDliJfooahcbiAgICBzdWJqZWN0OiAnJywgICAgICAvLyDlvZPliY3pgInkuK3np5Hnm65cbiAgICBzdWJqZWN0TGlzdDogW10sICAvLyDnp5Hnm67liJfooahcbiAgICB2ZXJzaW9uOiAnJywgICAgICAvLyDlvZPliY3niYjmnKxcbiAgICB2ZXJzaW9uTGlzdDogW10sICAvLyDniYjmnKzliJfooahcbiAgICB3b3JrYm9va0xpc3Q6IFtdXG4gIH1cblxuICBldmVudHMgPSB7XG4gICAgYXN5bmMgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9vaywgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5a6a5Yi25ZKo6K+iICovXG4gICAgX3RlbERpYWxvZyAoZnJlZSkge1xuICAgICAgaWYgKGZyZWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICflrprliLbkuJPlsZ7nu4PkuaDlhownLFxuICAgICAgICAgIGNvbnRlbnQ6ICfnlLXor53vvJoxNzMxNjI3OTA0NCcsXG4gICAgICAgICAgY29uZmlybVRleHQ6ICfmi6jmiZMnLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIHdlcHkubWFrZVBob25lQ2FsbCh7XG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICcxNzMxNjI3OTA0NCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICAvKiog5ouo5omT55S16K+dICovXG4gICAgX3RlbCAoKSB7XG4gICAgICB3ZXB5Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgICBwaG9uZU51bWJlcjogJzE3MzE2Mjc5MDQ0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIC8qKiDmn6XnnIvnu4PkuaDlhozlpKflm74gKi9cbiAgICBfcHJldmlldyAodXJsKSB7XG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7Y3VycmVudDogYCR7dXJsfS13b3JrYm9va0JpZ2AsIHVybHM6IFtgJHt1cmx9LXdvcmtib29rQmlnYF19KVxuICAgIH0sXG4gICAgLyoqIOe7g+S5oOWGjOWinuWKoOWPlua2iCAqL1xuICAgIGFzeW5jIF9lZGl0IChpbmRleCwgaWQsIGZyZWUpIHtcbiAgICAgIGlmIChmcmVlKSB7XG4gICAgICAgIHRoaXMud29ya2Jvb2tMaXN0W2luZGV4XS5zdGF0dXMgPSBhd2FpdCB0aGlzLl9zZXRXb3JrYm9vayhpZClcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqIOi/m+WFpeeroOiKgiAqL1xuICAgIF9pbnRvQ2hhcHRlciAoaXRlbSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL3dvcmtib29rL2NoYXB0ZXI/bmFtZT0ke2l0ZW0ubmFtZX0maWQ9JHtpdGVtLmlkfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvKiog56eR55uu5YiH5o2iICovXG4gICAgYXN5bmMgc3ViamVjdENoYW5nZSAoc3ViamVjdCkge1xuICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgdGhpcy5fc2V0VXNlckluZm9TdWJqZWN0KHN1YmplY3QpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCB1c2VyaW5mbylcbiAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3RcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnRleHRib29rSWRcbiAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudGV4dGJvb2tbdGhpcy5zdWJqZWN0XVxuICAgICAgdGhpcy52ZXJzaW9uID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC52ZXJzaW9uSWRcbiAgICAgIHRoaXMudmVyc2lvbkxpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS52ZXJzaW9uXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9vaywgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKiog54mI5pys5YiH5o2iICovXG4gICAgYXN5bmMgdmVyc2lvbkNoYW5nZSAodmVyc2lvbikge1xuICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgdGhpcy5fc2V0VXNlckluZm9WZXJzaW9uKHZlcnNpb24sIHRoaXMuc3ViamVjdClcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJpbmZvKVxuICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvblxuICAgICAgdGhpcy52ZXJzaW9uTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnZlcnNpb25cbiAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnRleHRib29rSWRcbiAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudGV4dGJvb2tbdGhpcy5zdWJqZWN0XVxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2ssIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgLyoqIOaVmeadkOWIh+aNoiAqL1xuICAgIGFzeW5jIHRleHRib29rQ2hhbmdlICh0ZXh0Ym9vaykge1xuICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgdGhpcy5fc2V0VXNlckluZm9UZXh0Ym9vayh0ZXh0Ym9vaywgdGhpcy5zdWJqZWN0KVxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJywgdXNlcmluZm8pXG4gICAgICB0aGlzLnRleHRib29rID0gdGV4dGJvb2tcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cblxuICAvKiog5pu05pS555So5oi35pWZ5p2Q5L+h5oGvICovXG4gIF9zZXRVc2VySW5mb1RleHRib29rIChpZCwgc3ViamVjdCkge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGV4dGJvb2s6IHtcbiAgICAgICAgICAgIFtzdWJqZWN0XTogaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog5pu05pS555So5oi356eR55uu5L+h5oGvICovXG4gIF9zZXRVc2VySW5mb1N1YmplY3QgKHN1YmplY3QpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3RcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDmm7TmlLnnlKjmiLfniYjmnKzkv6Hmga8gKi9cbiAgX3NldFVzZXJJbmZvVmVyc2lvbiAoaWQsIHZlcnNpb24pIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHZlcnNpb246IHtcbiAgICAgICAgICAgIFt2ZXJzaW9uXTogaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog57yW6L6R57uD5Lmg5YaMICovXG4gIF9zZXRXb3JrYm9vayAoaWQpIHtcbiAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS93b3JrYm9vaycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgd29ya2Jvb2tJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuc3RhdHVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiAg5re75Yqg5oiR55qE57uD5Lmg5YaMICovXG4gIF9nZXRBbGxXb3JrYm9vayAoaWQsIG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL3dvcmtib29rL2FsbCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHRleHRib29rSWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvblNob3cgKCkge1xuICAgIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUgPSAnJ1xuICAgIHRoaXMuc3ViamVjdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQuc3ViamVjdElkXG4gICAgdGhpcy5zdWJqZWN0TGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnN1YmplY3RcbiAgICB0aGlzLnRleHRib29rID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC50ZXh0Ym9va0lkXG4gICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS50ZXh0Ym9va1t0aGlzLnN1YmplY3RdXG4gICAgdGhpcy52ZXJzaW9uID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC52ZXJzaW9uSWRcbiAgICB0aGlzLnZlcnNpb25MaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudmVyc2lvblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2ssIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXG4gICAgfVxuICB9XG59XG4iXX0=