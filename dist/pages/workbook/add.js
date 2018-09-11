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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2hGaWVsZCIsInphbkZpZWxkIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJnbmJWZXJzaW9uU2VsZWN0IiwiZ25iU3ViamVjdFNlbGVjdCIsImRhdGEiLCJiYXNlX3NlYXJjaCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJsb2FkaW5nIiwidGV4dGJvb2siLCJ0ZXh0Qm9va0xpc3QiLCJzdWJqZWN0Iiwic3ViamVjdExpc3QiLCJ2ZXJzaW9uIiwidmVyc2lvbkxpc3QiLCJ3b3JrYm9va0xpc3QiLCJldmVudHMiLCJ6YW5GaWVsZENoYW5nZSIsImUiLCJkZXRhaWwiLCJfZ2V0QWxsV29ya2Jvb2siLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwibWV0aG9kcyIsIl90ZWxEaWFsb2ciLCJmcmVlIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwid2VweSIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsIl90ZWwiLCJfcHJldmlldyIsInVybCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiX2VkaXQiLCJpbmRleCIsImlkIiwiX3NldFdvcmtib29rIiwic3RhdHVzIiwiX2ludG9DaGFwdGVyIiwiaXRlbSIsIm5hdmlnYXRlVG8iLCJuYW1lIiwic3ViamVjdENoYW5nZSIsIl9zZXRVc2VySW5mb1N1YmplY3QiLCJ1c2VyaW5mbyIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U3RvcmFnZVN5bmMiLCJ0ZXh0Ym9va0lkIiwidmVyc2lvbklkIiwidmVyc2lvbkNoYW5nZSIsIl9zZXRVc2VySW5mb1ZlcnNpb24iLCJ0ZXh0Ym9va0NoYW5nZSIsIl9zZXRVc2VySW5mb1RleHRib29rIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJoaWRlTG9hZGluZyIsImZhaWwiLCJlcnIiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJ3b3JrYm9va0lkIiwiY29tcGxldGUiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdWJqZWN0SWQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsdUJBQXNCLGFBQXZCLEVBQXFDLGVBQWMsYUFBbkQsRUFBZixFQUFpRixxQkFBb0IsRUFBQyx3QkFBdUIsVUFBeEIsRUFBbUMsb0JBQW1CLGNBQXRELEVBQXJHLEVBQTJLLG9CQUFtQixFQUFDLHVCQUFzQixTQUF2QixFQUFpQyxvQkFBbUIsYUFBcEQsRUFBOUwsRUFBaVEsb0JBQW1CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELG9CQUFtQixhQUF0RSxFQUFvRixjQUFhLEVBQWpHLEVBQXBSLEUsUUFDVEMsTyxHQUFVLEVBQUMscUJBQW9CLEVBQUMsY0FBYSxnQkFBZCxFQUFyQixFQUFxRCxvQkFBbUIsRUFBQyxjQUFhLGVBQWQsRUFBeEUsRUFBdUcsb0JBQW1CLEVBQUMsY0FBYSxlQUFkLEVBQTFILEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLG1CQUFhQyxrQkFESDtBQUVWQyx5QkFBbUJBLDJCQUZUO0FBR1ZDLHdCQUFrQkEsMEJBSFI7QUFJVkMsd0JBQWtCQTtBQUpSLEssUUFPWkMsSSxHQUFPO0FBQ0xDLG1CQUFhO0FBQ1hDLGVBQU8sRUFESTtBQUVYQyxxQkFBYTtBQUZGLE9B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QixlQUFLc0IsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUM1QyxPQUExRDs7O0FBRUUscUJBQUtMLE9BQUwsR0FBZSxJQUFmOzt1QkFDMEIsS0FBS1ksZUFBTCxDQUFxQixLQUFLWCxRQUExQixFQUFvQyxLQUFLSixXQUFMLENBQWlCQyxLQUFyRCxDOzs7QUFBMUIscUJBQUtTLFk7O0FBQ0wscUJBQUtQLE9BQUwsR0FBZSxLQUFmOzs7Ozs7OztBQUVBLHFCQUFLQSxPQUFMLEdBQWUsS0FBZjtBQUNBYSx3QkFBUUMsR0FBUjs7O0FBRUYscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJVLEcsRUFBSztBQUN0QixhQUFPO0FBQ0xKLGVBQU8sb0JBREY7QUFFTGlELGtCQUFVLCtFQUZMO0FBR0xDLGNBQU07QUFIRCxPQUFQO0FBS0Q7Ozs7RUF2UnNDNUMsZUFBSzZDLEk7O2tCQUF6QnhGLFciLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHphbkZpZWxkIGZyb20gJ0AvY29tcG9uZW50cy96YW4tZmllbGQnXG5pbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcbmltcG9ydCBnbmJTdWJqZWN0U2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItc3ViamVjdFNlbGVjdCdcbmltcG9ydCBnbmJWZXJzaW9uU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItdmVyc2lvblNlbGVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2Jvb2tBZGQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e7g+S5oOWGjOeuoeeQhidcbiAgfVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzZWFyY2hGaWVsZFwiOntcInYtYmluZDpvcHRpb25zLnN5bmNcIjpcImJhc2Vfc2VhcmNoXCIsXCJjb21wb25lbnRJZFwiOlwic2VhcmNoRmllbGRcIn0sXCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtYmluZDp0ZXh0Ym9vay5zeW5jXCI6XCJ0ZXh0Ym9va1wiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwidGV4dEJvb2tMaXN0XCJ9LFwiZ25iVmVyc2lvblNlbGVjdFwiOntcInYtYmluZDp2ZXJzaW9uLnN5bmNcIjpcInZlcnNpb25cIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInZlcnNpb25MaXN0XCJ9LFwiZ25iU3ViamVjdFNlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3ViamVjdC5zeW5jXCI6XCJzdWJqZWN0XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJzdWJqZWN0TGlzdFwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidGV4dGJvb2tDaGFuZ2VcIn0sXCJnbmJWZXJzaW9uU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidmVyc2lvbkNoYW5nZVwifSxcImduYlN1YmplY3RTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJzdWJqZWN0Q2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgc2VhcmNoRmllbGQ6IHphbkZpZWxkLFxuICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdCxcbiAgICBnbmJWZXJzaW9uU2VsZWN0OiBnbmJWZXJzaW9uU2VsZWN0LFxuICAgIGduYlN1YmplY3RTZWxlY3Q6IGduYlN1YmplY3RTZWxlY3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgYmFzZV9zZWFyY2g6IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl57uD5Lmg5YaM5ZCN56ewJ1xuICAgIH0sXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICB0ZXh0Ym9vazogJycsIC8vIOW9k+WJjemAieS4reaVmeadkFxuICAgIHRleHRCb29rTGlzdDogW10sIC8vIOaVmeadkOWIl+ihqFxuICAgIHN1YmplY3Q6ICcnLCAvLyDlvZPliY3pgInkuK3np5Hnm65cbiAgICBzdWJqZWN0TGlzdDogW10sIC8vIOenkeebruWIl+ihqFxuICAgIHZlcnNpb246ICcnLCAvLyDlvZPliY3niYjmnKxcbiAgICB2ZXJzaW9uTGlzdDogW10sIC8vIOeJiOacrOWIl+ihqFxuICAgIHdvcmtib29rTGlzdDogW11cbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICBhc3luYyB6YW5GaWVsZENoYW5nZShlKSB7XG4gICAgICB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDlrprliLblkqjor6IgKi9cbiAgICBfdGVsRGlhbG9nIChmcmVlKSB7XG4gICAgICBpZiAoZnJlZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+WumuWItuS4k+Wxnue7g+S5oOWGjCcsXG4gICAgICAgICAgY29udGVudDogJ+eUteivne+8mjE3MzE2Mjc5MDQ0JyxcbiAgICAgICAgICBjb25maXJtVGV4dDogJ+aLqOaJkycsXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgd2VweS5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogJzE3MzE2Mjc5MDQ0J1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKiDmi6jmiZPnlLXor50gKi9cbiAgICBfdGVsICgpIHtcbiAgICAgIHdlcHkubWFrZVBob25lQ2FsbCh7XG4gICAgICAgIHBob25lTnVtYmVyOiAnMTczMTYyNzkwNDQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOafpeeci+e7g+S5oOWGjOWkp+WbviAqL1xuICAgIF9wcmV2aWV3ICh1cmwpIHtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHsgY3VycmVudDogYCR7dXJsfS13b3JrYm9va0JpZ2AsIHVybHM6IFtgJHt1cmx9LXdvcmtib29rQmlnYF0gfSlcbiAgICB9LFxuICAgIC8qKiDnu4PkuaDlhozlop7liqDlj5bmtoggKi9cbiAgICBhc3luYyBfZWRpdCAoaW5kZXgsIGlkLCBmcmVlKSB7XG4gICAgICBpZiAoZnJlZSkge1xuICAgICAgICB0aGlzLndvcmtib29rTGlzdFtpbmRleF0uc3RhdHVzID0gYXdhaXQgdGhpcy5fc2V0V29ya2Jvb2soaWQpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKiDov5vlhaXnq6DoioIgKi9cbiAgICBfaW50b0NoYXB0ZXIgKGl0ZW0pIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy93b3JrYm9vay9jaGFwdGVyP25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5pZH1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgLyoqIOenkeebruWIh+aNoiAqL1xuICAgIGFzeW5jIHN1YmplY3RDaGFuZ2UgKHN1YmplY3QpIHtcbiAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvU3ViamVjdChzdWJqZWN0KVxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJywgdXNlcmluZm8pXG4gICAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0XG4gICAgICB0aGlzLnRleHRib29rID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC50ZXh0Ym9va0lkXG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnRleHRib29rW3RoaXMuc3ViamVjdF1cbiAgICAgIHRoaXMudmVyc2lvbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudmVyc2lvbklkXG4gICAgICB0aGlzLnZlcnNpb25MaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudmVyc2lvblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2ssIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgLyoqIOeJiOacrOWIh+aNoiAqL1xuICAgIGFzeW5jIHZlcnNpb25DaGFuZ2UgKHZlcnNpb24pIHtcbiAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvVmVyc2lvbih2ZXJzaW9uLCB0aGlzLnN1YmplY3QpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCB1c2VyaW5mbylcbiAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb25cbiAgICAgIHRoaXMudmVyc2lvbkxpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS52ZXJzaW9uXG4gICAgICB0aGlzLnRleHRib29rID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC50ZXh0Ym9va0lkXG4gICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnRleHRib29rW3RoaXMuc3ViamVjdF1cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKiDmlZnmnZDliIfmjaIgKi9cbiAgICBhc3luYyB0ZXh0Ym9va0NoYW5nZSAodGV4dGJvb2spIHtcbiAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvVGV4dGJvb2sodGV4dGJvb2ssIHRoaXMuc3ViamVjdClcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJpbmZvKVxuICAgICAgdGhpcy50ZXh0Ym9vayA9IHRleHRib29rXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9vaywgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgLyoqIOabtOaUueeUqOaIt+aVmeadkOS/oeaBryAqL1xuICBfc2V0VXNlckluZm9UZXh0Ym9vayAoaWQsIHN1YmplY3QpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfor7fnqI3lgJknIH0pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGV4dGJvb2s6IHtcbiAgICAgICAgICAgIFtzdWJqZWN0XTogaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog5pu05pS555So5oi356eR55uu5L+h5oGvICovXG4gIF9zZXRVc2VySW5mb1N1YmplY3QgKHN1YmplY3QpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfor7fnqI3lgJknIH0pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc3ViamVjdDogc3ViamVjdFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOabtOaUueeUqOaIt+eJiOacrOS/oeaBryAqL1xuICBfc2V0VXNlckluZm9WZXJzaW9uIChpZCwgdmVyc2lvbikge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ivt+eojeWAmScgfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB2ZXJzaW9uOiB7XG4gICAgICAgICAgICBbdmVyc2lvbl06IGlkXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOe8lui+kee7g+S5oOWGjCAqL1xuICBfc2V0V29ya2Jvb2sgKGlkKSB7XG4gICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vd29ya2Jvb2snLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHdvcmtib29rSWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzLnN0YXR1cylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgICAgd2VweS5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiogIOa3u+WKoOaIkeeahOe7g+S5oOWGjCAqL1xuICBfZ2V0QWxsV29ya2Jvb2sgKGlkLCBuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS93b3JrYm9vay9hbGwnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25TaG93ICgpIHtcbiAgICB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlID0gJydcbiAgICB0aGlzLnN1YmplY3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnN1YmplY3RJZFxuICAgIHRoaXMuc3ViamVjdExpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5zdWJqZWN0XG4gICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudGV4dGJvb2tJZFxuICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudGV4dGJvb2tbdGhpcy5zdWJqZWN0XVxuICAgIHRoaXMudmVyc2lvbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudmVyc2lvbklkXG4gICAgdGhpcy52ZXJzaW9uTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnZlcnNpb25cbiAgICB0cnkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlIChyZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vaW1nLmd1aW5hYmVuLmNvbS9nbmJfbWluaXByb2dyYW1fc2hhcmUuanBnP2ltYWdlVmlldzIvMC9xLzc1fGltYWdlc2xpbScsXG4gICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xuICAgIH1cbiAgfVxufVxuIl19