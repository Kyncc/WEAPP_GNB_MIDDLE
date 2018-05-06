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
      navigationBarTitleText: '错题本'
    }, _this.$repeat = {}, _this.$props = { "gnbTextbookSelect": { "xmlns:v-bind": "", "v-bind:value.sync": "textbook", "xmlns:v-on": "", "v-bind:textbook.sync": "textBookList" } }, _this.$events = { "gnbTextbookSelect": { "v-on:event": "textbookChange" } }, _this.components = {
      gnbTextbookSelect: _gnbTextbookSelect2.default
    }, _this.data = {
      textBookList: [],
      textbook: '',
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
                  return this._getStatistics(id);

                case 6:
                  this.statistics = _context.sent;

                case 7:
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
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Statistics, [{
    key: '_setUserInfo',


    /** 更改用户信息 */
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
    key: '_getStatistics',
    value: function _getStatistics(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/v2/textbook/statistics',
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
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.textBookList = _wepy2.default.getStorageSync('gnb_middle_User').textbook;
                this.textbook = _wepy2.default.getStorageSync('gnb_middle_User').textbookId;
                _context2.next = 4;
                return this._getStatistics(this.textbook);

              case 4:
                this.statistics = _context2.sent;

                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
        title: '各位家长：这样记错题，速度快、好处多',
        path: '/pages/my/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJzdGF0aXN0aWNzIiwibWV0aG9kcyIsIl9pbnRvTGlzdCIsIml0ZW0iLCJyZWNvcmQiLCJlcnJvciIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmFtZSIsImNoYXB0ZXJJZCIsInRleHRib29rQ2hhbmdlIiwiaWQiLCJfc2V0VXNlckluZm8iLCJ1c2VyaW5mbyIsInNldFN0b3JhZ2VTeW5jIiwiX2dldFN0YXRpc3RpY3MiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwibWV0aG9kIiwidGV4dGJvb2tJZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsImZhaWwiLCJlcnIiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwicGF0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxxQkFBb0IsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsVUFBdkMsRUFBa0QsY0FBYSxFQUEvRCxFQUFrRSx3QkFBdUIsY0FBekYsRUFBckIsRSxRQUNUQyxPLEdBQVUsRUFBQyxxQkFBb0IsRUFBQyxjQUFhLGdCQUFkLEVBQXJCLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLHlCQUFtQkE7QUFEWCxLLFFBSVZDLEksR0FBTztBQUNMQyxv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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBnbmJUZXh0Ym9va1NlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvZ25iLXRleHRib29rU2VsZWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplJnpopjmnKwnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ0ZXh0Ym9va1wiLFwieG1sbnM6di1vblwiOlwiXCIsXCJ2LWJpbmQ6dGV4dGJvb2suc3luY1wiOlwidGV4dEJvb2tMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcImduYlRleHRib29rU2VsZWN0XCI6e1widi1vbjpldmVudFwiOlwidGV4dGJvb2tDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB0ZXh0Qm9va0xpc3Q6IFtdLFxuICAgICAgdGV4dGJvb2s6ICcnLFxuICAgICAgc3RhdGlzdGljczogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgX2ludG9MaXN0IChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLnJlY29yZCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZXJyb3IgPT09IDApIHtcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdD9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uY2hhcHRlcklkfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGlzdGljcy9lcnJvcj9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uY2hhcHRlcklkfWBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgdGV4dGJvb2tDaGFuZ2UgKGlkKSB7XG4gICAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvKGlkKVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInLCB1c2VyaW5mbylcbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGlzdGljcyhpZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5pu05pS555So5oi35L+h5oGvICovXG4gICAgX3NldFVzZXJJbmZvIChpZCkge1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6ICfor7fnqI3lgJknfSlcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL21lbWJlci9pbmZvRWRpdCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGV4dGJvb2tJZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgX2dldFN0YXRpc3RpY3MgKGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi90ZXh0Ym9vay9zdGF0aXN0aWNzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7IHJlc29sdmUocmVzKSB9LFxuICAgICAgICAgIGZhaWwgKGVycikgeyByZWplY3QoZXJyKSB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdygpIHtcbiAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tcbiAgICAgIHRoaXMudGV4dGJvb2sgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdnbmJfbWlkZGxlX1VzZXInKS50ZXh0Ym9va0lkXG4gICAgICB0aGlzLnN0YXRpc3RpY3MgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aXN0aWNzKHRoaXMudGV4dGJvb2spXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICflkITkvY3lrrbplb/vvJrov5nmoLforrDplJnpopjvvIzpgJ/luqblv6vjgIHlpb3lpITlpJonLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL215L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19