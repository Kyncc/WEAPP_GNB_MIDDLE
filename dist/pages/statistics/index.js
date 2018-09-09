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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJnbmJTdWJqZWN0U2VsZWN0IiwiZGF0YSIsInRleHRib29rIiwidGV4dEJvb2tMaXN0Iiwic3ViamVjdCIsInN1YmplY3RMaXN0Iiwic3RhdGlzdGljcyIsIm1ldGhvZHMiLCJfaW50b0xpc3QiLCJpdGVtIiwicmVjb3JkIiwiZXJyb3IiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsIm5hbWUiLCJjaGFwdGVySWQiLCJ0ZXh0Ym9va0NoYW5nZSIsImlkIiwiX3NldFVzZXJJbmZvVGV4dGJvb2siLCJ1c2VyaW5mbyIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U3RvcmFnZVN5bmMiLCJjdXJyZW50IiwidGV4dGJvb2tJZCIsIl9nZXRTdGF0aXN0aWNzIiwiJGFwcGx5IiwiY29uc29sZSIsImxvZyIsInN1YmplY3RDaGFuZ2UiLCJfc2V0VXNlckluZm9TdWJqZWN0Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsImZhaWwiLCJlcnIiLCJzdWJqZWN0SWQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLHFCQUFvQixFQUFDLHdCQUF1QixVQUF4QixFQUFtQyxvQkFBbUIsY0FBdEQsRUFBckIsRUFBMkYsb0JBQW1CLEVBQUMsZ0JBQWUs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VUMsTUFBVixFQUFxQjtBQUN0Q3ZCLHVCQUFLd0IsT0FBTCxDQUFhO0FBQ1h0QixlQUFLLDhDQURNO0FBRVhiLGdCQUFNO0FBQ0p1Qix3QkFBWU47QUFEUixXQUZLO0FBS1hvQixpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQUVMLG9CQUFRSyxHQUFSO0FBQWMsV0FMbkI7QUFNWEUsY0FOVyxnQkFNTEMsR0FOSyxFQU1BO0FBQUVQLG1CQUFPTyxHQUFQO0FBQWE7QUFOZixTQUFiO0FBUUQsT0FUTSxDQUFQO0FBVUQ7Ozs7Ozs7OztBQUdDLHFCQUFLdEMsT0FBTCxHQUFlUSxlQUFLVSxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0MsT0FBdkMsQ0FBK0NvQixTQUE5RDtBQUNBLHFCQUFLdEMsV0FBTCxHQUFtQk8sZUFBS1UsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNsQixPQUExRDtBQUNBLHFCQUFLRixRQUFMLEdBQWdCVSxlQUFLVSxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q0MsT0FBdkMsQ0FBK0NDLFVBQS9EO0FBQ0EscUJBQUtyQixZQUFMLEdBQW9CUyxlQUFLVSxjQUFMLENBQW9CLGlCQUFwQixFQUF1Q3BCLFFBQXZDLENBQWdELEtBQUtFLE9BQXJELENBQXBCOzt1QkFDd0IsS0FBS3FCLGNBQUwsQ0FBb0IsS0FBS3ZCLFFBQXpCLEM7OztBQUF4QixxQkFBS0ksVTs7QUFDTCxxQkFBS29CLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHaUJhLEcsRUFBSztBQUN0QixhQUFPO0FBQ0xQLGVBQU8sb0JBREY7QUFFTFksa0JBQVUsK0VBRkw7QUFHTEMsY0FBTTtBQUhELE9BQVA7QUFLRDs7OztFQTFJcUNqQyxlQUFLa0MsSTs7a0JBQXhCdEQsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgZ25iVGV4dGJvb2tTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi10ZXh0Ym9va1NlbGVjdCdcbiAgaW1wb3J0IGduYlN1YmplY3RTZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL2duYi1zdWJqZWN0U2VsZWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjmnKwnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRib29rXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJ0ZXh0Qm9va0xpc3RcIn0sXCJnbmJTdWJqZWN0U2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdWJqZWN0LnN5bmNcIjpcInN1YmplY3RcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInN1YmplY3RMaXN0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJ0ZXh0Ym9va0NoYW5nZVwifSxcImduYlN1YmplY3RTZWxlY3RcIjp7XCJ2LW9uOmV2ZW50XCI6XCJzdWJqZWN0Q2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBnbmJUZXh0Ym9va1NlbGVjdDogZ25iVGV4dGJvb2tTZWxlY3QsXG4gICAgICBnbmJTdWJqZWN0U2VsZWN0OiBnbmJTdWJqZWN0U2VsZWN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRleHRib29rOiAnJywgLy8g5b2T5YmN6YCJ5Lit5pWZ5p2QXG4gICAgICB0ZXh0Qm9va0xpc3Q6IFtdLCAvLyDmlZnmnZDliJfooahcbiAgICAgIHN1YmplY3Q6ICcnLCAvLyDlvZPliY3pgInkuK3np5Hnm65cbiAgICAgIHN1YmplY3RMaXN0OiBbXSwgLy8g56eR55uu5YiX6KGoXG4gICAgICBzdGF0aXN0aWNzOiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50b0xpc3QgKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0ucmVjb3JkID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5lcnJvciA9PT0gMCkge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9jb3JyZWN0P25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5jaGFwdGVySWR9YFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0aXN0aWNzL2Vycm9yP25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5jaGFwdGVySWR9YFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKiog5pWZ5p2Q5YiH5o2iICovXG4gICAgICBhc3luYyB0ZXh0Ym9va0NoYW5nZSAoaWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mb1RleHRib29rKGlkLCB0aGlzLnN1YmplY3QpXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJywgdXNlcmluZm8pXG4gICAgICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudGV4dGJvb2tJZFxuICAgICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpc3RpY3ModGhpcy50ZXh0Ym9vaylcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKiog56eR55uu5YiH5o2iICovXG4gICAgICBhc3luYyBzdWJqZWN0Q2hhbmdlIChzdWJqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IHVzZXJpbmZvID0gYXdhaXQgdGhpcy5fc2V0VXNlckluZm9TdWJqZWN0KHN1YmplY3QpXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJywgdXNlcmluZm8pXG4gICAgICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdFxuICAgICAgICAgIHRoaXMuc3ViamVjdExpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5zdWJqZWN0XG4gICAgICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudGV4dGJvb2tJZFxuICAgICAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykudGV4dGJvb2tbdGhpcy5zdWJqZWN0XVxuICAgICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpc3RpY3ModGhpcy50ZXh0Ym9vaylcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5pu05pS555So5oi35pWZ5p2Q5L+h5oGvICovXG4gICAgX3NldFVzZXJJbmZvVGV4dGJvb2sgKGlkLCBzdWJqZWN0KSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfor7fnqI3lgJknIH0pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mbycsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGV4dGJvb2s6IHtcbiAgICAgICAgICAgICAgW3N1YmplY3RdOiBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiog5pu05pS555So5oi356eR55uu5L+h5oGvICovXG4gICAgX3NldFVzZXJJbmZvU3ViamVjdCAoc3ViamVjdCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+356iN5YCZJyB9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgX2dldFN0YXRpc3RpY3MgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7IHJlc29sdmUocmVzKSB9LFxuICAgICAgICAgIGZhaWwgKGVycikgeyByZWplY3QoZXJyKSB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdygpIHtcbiAgICAgIHRoaXMuc3ViamVjdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQuc3ViamVjdElkXG4gICAgICB0aGlzLnN1YmplY3RMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuc3ViamVjdFxuICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudGV4dGJvb2tJZFxuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS50ZXh0Ym9va1t0aGlzLnN1YmplY3RdXG4gICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==