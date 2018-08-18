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
      navigationBarTitleText: '错题本'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "v-bind:textbook.sync": "textbook", "v-bind:list.sync": "textBookList" }, "gnbSubjectSelect": { "xmlns:v-bind": "", "v-bind:subject.sync": "subject", "v-bind:list.sync": "subjectList", "xmlns:v-on": "" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" }, "gnbSubjectSelect": { "v-on:event": "subjectChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default,
      gnbSubjectSelect: _gnbSubjectSelect2.default
    }, _this.data = {
      textbook: '', // 当前选中教材
      textBookList: [], // 教材列表
      subject: '', // 当前选中科目
      subjectList: [], // 科目列表
      statistics: []
    }, _this.methods = {
      _intoList: function _intoList(item) {
        if (item.record === 0) {
          return '';
        } else if (item.error === 0) {
          _wepy2.default.navigateTo({
            url: '/pages/statistics/correct?name=' + item.name + '&id=' + item.chapterId
          });
        } else {
          _wepy2.default.navigateTo({
            url: '/pages/statistics/error?name=' + item.name + '&id=' + item.chapterId
          });
        }
      },

      /** 教材切换 */
      textbookChange: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this._setUserInfoTextbook(id, this.subject);

                case 3:
                  userinfo = _context.sent;

                  _wepy2.default.setStorageSync('gnb_middle_user', userinfo);
                  this.textbook = _wepy2.default.getStorageSync('gnb_middle_user').current.textbookId;
                  _context.next = 8;
                  return this._getStatistics(this.textbook);

                case 8:
                  this.statistics = _context.sent;

                  this.$apply();
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 12]]);
        }));

        function textbookChange(_x) {
          return _ref2.apply(this, arguments);
        }

        return textbookChange;
      }(),

      /** 科目切换 */
      subjectChange: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(subject) {
          var userinfo;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return this._setUserInfoSubject(subject);

                case 3:
                  userinfo = _context2.sent;

                  _wepy2.default.setStorageSync('gnb_middle_user', userinfo);
                  this.subject = subject;
                  this.subjectList = _wepy2.default.getStorageSync('gnb_middle_user').subject;
                  this.textbook = _wepy2.default.getStorageSync('gnb_middle_user').current.textbookId;
                  this.textBookList = _wepy2.default.getStorageSync('gnb_middle_user').textbook[this.subject];
                  _context2.next = 11;
                  return this._getStatistics(this.textbook);

                case 11:
                  this.statistics = _context2.sent;

                  this.$apply();
                  _context2.next = 18;
                  break;

                case 15:
                  _context2.prev = 15;
                  _context2.t0 = _context2['catch'](0);

                  console.log(_context2.t0);

                case 18:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 15]]);
        }));

        function subjectChange(_x2) {
          return _ref3.apply(this, arguments);
        }

        return subjectChange;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
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
  }, {
    key: '_getStatistics',
    value: function _getStatistics(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://api.guinaben.com/textbook/statistics',
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
  }, {
    key: 'onShow',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.subject = _wepy2.default.getStorageSync('gnb_middle_user').current.subjectId;
                this.subjectList = _wepy2.default.getStorageSync('gnb_middle_user').subject;
                this.textbook = _wepy2.default.getStorageSync('gnb_middle_user').current.textbookId;
                this.textBookList = _wepy2.default.getStorageSync('gnb_middle_user').textbook[this.subject];
                _context3.next = 6;
                return this._getStatistics(this.textbook);

              case 6:
                this.statistics = _context3.sent;

                this.$apply();

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
        title: '各位家长：这样记错题，速度快、好处多',
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJnbmJTdWJqZWN0U2VsZWN0IiwiZGF0YSIsInRleHRib29rIiwidGV4dEJvb2tMaXN0Iiwic3ViamVjdCIsInN1YmplY3RMaXN0Iiwic3RhdGlzdGljcyIsIm1ldGhvZHMiLCJfaW50b0xpc3QiLCJpdGVtIiwicmVjb3JkIiwiZXJyb3IiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmFtZSIsImNoYXB0ZXJJZCIsInRleHRib29rQ2hhbmdlIiwiaWQiLCJfc2V0VXNlckluZm9UZXh0Ym9vayIsInVzZXJpbmZvIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTdG9yYWdlU3luYyIsImN1cnJlbnQiLCJ0ZXh0Ym9va0lkIiwiX2dldFN0YXRpc3RpY3MiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwic3ViamVjdENoYW5nZSIsIl9zZXRVc2VySW5mb1N1YmplY3QiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwiZmFpbCIsImVyciIsInN1YmplY3RJZCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsd0JBQXVCLFVBQXhCLEVBQW1DLG9CQUFtQixjQUF0RCxFQUFyQixFQUEyRixvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixF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LDhDQURNO0FBRVhaLGdCQUFNO0FBQ0pzQix3QkFBWU47QUFEUixXQUZLO0FBS1hvQixpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQUVMLG9CQUFRSyxHQUFSO0FBQWMsV0FMbkI7QUFNWEUsY0FOVyxnQkFNTEMsR0FOSyxFQU1BO0FBQUVQLG1CQUFPTyxHQUFQO0FBQWE7QUFOZixTQUFiO0FBUUQsT0FUTSxDQUFQO0FBVUQ7Ozs7Ozs7OztBQUdDLHFCQUFLckMsT0FBTCxHQUFlLGVBQUtpQixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0MsT0FBdkMsQ0FBK0NvQixTQUE5RDtBQUNBLHFCQUFLckMsV0FBTCxHQUFtQixlQUFLZ0IsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNqQixPQUExRDtBQUNBLHFCQUFLRixRQUFMLEdBQWdCLGVBQUttQixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0MsT0FBdkMsQ0FBK0NDLFVBQS9EO0FBQ0EscUJBQUtwQixZQUFMLEdBQW9CLGVBQUtrQixjQUFMLENBQW9CLGlCQUFwQixFQUF1Q25CLFFBQXZDLENBQWdELEtBQUtFLE9BQXJELENBQXBCOzt1QkFDd0IsS0FBS29CLGNBQUwsQ0FBb0IsS0FBS3RCLFFBQXpCLEM7OztBQUF4QixxQkFBS0ksVTs7QUFDTCxxQkFBS21CLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJhLEcsRUFBSztBQUN0QixhQUFPO0FBQ0xQLGVBQU8sb0JBREY7QUFFTFksa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQTFJcUMsZUFBS0MsSTs7a0JBQXhCckQsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcbiAgaW1wb3J0IGduYlN1YmplY3RTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi1zdWJqZWN0U2VsZWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjmnKwnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRib29rXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn0sXCJnbmJTdWJqZWN0U2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdWJqZWN0LnN5bmNcIjpcInN1YmplY3RcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInN1YmplY3RMaXN0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifSxcImduYlN1YmplY3RTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJzdWJqZWN0Q2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3QsXG4gICAgICBnbmJTdWJqZWN0U2VsZWN0OiBnbmJTdWJqZWN0U2VsZWN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRleHRib29rOiAnJywgICAgIC8vIOW9k+WJjemAieS4reaVmeadkFxuICAgICAgdGV4dEJvb2tMaXN0OiBbXSwgLy8g5pWZ5p2Q5YiX6KGoXG4gICAgICBzdWJqZWN0OiAnJywgICAgICAvLyDlvZPliY3pgInkuK3np5Hnm65cbiAgICAgIHN1YmplY3RMaXN0OiBbXSwgIC8vIOenkeebruWIl+ihqFxuICAgICAgc3RhdGlzdGljczogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgX2ludG9MaXN0IChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLnJlY29yZCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZXJyb3IgPT09IDApIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdD9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uY2hhcHRlcklkfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9lcnJvcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uY2hhcHRlcklkfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqIOaVmeadkOWIh+aNoiAqL1xuICAgICAgYXN5bmMgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgdGhpcy5fc2V0VXNlckluZm9UZXh0Ym9vayhpZCwgdGhpcy5zdWJqZWN0KVxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJpbmZvKVxuICAgICAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnRleHRib29rSWRcbiAgICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqIOenkeebruWIh+aNoiAqL1xuICAgICAgYXN5bmMgc3ViamVjdENoYW5nZSAoc3ViamVjdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvU3ViamVjdChzdWJqZWN0KVxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJpbmZvKVxuICAgICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3RcbiAgICAgICAgICB0aGlzLnN1YmplY3RMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuc3ViamVjdFxuICAgICAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnRleHRib29rSWRcbiAgICAgICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnRleHRib29rW3RoaXMuc3ViamVjdF1cbiAgICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOabtOaUueeUqOaIt+aVmeadkOS/oeaBryAqL1xuICAgIF9zZXRVc2VySW5mb1RleHRib29rIChpZCwgc3ViamVjdCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9vazoge1xuICAgICAgICAgICAgICBbc3ViamVjdF06IGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDmm7TmlLnnlKjmiLfnp5Hnm67kv6Hmga8gKi9cbiAgICBfc2V0VXNlckluZm9TdWJqZWN0IChzdWJqZWN0KSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgX2dldFN0YXRpc3RpY3MgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7IHJlc29sdmUocmVzKSB9LFxuICAgICAgICAgIGZhaWwgKGVycikgeyByZWplY3QoZXJyKSB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdygpIHtcbiAgICAgIHRoaXMuc3ViamVjdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQuc3ViamVjdElkXG4gICAgICB0aGlzLnN1YmplY3RMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuc3ViamVjdFxuICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudGV4dGJvb2tJZFxuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS50ZXh0Ym9va1t0aGlzLnN1YmplY3RdXG4gICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==