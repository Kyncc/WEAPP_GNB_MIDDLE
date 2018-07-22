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
                  _context.next = 7;
                  return this._getStatistics();

                case 7:
                  this.statistics = _context.sent;

                  this.$apply();
                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 11]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJnbmJTdWJqZWN0U2VsZWN0IiwiZGF0YSIsInRleHRib29rIiwidGV4dEJvb2tMaXN0Iiwic3ViamVjdCIsInN1YmplY3RMaXN0Iiwic3RhdGlzdGljcyIsIm1ldGhvZHMiLCJfaW50b0xpc3QiLCJpdGVtIiwicmVjb3JkIiwiZXJyb3IiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmFtZSIsImNoYXB0ZXJJZCIsInRleHRib29rQ2hhbmdlIiwiaWQiLCJfc2V0VXNlckluZm9UZXh0Ym9vayIsInVzZXJpbmZvIiwic2V0U3RvcmFnZVN5bmMiLCJfZ2V0U3RhdGlzdGljcyIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJzdWJqZWN0Q2hhbmdlIiwiX3NldFVzZXJJbmZvU3ViamVjdCIsImdldFN0b3JhZ2VTeW5jIiwiY3VycmVudCIsInRleHRib29rSWQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwiZmFpbCIsImVyciIsInN1YmplY3RJZCIsImltYWdlVXJsIiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsd0JBQXVCLFVBQXhCLEVBQW1DLG9CQUFtQixjQUF0RCxFQUFyQixFQUEyRixvQkFBbUIsRUFBQyxnQkFBZSxFQUFoQixF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YyxXQUxuQjtBQU1YRSxjQU5XLGdCQU1MQyxHQU5LLEVBTUE7QUFBRVAsbUJBQU9PLEdBQVA7QUFBYTtBQU5mLFNBQWI7QUFRRCxPQVRNLENBQVA7QUFVRDs7Ozs7Ozs7O0FBR0MscUJBQUtyQyxPQUFMLEdBQWUsZUFBS3VCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDQyxPQUF2QyxDQUErQ2MsU0FBOUQ7QUFDQSxxQkFBS3JDLFdBQUwsR0FBbUIsZUFBS3NCLGNBQUwsQ0FBb0IsaUJBQXBCLEVBQXVDdkIsT0FBMUQ7QUFDQSxxQkFBS0YsUUFBTCxHQUFnQixlQUFLeUIsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUNDLE9BQXZDLENBQStDQyxVQUEvRDtBQUNBLHFCQUFLMUIsWUFBTCxHQUFvQixlQUFLd0IsY0FBTCxDQUFvQixpQkFBcEIsRUFBdUN6QixRQUF2QyxDQUFnRCxLQUFLRSxPQUFyRCxDQUFwQjs7dUJBQ3dCLEtBQUtpQixjQUFMLENBQW9CLEtBQUtuQixRQUF6QixDOzs7QUFBeEIscUJBQUtJLFU7O0FBQ0wscUJBQUtnQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2lCZ0IsRyxFQUFLO0FBQ3RCLGFBQU87QUFDTFAsZUFBTyxvQkFERjtBQUVMWSxrQkFBVSwrRUFGTDtBQUdMQyxjQUFNO0FBSEQsT0FBUDtBQUtEOzs7O0VBeklxQyxlQUFLQyxJOztrQkFBeEJyRCxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuICBpbXBvcnQgZ25iU3ViamVjdFNlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXN1YmplY3RTZWxlY3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOacrCdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZ25iVGV4dGJvb2tTZWxlY3RcIjp7XCJ2LWJpbmQ6dGV4dGJvb2suc3luY1wiOlwidGV4dGJvb2tcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInRleHRCb29rTGlzdFwifSxcImduYlN1YmplY3RTZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnN1YmplY3Quc3luY1wiOlwic3ViamVjdFwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwic3ViamVjdExpc3RcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9LFwiZ25iU3ViamVjdFNlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInN1YmplY3RDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdCxcbiAgICAgIGduYlN1YmplY3RTZWxlY3Q6IGduYlN1YmplY3RTZWxlY3RcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdGV4dGJvb2s6ICcnLCAgICAgLy8g5b2T5YmN6YCJ5Lit5pWZ5p2QXG4gICAgICB0ZXh0Qm9va0xpc3Q6IFtdLCAvLyDmlZnmnZDliJfooahcbiAgICAgIHN1YmplY3Q6ICcnLCAgICAgIC8vIOW9k+WJjemAieS4reenkeebrlxuICAgICAgc3ViamVjdExpc3Q6IFtdLCAgLy8g56eR55uu5YiX6KGoXG4gICAgICBzdGF0aXN0aWNzOiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBfaW50b0xpc3QgKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0ucmVjb3JkID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5lcnJvciA9PT0gMCkge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9jb3JyZWN0P25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5jaGFwdGVySWR9YFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0aXN0aWNzL2Vycm9yP25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5jaGFwdGVySWR9YFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKiog5pWZ5p2Q5YiH5o2iICovXG4gICAgICBhc3luYyB0ZXh0Ym9va0NoYW5nZSAoaWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgdXNlcmluZm8gPSBhd2FpdCB0aGlzLl9zZXRVc2VySW5mb1RleHRib29rKGlkLCB0aGlzLnN1YmplY3QpXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJywgdXNlcmluZm8pXG4gICAgICAgICAgdGhpcy5zdGF0aXN0aWNzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGlzdGljcygpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqIOenkeebruWIh+aNoiAqL1xuICAgICAgYXN5bmMgc3ViamVjdENoYW5nZSAoc3ViamVjdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvU3ViamVjdChzdWJqZWN0KVxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicsIHVzZXJpbmZvKVxuICAgICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3RcbiAgICAgICAgICB0aGlzLnN1YmplY3RMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuc3ViamVjdFxuICAgICAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS5jdXJyZW50LnRleHRib29rSWRcbiAgICAgICAgICB0aGlzLnRleHRCb29rTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLnRleHRib29rW3RoaXMuc3ViamVjdF1cbiAgICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOabtOaUueeUqOaIt+aVmeadkOS/oeaBryAqL1xuICAgIF9zZXRVc2VySW5mb1RleHRib29rIChpZCwgc3ViamVjdCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ3VpbmFiZW4uY29tL21lbWJlci9pbmZvJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9vazoge1xuICAgICAgICAgICAgICBbc3ViamVjdF06IGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKiDmm7TmlLnnlKjmiLfnp5Hnm67kv6Hmga8gKi9cbiAgICBfc2V0VXNlckluZm9TdWJqZWN0IChzdWJqZWN0KSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+ivt+eojeWAmSd9KVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5ndWluYWJlbi5jb20vbWVtYmVyL2luZm8nLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgX2dldFN0YXRpc3RpY3MgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmd1aW5hYmVuLmNvbS90ZXh0Ym9vay9zdGF0aXN0aWNzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7IHJlc29sdmUocmVzKSB9LFxuICAgICAgICAgIGZhaWwgKGVycikgeyByZWplY3QoZXJyKSB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdygpIHtcbiAgICAgIHRoaXMuc3ViamVjdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQuc3ViamVjdElkXG4gICAgICB0aGlzLnN1YmplY3RMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV91c2VyJykuc3ViamVjdFxuICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfdXNlcicpLmN1cnJlbnQudGV4dGJvb2tJZFxuICAgICAgdGhpcy50ZXh0Qm9va0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX3VzZXInKS50ZXh0Ym9va1t0aGlzLnN1YmplY3RdXG4gICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy93b3JrYm9vay9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==