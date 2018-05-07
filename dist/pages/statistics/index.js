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
        imageUrl: 'http://img.guinaben.com/gnb_miniprogram_share.jpg?imageView2/0/q/75|imageslim',
        path: '/pages/workbook/index'
      };
    }
  }]);

  return Statistics;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Statistics , 'pages/statistics/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlN0YXRpc3RpY3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ25iVGV4dGJvb2tTZWxlY3QiLCJkYXRhIiwidGV4dEJvb2tMaXN0IiwidGV4dGJvb2siLCJzdGF0aXN0aWNzIiwibWV0aG9kcyIsIl9pbnRvTGlzdCIsIml0ZW0iLCJyZWNvcmQiLCJlcnJvciIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYW1lIiwiY2hhcHRlcklkIiwidGV4dGJvb2tDaGFuZ2UiLCJpZCIsIl9zZXRVc2VySW5mbyIsInVzZXJpbmZvIiwic2V0U3RvcmFnZVN5bmMiLCJfZ2V0U3RhdGlzdGljcyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJtZXRob2QiLCJ0ZXh0Ym9va0lkIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwiZmFpbCIsImVyciIsImdldFN0b3JhZ2VTeW5jIiwiJGFwcGx5IiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbWFnZVVybCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFVBQXZDLEVBQWtELGNBQWEsRUFBL0QsRUFBa0Usd0JBQXVCLGNBQXpGLEVBQXJCLEUsUUFDVEMsTyxHQUFVLEVBQUMscUJBQW9CLEVBQUMsY0FBYSxnQkFBZCxFQUFyQixFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLG9CQUFj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InNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGduYlRleHRib29rU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9nbmItdGV4dGJvb2tTZWxlY3QnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY5pysJ1xyXG4gICAgfVxyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwidGV4dGJvb2tcIixcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOnRleHRib29rLnN5bmNcIjpcInRleHRCb29rTGlzdFwifX07XHJcbiRldmVudHMgPSB7XCJnbmJUZXh0Ym9va1NlbGVjdFwiOntcInYtb246ZXZlbnRcIjpcInRleHRib29rQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGduYlRleHRib29rU2VsZWN0OiBnbmJUZXh0Ym9va1NlbGVjdFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHRleHRCb29rTGlzdDogW10sXHJcbiAgICAgIHRleHRib29rOiAnJyxcclxuICAgICAgc3RhdGlzdGljczogW11cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBfaW50b0xpc3QgKGl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5yZWNvcmQgPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiAnJ1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5lcnJvciA9PT0gMCkge1xyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRpc3RpY3MvY29ycmVjdD9uYW1lPSR7aXRlbS5uYW1lfSZpZD0ke2l0ZW0uY2hhcHRlcklkfWBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0aXN0aWNzL2Vycm9yP25hbWU9JHtpdGVtLm5hbWV9JmlkPSR7aXRlbS5jaGFwdGVySWR9YFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHRleHRib29rQ2hhbmdlIChpZCkge1xyXG4gICAgICAgIGxldCB1c2VyaW5mbyA9IGF3YWl0IHRoaXMuX3NldFVzZXJJbmZvKGlkKVxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicsIHVzZXJpbmZvKVxyXG4gICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpc3RpY3MoaWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5pu05pS555So5oi35L+h5oGvICovXHJcbiAgICBfc2V0VXNlckluZm8gKGlkKSB7XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS92Mi9tZW1iZXIvaW5mb0VkaXQnLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRleHRib29rSWQ6IGlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0U3RhdGlzdGljcyAoaWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9taWQuZ3VpbmFiZW4uY29tL3YyL3RleHRib29rL3N0YXRpc3RpY3MnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0ZXh0Ym9va0lkOiBpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykgeyByZXNvbHZlKHJlcykgfSxcclxuICAgICAgICAgIGZhaWwgKGVycikgeyByZWplY3QoZXJyKSB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvblNob3coKSB7XHJcbiAgICAgIHRoaXMudGV4dEJvb2tMaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnZ25iX21pZGRsZV9Vc2VyJykudGV4dGJvb2tcclxuICAgICAgdGhpcy50ZXh0Ym9vayA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2duYl9taWRkbGVfVXNlcicpLnRleHRib29rSWRcclxuICAgICAgdGhpcy5zdGF0aXN0aWNzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGlzdGljcyh0aGlzLnRleHRib29rKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiAn5ZCE5L2N5a626ZW/77ya6L+Z5qC36K6w6ZSZ6aKY77yM6YCf5bqm5b+r44CB5aW95aSE5aSaJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9pbWcuZ3VpbmFiZW4uY29tL2duYl9taW5pcHJvZ3JhbV9zaGFyZS5qcGc/aW1hZ2VWaWV3Mi8wL3EvNzV8aW1hZ2VzbGltJyxcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3dvcmtib29rL2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=