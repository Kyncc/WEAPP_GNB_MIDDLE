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
                  _context.next = 3;
                  return this._getAllWorkbook(this.textbook, this.base_search.value);

                case 3:
                  this.workbookList = _context.sent;

                  this.$apply();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function zanFieldChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return zanFieldChange;
      }()
    }, _this.methods = {
      /** 查看练习册大图 */
      _preview: function _preview(url) {
        _wepy2.default.previewImage({ current: url + '-workbookBig', urls: [url + '-workbookBig'] });
      },

      /** 练习册增加取消 */
      _edit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index, id) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._setWorkbook(id);

                case 2:
                  this.workbookList[index].status = _context2.sent;

                  this.$apply();

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _edit(_x2, _x3) {
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
                  _context3.next = 11;
                  return this._getAllWorkbook(this.textbook, this.base_search.value);

                case 11:
                  this.workbookList = _context3.sent;

                  this.$apply();

                case 13:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function subjectChange(_x4) {
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
                  _context4.next = 10;
                  return this._getAllWorkbook(this.textbook, this.base_search.value);

                case 10:
                  this.workbookList = _context4.sent;

                  this.$apply();

                case 12:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function versionChange(_x5) {
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
                  _context5.next = 7;
                  return this._getAllWorkbook(this.textbook, this.base_search.value);

                case 7:
                  this.workbookList = _context5.sent;

                  this.$apply();

                case 9:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function textbookChange(_x6) {
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
                this.$apply();
                _context6.prev = 8;
                _context6.next = 11;
                return this._getAllWorkbook(this.textbook, this.base_search.value);

              case 11:
                this.workbookList = _context6.sent;

                this.$apply();
                _context6.next = 18;
                break;

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6['catch'](8);

                console.log(_context6.t0);

              case 18:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[8, 15]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJXb3JrYm9va0FkZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2hGaWVsZCIsImduYlRleHRib29rU2VsZWN0IiwiZ25iVmVyc2lvblNlbGVjdCIsImduYlN1YmplY3RTZWxlY3QiLCJkYXRhIiwiYmFzZV9zZWFyY2giLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidGV4dGJvb2siLCJ0ZXh0Qm9va0xpc3QiLCJzdWJqZWN0Iiwic3ViamVjdExpc3QiLCJ2ZXJzaW9uIiwidmVyc2lvbkxpc3QiLCJ3b3JrYm9va0xpc3QiLCJldmVudHMiLCJ6YW5GaWVsZENoYW5nZSIsImUiLCJkZXRhaWwiLCJfZ2V0QWxsV29ya2Jvb2siLCIkYXBwbHkiLCJtZXRob2RzIiwiX3ByZXZpZXciLCJ1cmwiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsIl9lZGl0IiwiaW5kZXgiLCJpZCIsIl9zZXRXb3JrYm9vayIsInN0YXR1cyIsIl9pbnRvQ2hhcHRlciIsIml0ZW0iLCJuYXZpZ2F0ZVRvIiwibmFtZSIsInN1YmplY3RDaGFuZ2UiLCJfc2V0VXNlckluZm9TdWJqZWN0IiwidXNlcmluZm8iLCJzZXRTdG9yYWdlU3luYyIsImdldFN0b3JhZ2VTeW5jIiwidGV4dGJvb2tJZCIsInZlcnNpb25JZCIsInZlcnNpb25DaGFuZ2UiLCJfc2V0VXNlckluZm9WZXJzaW9uIiwidGV4dGJvb2tDaGFuZ2UiLCJfc2V0VXNlckluZm9UZXh0Ym9vayIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiaGlkZUxvYWRpbmciLCJmYWlsIiwiZXJyIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwid29ya2Jvb2tJZCIsImNvbXBsZXRlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3ViamVjdElkIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyx1QkFBc0IsYUFBdkIsRUFBcUMsZUFBYyxhQUFuRCxFQUFmLEVBQWlGLHFCQUFvQixFQUFDLHdCQUF1QixVQUF4QixFQUFtQyxvQkFBbUIsY0FBdEQsRUFBckcsRUFBMkssb0JBQW1CLEVBQUMsdUJBQXNCLFNBQXZCLEVBQWlDLG9CQUFtQixhQUFwRCxFQUE5TCxFQUFpUSxvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsb0JBQW1CLGFBQXRFLEVBQW9GLGNBQWEsRUFBakcsRUFBcFIsRSxRQUNUQyxPLEdBQVUsRUFBQyxxQkFBb0IsRUFBQyxjQUFhLGdCQUFkLEVBQXJCLEVBQXFELG9CQUFtQixFQUFDLGNBQWEsZUFBZCxFQUF4RSxFQUF1RyxvQkFBbUIsRUFBQyxjQUFhLGVBQWQsRUFBMUgsRSxRQUNUQyxVLEdBQWE7QUFDVkMscUNBRFU7QUFFVkMsb0RBRlU7QUFHVkMsa0RBSFU7QUFJVkM7QUFKVSxLLFFBT1pDLEksR0FBTztBQUNMQyxtQkFBYTtBQUNYQyxlQUFPLEVBREk7QUFFWEMscUJBQWE7QUFGRixPQURSO0FBS0xDLGdCQUFVLEVBTEwsRUFLYTtBQUNsQkMsb0JBQWMsRUFOVCxFQU1hO0FBQ2xCQyxlQUFTLEVBUEosRUFPYTtBQUNsQkMsbUJBQWEsRUFSUixFQVFhO0FBQ2xCQyxlQUFTLEVBVEosRUFTYTtBQUNsQkMsbUJBQWEsRUFWUixFQVVhO0FBQ2xCQyxvQkFBYztBQVhULEssUUFjUEMsTSxH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T08sR0FBUDtBQUNEO0FBWFUsU0FBYjtBQWFELE9BZE0sQ0FBUDtBQWVEOzs7Ozs7Ozs7QUFHQyxxQkFBS3JELFdBQUwsQ0FBaUJDLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0EscUJBQUtJLE9BQUwsR0FBZSxlQUFLOEIsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNmLE9BQXZDLENBQStDc0MsU0FBOUQ7QUFDQSxxQkFBS3BELFdBQUwsR0FBbUIsZUFBSzZCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDOUIsT0FBMUQ7QUFDQSxxQkFBS0YsUUFBTCxHQUFnQixlQUFLZ0MsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNmLE9BQXZDLENBQStDZ0IsVUFBL0Q7QUFDQSxxQkFBS2hDLFlBQUwsR0FBb0IsZUFBSytCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDaEMsUUFBdkMsQ0FBZ0QsS0FBS0UsT0FBckQsQ0FBcEI7QUFDQSxxQkFBS0UsT0FBTCxHQUFlLGVBQUs0QixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q2YsT0FBdkMsQ0FBK0NpQixTQUE5RDtBQUNBLHFCQUFLN0IsV0FBTCxHQUFtQixlQUFLMkIsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUM1QixPQUExRDtBQUNBLHFCQUFLUSxNQUFMOzs7dUJBRTRCLEtBQUtELGVBQUwsQ0FBcUIsS0FBS1gsUUFBMUIsRUFBb0MsS0FBS0gsV0FBTCxDQUFpQkMsS0FBckQsQzs7O0FBQTFCLHFCQUFLUSxZOztBQUNMLHFCQUFLTSxNQUFMOzs7Ozs7OztBQUVBNEMsd0JBQVFDLEdBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJZVYsRyxFQUFLO0FBQ3RCLGFBQU87QUFDTFAsZUFBTyxvQkFERjtBQUVMa0Isa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQTdOc0MsZUFBS0MsSTs7a0JBQXpCM0UsVyIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgemFuRmllbGQgZnJvbSAnQC9jb21wb25lbnRzL3phbi1maWVsZCdcbmltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuaW1wb3J0IGduYlN1YmplY3RTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi1zdWJqZWN0U2VsZWN0J1xuaW1wb3J0IGduYlZlcnNpb25TZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi12ZXJzaW9uU2VsZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrYm9va0FkZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57uD5Lmg5YaM566h55CGJ1xuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNlYXJjaEZpZWxkXCI6e1widi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9zZWFyY2hcIixcImNvbXBvbmVudElkXCI6XCJzZWFyY2hGaWVsZFwifSxcImduYlRleHRib29rU2VsZWN0XCI6e1widi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRib29rXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn0sXCJnbmJWZXJzaW9uU2VsZWN0XCI6e1widi1iaW5kOnZlcnNpb24uc3luY1wiOlwidmVyc2lvblwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwidmVyc2lvbkxpc3RcIn0sXCJnbmJTdWJqZWN0U2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdWJqZWN0LnN5bmNcIjpcInN1YmplY3RcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInN1YmplY3RMaXN0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifSxcImduYlZlcnNpb25TZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ2ZXJzaW9uQ2hhbmdlXCJ9LFwiZ25iU3ViamVjdFNlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInN1YmplY3RDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBzZWFyY2hGaWVsZDogemFuRmllbGQsXG4gICAgZ25iVGV4dGJvb2tTZWxlY3Q6IGduYlRleHRib29rU2VsZWN0LFxuICAgIGduYlZlcnNpb25TZWxlY3Q6IGduYlZlcnNpb25TZWxlY3QsXG4gICAgZ25iU3ViamVjdFNlbGVjdDogZ25iU3ViamVjdFNlbGVjdFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBiYXNlX3NlYXJjaDoge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgcGxhY2Vob2xkZXI6ICfor7fovpPlhaXnu4PkuaDlhozlkI3np7AnXG4gICAgfSxcbiAgICB0ZXh0Ym9vazogJycsICAgICAvLyDlvZPliY3pgInkuK3mlZnmnZBcbiAgICB0ZXh0Qm9va0xpc3Q6IFtdLCAvLyDmlZnmnZDliJfooahcbiAgICBzdWJqZWN0OiAnJywgICAgICAvLyDlvZPliY3pgInkuK3np5Hnm65cbiAgICBzdWJqZWN0TGlzdDogW10sICAvLyDnp5Hnm67liJfooahcbiAgICB2ZXJzaW9uOiAnJywgICAgICAvLyDlvZPliY3niYjmnKxcbiAgICB2ZXJzaW9uTGlzdDogW10sICAvLyDniYjmnKzliJfooahcbiAgICB3b3JrYm9va0xpc3Q6IFtdXG4gIH1cblxuICBldmVudHMgPSB7XG4gICAgYXN5bmMgemFuRmllbGRDaGFuZ2UoZSkge1xuICAgICAgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2ssIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvKiog5p+l55yL57uD5Lmg5YaM5aSn5Zu+ICovXG4gICAgX3ByZXZpZXcgKHVybCkge1xuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IGAke3VybH0td29ya2Jvb2tCaWdgLCB1cmxzOiBbYCR7dXJsfS13b3JrYm9va0JpZ2BdfSlcbiAgICB9LFxuICAgIC8qKiDnu4PkuaDlhozlop7liqDlj5bmtoggKi9cbiAgICBhc3luYyBfZWRpdCAoaW5kZXgsIGlkKSB7XG4gICAgICB0aGlzLndvcmtib29rTGlzdFtpbmRleF0uc3RhdHVzID0gYXdhaXQgdGhpcy5fc2V0V29ya2Jvb2soaWQpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKiog6L+b5YWl56ug6IqCICovXG4gICAgX2ludG9DaGFwdGVyIChpdGVtKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvd29ya2Jvb2svY2hhcHRlcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uaWR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIC8qKiDnp5Hnm67liIfmjaIgKi9cbiAgICBhc3luYyBzdWJqZWN0Q2hhbmdlIChzdWJqZWN0KSB7XG4gICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mb1N1YmplY3Qoc3ViamVjdClcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJpbmZvKVxuICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdFxuICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudGV4dGJvb2tJZFxuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS50ZXh0Ym9va1t0aGlzLnN1YmplY3RdXG4gICAgICB0aGlzLnZlcnNpb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnZlcnNpb25JZFxuICAgICAgdGhpcy52ZXJzaW9uTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnZlcnNpb25cbiAgICAgIHRoaXMud29ya2Jvb2tMaXN0ID0gYXdhaXQgdGhpcy5fZ2V0QWxsV29ya2Jvb2sodGhpcy50ZXh0Ym9vaywgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIC8qKiDniYjmnKzliIfmjaIgKi9cbiAgICBhc3luYyB2ZXJzaW9uQ2hhbmdlICh2ZXJzaW9uKSB7XG4gICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mb1ZlcnNpb24odmVyc2lvbiwgdGhpcy5zdWJqZWN0KVxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJywgdXNlcmluZm8pXG4gICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uXG4gICAgICB0aGlzLnZlcnNpb25MaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudmVyc2lvblxuICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudGV4dGJvb2tJZFxuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS50ZXh0Ym9va1t0aGlzLnN1YmplY3RdXG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2ssIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICAvKiog5pWZ5p2Q5YiH5o2iICovXG4gICAgYXN5bmMgdGV4dGJvb2tDaGFuZ2UgKHRleHRib29rKSB7XG4gICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mb1RleHRib29rKHRleHRib29rLCB0aGlzLnN1YmplY3QpXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInLCB1c2VyaW5mbylcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB0ZXh0Ym9va1xuICAgICAgdGhpcy53b3JrYm9va0xpc3QgPSBhd2FpdCB0aGlzLl9nZXRBbGxXb3JrYm9vayh0aGlzLnRleHRib29rLCB0aGlzLmJhc2Vfc2VhcmNoLnZhbHVlKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuXG4gIC8qKiDmm7TmlLnnlKjmiLfmlZnmnZDkv6Hmga8gKi9cbiAgX3NldFVzZXJJbmZvVGV4dGJvb2sgKGlkLCBzdWJqZWN0KSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZXh0Ym9vazoge1xuICAgICAgICAgICAgW3N1YmplY3RdOiBpZFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDmm7TmlLnnlKjmiLfnp5Hnm67kv6Hmga8gKi9cbiAgX3NldFVzZXJJbmZvU3ViamVjdCAoc3ViamVjdCkge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc3ViamVjdDogc3ViamVjdFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqIOabtOaUueeUqOaIt+eJiOacrOS/oeaBryAqL1xuICBfc2V0VXNlckluZm9WZXJzaW9uIChpZCwgdmVyc2lvbikge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdmVyc2lvbjoge1xuICAgICAgICAgICAgW3ZlcnNpb25dOiBpZFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKiDnvJbovpHnu4PkuaDlhowgKi9cbiAgX3NldFdvcmtib29rIChpZCkge1xuICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL3dvcmtib29rJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB3b3JrYm9va0lkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5zdGF0dXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqICDmt7vliqDmiJHnmoTnu4PkuaDlhowgKi9cbiAgX2dldEFsbFdvcmtib29rIChpZCwgbmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vd29ya2Jvb2svYWxsJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uU2hvdyAoKSB7XG4gICAgdGhpcy5iYXNlX3NlYXJjaC52YWx1ZSA9ICcnXG4gICAgdGhpcy5zdWJqZWN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuY3VycmVudC5zdWJqZWN0SWRcbiAgICB0aGlzLnN1YmplY3RMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuc3ViamVjdFxuICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnRleHRib29rSWRcbiAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnRleHRib29rW3RoaXMuc3ViamVjdF1cbiAgICB0aGlzLnZlcnNpb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnZlcnNpb25JZFxuICAgIHRoaXMudmVyc2lvbkxpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS52ZXJzaW9uXG4gICAgdGhpcy4kYXBwbHkoKVxuICAgIHRyeSB7XG4gICAgICB0aGlzLndvcmtib29rTGlzdCA9IGF3YWl0IHRoaXMuX2dldEFsbFdvcmtib29rKHRoaXMudGV4dGJvb2ssIHRoaXMuYmFzZV9zZWFyY2gudmFsdWUpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8mui/meagt+iusOmUmemimO+8jOmAn+W6puW/q+OAgeWlveWkhOWkmicsXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvd29ya2Jvb2svaW5kZXgnXG4gICAgfVxuICB9XG59XG4iXX0=